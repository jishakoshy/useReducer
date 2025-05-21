import React, { useReducer } from 'react';

// 1. Define the shape of the state
type State = {
  isVisible: boolean;
};

// 2. Define the type of actions
type Action = 'toggle';

// 3. Initial state
const initialState: State = { isVisible: true };

// 4. Reducer function
function reducer(state: State, action: Action): State {
  switch (action) {
    case 'toggle':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
}

// 5. Component
const ToggleText: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch('toggle')}>
        {state.isVisible ? 'Hide' : 'Show'} Text
      </button>
      {state.isVisible && <p>This is a toggleable paragraph!</p>}
    </div>
  );
};

export default ToggleText;
