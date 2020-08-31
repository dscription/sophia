const User = require('../models/user');

module.exports = {
  index,
  onboarding,
  new: newProfile,
  update,
  show
};

function index(req, res) {
  User.find({})
    .then(users => {
      res.render('users/index', {
        user: req.user,
        title: 'Welcome',
        users
        // addFriend,
        // removeFriend
      })
    })
}

function show(req, res) {
  User.findById(req.user._id)
    .then((user) => {
      res.render('users/profile', {
        title: 'Profile Page',
        user
      })
    })
}

function newProfile(req, res) {
  res.render('users/profile', {
    user: req.user,
    title: "Enter Your Profile Details"
  })
}

function onboarding(req, res) {
  if (req.user.topics.length > 0) {
    // if the user has at least one topic already then render the show profile view.
    res.redirect('/users/:id/topics')
  } else {
    res.render('users/onboarding', {
      title: 'onboarding',
      user: req.user
    })
  }
}

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
    .then(() => {
      res.redirect('/users/profile')
    })
}

// function addFriend(req, res) {

// }

// function removeFriend(req, res) {

// }