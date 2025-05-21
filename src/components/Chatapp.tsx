import React, { useReducer, useState } from 'react';
// import './App.css';

type Message = {
  id: number;
  text: string;
  sender: string;
};

type State = {
  messages: Message[];
};

type Action =
  | { type: 'ADD_MESSAGE'; payload: { text: string; sender: string } }
  | { type: 'CLEAR_MESSAGES' };

const initialState: State = {
  messages: [],
};

function chatReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const newMessage: Message = {
        id: Date.now(),
        text: action.payload.text,
        sender: action.payload.sender,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: [],
      };

    default:
      return state;
  }
}

const ChatApp: React.FC = () => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const [input, setInput] = useState('');
  const [user, setUser] = useState('User 1');

  const handleSend = () => {
    if (input.trim() === '') return;
    dispatch({
      type: 'ADD_MESSAGE',
      payload: { text: input, sender: user },
    });
    setInput('');
  };

  return (
    <div className="chat-container">
      <h2 className="chat-header">End-to-End Chat App</h2>

      <div className="chat-user-select">
        <label>Choose User: </label>
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option value="User 1">User 1</option>
          <option value="User 2">User 2</option>
        </select>
      </div>

      <div className="chat-messages">
        {state.messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${
              msg.sender === user ? 'my-message' : 'other-message'
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message"
        />
        <button className="chat-button" onClick={handleSend}>
          Send
        </button>
        <button
          className="chat-button clear-button"
          onClick={() => dispatch({ type: 'CLEAR_MESSAGES' })}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
