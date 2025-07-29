const express = require('express');
const { getUser, updateUser, login } = require('../controllers/userController');
const router = express.Router();

router.get('/profile', getUser);
router.put('/profile', updateUser);
router.post('/login', login);

module.exports = router;
