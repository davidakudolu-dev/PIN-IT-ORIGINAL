import React, { useState } from 'react';
import {
  FileCode,
  Download,
  Copy,
  Check,
  X,
  FileText,
  ExternalLink,
  Sparkles,
  BookOpen,
  Code,
  Archive,
} from 'lucide-react';
import {
  CODEBASE_FILES,
  CORE_FEATURES_LIST,
  SourceFile,
  generateClientCodePdf,
} from '../utils/codeExport';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'files' | 'features'>('files');
  const [selectedFile, setSelectedFile] = useState<SourceFile>(CODEBASE_FILES[0]);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const totalLines = CODEBASE_FILES.reduce((acc, f) => acc + f.lines, 0);

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    onShowToast('Downloading comprehensive Codebase PDF...');
    try {
      const link = document.createElement('a');
      link.href = `${import.meta.env.BASE_URL}Pinboard_Notes_Codebase.pdf`;
      link.download = 'Pinboard_Notes_Codebase.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onShowToast('Download started: Pinboard_Notes_Codebase.pdf');
    } catch (err) {
      try {
        generateClientCodePdf();
        onShowToast('PDF generated and downloaded successfully!');
      } catch (clientErr) {
        onShowToast('Could not download PDF');
      }
    } finally {
      setTimeout(() => setIsGenerating(false), 900);
    }
  };

  const handleDownloadZip = () => {
    onShowToast('Downloading Pinboard_Notes_Complete.zip...');
    try {
      const link = document.createElement('a');
      link.href = `${import.meta.env.BASE_URL}Pinboard_Notes_Complete.zip`;
      link.download = 'Pinboard_Notes_Complete.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onShowToast('Download started: Pinboard_Notes_Complete.zip');
    } catch (err) {
      onShowToast('Could not download zip');
    }
  };

  const handleCopyCode = async (file: SourceFile) => {
    try {
      await navigator.clipboard.writeText(file.content);
      setCopiedPath(file.path);
      onShowToast(`Copied ${file.path} to clipboard`);
      setTimeout(() => setCopiedPath(null), 2000);
    } catch (e) {
      onShowToast('Failed to copy to clipboard');
    }
  };

  const handleDownloadSingleFile = (file: SourceFile) => {
    const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.path.split('/').pop() || 'code.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onShowToast(`Downloaded ${file.path}`);
  };

  return (
    <div className="sheet-backdrop" onClick={onClose} style={{ zIndex: 1100 }}>
      <div
        className="code-export-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="code-export-header">
          <div className="code-export-header-title">
            <div className="code-badge-icon">
              <FileCode size={20} />
            </div>
            <div>
              <h3>Complete Codebase & Architectural Specification</h3>
              <p>
                10 Core Feature Modules • {CODEBASE_FILES.length} Files • {totalLines.toLocaleString()} Lines of Code
              </p>
            </div>
          </div>

          <div className="code-export-header-actions">
            <button
              className="export-zip-btn"
              onClick={handleDownloadZip}
              title="Download entire project repository as a ZIP archive (includes PDF + all source files)"
            >
              <Archive size={16} />
              <span>Download ZIP</span>
            </button>

            <button
              className="export-pdf-main-btn"
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              title="Download the full architectural specification & unabridged codebase PDF"
            >
              <Download size={16} />
              <span>{isGenerating ? 'Preparing PDF...' : 'Download PDF'}</span>
            </button>

            <button className="icon-btn" onClick={onClose} title="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--divider)', padding: '0 16px', background: 'rgba(0,0,0,0.03)' }}>
          <button
            onClick={() => setActiveTab('files')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 18px',
              border: 'none',
              background: 'transparent',
              color: activeTab === 'files' ? 'var(--accent1)' : 'var(--text-dim)',
              borderBottom: activeTab === 'files' ? '2px solid var(--accent1)' : '2px solid transparent',
              fontWeight: 600,
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            <Code size={15} />
            <span>Source Code Files ({CODEBASE_FILES.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('features')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 18px',
              border: 'none',
              background: 'transparent',
              color: activeTab === 'features' ? 'var(--accent1)' : 'var(--text-dim)',
              borderBottom: activeTab === 'features' ? '2px solid var(--accent1)' : '2px solid transparent',
              fontWeight: 600,
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            <BookOpen size={15} />
            <span>Feature Specifications ({CORE_FEATURES_LIST.length})</span>
          </button>
        </div>

        {/* Tab 1: Source Files */}
        {activeTab === 'files' && (
          <div className="code-export-body">
            {/* File sidebar list */}
            <div className="code-file-list">
              <div className="code-list-title">Repository Files</div>
              {CODEBASE_FILES.map((file) => {
                const isSelected = selectedFile.path === file.path;
                return (
                  <button
                    key={file.path}
                    className={`code-file-item ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedFile(file)}
                  >
                    <div className="file-item-left">
                      <FileText size={15} className="file-icon" />
                      <div className="file-info">
                        <span className="file-name">{file.path.split('/').pop()}</span>
                        <span className="file-path">{file.path}</span>
                      </div>
                    </div>
                    <div className="file-meta">
                      <span className="file-badge">{file.category}</span>
                      <span className="file-lines">{file.lines}L</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Code viewer */}
            <div className="code-preview-pane">
              <div className="code-pane-toolbar">
                <div className="pane-file-details">
                  <span className="pane-filename">{selectedFile.path}</span>
                  <span className="pane-desc">{selectedFile.description}</span>
                </div>
                <div className="pane-actions">
                  <button
                    className="pane-btn"
                    onClick={() => handleCopyCode(selectedFile)}
                    title="Copy file source code"
                  >
                    {copiedPath === selectedFile.path ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedPath === selectedFile.path ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    className="pane-btn"
                    onClick={() => handleDownloadSingleFile(selectedFile)}
                    title="Download this file"
                  >
                    <Download size={14} />
                    <span>Download File</span>
                  </button>
                </div>
              </div>

              <pre className="code-viewer-content">
                <code>
                  {selectedFile.content.split('\n').map((line, idx) => (
                    <div key={idx} className="code-line">
                      <span className="code-line-number">{idx + 1}</span>
                      <span className="code-line-text">{line || ' '}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        )}

        {/* Tab 2: Feature Specifications */}
        {activeTab === 'features' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px' }}>
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <div style={{ marginBottom: 20 }}>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
                  Architectural & Functional Blueprint (10 Modules)
                </h4>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--text-dim)' }}>
                  Every feature engineered to specification, including tree mutations, drag-reorder physics, floating bubble parameters, and Recycle Bin landing flows.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                {CORE_FEATURES_LIST.map((feat) => (
                  <div
                    key={feat.id}
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: 14,
                      padding: '16px 20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span
                        style={{
                          background: 'var(--pill-bg)',
                          border: '1px solid var(--pill-border)',
                          color: 'var(--accent1)',
                          fontSize: 11,
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: 6,
                        }}
                      >
                        {feat.id}
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
                        {feat.title}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: 'var(--text-dim)' }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="code-export-footer">
          <div className="footer-left">
            <span className="pdf-info-pill">
              <Sparkles size={13} />
              Includes complete PDF document, 10 feature blueprints, and full source code
            </span>
          </div>
          <div className="footer-right" style={{ display: 'flex', gap: 10 }}>
            <a
              href={`${import.meta.env.BASE_URL}Pinboard_Notes_Complete.zip`}
              download="Pinboard_Notes_Complete.zip"
              className="direct-pdf-link"
              title="Download entire codebase and PDF bundled as a ZIP file"
            >
              Direct ZIP Link <Archive size={13} />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Pinboard_Notes_Codebase.pdf`}
              download="Pinboard_Notes_Codebase.pdf"
              className="direct-pdf-link"
              title="Direct link to static codebase PDF file"
            >
              Direct PDF <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
