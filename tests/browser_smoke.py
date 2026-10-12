"""Browser regressions against compiled HTML served by any static HTTP server.
Requires Python 3 + playwright and Chromium. No application dependencies added.
Usage: python tests/browser_smoke.py --url http://127.0.0.1:3101 --output /tmp/pinboard-tests
"""
import argparse
import json
import traceback
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

KEY = 'pinboard-notes-data-v5'
parser = argparse.ArgumentParser()
parser.add_argument('--url', default='http://127.0.0.1:3101')
parser.add_argument('--output', default='/tmp/pinboard-tests')
parser.add_argument('--chromium', default='/usr/bin/chromium')
args = parser.parse_args()
OUT = Path(args.output); OUT.mkdir(parents=True, exist_ok=True)
URL = args.url.rstrip('/') + '/'
results = []

def note(id, title, children=None, **extra):
    return dict(id=id, title=title, content='', archived=False, pinned=False, pinnedAt=None,
                order=0, children=children or [], createdAt=1000, updatedAt=1000, **extra)

def record(children):
    for i, n in enumerate(children): n['order'] = i
    return dict(tree=note('root', 'Home', children), trash=[], theme='dark')

def seed(page, data):
    page.goto(URL, wait_until='networkidle')
    page.evaluate('([key, data]) => localStorage.setItem(key, JSON.stringify(data))', [KEY, data])
    page.reload(wait_until='networkidle')
    expect(page.locator('.pb-title-input')).to_have_value('Home')

def saved(page):
    return page.evaluate('(key) => JSON.parse(localStorage.getItem(key))', KEY)

def card(page, title):
    return page.locator('.note-card').filter(has=page.locator('.card-title', has_text=title))

def action(page, target, name):
    target.scroll_into_view_if_needed()
    box = target.bounding_box()
    page.mouse.move(box['x'] + 35, box['y'] + 45)
    page.mouse.down(); page.wait_for_timeout(510); page.mouse.up()
    expect(page.locator('.sheet')).to_be_visible()
    page.locator('.sheet').get_by_role('button', name=name).click()

def back(page):
    page.get_by_title('Back to parent note page', exact=True).click()

def grid(page):
    page.get_by_title('View grid of nested notes inside this page', exact=True).click()

def create(page, title, content):
    page.get_by_title('Create Pin + (Add New Note)', exact=True).click()
    page.locator('.note-card').filter(has=page.locator('.card-title', has_text='Untitled Note')).last.click()
    page.locator('.write-title-input').fill(title)
    page.locator('.write-content').fill(content)

def notes(page, ctx):
    create(page, 'Alpha', 'First durable content')
    # Intentionally no sleep between editing and reload.
    page.reload(wait_until='networkidle')
    card(page, 'Alpha').click()
    expect(page.locator('.write-content')).to_have_text('First durable content')
    page.get_by_title('Insert a nested pinned note chip here', exact=True).click()
    expect(page.locator('.write-content .note-chip')).to_have_count(1)
    page.locator('.write-content .note-chip').click()
    page.locator('.write-title-input').fill('Nested child')
    page.locator('.write-content').fill('Deep search content')
    back(page)
    expect(page.locator('.write-title-input')).to_have_value('Alpha')
    expect(page.locator('.note-chip-label')).to_have_text('Nested child')
    grid(page)
    card(page, 'Nested child').click()
    back(page); back(page)
    create(page, 'Beta', 'Second note'); back(page)
    create(page, 'Gamma', 'Third note'); back(page)
    for i in range(12):
        card(page, 'Beta').click()
        page.locator('.write-content').fill(f'Rapid edit {i}')
        back(page)
    page.reload(wait_until='networkidle'); card(page, 'Beta').click()
    expect(page.locator('.write-content')).to_have_text('Rapid edit 11')
    state = saved(page)
    assert len(state['tree']['children']) == 3
    assert len(state['tree']['children'][0]['children']) == 1
    reopened = ctx.new_page(); reopened.goto(URL, wait_until='networkidle')
    card(reopened, 'Beta').click()
    expect(reopened.locator('.write-content')).to_have_text('Rapid edit 11')
    reopened.close()

