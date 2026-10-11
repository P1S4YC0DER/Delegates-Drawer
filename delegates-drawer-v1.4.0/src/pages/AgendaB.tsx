import { biDossier } from '../data/biDossier';
import { Map, Target, FileText, AlertTriangle } from 'lucide-react';

export default function AgendaB() {
  return (
    <div className="p-8 max-w-4xl mx-auto print-area">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-gold mb-2">
          <Map size={20} />
          <span className="text-sm font-medium uppercase tracking-wider">War Room</span>
        </div>
        <h1 className="text-3xl font-bold text-text">Agenda B — Economic Decentralization</h1>
        <p className="text-muted mt-2">
          Regional development frameworks, fiscal autonomy, and constitutional unity
        </p>
      </div>

      {/* Red Lines */}
      <div className="mb-8 p-5 bg-surface border-l-4 border-gold rounded-r-xl">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={18} className="text-gold" />
          <h2 className="font-semibold">Non-Negotiables</h2>
        </div>
        <ul className="space-y-1.5 text-sm">
          <li>• No separate immigration system for BARMM or any region</li>
          <li>• Immigration authority remains national under all decentralization schemes</li>
          <li>• BI can facilitate legitimate movement; it cannot cede control</li>
        </ul>
      </div>

      {/* Stance */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Target size={18} className="text-gold" />
          <h2 className="text-lg font-semibold">BI Stance</h2>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {biDossier.agendaB_role}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-mint/40 dark:bg-surface-2 rounded-xl">
            <h3 className="text-sm font-semibold mb-2 text-text">Support</h3>
            <ul className="text-sm text-muted space-y-1">
              <li>• Digital border passes for legitimate barter traders (subject to watchlist screening)</li>
              <li>• Streamlined visas/permits for cross-border economic activity</li>
              <li>• BI liaison officers to MinDA, BEDC, and RDCs</li>
              <li>• Capacity-building on document verification and anti-fraud</li>
              <li>• Migration data sharing for regional planning</li>
            </ul>
          </div>
          <div className="p-4 bg-surface rounded-xl border border-gold/20">
            <h3 className="text-sm font-semibold mb-2 text-text">Oppose</h3>
            <ul className="text-sm text-muted space-y-1">
              <li>• BARMM or regional immigration authority</li>
              <li>• Fragmented watchlists or border enforcement</li>
              <li>• Any language transferring exclusion/deportation powers</li>
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
            'Create a BI liaison office to the Mindanao Development Authority for migration and labor data.',
            'Establish a digital border pass for legitimate barter traders in Sulu, subject to national watchlist screening.',
            'Streamline visa and permit processing for cross-border economic activity while maintaining national security checks.',
            'Support intergovernmental fiscal coordination without transferring immigration authority to regional bodies.',
            'Provide capacity-building for Region IX and BARMM on document verification, anti-fraud, and trafficking prevention.'
          ].map((text, i) => (
            <div key={i} className="p-3 bg-surface rounded-lg text-sm text-text border-l-2 border-gold">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Agenda B Tips</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li>• Frame BI as facilitator of legitimate movement, not an obstacle to development.</li>
          <li>• Use the phrase: “National standards, regional coordination.”</li>
          <li>• Support autonomy language on fiscal and economic matters; draw the hard line only on immigration and border control.</li>
          <li>• Offer concrete deliverables (liaison desks, digital passes) so you are seen as constructive.</li>
        </ul>
      </section>

      <section className="mt-10 p-5 bg-surface border border-gold/20 rounded-xl">
        <h2 className="text-lg font-semibold mb-3">QARMAs — Questions a Resolution Must Answer</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted">
          {['Which economic grievances stem from funding levels, control, implementation delays, or uneven investment—and which can decentralization actually address?', 'How much fiscal independence is enough, and what safeguards prevent reduced transfers from reducing services?', 'Who resolves disputes when regional and national development priorities differ?', 'How can frameworks avoid a two-tier Mindanao, including for Sulu under Region IX and underserved areas within BARMM?', 'Where does autonomy end and constitutional unity begin for taxation, resources, borrowing, foreign assistance, audit, and national standards?'].map((q, i) => <li key={i}>{q}</li>)}
        </ol>
        <p className="text-xs text-muted mt-4">Drafting check: distinguish existing legal authority from a proposal. Verify each operational clause against current law and the conference’s rules before presenting it as legally available.</p>
      </section>
    </div>
  );
}
