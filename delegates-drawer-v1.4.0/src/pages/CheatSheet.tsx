import { biDossier } from '../data/biDossier';
import { FileText } from 'lucide-react';

export default function CheatSheet() {
  return (
    <div className="p-8 max-w-3xl mx-auto print-area">
      <div className="flex items-center gap-2 mb-6">
        <FileText size={22} className="text-gold" />
        <h1 className="text-2xl font-bold text-text">BI Cheat Sheet — DavaoMUN II</h1>
      </div>

      {/* Red Lines */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gold mb-2">Red Lines</h2>
        <ol className="text-sm space-y-1 list-decimal list-inside">
          {biDossier.redLines.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ol>
      </section>

      {/* Core Facts */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gold mb-2">Core Facts</h2>
        <ul className="text-sm space-y-1">
          <li>• Legal basis: Commonwealth Act No. 613 (1940)</li>
          <li>• Parent: Department of Justice</li>
          <li>• Core purpose: Secure borders · Manage migration · Safeguard the nation</li>
          <li>• Not a patrol force — coordinates with PCG / AFP / PNP for interdiction</li>
          <li>• Operates Border Crossing Stations including Bongao, Taganak, Batuganding</li>
          <li>• Recent: 244 foreign nationals arrested in Zamboanga Sibugay (Oct 2026)</li>
        </ul>
      </section>

      {/* Go-to Phrases */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gold mb-2">Go-to Phrases</h2>
        <ul className="text-sm space-y-1">
          {biDossier.speechLines.slice(0, 5).map((l, i) => (
            <li key={i}>“{l}”</li>
          ))}
        </ul>
      </section>

      {/* Allies */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gold mb-2">Key Allies</h2>
        <p className="text-sm">{biDossier.allies.slice(0, 6).join(' · ')}</p>
      </section>

      {/* Emergency Lines */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-wider text-gold mb-2">Emergency Lines</h2>
        <ul className="text-sm space-y-1">
          <li>• “The question is not whether to coordinate, but under whose authority.”</li>
          <li>• “National standards, local coordination.”</li>
          <li>• “BI coordinates. PCG and Navy interdict. PNP investigates.”</li>
        </ul>
      </section>

      <p className="text-xs text-muted mt-10 text-center no-print">
        Designed for single-page print. Use browser Print → Save as PDF.
      </p>
    </div>
  );
}
