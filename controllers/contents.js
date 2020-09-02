const User = require('../models/user');
const MarkdownIt = require('markdown-it');
let md = new MarkdownIt();

module.exports = {
  create,
  delete: deleteOne,
  update,
  setUrgency,
  setCompleted,
  showAllUrgent,
}

function create(req, res) {
  console.log('creating content!')
  User.findById(req.user._id, function (err, user) {
    let topic = user.topics.id(req.params.id);
    console.log('-----------request body', req.body)
    topic.contents.push(req.body)
    console.log('-=-------new contents',topic.contents)
    user.save(function (err) {
      res.redirect(`/topics/${req.params.id}`)
    })
  })
}


function deleteOne(req, res) {
  let topics = req.user.topics;
  topics.forEach((topic, idx) => {
    if (topic.id === req.params.topicId) {
      topic.contents.forEach((content, cidx) => {
        if (content.id === req.params.contentId) {
          topic.contents.splice(cidx, 1)
        }
      })
    }
  })
  req.user.save().then(() => {
    res.redirect(`/topics/${req.params.topicId}`)
  })
}


function update(req, res) {
  let topics = req.user.topics;
  topics.forEach((topic, idx) => {
    if (topic.id === req.params.topicId) {
      topic.contents.forEach((content, cidx) => {
        if (content.id === req.params.contentId) {
          content.notes = req.body.notes;
        }
      })
    }
  })
  req.user.save().then(() => {
    res.redirect(`/topics/${req.params.topicId}`)
  })
}

function setUrgency(req, res) {
  User.findById(req.user.id, function (err, user) {
    const topic = user.topics.id(req.params.topicId)
    topic.contents.forEach(content => {
      if (content.id === req.params.contentId) {
        content.urgent = !content.urgent
      }
    })
    user.save(function (err) {
      res.redirect(`/topics/${req.params.topicId}`)
    })
  })
}

function setCompleted(req, res) {
  User.findById(req.user.id, function (err, user) {
    const topic = user.topics.id(req.params.topicId)
    topic.contents.forEach(content => {
      if (content.id === req.params.contentId) {
        content.completed = !content.completed
        topic.attention += 1;
        if (content.urgent) {
          content.urgent = !content.urgent
        }
      }
    })
    user.save(function (err) {
      res.redirect(`/topics/${req.params.topicId}`)
    })
  })
}

function showAllUrgent(req, res) {
  res.render('contents/urgentIndex', {
    title: 'Urgent Content',
    user: req.user,
    topics: req.user.topics,
    topicId: req.params.topicId
  })
}

