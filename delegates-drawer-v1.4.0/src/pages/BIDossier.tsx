import { biDossier } from '../data/biDossier';
import { Shield, Scale, History, Users, AlertTriangle, Lightbulb } from 'lucide-react';

export default function BIDossier() {
  return (
    <div className="p-8 max-w-4xl mx-auto print-area">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">{biDossier.name}</h1>
        <p className="text-muted mt-1">Parent Agency: {biDossier.parent}</p>
      </div>

      {/* Red Lines */}
      <section className="mb-10 p-5 bg-surface border-l-4 border-gold rounded-r-xl">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={20} className="text-gold" />
          <h2 className="text-lg font-semibold">Red Lines</h2>
        </div>
        <ol className="space-y-2 list-decimal list-inside">
          {biDossier.redLines.map((line, i) => (
            <li key={i} className="text-sm text-text">{line}</li>
          ))}
        </ol>
      </section>

      {/* Legal Basis & Mandate */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Scale size={20} className="text-gold" />
          <h2 className="text-lg font-semibold">Legal Basis</h2>
        </div>
        <ul className="space-y-1.5 mb-6">
          {biDossier.legalBasis.map((item, i) => (
            <li key={i} className="text-sm text-text pl-4 border-l-2 border-gold/30">
              {item}
            </li>
          ))}
        </ul>

        <h3 className="font-medium text-text mb-2">Mandate</h3>
        <ul className="space-y-1.5">
          {biDossier.mandate.map((item, i) => (
            <li key={i} className="text-sm text-muted">• {item}</li>
          ))}
        </ul>
      </section>

      {/* Powers & Limits */}
      <section className="mb-10 grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield size={18} className="text-gold" />
            <h2 className="font-semibold">Powers</h2>
          </div>
          <ul className="space-y-1.5">
            {biDossier.powers.map((item, i) => (
              <li key={i} className="text-sm text-muted">• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Limits</h2>
          <ul className="space-y-1.5">
            {biDossier.limits.map((item, i) => (
              <li key={i} className="text-sm text-muted">• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Past Actions */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <History size={20} className="text-gold" />
          <h2 className="text-lg font-semibold">Past Actions</h2>
        </div>
        <ul className="space-y-2">
          {biDossier.pastActions.map((item, i) => (
            <li key={i} className="text-sm text-text pl-4 border-l-2 border-mint">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Agenda Roles */}
      <section className="mb-10 grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-surface rounded-xl">
          <h3 className="font-semibold text-text mb-2">Agenda A Role</h3>
          <p className="text-sm text-muted leading-relaxed">{biDossier.agendaA_role}</p>
        </div>
        <div className="p-4 bg-surface rounded-xl">
          <h3 className="font-semibold text-text mb-2">Agenda B Role</h3>
          <p className="text-sm text-muted leading-relaxed">{biDossier.agendaB_role}</p>
        </div>
      </section>

      {/* Allies & Rivals */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Users size={20} className="text-gold" />
          <h2 className="text-lg font-semibold">Stakeholders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-muted mb-2">Allies / Coordination Targets</h3>
            <div className="flex flex-wrap gap-2">
              {biDossier.allies.map((a, i) => (
                <span key={i} className="px-2.5 py-1 bg-mint text-xs rounded-full text-text">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted mb-2">Caution / Oppose</h3>
            <div className="flex flex-wrap gap-2">
              {biDossier.rivals.map((r, i) => (
                <span key={i} className="px-2.5 py-1 bg-surface border border-gold/20 text-xs rounded-full text-text">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ad Hoc Tips */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb size={20} className="text-gold" />
          <h2 className="text-lg font-semibold">Ad Hoc Tips (BI)</h2>
        </div>
        <ul className="space-y-2">
          {biDossier.tips.map((tip, i) => (
            <li key={i} className="text-sm text-text flex gap-2">
              <span className="text-gold font-mono text-xs mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Speech Lines */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Go-to Speech Lines</h2>
        <div className="space-y-2">
          {biDossier.speechLines.map((line, i) => (
            <blockquote
              key={i}
              className="pl-4 border-l-2 border-gold text-sm italic text-muted"
            >
              “{line}”
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
