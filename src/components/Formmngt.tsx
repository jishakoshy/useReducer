import React, { useReducer } from 'react';


type StateType = {
  name: string;
  email: string;
};

type ActionType = 
  | { type: 'setName'; value: string }
  | { type: 'setEmail'; value: string };

  
const initialState: StateType = {
  name: '',
  email: '',
};

// 4. Reducer function
function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.value };
    case 'setEmail':
      return { ...state, email: action.value };
    default:
      return state;
  }
}

// 5. Component
const FormMngt: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', state);
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>UseReducer Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: 'setName', value: e.target.value })}
          placeholder="Name"
          required
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <input
          type="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'setEmail', value: e.target.value })}
          placeholder="Email"
          required
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <button type="submit" style={{ width: '100%' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormMngt;





