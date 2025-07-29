// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import AlertsDashboard from './components/AlertsDashboard';
import DiagnosticTests from './components/DiagnosticTests';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/alerts" element={<AlertsDashboard />} />
        <Route path="/diagnostic-tests" element={<DiagnosticTests />} />
      </Routes>
    </Router>
  );
}