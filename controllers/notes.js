const User = require('../models/user');
const MarkdownIt = require('markdown-it');
let md = new MarkdownIt();

module.exports = {
  create,
  new: newNote,
  index,
  // update,
  // delete: deleteNote
}

function create(req,res) {
  User.findById(req.user._id, function(err, user) {
    let topic = user.topics.id(req.params.topicId);
    topic.contents.forEach(content => {
      if (content.id === req.params.contentId) {
        content.notes.push(req.body)
      }
    })
    user.save(function(err) {
      res.redirect(`/topics/${req.params.topicId}`)
    })
  })
}

// function create(req, res) {
//   User.findById(req.user._id, function (err, user) {
//     let topic = user.topics.id(req.params.id);
//     topic.contents.push(req.body)
//     user.save(function (err) {
//       res.redirect(`/topics/${req.params.id}`)
//     })
//   })
// }

function newNote(req,res) {
  res.render('notes/newNote', {
    title: 'Take Notes',
    user: req.user,
    topicId: req.params.topicId,
    contentId: req.params.contentId
  })
}

function index(req,res) {
  console.log('You have hit the ')
  // res.render('contents/noteIndex', {
  //   title: 'All Notes',
  //   user: req.user,
  //   topics: req.user.topics,
  //   topicId: req.params.topicId,
  //   markdown: md
  // })
}

// function update(req, res) {
//   console.log('you have hit the update route')
// }
// function deleteNote(req, res) {
//   console.log('you have hit the delete route')
// }