def formatting(page, ctx):
    create(page, 'Rich note', 'Formatting sample')
    editor = page.locator('.write-content')
    editor.click(); page.keyboard.press('Control+a')
    page.get_by_title('Bold', exact=True).click()
    expect(editor.locator('b, strong')).to_have_text('Formatting sample')
    page.get_by_title('Italic', exact=True).click()
    assert editor.locator('i, em').count() > 0
    page.get_by_title('Underline', exact=True).click()
    assert editor.locator('u').count() > 0
    page.get_by_title('Bullet List', exact=True).click()
    assert editor.locator('ul li').count() > 0
    page.get_by_title('Numbered List', exact=True).click()
    assert editor.locator('ol li').count() > 0
    page.locator('.write-toolbar').get_by_role('button', name='H1', exact=True).click()
    assert editor.locator('h1').count() > 0
    page.locator('.write-toolbar').get_by_role('button', name='H2', exact=True).click()
    assert editor.locator('h2').count() > 0
    page.keyboard.press('ArrowRight')
    page.once('dialog', lambda d: d.accept('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20"%3E%3Crect width="20" height="20" fill="blue"/%3E%3C/svg%3E'))
    page.get_by_title('Insert Image', exact=True).click()
    expect(editor.locator('img')).to_have_count(1)
    page.reload(wait_until='networkidle'); card(page, 'Rich note').click()
    assert '<h2>' in saved(page)['tree']['children'][0]['content']
    expect(page.locator('.write-content img')).to_have_count(1)

def ordering(page, ctx):
    seed(page, record([note('a','Alpha'),note('b','Beta'),note('c','Gamma')]))
    action(page, card(page,'Alpha'), 'Pin note (Move to top by time pinned)')
    expect(page.locator('.toast')).to_have_text('Pinned to top of page')
    action(page, card(page,'Gamma'), 'Pin note (Move to top by time pinned)')
    assert page.locator('.note-card .card-title').all_text_contents() == ['Gamma','Alpha','Beta']
    card(page,'Gamma').drag_to(card(page,'Alpha'))
    assert page.locator('.note-card .card-title').all_text_contents() == ['Alpha','Gamma','Beta']
    action(page,card(page,'Alpha'),'Unpin note (Return to normal position)')
    action(page,card(page,'Gamma'),'Unpin note (Return to normal position)')
    assert page.locator('.note-card .card-title').all_text_contents() == ['Alpha','Beta','Gamma']
    card(page,'Alpha').drag_to(card(page,'Gamma'))
    assert page.locator('.note-card .card-title').all_text_contents() == ['Beta','Gamma','Alpha']
    page.reload(wait_until='networkidle')
    assert page.locator('.note-card .card-title').all_text_contents() == ['Beta','Gamma','Alpha']
    children=[note('x','Child X'),note('y','Child Y'),note('z','Child Z')]
    for i,n in enumerate(children): n['order']=i
    seed(page,record([note('parent','Parent',children),note('sibling','Sibling')]))
    card(page,'Parent').click();grid(page)
    card(page,'Child X').drag_to(card(page,'Child Z'))
    assert page.locator('.note-card .card-title').all_text_contents() == ['Child Y','Child Z','Child X']
    assert [n['id'] for n in saved(page)['tree']['children']] == ['parent','sibling']
    page.reload(wait_until='networkidle');card(page,'Parent').click();grid(page)
    assert page.locator('.note-card .card-title').all_text_contents() == ['Child Y','Child Z','Child X']

