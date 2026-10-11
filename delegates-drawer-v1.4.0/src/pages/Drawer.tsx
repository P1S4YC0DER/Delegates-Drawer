import { useMemo, useState } from 'react';
import { FileText, Plus, Search, Save, Trash2, X, Download } from 'lucide-react';

type DocType = 'position_paper' | 'opening_speech' | 'directive' | 'crisis_note' | 'research' | 'cheat_sheet' | 'free';
type Doc = { id: string; type: DocType; title: string; body: string; createdAt: string; updatedAt: string };
const KEY = 'dd-documents-v1';
const TEMPLATES: { id: DocType; label: string; desc: string; body: string }[] = [
  { id: 'position_paper', label: 'Position Paper', desc: 'Issue · National position · Past action · Proposed solutions', body: '# Position Paper\n\n## I. Background of the Topic\n\n## II. National / Agency Position\n\n## III. Previous Actions\n\n## IV. Proposed Solutions\n' },
  { id: 'opening_speech', label: 'Opening Speech', desc: 'Hook → Position → Priorities → Close', body: '# Opening Speech\n\nHonorable Chair and fellow delegates,\n\n[Hook / framing]\n\n[Agency position]\n\n[Two priorities]\n\n[Constructive closing]\n' },
  { id: 'directive', label: 'Draft Directive', desc: 'Action · Responsible body · Safeguard · Review', body: '# Draft Operative Clauses\n\n1. **Recommends / Establishes** [mechanism];\n2. **Assigns** [responsible agency] to [action] within [timeline];\n3. **Requires** [safeguards, reporting, oversight];\n4. **Requests review** after [period] using [measurable indicators].\n' },
  { id: 'crisis_note', label: 'Crisis Note', desc: '3R: Resources · Request · Reasoning', body: '# Crisis Note\n\n## Resources\n[What the agency can credibly provide]\n\n## Request\n[Specific action requested from whom]\n\n## Reasoning\n[Why it serves the mandate and current situation]\n\n## Risks / safeguards\n' },
  { id: 'research', label: 'Research Note', desc: 'Claim · Evidence · Source · Caveat', body: '# Research Note\n\n**Claim:**\n\n**Evidence / exact figure:**\n\n**Source and date:**\n\n**How it supports the BI position:**\n\n**Caveat / verification needed:**\n' },
  { id: 'cheat_sheet', label: 'Cheat Sheet', desc: 'One-page quick reference', body: '# Quick Reference\n\n## Red lines\n- \n\n## Key facts\n- \n\n## Allies / coordination\n- \n\n## Questions to ask\n- \n\n## Ready-to-use lines\n- \n' },
  { id: 'free', label: 'Blank Note', desc: 'Start from a blank document', body: '' },
];
function readDocs(): Doc[] { try { const x = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(x) ? x : []; } catch { return []; } }
function stamp() { return new Date().toISOString(); }

