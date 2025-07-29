import React, { useState, useEffect } from 'react';
import './login.css'; // path for styling

export default function Login() {
  const [profile, setProfile] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowWelcome(true), 100);
  } , []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async() => {
    setError('');
    try{
      const res = await fetch('/api/auth/login', {
        method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        window.location.href = '/dashboard'; // Redirect to dashboard on success
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    }
    catch (err) {
      setError('Login Error. Please try again later.');
      console.error('Login Error:', err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className={`welcome-message${showWelcome ? ' fade-in' : ''}`}>

        Welcome Back!

      </div>
      {error && (
        <div className="pop-error">
          <span>{error}</span>
          <button className="close-btn" onClick={() => setError('')}>X</button>
        </div>
      
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={profile.password}
        onChange={handleChange}
        required
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}