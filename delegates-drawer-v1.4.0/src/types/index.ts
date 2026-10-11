export type ThemeMode = 'light' | 'dark';

export interface AuthConfig {
  hashedPin: string;
  salt: string;
  setupComplete: boolean;
  lockAfterMinutes: number;
}

export interface Conference {
  id: string;
  name: string;
  shortName: string;
  dateStart: string;
  dateEnd: string;
  location: string;
  mode: 'offline' | 'online' | 'hybrid';
  committee: string;
  committeeType: 'GA' | 'AdHoc' | 'Crisis' | 'Specialized';
  role: string;
  agendas: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
  notes: string;
  lessons: string[];
}

export interface Doc {
  id: string;
  conferenceId: string;
  type: 'position_paper' | 'opening_speech' | 'directive' | 'crisis_note' | 'research' | 'cheat_sheet' | 'free';
  title: string;
  body: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  versions: { body: string; savedAt: string }[];
}

export interface RedLine {
  id: string;
  text: string;
  priority: number;
}

export interface AgencyDossier {
  name: string;
  parent: string;
  legalBasis: string[];
  mandate: string[];
  powers: string[];
  limits: string[];
  pastActions: string[];
  agendaA_role: string;
  agendaB_role: string;
  allies: string[];
  rivals: string[];
  speechLines: string[];
  redLines: string[];
  tips: string[];
}
