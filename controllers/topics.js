const User = require('../models/user');

module.exports = {
  create,
  show,
  index,
  update
};

function index(req, res) {
  res.render('topics/index', {
    title: 'Your Topics',
    user: req.user,
    topics: req.user.topics,
  })
}

function create(req, res) {
  User.findById(req.user._id, function (err, user) {
    user.topics.push(req.body);
    user.save(function (err) {
      res.redirect(`/users/profile`)
    })
  })
}

function show(req, res) {
  User.findById(req.user._id, function (err, user) {
    const topic = user.topics.id(req.params.id);
    res.render('topics/show', {
      title: topic.name,
      user: req.user,
      topicId: req.params.id
    })
  })
}

function update(req, res) {
  User.findById(req.user.id, function (err, user) {
    const topic = user.topics.id(req.params.id);
    topic.goal = req.body.goal;
    topic.goalDate = req.body.goalDate;
    user.save(function (err) {
     res.redirect('/users/:id/topics')
    })
  })
}