def archive_trash(page,ctx):
    child=note('child','Child');child['pinned']=True;child['pinnedAt']=2000
    parent=note('parent','Parent',[child]);parent['content']='<p>Original text</p><div class="note-chip" contenteditable="false" data-note-id="child"><span class="note-chip-label">Child</span></div>'
    seed(page,record([parent,note('other','Other')]))
    card(page,'Parent').click();grid(page)
    action(page,card(page,'Child'),'Archive note')
    expect(page.locator('.note-card')).to_have_count(0)
    page.get_by_title('Archive for this page',exact=True).click()
    page.get_by_title('Restore to active page',exact=True).click()
    page.get_by_title('Close view',exact=True).click()
    action(page,card(page,'Child'),'Delete to Recycle Bin')
    page.get_by_title('Recycle bin for this page',exact=True).click()
    expect(page.locator('.archive-row')).to_have_count(1)
    page.get_by_title('Restore to original parent page',exact=True).click()
    page.get_by_title('Close view',exact=True).click()
    card(page,'Child').click();back(page)
    expect(page.locator('.write-content .note-chip')).to_have_count(1)
    assert saved(page)['tree']['children'][0]['children'][0]['pinned']
    back(page)
    action(page,card(page,'Parent'),'Delete to Recycle Bin')
    page.get_by_title('Recycle bin for this page',exact=True).click()
    page.get_by_title('Restore to original parent page',exact=True).click()
    page.get_by_title('Close view',exact=True).click()
    assert saved(page)['tree']['children'][-1]['children'][0]['id']=='child'
    action(page,card(page,'Other'),'Delete to Recycle Bin')
    page.get_by_title('Recycle bin for this page',exact=True).click()
    page.get_by_title('Delete forever',exact=True).click()
    assert not saved(page)['trash']
    page.reload(wait_until='networkidle')
    expect(card(page,'Other')).to_have_count(0)

def orphan_restore(page,ctx):
    # A child deleted before its parent becomes unreachable in the original UI.
    data=record([])
    data['trash']=[dict(id='trash-child',node=note('child','Orphan child'),parentId='missing-parent',deletedAt=1000)]
    seed(page,data)
    page.get_by_title('Recycle bin for this page',exact=True).click()
    expect(page.locator('.archive-row')).to_have_count(1)
    page.get_by_title('Restore to original parent page',exact=True).click()
    assert saved(page)['tree']['children'][0]['id']=='child'

def search_theme(page,ctx):
    child=note('child','Nested target');child['content']='<p>Unique searchable phrase</p>'
    seed(page,record([note('parent','Parent',[child])]))
    page.get_by_title('Switch to light theme',exact=True).click()
    page.reload(wait_until='networkidle')
    assert page.locator('html').get_attribute('data-theme')=='light'
    page.get_by_title('Search notes',exact=True).click()
    page.get_by_placeholder('Search all notes...').fill('searchable')
    expect(page.locator('.search-result-snippet mark')).to_have_text('searchable')
    expect(page.locator('.search-result-path')).to_have_text('Home / Parent')
    page.locator('.search-result-item').click()
    expect(page.locator('.write-title-input')).to_have_value('Nested target')
    expect(page.locator('.write-content')).to_have_text('Unique searchable phrase')
    back(page);expect(page.locator('.write-title-input')).to_have_value('Parent')
    back(page)
    page.get_by_title('Search notes',exact=True).click()
    page.get_by_placeholder('Search all notes...').fill('Nested')
    expect(page.locator('.search-result-title mark')).to_have_text('Nested')
    page.keyboard.press('Escape');expect(page.locator('.search-panel')).to_have_count(0)

