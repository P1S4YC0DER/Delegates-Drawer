import { biDossier } from '../data/biDossier';
import { Map, Target, FileText, AlertTriangle } from 'lucide-react';

export default function AgendaA() {
  return (
    <div className="p-8 max-w-4xl mx-auto print-area">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-gold mb-2">
          <Map size={20} />
          <span className="text-sm font-medium uppercase tracking-wider">War Room</span>
        </div>
        <h1 className="text-3xl font-bold text-text">Agenda A — Southern Backdoor</h1>
        <p className="text-muted mt-2">
          Integration of national defense mandates with customary frameworks along the Sulu Southern Backdoor
        </p>
      </div>

      {/* Red Lines */}
      <div className="mb-8 p-5 bg-surface border-l-4 border-gold rounded-r-xl">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={18} className="text-gold" />
          <h2 className="font-semibold">Non-Negotiables</h2>
        </div>
        <ul className="space-y-1.5 text-sm">
          {biDossier.redLines.map((line, i) => (
            <li key={i}>• {line}</li>
          ))}
        </ul>
      </div>

      {/* Stance */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Target size={18} className="text-gold" />
          <h2 className="text-lg font-semibold">BI Stance</h2>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {biDossier.agendaA_role}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-mint/40 dark:bg-surface-2 rounded-xl">
            <h3 className="text-sm font-semibold mb-2 text-text">Support</h3>
            <ul className="text-sm text-muted space-y-1">
              <li>• Structured community information channels</li>
              <li>• Joint immigration-maritime coordination desks</li>
              <li>• Protected reporting with anti-retaliation safeguards</li>
              <li>• Manifest submission & advance passenger information</li>
              <li>• Trilateral data-sharing (TCA / INDOMALPHI)</li>
            </ul>
          </div>
          <div className="p-4 bg-surface rounded-xl border border-gold/20">
            <h3 className="text-sm font-semibold mb-2 text-text">Oppose</h3>
            <ul className="text-sm text-muted space-y-1">
              <li>• Customary border enforcement units</li>
              <li>• Civilian intelligence networks with formal power</li>
              <li>• Any transfer of exclusion / deportation authority</li>
              <li>• Separate immigration regimes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Directive Language */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <FileText size={18} className="text-gold" />
          <h2 className="text-lg font-semibold">Directive Language to Propose</h2>
        </div>
        <div className="space-y-3">
          {[
            'Establish a joint immigration-maritime coordination desk in Bongao, Jolo, and Tawi-Tawi.',
            'Require all vessels operating in the Sulu corridor to submit passenger and crew manifests to BI and PCG.',
            'Create a protected community reporting channel administered by BI, PCG, and PNP, with anti-retaliation safeguards.',
            'Standardize data-sharing with Malaysian and Indonesian immigration authorities through the Trilateral Cooperative Arrangement.',
            'Reaffirm that exclusion, deportation, lookout placement, and formal enforcement powers remain with national authorities.'
          ].map((text, i) => (
            <div key={i} className="p-3 bg-surface rounded-lg text-sm text-text border-l-2 border-gold">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Tips specific to Agenda A */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Agenda A Tips</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li>• Speak as legal authority, not military. Emphasize due process and anti-trafficking.</li>
          <li>• Never say BI can “secure the border” alone.</li>
          <li>• When local actors speak, ask: “Who retains the power to exclude and deport?”</li>
          <li>• Push moderated caucuses on the exact QARMAs from the study guide.</li>
          <li>• Pre-write operative clauses before unmods — speed wins.</li>
        </ul>
      </section>

      <section className="mt-10 p-5 bg-surface border border-gold/20 rounded-xl">
        <h2 className="text-lg font-semibold mb-3">QARMAs — Questions a Resolution Must Answer</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted">
          {['What can local institutions know that national institutions cannot, and how will reports be verified?', 'What happens when local and national assessments conflict?', 'Does integration require decision-making authority, or can local institutions advise while national agencies retain operational control?', 'How do we protect civilians from retaliation and avoid turning communities into unpaid intelligence networks?', 'Which responsibilities—territorial defense, law enforcement, and use of state force—must remain with national authorities?'].map((q, i) => <li key={i}>{q}</li>)}
        </ol>
        <p className="text-xs text-muted mt-4">Drafting check: distinguish existing legal authority from a proposal. Verify each operational clause against current law and the conference’s rules before presenting it as legally available.</p>
      </section>
    </div>
  );
}
