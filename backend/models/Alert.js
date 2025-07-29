module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Alert', {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    timestamp: DataTypes.DATE
  });
};
