import React, { useState } from 'react';
import { loginUser } from "../utils"

function Login({ setMessage, setUser, user}) 
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login - username:  ' + username + ' password: ' + password)
    const data = await loginUser(username, password)
    console.log('Login : ' + data.message)
    setMessage(data.message)
    setUser(data.user.username)
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="loginForm">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

    </div>
  );
}

export default Login;