def bubble(page,ctx):
    create(page,'Bubble note','Main content')
    page.get_by_title('Pop out this note into an editable floating bubble pin!',exact=True).click()
    dot=page.locator('.float-bubble-unique')
    before=dot.bounding_box();page.mouse.move(before['x']+20,before['y']+20);page.mouse.down()
    page.mouse.move(150,200,steps=10);page.mouse.up()
    assert dot.bounding_box()['y']<250
    dot.click()
    page.locator('.float-panel-body-editable').fill('Edited through bubble')
    expect(page.locator('.write-content')).to_have_text('Edited through bubble')
    page.locator('.float-panel-title-input').fill('Bubble renamed')
    expect(page.locator('.write-title-input')).to_have_value('Bubble renamed')
    page.locator('.write-content').fill('Edited through main')
    expect(page.locator('.float-panel-body-editable')).to_have_text('Edited through main')
    page.get_by_title('Bubble Settings',exact=True).click()
    sliders=page.locator('.bubble-settings-tray input[type=range]')
    sliders.nth(0).fill('0.5');sliders.nth(1).fill('620');sliders.nth(2).fill('600')
    expect(page.locator('.float-panel-editable')).to_have_css('opacity','0.5')
    panel=page.locator('.float-panel-editable').bounding_box()
    assert abs(panel['width']-620)<2 and abs(panel['height']-600)<2
    page.locator('.preset-pill').get_by_text('XL',exact=True).click()
    page.get_by_title('Toggle Viewport Crop',exact=True).click()
    sliders=page.locator('.bubble-settings-tray input[type=range]')
    sliders.nth(3).fill('40');sliders.nth(4).fill('120')
    expect(page.locator('.cropped-mask')).to_be_visible()
    assert page.locator('.cropped-mask').evaluate('(e)=>e.clientHeight')<=120
    page.get_by_title('Bubble Settings',exact=True).click()
    page.get_by_title('Minimize to Bubble',exact=True).click()
    assert abs(dot.bounding_box()['width']-96)<1
    page.set_viewport_size({'width':360,'height':640})
    box=dot.bounding_box();assert box['x']>=0 and box['x']+box['width']<=360
    dot.click();page.get_by_title('Close Bubble',exact=True).click()
    expect(page.locator('.float-panel-editable')).to_have_count(0)
    page.get_by_title('Pop out this note into an editable floating bubble pin!',exact=True).click()
    expect(dot).to_be_visible()
    dot.click();expect(page.locator('.float-panel-body-editable')).to_have_text('Edited through main')
    page.get_by_title('Close Bubble',exact=True).click()
    page.reload(wait_until='networkidle');card(page,'Bubble renamed').click()
    assert saved(page)['bubbleSettings']['transparency']==0.5
    expect(page.locator('.write-content')).to_have_text('Edited through main')
    # Switching the floating note retains the original single-bubble behavior.
    back(page); create(page,'Another bubble','Second floating content')
    page.get_by_title('Pop out this note into an editable floating bubble pin!',exact=True).click()
    dot.click();expect(page.locator('.float-panel-body-editable')).to_have_text('Second floating content')

def downloads(page,ctx):
    create(page,'PDF note','Exported content\nSecond line')
    back(page)
    ctx.grant_permissions(['clipboard-read','clipboard-write'])
    action(page,card(page,'PDF note'),'Copy content')
    assert 'Second line' in page.evaluate('navigator.clipboard.readText()')
    card(page,'PDF note').click()
    with page.expect_download() as info:page.get_by_title('Download this Note as PDF',exact=True).click()
    download=info.value; path=OUT/'note.pdf';download.save_as(path)
    assert path.read_bytes().startswith(b'%PDF') and download.suggested_filename=='PDF note.pdf'
    import shutil, subprocess
    if shutil.which('pdftotext'):
        text=subprocess.run(['pdftotext',str(path),'-'],capture_output=True,text=True,check=True).stdout
        assert 'Exported content\n' in text and 'Second line' in text,text
    page.get_by_title('Download Project Codebase as PDF',exact=True).click()
    with page.expect_download() as info:page.locator('.export-pdf-main-btn').click()
    path=OUT/'codebase.pdf';info.value.save_as(path);assert path.read_bytes().startswith(b'%PDF')
    with page.expect_download() as info:page.locator('.export-zip-btn').click()
    path=OUT/'in-app-source.zip';info.value.save_as(path)
    import zipfile
    with zipfile.ZipFile(path) as z:
        assert 'src/App.tsx' in z.namelist() and 'bun.lock' in z.namelist()
        assert 'public/Pinboard_Notes_Codebase.pdf' in z.namelist()
    page.get_by_role('button',name='Feature Specifications (10)',exact=True).click()
    expect(page.get_by_text('Architectural & Functional Blueprint (10 Modules)',exact=True)).to_be_visible()
    page.get_by_role('button',name='Source Code Files (17)',exact=True).click()
    with page.expect_download() as info:page.get_by_title('Download this file',exact=True).click()
    path=OUT/'exported-App.tsx';info.value.save_as(path)
    assert 'export default function App()' in path.read_text()
    page.get_by_title('Close modal',exact=True).click()


