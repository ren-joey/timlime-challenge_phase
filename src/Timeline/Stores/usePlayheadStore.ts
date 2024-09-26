import { create } from 'zustand';

export interface PlayheadStoreState {
    time: number;
    max: number;
    setTime: (n: number) => void;
    setMax: (n: number) => void;
}

export const usePlayheadStore = create<PlayheadStoreState>((set) => ({
    time: 0,
    setTime: (time: number) => set({ time }),
    max: 2000,
    setMax: (max: number) => set({ max })
}));
