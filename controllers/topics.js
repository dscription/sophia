const User = require('../models/user');

module.exports = {
  create,
  show
};

function show(req, res) {
  console.log(req)
  res.render('topics/index', {
    title: 'Your Topics',
    user: req.user,
    topics: req.user.topics,
  })
}

function create(req, res) {
  console.log('request information', req)
  User.findById(req.user._id, function (err, user) {
    user.topics.push(req.body);
    user.save(function (err) {
      res.redirect(`/users/profile`)
    })
  })
}