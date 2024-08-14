import { useState } from 'react';
import axios from 'axios';

const AuthPage = (props) => {
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(
      'http://localhost:3001/authenticate',
      { username: username }
    )
    .then(r => props.onAuth({ ...r.data, secret: username })) // Corrected spread operator
    .catch(e => console.log('error'));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
