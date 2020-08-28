var router = require('express').Router();
var passport = require('passport');


// The root route renders our only view
router.get('/', function (req, res) {
  res.redirect('/users');
});

router.get('/google', passport.authenticate(
  'google', {
    scope: ['profile', 'email'],
  }
));
// this should redirect back to /users/onboarding



router.get('/google/oauth2callback', passport.authenticate(
  'google', {
    successRedirect: '/users/onboarding',
    failureRedirect: '/'
  }
));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;