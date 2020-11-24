import create from 'zustand';

export const usePuppyStore = create((set, get) => ({
  puppyImage: "I'm 🐶",
  catImage: () =>
    set((state) => ({
      puppyImage: "Now I'm 😼!",
    })),

  boom: () => set((state) => ({ puppyImage: '💥' })),
  action: () => set((state) => ({ puppyImage: "I'm 🐶 again!" })),
}));

export const useCounterStore = create((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
  deleteOne: () => set((state) => ({ count: state.count - 1 })),
  returnAll: () => set({ count: 0 }),
}));
