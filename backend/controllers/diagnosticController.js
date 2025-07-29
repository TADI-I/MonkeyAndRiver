const { DiagnosticTest } = require('../models');

exports.getTests = async (req, res) => {
  const tests = await DiagnosticTest.findAll();
  res.json(tests);
};

exports.createTest = async (req, res) => {
  await DiagnosticTest.create(req.body);
  res.sendStatus(201);
};

exports.deleteTest = async (req, res) => {
  await DiagnosticTest.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};
