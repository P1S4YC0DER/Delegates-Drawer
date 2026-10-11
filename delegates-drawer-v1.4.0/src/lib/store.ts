import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode } from '../types';

interface AppState {
  theme: ThemeMode;
  isUnlocked: boolean;
  currentConferenceId: string | null;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setUnlocked: (value: boolean) => void;
  setCurrentConference: (id: string | null) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      isUnlocked: false,
      currentConferenceId: 'davaomun-ii',
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.classList.toggle('dark', theme === 'dark');
      },
      toggleTheme: () => {
        const next = get().theme === 'light' ? 'dark' : 'light';
        get().setTheme(next);
      },
      setUnlocked: (value) => set({ isUnlocked: value }),
      setCurrentConference: (id) => set({ currentConferenceId: id }),
    }),
    {
      name: 'delegates-drawer-storage',
      partialize: (state) => ({ theme: state.theme, currentConferenceId: state.currentConferenceId }),
    }
  )
);
