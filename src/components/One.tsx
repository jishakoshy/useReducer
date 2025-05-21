import React, { useReducer } from 'react';

// 1. Define action types as a union of string literals
type Action = 'increment' | 'decrement' | 'reset';

// 2. Define initial state type and value
const initialState: number = 0;

// 3. Define the reducer function with type-safe params
function reducer(state: number, action: Action): number {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

// 4. Component using useReducer
const One: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default One;
