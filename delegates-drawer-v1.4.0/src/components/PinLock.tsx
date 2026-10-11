import { useState } from 'react';
import { useAppStore } from '../lib/store';
import { Lock } from 'lucide-react';

export default function PinLock() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const { setUnlocked } = useAppStore();

  // This is a convenience lock only; browser storage is not secure against a technical user.
  const DEFAULT_PIN = '1234';
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const savedPin = localStorage.getItem('dd-pin');
    const accepted = savedPin ? pin === savedPin : pin === DEFAULT_PIN;
    if (accepted) {
      if (!savedPin) localStorage.setItem('dd-pin', DEFAULT_PIN);
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPin('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="w-full max-w-sm p-8 bg-surface rounded-2xl border border-gold/20 shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-mint flex items-center justify-center">
            <Lock className="text-gold" size={28} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-text mb-1">
          Delegates' Drawer
        </h1>
        <p className="text-sm text-muted text-center mb-8">
          Enter PIN to unlock
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setError(false);
            }}
            placeholder="••••"
            className="w-full px-4 py-3 text-center text-2xl tracking-[0.5em] bg-bg border border-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 text-text"
            autoFocus
          />
          {error && (
            <p className="text-sm text-red-500 text-center">Incorrect PIN</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-gold text-bg font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Unlock
          </button>
        </form>

        <p className="text-xs text-muted text-center mt-6">
          First-run PIN: <span className="font-mono">1234</span> · change it in Settings
        </p>
      </div>
    </div>
  );
}
