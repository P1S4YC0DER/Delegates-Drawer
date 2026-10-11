import { useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { useAppStore } from './lib/store';
import Layout from './components/Layout';
import PinLock from './components/PinLock';
import Dashboard from './pages/Dashboard';
import BIDossier from './pages/BIDossier';
import AgendaA from './pages/AgendaA';
import AgendaB from './pages/AgendaB';
import Drawer from './pages/Drawer';
import CheatSheet from './pages/CheatSheet';
import Settings from './pages/Settings';
import Sources from './pages/Sources';
import Stakeholders from './pages/Stakeholders';
import Timeline from './pages/Timeline';
import ClauseBuilder from './pages/ClauseBuilder';
import FieldGuide from './pages/FieldGuide';

export default function App() {
  const { isUnlocked, theme } = useAppStore();

  useEffect(() => {
    // Apply theme on mount
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  if (!isUnlocked) {
    return <PinLock />;
  }

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bi-dossier" element={<BIDossier />} />
          <Route path="/agenda-a" element={<AgendaA />} />
          <Route path="/agenda-b" element={<AgendaB />} />
          <Route path="/drawer" element={<Drawer />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
          <Route path="/field-guide" element={<FieldGuide />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/stakeholders" element={<Stakeholders />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/clause-builder" element={<ClauseBuilder />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div className="p-8 max-w-2xl mx-auto"><h1 className="text-3xl font-bold">Page not found</h1><p className="text-muted mt-2">That drawer does not exist—or the link may be outdated.</p><Link to="/" className="inline-block mt-5 px-4 py-2 rounded-lg bg-gold text-bg font-semibold">Return to Mission Control</Link></div>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
