import React from 'react';
import { usePuppyStore } from './App';
import shallow from 'zustand/shallow';

export default function Puppy() {
  const { puppyImage, catImage, boom, returnToPuppy } = usePuppyStore(
    (state) => ({
      puppyImage: state.puppyImage,
      catImage: state.catImage,
      boom: state.boom,
      returnToPuppy: state.action,
    }),
    shallow,
  );
  return (
    <div>
      <h1>{puppyImage}</h1>
      <button onClick={catImage}>change me</button>
      <button onClick={boom}>BOOM!</button>
      <button onClick={returnToPuppy}>return me</button>
    </div>
  );
}
