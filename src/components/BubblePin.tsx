import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Copy,
  ExternalLink,
  Minimize2,
  Settings,
  Crop,
  Check,
  RotateCcw,
} from 'lucide-react';
import { NoteNode, BubbleSettings } from '../types';
import { stripHtml } from '../utils/tree';
import { sanitizeHtml } from '../utils/sanitize';

interface BubblePinProps {
  floatingNode: NoteNode | null;
  settings: BubbleSettings;
  onUpdateSettings: (newSettings: Partial<BubbleSettings>) => void;
  onUpdateNodeContent: (id: string, title: string, content: string) => void;
  onCopyNote: (node: NoteNode) => void;
  onShowToast: (msg: string) => void;
  onClose: () => void;
  nativeOverlay?: boolean;
  onMinimize?: () => void;
}

export const DEFAULT_BUBBLE_SETTINGS: BubbleSettings = {
  transparency: 0.92,
  bubblePopSize: 64,
  expansionWidth: 460,
  expansionHeight: 420,
  cropEnabled: false,
  cropTop: 0,
  cropBottom: 0,
  cropHeight: 250,
};

export const BubblePin: React.FC<BubblePinProps> = ({
  floatingNode,
  settings,
  onUpdateSettings,
  onUpdateNodeContent,
  onCopyNote,
  onShowToast,
  onClose,
  nativeOverlay = false,
  onMinimize,
}) => {
  const [expanded, setExpanded] = useState(nativeOverlay);
  const [showSettings, setShowSettings] = useState(false);
  const [pos, setPos] = useState({ x: window.innerWidth - 90, y: window.innerHeight - 200 });
  const [panelPos, setPanelPos] = useState<{ x: number; y: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const latestNode = useRef(floatingNode);
  latestNode.current = floatingNode;

  const bubbleDrag = useRef({
    dragging: false,
    moved: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    panel: false,
  });

  const editorRef = useRef<HTMLDivElement>(null);
  const pipWindowRef = useRef<any>(null);
  const pipBodyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setExpanded(nativeOverlay);
    setShowSettings(false);
    pipWindowRef.current?.close();
    pipWindowRef.current = null;
    pipBodyRef.current = null;
  }, [floatingNode?.id]);

  useEffect(() => {
    const clamp = () => {
      setPos((p) => ({
        x: Math.max(8, Math.min(p.x, window.innerWidth - settings.bubblePopSize - 8)),
        y: Math.max(8, Math.min(p.y, window.innerHeight - settings.bubblePopSize - 8)),
      }));
      const rect = panelRef.current?.getBoundingClientRect();
      if (rect) setPanelPos((p) => p && ({
        x: Math.max(8, Math.min(p.x, window.innerWidth - rect.width - 8)),
        y: Math.max(8, Math.min(p.y, window.innerHeight - rect.height - 8)),
      }));
    };
    clamp();
    window.addEventListener('resize', clamp);
    return () => window.removeEventListener('resize', clamp);
  }, [settings.bubblePopSize, settings.expansionWidth, settings.expansionHeight, expanded, showSettings]);

  useEffect(() => {
    return () => {
      if (pipWindowRef.current) {
        try {
          pipWindowRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  // Sync content when floating node changes or opens
  useEffect(() => {
    if (expanded && editorRef.current && floatingNode) {
      if (editorRef.current.innerHTML !== sanitizeHtml(floatingNode.content || '')) {
        editorRef.current.innerHTML = sanitizeHtml(floatingNode.content || '');
      }
    }
    if (floatingNode && pipWindowRef.current && pipBodyRef.current) {
      const h = pipWindowRef.current.document.querySelector('h2');
      if (h) h.textContent = floatingNode.title || 'Untitled';
      if (pipBodyRef.current.innerHTML !== sanitizeHtml(floatingNode.content || '')) pipBodyRef.current.innerHTML = sanitizeHtml(floatingNode.content || '');
    }
  }, [expanded, floatingNode]);

  useEffect(() => {
    if (settings.cropEnabled && editorRef.current?.parentElement) {
      editorRef.current.parentElement.scrollTop = settings.cropTop;
    }
  }, [settings.cropEnabled, settings.cropTop, expanded, floatingNode?.id]);

  if (!floatingNode) return null;

  const handlePointerDown = (e: React.PointerEvent) => {
    const panel = e.currentTarget.classList.contains('float-panel-header');
    if (panel && (e.target as HTMLElement).closest('input, button')) return;
    const rect = panelRef.current?.getBoundingClientRect();
    bubbleDrag.current = {
      dragging: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      origX: panel && rect ? rect.left : pos.x,
      origY: panel && rect ? rect.top : pos.y,
      panel,
    };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const d = bubbleDrag.current;
    if (!d.dragging) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) d.moved = true;

    const rect = panelRef.current?.getBoundingClientRect();
    const width = d.panel && rect ? rect.width : settings.bubblePopSize;
    const height = d.panel && rect ? rect.height : settings.bubblePopSize;
    const nextX = Math.max(8, Math.min(d.origX + dx, window.innerWidth - width - 8));
    const nextY = Math.max(8, Math.min(d.origY + dy, window.innerHeight - height - 8));
    (d.panel ? setPanelPos : setPos)({ x: nextX, y: nextY });
  };

  const handlePointerUp = () => {
    const wasMoved = bubbleDrag.current.moved;
    bubbleDrag.current.dragging = false;
    if (!wasMoved && !bubbleDrag.current.panel) {
      setExpanded(true);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (floatingNode) {
      onUpdateNodeContent(floatingNode.id, e.target.value, floatingNode.content);
    }
  };

  const handleEditorInput = () => {
    if (editorRef.current && floatingNode) {
      onUpdateNodeContent(floatingNode.id, floatingNode.title, editorRef.current.innerHTML);
    }
  };

  const handlePopOut = async () => {
    if (!floatingNode) return;
    if (!('documentPictureInPicture' in window)) {
      onShowToast("Pop-out window requires desktop Chrome/Edge — using floating bubble pin!");
      return;
    }
    try {
      const pipWindow = await (window as any).documentPictureInPicture.requestWindow({
        width: Math.min(settings.expansionWidth, 480),
        height: Math.min(settings.expansionHeight, 520),
      });
      pipWindowRef.current?.close();
      pipWindowRef.current = pipWindow;

      const style = pipWindow.document.createElement('style');
      style.textContent = `
        body { margin:0; padding:18px; font-family:-apple-system,BlinkMacSystemFont,Inter,sans-serif; background: #171F45; color: #EDEFF7; }
        h2 { font-size:17px; font-weight:800; margin:0 0 12px 0; color: #FFC966; }
        .pip-body { font-size:14px; line-height:1.6; max-height:360px; overflow-y:auto; outline: none; }
        .pip-body img { max-width:100%; border-radius:8px; }
        .pip-btn { margin-top:14px; padding:8px 16px; border-radius:10px; border:none; background:#3A5FE0; color:#fff; font-weight:600; cursor:pointer; }
      `;
      pipWindow.document.head.appendChild(style);

      const h = pipWindow.document.createElement('h2');
      h.textContent = floatingNode.title || 'Untitled';

      const body = pipWindow.document.createElement('div');
      body.className = 'pip-body';
      body.innerHTML = sanitizeHtml(floatingNode.content || '');
      body.contentEditable = 'true';
      pipBodyRef.current = body;

      body.oninput = () => {
        const node = latestNode.current;
        if (node) onUpdateNodeContent(node.id, node.title, body.innerHTML);
      };

      const btn = pipWindow.document.createElement('button');
      btn.className = 'pip-btn';
      btn.textContent = 'Copy content';
      btn.onclick = () => {
        const node = latestNode.current;
        if (!node) return;
        const text = `${node.title || 'Untitled'}\n\n${stripHtml(node.content)}`;
        pipWindow.navigator.clipboard?.writeText(text);
      };

      pipWindow.document.body.appendChild(h);
      pipWindow.document.body.appendChild(body);
      pipWindow.document.body.appendChild(btn);

      pipWindow.addEventListener('pagehide', () => {
        pipWindowRef.current = null;
        pipBodyRef.current = null;
      });

      setExpanded(false);
    } catch (e) {
      onShowToast("Couldn't open pop-out window");
    }
  };

  return (
    <>
      {/* 1. Unexpanded Floating Bubble */}
      {!expanded && (
        <div
          className="float-bubble-unique"
          style={{
            left: pos.x,
            top: pos.y,
            width: settings.bubblePopSize,
            height: settings.bubblePopSize,
            opacity: settings.transparency,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { bubbleDrag.current.dragging = false; }}
        >
          <div className="bubble-glow-ring" />
          <span className="float-bubble-pin-icon">📌</span>
          <span className="float-bubble-title-text">
            {(floatingNode.title || 'Untitled').slice(0, 10)}
          </span>
        </div>
      )}

      {/* 2. Expanded Floating Editable Panel */}
      {expanded && (
        <div
          className="float-panel-editable"
          ref={panelRef}
          style={{
            opacity: 1,
            width: `min(90vw, ${settings.expansionWidth}px)`,
            height: `min(85dvh, ${settings.expansionHeight}px)`,
            maxWidth: `min(94vw, ${settings.expansionWidth}px)`,
            maxHeight: `min(85dvh, ${settings.expansionHeight}px)`,
            ...(panelPos ? { left: panelPos.x, top: panelPos.y, right: 'auto', bottom: 'auto' } : {}),
            ...(nativeOverlay ? { position: 'absolute', left: 0, top: 0, right: 'auto', bottom: 'auto', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' } as React.CSSProperties : {}),
          }}
        >
          {/* Header */}
          <div className="float-panel-header"
            onPointerDown={nativeOverlay ? undefined : handlePointerDown} onPointerMove={nativeOverlay ? undefined : handlePointerMove}
            onPointerUp={() => { bubbleDrag.current.dragging = false; }}
            onPointerCancel={() => { bubbleDrag.current.dragging = false; }}
          >
            <input
              className="float-panel-title-input"
              value={floatingNode.title}
              placeholder="Untitled note..."
              onChange={handleTitleChange}
            />
            <div className="float-panel-actions">
              <button
                className={`icon-btn mini ${settings.cropEnabled ? 'active-accent' : ''}`}
                onClick={() => onUpdateSettings({ cropEnabled: !settings.cropEnabled })}
                title="Toggle Viewport Crop"
              >
                <Crop size={15} />
              </button>
              <button
                className={`icon-btn mini ${showSettings ? 'active-accent' : ''}`}
                onClick={() => setShowSettings(!showSettings)}
                title="Bubble Settings"
              >
                <Settings size={15} />
              </button>
              <button
                className="icon-btn mini"
                onClick={() => onCopyNote(floatingNode)}
                title="Copy Note"
              >
                <Copy size={15} />
              </button>
              {!nativeOverlay && <>
              <button
                className="icon-btn mini"
                onClick={handlePopOut}
                title="Open desktop Picture-in-Picture window"
              >
                <ExternalLink size={15} />
              </button>
              </>}
              <button
                className="icon-btn mini"
                onClick={() => {
                  if (nativeOverlay) { onMinimize?.(); return; }
                  setExpanded(false);
                  setShowSettings(false);
                }}
                title="Minimize to Bubble"
              >
                <Minimize2 size={15} />
              </button>
              <button className="icon-btn mini" onClick={onClose} title="Close Bubble">
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Settings Sub-Panel */}
          {showSettings && (
            <div className="bubble-settings-tray">
              <div className="tray-title">
                <span>Bubble Pin Customizer</span>
                <button
                  className="reset-btn"
                  onClick={() => onUpdateSettings(DEFAULT_BUBBLE_SETTINGS)}
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>

              <div className="setting-group">
                <label>Bubble transparency ({Math.round(settings.transparency * 100)}%)</label>
                <input
                  type="range"
                  min="0.2"
                  max="1.0"
                  step="0.05"
                  value={settings.transparency}
                  onChange={(e) => onUpdateSettings({ transparency: parseFloat(e.target.value) })}
                />
              </div>

              <div className="setting-group">
                <label>Bubble Pop Size ({settings.bubblePopSize}px)</label>
                <div className="preset-pills">
                  {[48, 64, 80, 96].map((sz) => (
                    <button
                      key={sz}
                      className={`preset-pill ${settings.bubblePopSize === sz ? 'selected' : ''}`}
                      onClick={() => onUpdateSettings({ bubblePopSize: sz })}
                    >
                      {sz === 48 ? 'S' : sz === 64 ? 'M' : sz === 80 ? 'L' : 'XL'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="setting-group">
                <label>Expansion Size ({settings.expansionWidth}x{settings.expansionHeight}px)</label>
                <div className="setting-dual">
                  <div>
                    <span>Width</span>
                    <input
                      type="range"
                      min="300"
                      max="720"
                      step="20"
                      value={settings.expansionWidth}
                      onChange={(e) => onUpdateSettings({ expansionWidth: parseInt(e.target.value) })}
                    />
                  </div>
                  <div>
                    <span>Height</span>
                    <input
                      type="range"
                      min="260"
                      max="650"
                      step="20"
                      value={settings.expansionHeight}
                      onChange={(e) => onUpdateSettings({ expansionHeight: parseInt(e.target.value) })}
                    />
                  </div>
                </div>
              </div>

              <div className="setting-group">
                <div className="flex-between">
                  <label>Enable Crop Masking</label>
                  <input
                    type="checkbox"
                    checked={settings.cropEnabled}
                    onChange={(e) => onUpdateSettings({ cropEnabled: e.target.checked })}
                  />
                </div>
                {settings.cropEnabled && (
                  <div className="setting-dual">
                    <div>
                      <span>Top Offset ({settings.cropTop}px)</span>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={settings.cropTop}
                        onChange={(e) => onUpdateSettings({ cropTop: parseInt(e.target.value) })}
                      />
                    </div>
                    <div>
                      <span>Visible Height ({settings.cropHeight}px)</span>
                      <input
                        type="range"
                        min="100"
                        max="400"
                        value={settings.cropHeight}
                        onChange={(e) => onUpdateSettings({ cropHeight: parseInt(e.target.value) })}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Editable Content Area with Optional Crop Masking */}
          <div
            className={`float-panel-scroll-container ${settings.cropEnabled ? 'cropped-mask' : ''}`}
            style={
              settings.cropEnabled
                ? {
                    height: `${settings.cropHeight}px`,
                    maxHeight: `${settings.cropHeight}px`,
                    flex: '0 1 auto',
                  }
                : {}
            }
          >
            <div
              ref={editorRef}
              className="float-panel-body-editable"
              contentEditable
              suppressContentEditableWarning
              onPaste={(event) => {
                const html = event.clipboardData.getData('text/html');
                if (html) { event.preventDefault(); document.execCommand('insertHTML', false, sanitizeHtml(html)); handleEditorInput(); }
              }}
              onInput={handleEditorInput}
              placeholder="Start writing inside floating bubble..."
            />
          </div>
        </div>
      )}
    </>
  );
};
