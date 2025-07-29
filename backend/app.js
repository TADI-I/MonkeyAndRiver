const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');
const requireAuth = require('./middleware/requireAuth');

const app = express();
app.use(cors());
app.use(express.json());

// Public
app.use('/auth', require('./routes/auth'));

// Protected
app.use('/api', requireAuth, require('./routes/user'));
app.use('/api/alerts', requireAuth, require('./routes/alerts'));
app.use('/api/diagnostic-tests', requireAuth, require('./routes/diagnosticTests'));

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
