const express = require('express'); // this creates an instance of the express framework.

const router = express.Router();

const { login, register } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
