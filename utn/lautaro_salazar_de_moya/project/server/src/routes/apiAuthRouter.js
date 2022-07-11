
const express = require('express');
const { registerController, loginController } = require('../controllers/apiAuthController');
const router = express.Router();

// POST petitions to the endpoint "REGISTER"
router.post('/register', registerController);

// POST petitions to the endpoint "LOGIN"
router.post('/login', loginController);

module.exports = router
