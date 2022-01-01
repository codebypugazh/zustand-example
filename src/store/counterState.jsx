import createStore from "zustand";

const useCount = createStore((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  increaseCountBy: (a) => set((state) => ({ count: state.count + a })),
}));

export { useCount };
