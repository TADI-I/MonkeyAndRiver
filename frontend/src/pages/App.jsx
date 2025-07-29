
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import AlertsDashboard from './components/AlertsDashboard';
import DiagnosticTests from './components/DiagnosticTests';
import Register from './components/Register';
import Footer from './components/Footer';
import './global.css';

  function App() {
  return (
   <Router>
      <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/alerts" element={<AlertsDashboard />} />
          <Route path="/diagnostic-tests" element={<DiagnosticTests />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;