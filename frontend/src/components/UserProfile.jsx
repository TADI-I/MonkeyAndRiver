import React, { useState, useEffect } from 'react';

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
      .catch(err => {
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
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 24, background: '#fdf6ff', borderRadius: 16 }}>
      
      <h2>User Profile</h2>

      {error && <div style={{ color: '#d32f2f', marginBottom: 10 }}>{error}</div>}
      {success && <div style={{ color: '#388e3c', marginBottom: 10 }}>{success}</div>}

      <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" style={{ width: '100%', marginBottom: 10 }} />
      <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" style={{ width: '100%', marginBottom: 10 }} />
      <input name="password" type="password" value={profile.password} onChange={handleChange} placeholder="Password" style={{ width: '100%', marginBottom: 10 }} />

      <div style={{ marginBottom: 10 }}>
        <label>
          <input type="checkbox" name="notifyByEmail" checked={profile.notifyByEmail} onChange={handleChange} /> Email Notifications
        </label>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label>
          <input type="checkbox" name="darkMode" checked={profile.darkMode} onChange={handleChange} /> Dark Mode
        </label>
      </div>

      <button onClick={handleSave} style={{ width: '100%', background: '#a020f0', color: '#fff', padding: 10, border: 'none', borderRadius: 8 }}>Save</button>
    </div>
  );
}