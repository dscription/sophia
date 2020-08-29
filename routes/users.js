var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
router.get('/users/onboarding', usersCtrl.onboarding);
router.get('/users/profile', usersCtrl.new)
router.put('/users/profile', usersCtrl.update)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
