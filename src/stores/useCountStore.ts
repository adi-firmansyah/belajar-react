import { create } from "zustand";

interface CountState {
  count: number;
}

interface CountActions {
  increment: () => void;
  decrement: () => void;
}

export const useCountStore = create<CountState & CountActions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
