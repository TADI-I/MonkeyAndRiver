module.exports = {
  PORT: 5000,
  DB: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',      // 🔁 replace with your PostgreSQL username
    password: '1234',  // 🔁 replace with your PostgreSQL password
    database: 'monkeyandriver_db', // 🔁 replace with your actual DB name
    port: 5432                     // PostgreSQL default port
  }
};
