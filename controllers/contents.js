const User = require('../models/user');

module.exports = {
  create, 
  delete: deleteOne,
  update,
  newNote,
  setUrgency,
  setCompleted,
  showAllUrgent
  
}

function create(req, res) {
  User.findById(req.user._id, function(err, user) {
    let topic = user.topics.id(req.params.id);
    topic.contents.push(req.body)
    user.save(function(err) {
      res.redirect(`/topics/${req.params.id}`)
      })
    })
  }
  

function deleteOne(req, res) {
  let topics = req.user.topics;
  topics.forEach((topic, idx) => {
    if (topic.id === req.params.topicId) {
      topic.contents.forEach((content, cidx) => {
        if(content.id === req.params.contentId) {
          topic.contents.splice(cidx, 1)
        }
      })
    }
  })
  req.user.save().then(() => {
    res.redirect(`/topics/${req.params.topicId}`)
  })
}

function newNote(req, res) {
  res.render('contents/newNote', {
    title: 'Take Notes',
    user: req.user,
    topicId: req.params.topicId,
    contentId: req.params.contentId
    
  })
}


function update(req, res) {
  let topics = req.user.topics;
  topics.forEach((topic, idx) => {
    if(topic.id === req.params.topicId) {
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

function setUrgency (req, res) {
  User.findById(req.user.id, function (err, user) {
    const topic = user.topics.id(req.params.topicId)
    topic.contents.forEach(content => {
      if(content.id === req.params.contentId) {
        content.urgent = !content.urgent
      }
    })
    user.save(function (err) {
     res.redirect(`/topics/${req.params.topicId}`)
    })
  })
}

function setCompleted (req, res) {
  User.findById(req.user.id, function (err, user) {
    const topic = user.topics.id(req.params.topicId)
    topic.contents.forEach(content => {
      if(content.id === req.params.contentId) {
        content.completed = !content.completed
        if(content.urgent) {
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
  console.log('show all urgent contents')
}