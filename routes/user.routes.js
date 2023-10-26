const express = require('express');
const {
  registration,
  login,
  logOut,
  checkSession,
  forgotPassword,
  updateProfile,
  addSocials,
  updatePassword,
  getUserInfo,
  updateSocials,
  removeSocial,
} = require('../controllers/user.controllers.js');
const { isLoggedIn } = require('../middleware/auth.middleware.js');

const router = express.Router();

// Routers
// Authentication:
router
  .post('/auth/registration', registration)
  .post('/auth/login', login)
  .get('/auth/logout', logOut)
  .get('/auth/session', isLoggedIn, checkSession);

// Profile
router
  .get('/u', isLoggedIn, getUserInfo)
  .patch('/u', isLoggedIn, updateProfile);

// Social
router
  .post('/u/socials', isLoggedIn, addSocials)
  .patch('/u/socials', isLoggedIn, updateSocials)
  .delete('/u/socials/:socialId', isLoggedIn, removeSocial);

module.exports = router;
