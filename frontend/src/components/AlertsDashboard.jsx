import React, { useEffect, useState } from 'react';

export default function AlertsDashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('/api/alerts')
      .then(res => res.json())
      .then(data => setAlerts(data));
  }, []);

  return (
    <div>
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