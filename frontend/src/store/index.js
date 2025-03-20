import { create } from 'zustand';

const useStore = create((set) => ({
  shapes: [],
  tool: 'circle',
  setTool: (tool) => set({ tool }),
  addShape: (shape) =>
    set((state) => ({
      shapes: [...state.shapes, shape],
    })),
}));

export default useStore;
