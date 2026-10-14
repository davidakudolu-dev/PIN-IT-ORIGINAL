import DOMPurify from 'dompurify';
// Keep note formatting and chips while preventing imported content from running
// script in the privileged native WebView. Stored originals are not rewritten.
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ADD_ATTR: ['contenteditable', 'data-note-id'],
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'base', 'link', 'meta'],
    FORBID_ATTR: ['srcdoc', 'formaction'],
  });
}
