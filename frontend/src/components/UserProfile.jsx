import React, { useState, useEffect } from 'react';

export default function UserProfile() {
  const [profile, setProfile] = useState({ name: '', email: '', password: '', notifyByEmail: true, darkMode: false });

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSave = () => {
    fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={profile.password} onChange={handleChange} placeholder="Password" />
      <label>
        <input type="checkbox" name="notifyByEmail" checked={profile.notifyByEmail} onChange={handleChange} /> Email Notifications
      </label>
      <label>
        <input type="checkbox" name="darkMode" checked={profile.darkMode} onChange={handleChange} /> Dark Mode
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}