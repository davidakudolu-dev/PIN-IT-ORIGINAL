import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { OverlayEditor } from './components/OverlayEditor';
const overlayNoteId = new URLSearchParams(location.search).get('overlayNoteId');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {overlayNoteId ? <OverlayEditor noteId={overlayNoteId} /> : <App />}
  </StrictMode>,
);
