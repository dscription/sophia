const User = require('../models/user');

module.exports = {
  create,
  show,
  index,
  update,
  removeTopic
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
    req.body.name.forEach(name => {
      user.topics.push({"name": name});
    })
    user.save(function (err) {
      res.redirect(`/users/profile`)
    })
  })
}

function show(req, res) {
  User.findById(req.user._id, function (err, user) {
    console.log(req)
    const topic = user.topics.id(req.params.id);
    res.render('topics/show', {
      title: topic.name,
      topic: topic,
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
     res.redirect(`/topics/${req.params.id}`)
    })
  })
}

function removeTopic(req, res) {
  let topics = req.user.topics;
  topics.forEach((topic,idx) => {
    if (topic.id === req.params.id) {
      topics.splice(idx,1)
    }
  })
  req.user.save().then(() => {
    res.redirect('/users/:id/topics')
  })
}