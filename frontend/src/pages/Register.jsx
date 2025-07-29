import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Reused login styles

export default function Register() {
  const [profile, setProfile] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowWelcome(true), 100);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setSuccess('Registration successful! You can now log in.');
        setProfile({ name: '', email: '', password: '' });
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Registration Error. Please try again later.');
      console.error('Registration Error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className={`welcome-message${showWelcome ? ' fade-in' : ''}`}>
        Create your account
      </div>
      <h2>Register</h2>
      {error && (
        <div className="pop-error">
          <span>{error}</span>
          <button className="close-btn" onClick={() => setError('')}>×</button>
        </div>
      )}
      {success && (
        <div className="pop-success">
          <span>{success}</span>
          <button className="close-btn" onClick={() => setSuccess('')}>×</button>
        </div>
      )}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
        required
      />
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
      <button onClick={handleRegister}>Sign up</button>
      <div className="signup-link">
        Already Signed up?{' '}
        <Link to="/login" className="login-link">Login</Link>
      </div>
    </div>
  );
}