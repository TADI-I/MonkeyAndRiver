// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import AlertsDashboard from './components/AlertsDashboard';
import DiagnosticTests from './components/DiagnosticTests';
import './global.css';

  function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/alerts" element={<AlertsDashboard />} />
        <Route path="/diagnostic-tests" element={<DiagnosticTests />} />
      </Routes>
    </Router>
  );
}

export default App;