def invalid_storage(page,ctx):
    page.goto(URL,wait_until='networkidle')
    for bad in ['{broken-json',json.dumps({'tree':{'id':'root','title':'Home','content':'','children':[None]}})]:
        page.evaluate('([k,v])=>localStorage.setItem(k,v)',[KEY,bad])
        page.reload(wait_until='networkidle')
        expect(page.get_by_text('Saved notes could not be read.',exact=False)).to_be_visible()
        assert page.evaluate('(k)=>localStorage.getItem(k)',KEY)==bad


def storage_failure(page,ctx):
    before=page.evaluate('(key)=>localStorage.getItem(key)',KEY)
    page.add_init_script("Storage.prototype.setItem = function() { throw new DOMException('Full', 'QuotaExceededError'); }")
    page.reload(wait_until='networkidle')
    create(page,'Unsaved note','Keep this editor open')
    page.wait_for_timeout(2000)
    expect(page.locator('.toast')).to_have_text('Could not save notes. Keep this page open and free browser storage.')
    expect(page.locator('.write-content')).to_have_text('Keep this editor open')
    assert page.evaluate('(key)=>localStorage.getItem(key)',KEY)==before


def host_storage(page,ctx):
    page.evaluate('(key)=>localStorage.removeItem(key)', KEY)
    data=record([note('existing','Existing host note')])
    # Delayed host storage illustrates serialized writes; local edits survive
    # while host writes are pending. No actual external service is contacted.
    page.add_init_script('''window.remoteWrites=[]; window.remoteActive=0; window.remoteMax=0;
    window.storage={get:async()=>({value:JSON.stringify(%s)}),set:async(k,v)=>{
      window.remoteActive++;window.remoteMax=Math.max(window.remoteMax,window.remoteActive);
      await new Promise(r=>setTimeout(r,120));window.remoteWrites.push(JSON.parse(v));window.remoteActive--;
    }};''' % json.dumps(data))
    page.goto(URL,wait_until='networkidle')
    card(page,'Existing host note').click()
    for i in range(8):page.locator('.write-content').fill(f'Host edit {i}')
    expect(page.locator('.write-content')).to_have_text('Host edit 7')
    page.wait_for_timeout(550)
    assert page.evaluate('window.remoteMax')==1
    assert page.evaluate('window.remoteWrites.at(-1).tree.children[0].content')=='Host edit 7'
    page.reload(wait_until='networkidle');card(page,'Existing host note').click()
    expect(page.locator('.write-content')).to_have_text('Host edit 7')


def responsive(page,ctx):
    for width,height in [(320,568),(360,800),(390,844),(768,1024),(1440,900)]:
        page.set_viewport_size({'width':width,'height':height})
        long='LongUnbrokenTitle'*12
        seed(page,record([note('long',long),note('short','Second note')]))
        assert page.evaluate('document.documentElement.scrollWidth')<=width
        for el in [page.locator('.note-card').first,page.get_by_title('Search notes',exact=True)]:
            r=el.bounding_box();assert r['x']>=0 and r['x']+r['width']<=width+1
        page.screenshot(path=str(OUT/f'board-dark-{width}.png'))
        page.get_by_title('Switch to light theme',exact=True).click()
        page.screenshot(path=str(OUT/f'board-light-{width}.png'))
        page.get_by_title('Download Project Code as PDF',exact=True).click()
        r=page.get_by_title('Close modal',exact=True).bounding_box()
        assert r['x']>=0 and r['x']+r['width']<=width and r['y']+r['height']<=height
        page.get_by_title('Close modal',exact=True).click()
        page.locator('.note-card').first.click()
        # All toolbar buttons must be reachable by horizontal scrolling.
        for title in ['Bold','Insert a nested pinned note chip here','Pop out this note into an editable floating bubble pin!']:
            page.get_by_title(title,exact=True).scroll_into_view_if_needed()
            r=page.get_by_title(title,exact=True).bounding_box()
            assert r['x']>=0 and r['x']+r['width']<=width+1
        page.get_by_title('Pop out this note into an editable floating bubble pin!',exact=True).click()
        page.locator('.float-bubble-unique').click()
        page.get_by_title('Bubble Settings',exact=True).click()
        page.screenshot(path=str(OUT/f'bubble-light-{width}.png'))
        r=page.locator('.float-panel-editable').bounding_box()
        assert r['x']>=0 and r['y']>=0 and r['x']+r['width']<=width+1 and r['y']+r['height']<=height+1
        page.get_by_title('Close Bubble',exact=True).click()
        back(page)


