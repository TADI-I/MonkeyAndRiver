const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/user'));
app.use('/api/alerts', require('./routes/alerts'));
app.use('/api/diagnostic-tests', require('./routes/diagnosticTests'));

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
