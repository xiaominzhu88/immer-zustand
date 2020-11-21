import React from 'react';
import produce from 'immer';
import uuid from 'react-uuid';
import './App.css';

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

const alreadyDone = todos.filter((todo) => todo.done === 'true');

export default function Immer() {
  const [initialTodos, setInitialTodos] = React.useState(todos);
  return (
    <div>
      <h1>use immer</h1>
      <ul>
        {initialTodos.map((todo) => (
          <li key={uuid()}>
            {Object.keys(todo)[0]}-{Object.values(todo)[0]}👉
            {Object.keys(todo)[1]} =={'>'} {Object.values(todo)[1]}
          </li>
        ))}
      </ul>
      <button onClick={() => setInitialTodos(nextTodos)}>
        change/add something
      </button>
      <button onClick={() => setInitialTodos(todos)}>return</button>

      <ul style={{ display: 'none' }}>
        {alreadyDone.map((todo) => (
          <li key={uuid()}>
            {Object.keys(todo)[0]}-{Object.values(todo)[0]}🤟
          </li>
        ))}
      </ul>
    </div>
  );
}