def touch(page,ctx):
    seed(page,record([note('a','Alpha'),note('b','Beta'),note('c','Gamma')]))
    cdp=ctx.new_cdp_session(page)
    start=card(page,'Alpha').locator('.card-drag-handle').bounding_box()
    end=card(page,'Gamma').bounding_box()
    cdp.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':start['x']+8,'y':start['y']+8}]})
    page.wait_for_timeout(100)
    cdp.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':end['x']+60,'y':end['y']+70}]})
    page.wait_for_timeout(100)
    cdp.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]})
    assert page.locator('.note-card .card-title').all_text_contents()==['Beta','Gamma','Alpha']
    expect(page.locator('.sheet')).to_have_count(0)
    page.reload(wait_until='networkidle')
    assert page.locator('.note-card .card-title').all_text_contents()==['Beta','Gamma','Alpha']
    page.touchscreen.tap(80,180)
    expect(page.locator('.write-title-input')).to_have_value('Beta')
    page.get_by_title('Pop out this note into an editable floating bubble pin!',exact=True).scroll_into_view_if_needed()
    page.get_by_title('Pop out this note into an editable floating bubble pin!',exact=True).tap()
    box=page.locator('.float-bubble-unique').bounding_box()
    cdp.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':box['x']+20,'y':box['y']+20}]})
    cdp.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':110,'y':220}]})
    cdp.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]})
    assert page.locator('.float-bubble-unique').bounding_box()['y']<250
    page.locator('.float-bubble-unique').tap()
    page.locator('.float-panel-body-editable').fill('Touch bubble edit')
    expect(page.locator('.write-content')).to_have_text('Touch bubble edit')


with sync_playwright() as playwright:
    browser=playwright.chromium.launch(executable_path=args.chromium,headless=True,args=['--no-sandbox'])
    for name,test in [('notes/nesting/rapid persistence/reopen',notes),('rich formatting/image',formatting),
                      ('root+nested pin/reorder',ordering),('archive/trash/subtree recovery',archive_trash),
                      ('orphan recovery',orphan_restore),('search/theme',search_theme),('bubble controls/sync',bubble),
                      ('PDF/source/file downloads',downloads),('malformed records preserved',invalid_storage),('storage failure visible',storage_failure),
                      ('host storage write serialization',host_storage),('five responsive widths',responsive),('touch drag/edit',touch)]:
        mobile=test is touch
        context=browser.new_context(viewport={'width':390 if mobile else 1280,'height':844 if mobile else 900},has_touch=mobile,is_mobile=mobile,accept_downloads=True)
        page=context.new_page();page.set_default_timeout(7000);errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
        try:
            page.goto(URL,wait_until='networkidle')
            test(page,context)
            assert not errors,errors
            result={'name':name,'status':'passed'}
        except Exception as error:
            page.screenshot(path=str(OUT/(name.split('/')[0].replace(' ','-')+'-failure.png')))
            result={'name':name,'status':'failed','error':str(error),'traceback':traceback.format_exc(),'browser_errors':errors}
        results.append(result);print(name,result['status'],result.get('error',''),flush=True)
        context.close()
    version=browser.version;browser.close()
report={'url':URL,'browser':'Chromium '+version,'groups':results,'passed':sum(r['status']=='passed' for r in results),'failed':sum(r['status']=='failed' for r in results)}
(OUT/'results.json').write_text(json.dumps(report,indent=2))
raise SystemExit(1 if report['failed'] else 0)