export default function Drawer() {
  const [docs, setDocs] = useState<Doc[]>(readDocs);
  const [search, setSearch] = useState('');
  const [active, setActive] = useState<Doc | null>(null);
  const [notice, setNotice] = useState('');
  const persist = (next: Doc[]) => { setDocs(next); localStorage.setItem(KEY, JSON.stringify(next)); };
  const filtered = useMemo(() => docs.filter(d => (d.title + ' ' + d.body + ' ' + d.type).toLowerCase().includes(search.toLowerCase())), [docs, search]);
  const create = (type: DocType) => {
    const t = TEMPLATES.find(x => x.id === type)!; const now = stamp();
    const doc: Doc = { id: crypto.randomUUID?.() || String(Date.now()), type, title: t.label, body: t.body, createdAt: now, updatedAt: now };
    persist([doc, ...docs]); setActive(doc); setNotice('');
  };
  const save = () => { if (!active || !active.title.trim()) { setNotice('Please give the document a title.'); return; } const next = { ...active, title: active.title.trim(), updatedAt: stamp() }; persist(docs.map(d => d.id === next.id ? next : d)); setActive(next); setNotice('Saved locally.'); };
  const remove = (d: Doc) => { if (confirm(`Delete “${d.title}”?`)) { persist(docs.filter(x => x.id !== d.id)); if (active?.id === d.id) setActive(null); } };
  const download = (d: Doc) => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([d.body], {type:'text/markdown;charset=utf-8'})); a.download = `${d.title.replace(/[^a-z0-9-_ ]/gi,'').trim() || 'mun-note'}.md`; a.click(); URL.revokeObjectURL(a.href); };
  return <div className="p-6 md:p-8 max-w-6xl mx-auto">
    <div className="flex flex-wrap items-start justify-between gap-4 mb-7"><div><h1 className="text-3xl font-bold">Document Vault</h1><p className="text-muted mt-1">Local notes and conference drafts · save explicitly</p></div><button onClick={() => create('free')} className="flex items-center gap-2 px-4 py-2.5 bg-gold text-bg font-semibold rounded-xl"><Plus size={18}/> New Document</button></div>
    <div className="relative mb-6"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search titles and document text…" className="w-full pl-10 pr-4 py-3 bg-surface border border-gold/20 rounded-xl"/></div>
    {active && <section className="mb-8 p-5 bg-surface border border-gold/30 rounded-2xl"><div className="flex justify-between gap-3 mb-4"><h2 className="font-semibold">Editor</h2><button onClick={()=>{setActive(null);setNotice('')}} aria-label="Close editor"><X size={18}/></button></div><label className="block text-sm mb-1">Title</label><input value={active.title} onChange={e=>setActive({...active,title:e.target.value})} className="w-full p-3 mb-4 bg-bg border border-gold/20 rounded-lg"/><label className="block text-sm mb-1">Content (Markdown supported)</label><textarea value={active.body} onChange={e=>setActive({...active,body:e.target.value})} rows={16} className="w-full p-3 bg-bg border border-gold/20 rounded-lg font-mono text-sm"/><div className="flex flex-wrap items-center gap-3 mt-4"><button onClick={save} className="flex items-center gap-2 px-4 py-2 bg-gold text-bg rounded-lg font-semibold"><Save size={16}/> Save</button><button onClick={()=>download(active)} className="flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-lg"><Download size={16}/> Export .md</button><span className="text-sm text-muted" role="status">{notice}</span></div></section>}
    <h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">Start from Template</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">{TEMPLATES.map(t=><button key={t.id} onClick={()=>create(t.id)} className="p-4 bg-surface rounded-xl border border-gold/20 hover:border-gold/60 text-left"><FileText size={20} className="text-gold mb-2"/><h3 className="font-medium">{t.label}</h3><p className="text-xs text-muted mt-1">{t.desc}</p></button>)}</div>
    <div className="flex items-center justify-between mb-3"><h2 className="font-semibold">Your documents</h2><span className="text-xs text-muted">{filtered.length} shown</span></div>
    {filtered.length ? <div className="space-y-2">{filtered.map(d=><div key={d.id} className="flex items-center gap-3 p-4 bg-surface border border-gold/10 rounded-xl"><button className="text-left min-w-0 flex-1" onClick={()=>{setActive(d);setNotice('')}}><div className="font-medium truncate">{d.title}</div><div className="text-xs text-muted mt-1">{d.type.replaceAll('_',' ')} · Updated {new Date(d.updatedAt).toLocaleString()}</div><div className="text-sm text-muted mt-1 truncate">{d.body.slice(0,140) || 'Empty document'}</div></button><button onClick={()=>download(d)} title="Export Markdown" aria-label={`Export ${d.title}`}><Download size={17}/></button><button onClick={()=>remove(d)} title="Delete document" aria-label={`Delete ${d.title}`} className="text-red-500"><Trash2 size={17}/></button></div>)}</div> : <div className="text-center py-10 border border-dashed border-gold/20 rounded-xl"><FileText size={36} className="mx-auto text-muted mb-3"/><p className="font-medium">{search ? 'No matching documents' : 'Your drawer is empty'}</p><p className="text-sm text-muted mt-1">{search ? 'Try another search.' : 'Choose a template above to create your first note.'}</p></div>}
    <p className="text-xs text-muted mt-6">Documents are stored in this browser’s local storage. Export important work regularly; clearing browser data may erase it.</p>
  </div>;
}
