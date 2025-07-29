const express = require('express');
const {
  getTests,
  createTest,
  deleteTest
} = require('../controllers/diagnosticController');
const router = express.Router();

router.get('/', getTests);
router.post('/', createTest);
router.delete('/:id', deleteTest);

module.exports = router;
