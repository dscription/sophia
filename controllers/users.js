const User = require('../models/user');

module.exports = {
  index,
  onboarding,
  new: newProfile,
  update,
  show: showProfile,
  addFriend,
  removeFriend
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
  User.findById(req.user._id).populate('friends')
    .then((user) => {
      res.render('users/profile', {
        title: 'Profile Page',
        user,
        friends: user.friends
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
    res.redirect(`/users/${req.user._id}/topics`)
  } else {
    res.render('users/onboarding', {
      title: 'onboarding',
      user: req.user,
      topicsList: topicsList
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

function addFriend(req, res) {
  console.log('adding friend!')
  User.findById(req.params.id, function(err, user) {
    user.friends.push(req.params.id)
  })
  req.user.save().then(() => {
    res.redirect('/')
  })
}

function removeFriend(req, res) {
  let idx = req.user.friends.indexOf(req.params.id)
  req.user.friends.splice(idx, 1)
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`)
  })
}


let topicsList = [
  "Full Stack Web Development",
  "Software Engineering",
  "HTML",
  "CSS",
  "Game Design",
  "Sign Language",
  "Spanish",
  "German",
  "French",
  "Mathematics",
  "Geometry",
  "Linear Algebra",
  "Chemistry",
  "Biology",
  "React",
  "React Native",
  "Cooking",
  "Anatomy",
  "Physiology",
  "Kinesiology",
  "Business Administration",
  "Lean Methodology",
  "JavaScript",
  "Python",
  "Agile",
]