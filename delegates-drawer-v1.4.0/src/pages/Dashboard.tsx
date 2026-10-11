import { Link } from 'react-router-dom';
import { biDossier } from '../data/biDossier';
import { defaultConferences } from '../data/conferences';
import { AlertTriangle, FileText, Map, Building2, BookOpen, Users, Clock3, FilePlus2, ArrowRight, CheckCircle2, ClipboardList } from 'lucide-react';

export default function Dashboard() {
  const conf = defaultConferences[0];
  const readCount = (key: string) => { try { const value = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(value) ? value.length : 0; } catch { return 0; } };
  const documentCount = readCount('dd-documents-v1');
  const sourceItems = (() => { try { const value = JSON.parse(localStorage.getItem('dd-sources-v1') || '[]'); return Array.isArray(value) ? value : []; } catch { return []; } })();
  const checkedSources = sourceItems.filter((s: {status?: string}) => s.status === 'Checked').length;
  const reviewSources = sourceItems.filter((s: {status?: string}) => s.status === 'Needs review').length;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">Mission Control</h1>
        <p className="text-muted mt-1">
          {conf.shortName} · {conf.role} · {conf.committee}
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6" aria-label="Preparation overview">
        <Link to="/drawer" className="p-4 bg-surface rounded-xl border border-gold/15 hover:border-gold/50 transition-colors">
          <div className="flex items-center justify-between"><span className="text-xs text-muted uppercase tracking-wide">Saved documents</span><FileText size={17} className="text-gold" /></div>
          <div className="text-2xl font-bold mt-2">{documentCount}</div><p className="text-xs text-muted mt-1">Drafts in this browser</p>
        </Link>
        <Link to="/sources" className="p-4 bg-surface rounded-xl border border-gold/15 hover:border-gold/50 transition-colors">
          <div className="flex items-center justify-between"><span className="text-xs text-muted uppercase tracking-wide">Sources checked</span><CheckCircle2 size={17} className="text-gold" /></div>
          <div className="text-2xl font-bold mt-2">{checkedSources}<span className="text-sm text-muted font-normal"> / {sourceItems.length}</span></div><p className="text-xs text-muted mt-1">{reviewSources} still need review</p>
        </Link>
        <Link to="/clause-builder" className="p-4 bg-surface rounded-xl border border-gold/15 hover:border-gold/50 transition-colors">
          <div className="flex items-center justify-between"><span className="text-xs text-muted uppercase tracking-wide">Next best action</span><ClipboardList size={17} className="text-gold" /></div>
          <div className="text-base font-bold mt-2">Verify a claim</div><p className="text-xs text-muted mt-1">Evidence before operative clauses</p>
        </Link>
      </section>

      {/* Red Lines - Always Visible */}
      <div className="mb-8 p-5 bg-surface border-l-4 border-gold rounded-r-xl">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={18} className="text-gold" />
          <h2 className="font-semibold text-text">Red Lines</h2>
        </div>
        <ul className="space-y-2">
          {biDossier.redLines.map((line, i) => (
            <li key={i} className="text-sm text-text flex gap-2">
              <span className="text-gold font-bold">{i + 1}.</span>
              {line}
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <Link
          to="/bi-dossier"
          className="p-5 bg-surface rounded-xl border border-gold/10 hover:border-gold/40 transition-colors group"
        >
          <Building2 className="text-gold mb-3" size={24} />
          <h3 className="font-semibold text-text group-hover:text-gold transition-colors">
            BI Dossier
          </h3>
          <p className="text-sm text-muted mt-1">
            Mandate, powers, past actions, tips
          </p>
        </Link>

        <Link
          to="/agenda-a"
          className="p-5 bg-surface rounded-xl border border-gold/10 hover:border-gold/40 transition-colors group"
        >
          <Map className="text-gold mb-3" size={24} />
          <h3 className="font-semibold text-text group-hover:text-gold transition-colors">
            Agenda A War Room
          </h3>
          <p className="text-sm text-muted mt-1">
            Southern Backdoor strategy
          </p>
        </Link>

        <Link
          to="/drawer"
          className="p-5 bg-surface rounded-xl border border-gold/10 hover:border-gold/40 transition-colors group"
        >
          <FileText className="text-gold mb-3" size={24} />
          <h3 className="font-semibold text-text group-hover:text-gold transition-colors">
            Document Vault
          </h3>
          <p className="text-sm text-muted mt-1">
            Position papers, speeches, notes
          </p>
        </Link>
      </div>

      {/* Version 1.2 research tools */}
      <div className="mb-8">
        <h2 className="font-semibold mb-3">Research & Drafting Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {to:'/sources', title:'Sources & Evidence', desc:'Track claims and verification', Icon:BookOpen},
            {to:'/stakeholders', title:'Stakeholder Matrix', desc:'Roles, interests, negotiation', Icon:Users},
            {to:'/timeline', title:'CMA Timeline', desc:'Laws and past attempts', Icon:Clock3},
            {to:'/clause-builder', title:'Clause Builder', desc:'Draft actionable clauses', Icon:FilePlus2},
            {to:'/field-guide', title:'Field Guide & Print Pack', desc:'Definitions and conference-day brief', Icon:ClipboardList},
          ].map(({to,title,desc,Icon})=><Link key={to} to={to} className="p-4 bg-surface rounded-xl border border-gold/10 hover:border-gold/40 transition-colors"><Icon className="text-gold mb-2" size={21}/><h3 className="font-semibold text-sm">{title}</h3><p className="text-xs text-muted mt-1">{desc}</p></Link>)}
        </div>
      </div>

      {/* Conference Context */}
      <div className="p-6 bg-surface rounded-xl border border-gold/10">
        <h2 className="font-semibold text-text mb-4">Current Conference</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted">Committee</span>
            <p className="text-text font-medium">{conf.committee}</p>
          </div>
          <div>
            <span className="text-muted">Role</span>
            <p className="text-text font-medium">{conf.role}</p>
          </div>
          <div>
            <span className="text-muted">Dates</span>
            <p className="text-text font-medium">
              {conf.dateStart} → {conf.dateEnd}
            </p>
          </div>
          <div>
            <span className="text-muted">Location</span>
            <p className="text-text font-medium">{conf.location}</p>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-gold/10">
          <h3 className="text-sm font-medium text-muted mb-2">Agendas</h3>
          <ul className="space-y-1.5">
            {conf.agendas.map((a, i) => (
              <li key={i} className="text-sm text-text flex items-start gap-2">
                <ArrowRight size={14} className="text-gold mt-0.5 flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Go-to phrases */}
      <div className="mt-8 p-5 bg-mint/50 dark:bg-surface-2 rounded-xl">
        <h2 className="font-semibold text-text mb-3">Go-to Phrases</h2>
        <div className="flex flex-wrap gap-2">
          {biDossier.speechLines.map((line, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-surface text-sm rounded-full border border-gold/20 text-text"
            >
              “{line}”
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
