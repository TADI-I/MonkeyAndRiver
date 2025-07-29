import React, { useEffect, useState } from 'react';

export default function DiagnosticTests() {
  const [tests, setTests] = useState([]);
  const [form, setForm] = useState({ name: '', result: '', date: '' });

  useEffect(() => {
    fetch('/api/diagnostic-tests')
      .then(res => res.json())
      .then(data => setTests(data));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    fetch('/api/diagnostic-tests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).then(() => window.location.reload());
  };

  const handleDelete = id => {
    fetch(`/api/diagnostic-tests/${id}`, { method: 'DELETE' }).then(() => window.location.reload());
  };

  return (
    <div>
      <h2>Diagnostic Tests</h2>
      <input name="name" placeholder="Test Name" value={form.name} onChange={handleChange} />
      <input name="result" placeholder="Result" value={form.result} onChange={handleChange} />
      <input name="date" type="date" value={form.date} onChange={handleChange} />
      <button onClick={handleCreate}>Create</button>

      <ul>
        {tests.map(test => (
          <li key={test.id}>
            {test.name} - {test.result} ({test.date})
            <button onClick={() => handleDelete(test.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}