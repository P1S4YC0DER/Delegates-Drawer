import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../lib/store';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Building2, 
  Map, 
  FileText, 
  Settings, 
  Moon, 
  Sun,
  Lock,
  BookOpen,
  Users,
  Clock3,
  FilePlus2,
  ClipboardList
} from 'lucide-react';
import clsx from 'clsx';

const navGroups = [
  { label: 'OVERVIEW', items: [{ path: '/', label: 'Mission Control', icon: LayoutDashboard }] },
  { label: 'BRIEFING', items: [
    { path: '/bi-dossier', label: 'BI Dossier', icon: Building2 },
    { path: '/agenda-a', label: 'Agenda A', icon: Map },
    { path: '/agenda-b', label: 'Agenda B', icon: Map },
  ] },
  { label: 'RESEARCH', items: [
    { path: '/sources', label: 'Sources & Evidence', icon: BookOpen },
    { path: '/stakeholders', label: 'Stakeholder Matrix', icon: Users },
    { path: '/timeline', label: 'CMA Timeline', icon: Clock3 },
  ] },
  { label: 'DRAFTING', items: [
    { path: '/drawer', label: 'Document Vault', icon: FolderOpen },
    { path: '/cheatsheet', label: 'Cheat Sheet', icon: FileText },
    { path: '/field-guide', label: 'Field Guide & Print Pack', icon: ClipboardList },
    { path: '/clause-builder', label: 'Clause Builder', icon: FilePlus2 },
  ] },
  { label: 'SYSTEM', items: [{ path: '/settings', label: 'Settings', icon: Settings }] },
];
const navItems = navGroups.flatMap(group => group.items);

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { theme, toggleTheme, setUnlocked } = useAppStore();

  return (
    <div className="flex min-h-screen bg-bg text-text">
      {/* Sidebar */}
      <aside className="sidebar hidden md:flex md:w-64 flex-shrink-0 border-r border-gold/20 bg-surface flex flex-col no-print">
        <div className="p-5 border-b border-gold/20">
          <h1 className="text-lg font-bold tracking-tight text-text">
            Delegates' Drawer
          </h1>
          <p className="text-xs text-muted mt-0.5">MUN Prep Cockpit</p>
        </div>

        <nav aria-label="Main navigation" className="flex-1 p-3 overflow-y-auto">
          {navGroups.map((group) => <div key={group.label} className="mb-4">
            <p className="px-3 mb-1.5 text-[10px] font-bold tracking-[0.18em] text-muted">{group.label}</p>
            <div className="space-y-1">{group.items.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return <Link key={item.path} to={item.path} aria-current={active ? 'page' : undefined} className={clsx('flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors', active ? 'bg-mint text-text border border-gold/30' : 'text-muted hover:bg-surface-2 hover:text-text')}>
                <Icon size={18} className={active ? 'text-gold' : ''} />{item.label}
              </Link>;
            })}</div>
          </div>)}
        </nav>

        <div className="p-3 border-t border-gold/20 space-y-2">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted hover:bg-surface-2 hover:text-text transition-colors"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
          <button
            onClick={() => setUnlocked(false)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted hover:bg-surface-2 hover:text-text transition-colors"
          >
            <Lock size={18} />
            Lock
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="md:hidden sticky top-0 z-20 bg-surface backdrop-blur border-b border-gold/20 px-3 py-3 no-print">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div><div className="font-bold text-sm">Delegates' Drawer</div><div className="text-[11px] text-muted">MUN Prep Cockpit</div></div>
            <div className="flex gap-2">
              <button onClick={toggleTheme} className="p-2 rounded-lg border border-gold/20" aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}</button>
              <button onClick={() => setUnlocked(false)} className="p-2 rounded-lg border border-gold/20" aria-label="Lock app"><Lock size={17}/></button>
            </div>
          </div>
          <nav aria-label="Main navigation" className="flex gap-1.5 overflow-x-auto pb-1">
            {navItems.map((item) => { const Icon = item.icon; const active = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)); return <Link key={item.path} to={item.path} className={clsx('shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border', active ? 'bg-mint text-text border-gold/40' : 'border-transparent text-muted hover:bg-surface-2')}><Icon size={14}/>{item.label}</Link>; })}
          </nav>
        </div>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:bg-surface focus:p-3">Skip to content</a>
        <div id="main-content">{children}</div>
      </main>
    </div>
  );
}
