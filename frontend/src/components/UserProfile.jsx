import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // ← Import the CSS

export default function UserProfile() {
  const [profile, setProfile] = useState({ name: '', email: '', password: '', notifyByEmail: true, darkMode: false });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetch('/api/profile')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load profile');
        return res.json();
      })
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load profile.');
        setLoading(false);
      });
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSave = () => {
    setError('');
    setSuccess('');
    fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save profile');
        setSuccess('Profile saved!');
      })
      .catch(err => {
        setError('Failed to save profile. Please try again.');
        console.error('Save Profile Error:', err);
      });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>

      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <input type="email" name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={profile.password} onChange={handleChange} placeholder="Password" />

      <label>
        <input type="checkbox" name="notifyByEmail" checked={profile.notifyByEmail} onChange={handleChange} />
        Email Notifications
      </label>

      <label>
        <input type="checkbox" name="darkMode" checked={profile.darkMode} onChange={handleChange} />
        Dark Mode
      </label>

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
