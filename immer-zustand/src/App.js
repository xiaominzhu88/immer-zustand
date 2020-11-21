import React from 'react';
import './App.css';
import create from 'zustand';
import shallow from 'zustand/shallow';
import Puppy from './Puppy';
import Immer from './Immer';

const useCounterStore = create((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
  deleteOne: () => set((state) => ({ count: state.count - 1 })),
  returnAll: () => set({ count: 0 }),
}));

export const usePuppyStore = create((set, get) => ({
  puppyImage: "I'm 🐶",
  catImage: () =>
    set((state) => ({
      puppyImage: "Now I'm 😼!",
    })),

  boom: () => set((state) => ({ puppyImage: '💥' })),
  action: () => set((state) => ({ puppyImage: "I'm 🐶 again!" })),
}));

export default function App() {
  const { count, add, deleteOne, returnAll } = useCounterStore(
    (state) => ({
      count: state.count,
      add: state.add,
      deleteOne: state.deleteOne,
      returnAll: state.returnAll,
    }),
    shallow,
  );

  return (
    <div className="App">
      <h1>use zustand {count}</h1>
      <button onClick={add}>+</button>
      <button onClick={deleteOne}>-</button>
      <button onClick={returnAll}>return to state</button>
      <hr />
      <Puppy />
      <hr />
      <Immer />
    </div>
  );
}
