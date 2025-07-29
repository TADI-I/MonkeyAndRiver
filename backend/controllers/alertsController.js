const { Alert } = require('../models');

exports.getAlerts = async (req, res) => {
  const alerts = await Alert.findAll();
  res.json(alerts);
};
