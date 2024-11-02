import React, { useState } from 'react';

const UsernameInput = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (username.trim() !== '') {
      onSubmit(username);
    }
  };

  return (
    <div className="username-input">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UsernameInput;
