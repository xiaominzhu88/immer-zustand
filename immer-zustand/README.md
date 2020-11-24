# Simple App example with zustand and immer libraries

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## add packages

**Zustand**

```jsx
yarn add zustand
```

- First create a store
  Your store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state.

```jsx
import create from 'zustand';
```

```jsx
export const useCounterStore = create((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
  deleteOne: () => set((state) => ({ count: state.count - 1 })),
  returnAll: () => set({ count: 0 }),
}));
```

- Then bind your components, and that's it!

  - construct a single object with multiple state-picks inside use shallow

```jsx
const { count, add, deleteOne, returnAll } = useCounterStore(
  (state) => ({
    count: state.count,
    add: state.add,
    deleteOne: state.deleteOne,
    returnAll: state.returnAll,
  }),
  shallow,
);
```

**Immer**

```jsx
yarn add immer
```

- A tiny package that allows you to work with immutable state in a more convenient way

```jsx
import produce from 'immer';
```

- the new item is only added to the next state, base state is unmodified

```jsx
const todos = [
  { music: '🎧', done: 'true' },
  { food: '🍜', done: 'false' },
  { learn: '💼', done: 'true' },
];

const nextTodos = produce(todos, (draft) => {
  draft.push(
    { play: '👠', done: <span>"false"</span> },
    { enjoy: '🍭', done: <span>"false"</span> },
  );
  draft[1].done = <span>true</span>;
  draft[0].done = <span>false</span>;
});
```

### `yarn start`

Runs the app in the development mode.
