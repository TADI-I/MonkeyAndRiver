module.exports = (sequelize, DataTypes) => {
  return sequelize.define('DiagnosticTest', {
    name: DataTypes.STRING,
    result: DataTypes.STRING,
    date: DataTypes.DATEONLY
  });
};
