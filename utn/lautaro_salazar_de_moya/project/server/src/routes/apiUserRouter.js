const express = require('express');
const { avatarController, profileController } = require('../controllers/apiUserController');
const { sessionMiddleware } = require('../middlewares/sessionMiddleware');
const router = express.Router();

// GET petitions to the endpoint "AVATAR"
router.get('/avatar', avatarController );

// GET petitions to the endpoint "AVATAR"
router.get('/profile', sessionMiddleware, profileController );


module.exports = router
