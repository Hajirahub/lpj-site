// 📦 src/store/juridocStore.ts

import { create } from 'zustand';

export type SasuData = {
  associeUnique: string;
  nomComplet: string;
  adresse: string;
  nomEntreprise: string;
  siege: string;
  capital: string;
  capitalLibere: string;
  duree: string;
  objet: string;
  dateDemarrage: string;
};

interface JuridocStore {
  sasuData: SasuData;
  setSasuData: (data: SasuData) => void;
}

export const useJuridocStore = create<JuridocStore>((set) => ({
  sasuData: {
    associeUnique: '',
    nomComplet: '',
    adresse: '',
    nomEntreprise: '',
    siege: '',
    capital: '',
    capitalLibere: '',
    duree: '',
    objet: '',
    dateDemarrage: '',
  },
  setSasuData: (data) => set({ sasuData: data }),
}));
