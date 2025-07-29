const { User } = require('../models');

exports.getUser = async (req, res) => {
  const user = await User.findOne({ where: { id: 1 } });
  res.json(user);
};

exports.updateUser = async (req, res) => {
  await User.update(req.body, { where: { id: 1 } });
  res.sendStatus(200);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user && user.password === req.body.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
};
