import React, { useState } from 'react';
import './login.css'; // Make sure the path is correct

export default function Login() {
  const [profile, setProfile] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert('Login successful');
        } else {
          alert('Login failed');
        }
      })
      .catch((err) => console.error('Login error:', err));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={profile.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
