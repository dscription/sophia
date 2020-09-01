var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
router.get('/users/onboarding',isLoggedIn, usersCtrl.onboarding);
router.get('/users/:id', isLoggedIn,usersCtrl.show)
router.get('/users/profile', isLoggedIn,usersCtrl.new)
router.put('/users/profile',isLoggedIn, usersCtrl.update)
router.get('/users/:id/friend', isLoggedIn, usersCtrl.addFriend)
router.get('/users/:id/unfriend', isLoggedIn, usersCtrl.removeFriend)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
