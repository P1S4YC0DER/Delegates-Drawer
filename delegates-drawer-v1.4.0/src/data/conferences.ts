import type { Conference } from '../types';

export const defaultConferences: Conference[] = [
  {
    id: 'davaomun-ii',
    name: 'DavaoMUN II',
    shortName: 'DMUN II',
    dateStart: '2026-11-05',
    dateEnd: '2026-11-07',
    location: 'Davao City',
    mode: 'offline',
    committee: 'Council of Mindanao Affairs (Ad Hoc)',
    committeeType: 'AdHoc',
    role: 'Bureau of Immigration',
    agendas: [
      'Agenda A: Southern Backdoor – Integration of National Defense Mandates with Customary Frameworks',
      'Agenda B: Economic Decentralization and Regional Development Frameworks'
    ],
    status: 'upcoming',
    notes: 'Primary focus: Agenda A. BI as legal gatekeeper. Protect national immigration authority while enabling structured local information channels.',
    lessons: []
  }
];
