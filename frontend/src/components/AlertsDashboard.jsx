import React, { useEffect, useState } from 'react';
import './AlertsDashboard.css'; // Make sure the path is correct
export default function AlertsDashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('/api/alerts')
      .then(res => res.json())
      .then(data => setAlerts(data));
  }, []);

  return (
    <div className="container user-profile">
      <h2>Alerts Dashboard</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            <strong>{alert.title}</strong> — {alert.status} ({new Date(alert.timestamp).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
}