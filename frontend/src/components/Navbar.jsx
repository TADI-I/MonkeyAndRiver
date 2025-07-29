import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  // Simulate getting user info (replace with real user context or props)
  const user = JSON.parse(localStorage.getItem('profile')) || { name: 'User' };
  const initials = user.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    setShowMenu(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Monkey & River</div>
      <div className="navbar-links">
        <Link to="/profile">Profile</Link>
        <Link to="/alerts">Alerts Dashboard</Link>
        <Link to="/diagnostic-tests">Diagnostic Tests</Link>
      </div>
      <div
        className="navbar-avatar"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        onClick={() => setShowMenu(v => !v)}
      >
        <span className="avatar-circle">{initials}</span>
        {showMenu && (
          <div className="avatar-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}