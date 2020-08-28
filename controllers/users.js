const User = require('../models/user');

module.exports = {
  index,
  showProfile,
  onboarding
};

function index(req, res) {
  User.find({})
    .then(users => {
      res.render('users/index', {
        user: req.user,
        title: 'Welcome',
        users
      })
    })
}

function showProfile(req, res) {
  User.findById(req.user._id)
    .then((user) => {
      res.render('users/profile', {
        title: 'Profile Page',
        user
      })
    })
}

function onboarding(req, res) {
  res.render('users/onboarding', {
    title: 'onboarding',
    user: req.user
  })
}