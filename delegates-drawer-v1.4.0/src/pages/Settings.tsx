import { useRef, useState } from 'react';
import { useAppStore } from '../lib/store';
import { Download, Upload, Trash2 } from 'lucide-react';

const DOCS_KEY = 'dd-documents-v1';
const SOURCES_KEY = 'dd-sources-v1';
const safeRead = (key: string, fallback: unknown) => { try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); } catch { return fallback; } };
export default function Settings() {
  const { theme, setTheme } = useAppStore();
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const exportData = () => {
    const payload = { app: 'Delegates\' Drawer', version: '1.3.0', exportedAt: new Date().toISOString(), theme, pinConfigured: Boolean(localStorage.getItem('dd-pin')), documents: safeRead(DOCS_KEY, []), sources: safeRead(SOURCES_KEY, null) };
    const a = document.createElement('a'); const objectUrl = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'})); a.href = objectUrl; a.download = 'delegates-drawer-backup.json'; a.click(); window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000); setMessage('Backup exported. Keep it somewhere safe.');
  };
  const importData = async (file?: File) => {
    if (!file) return;
    try {
      if (file.size > 5 * 1024 * 1024) throw new Error('Backup exceeds 5 MB limit');
      const parsed = JSON.parse(await file.text());
      const validDocs = Array.isArray(parsed?.documents) && parsed.documents.every((d: any) => d && typeof d.id === 'string' && typeof d.title === 'string' && typeof d.body === 'string');
      const validSources = parsed?.sources === null || parsed?.sources === undefined || (Array.isArray(parsed.sources) && parsed.sources.every((s: any) => s && typeof s.id === 'string' && typeof s.title === 'string' && typeof s.claim === 'string'));
      if (parsed?.app !== "Delegates' Drawer" || !validDocs || !validSources) throw new Error('Invalid backup format');
      const approved = confirm(`Import ${parsed.documents.length} documents${Array.isArray(parsed.sources) ? ` and ${parsed.sources.length} sources` : ''}? Existing saved documents and sources will be replaced when included in this backup.`);
      if (!approved) { setMessage('Import cancelled. No data was changed.'); return; }
      localStorage.setItem(DOCS_KEY, JSON.stringify(parsed.documents));
      if (Array.isArray(parsed.sources)) localStorage.setItem(SOURCES_KEY, JSON.stringify(parsed.sources));
      if (parsed.theme === 'light' || parsed.theme === 'dark') setTheme(parsed.theme);
      setMessage(`Imported ${parsed.documents.length} documents${Array.isArray(parsed.sources) ? ` and ${parsed.sources.length} sources` : ''}${parsed.theme ? ' and theme preference' : ''}. Reopen the relevant page to refresh its view.`);
    } catch { setMessage('Import failed: choose a valid Delegates’ Drawer JSON backup under 5 MB.'); }
    finally { if (fileRef.current) fileRef.current.value = ''; }
  };
  const changePin = () => {
    const current = localStorage.getItem('dd-pin') || '1234';
    const entered = prompt('Enter your current PIN:');
    if (entered !== current) { setMessage('Current PIN did not match.'); return; }
    const next = prompt('Set a new PIN using 4–6 digits:');
    if (next === null) return;
    if (!/^\d{4,6}$/.test(next)) { setMessage('PIN must contain 4–6 digits.'); return; }
    localStorage.setItem('dd-pin', next); setMessage('PIN changed.');
  };
  const clearData = () => {
    if (!confirm('Delete Delegates’ Drawer settings, saved documents, and source records from this browser? Export a backup first if needed.')) return;
    ['dd-pin', DOCS_KEY, SOURCES_KEY, 'delegates-drawer-storage'].forEach(k => localStorage.removeItem(k));
    window.location.reload();
  };
  return <div className="p-8 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-8">Settings</h1>
    <section className="mb-10"><h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">Theme</h2><div className="flex gap-3">{(['light','dark'] as const).map(t=><button key={t} onClick={()=>setTheme(t)} className={`px-4 py-2 rounded-lg text-sm font-medium border ${theme===t?'bg-gold text-bg border-gold':'bg-surface border-gold/20'}`}>{t==='light'?'Light':'Dark'}</button>)}</div></section>
    <section className="mb-10"><h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">PIN Lock</h2><p className="text-sm text-muted mb-3">First-run PIN is <code className="bg-surface px-1 rounded">1234</code>. This is a convenience lock, not strong security: data remains accessible to someone who can inspect this browser’s storage.</p><button onClick={changePin} className="px-4 py-2 bg-surface border border-gold/20 rounded-lg text-sm">Change PIN</button></section>
    <section className="mb-10"><h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">Data backup</h2><p className="text-sm text-muted mb-3">Export your saved notes and source register to JSON before switching browsers or clearing site data. The backup does not include your PIN.</p><div className="space-y-3"><button onClick={exportData} className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-gold/20 rounded-lg text-sm w-full"><Download size={16}/> Export notes, sources, and settings (JSON)</button><input ref={fileRef} type="file" accept="application/json,.json" className="hidden" onChange={e=>void importData(e.target.files?.[0])}/><button onClick={()=>fileRef.current?.click()} className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-gold/20 rounded-lg text-sm w-full"><Upload size={16}/> Import backup (replaces included documents and sources)</button><button onClick={clearData} className="flex items-center gap-2 px-4 py-2.5 border border-red-500/30 text-red-500 rounded-lg text-sm w-full"><Trash2 size={16}/> Clear app data</button></div><p role="status" className="text-sm text-muted mt-3">{message}</p></section>
    <p className="text-xs text-muted">Delegates’ Drawer v1.3.0 · Local-first · No account required</p>
  </div>;
}
