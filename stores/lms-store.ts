import { create } from "zustand";

type LmsState = {
  isMember: boolean;
  setIsMember: (isMember: boolean) => void;
};

export const useLmsStore = create<LmsState>()((set) => ({
  isMember: false,
  setIsMember: (isMember: boolean) => set({ isMember }),
}));
