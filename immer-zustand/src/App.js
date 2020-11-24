import React from 'react';
import './App.css';
import shallow from 'zustand/shallow';
import Puppy from './Puppy';
import Immer from './Immer';
import { useCounterStore } from './store/index';

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
