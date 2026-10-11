import Dexie, { Table } from 'dexie';
import type { Doc, Conference } from '../types';

export class DelegatesDB extends Dexie {
  documents!: Table<Doc, string>;
  conferences!: Table<Conference, string>;

  constructor() {
    super('DelegatesDrawer');
    this.version(1).stores({
      documents: 'id, conferenceId, type, updatedAt',
      conferences: 'id, status, dateStart'
    });
  }
}

export const db = new DelegatesDB();
