const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
  config.DB.database,
  config.DB.username,
  config.DB.password,
  {
    host: config.DB.host,
    dialect: config.DB.dialect,
    port: config.DB.port
  }
);

const models = {
  User: require('./User')(sequelize, DataTypes),
  Alert: require('./Alert')(sequelize, DataTypes),
  DiagnosticTest: require('./DiagnosticTest')(sequelize, DataTypes)
};

sequelize.sync(); // create tables if they don’t exist

module.exports = { sequelize, ...models };
