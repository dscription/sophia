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
  console.log('You have hit the create note route')
}

function newNote(req,res) {
  console.log('You have hit the new note route')
  res.render('contents/newNote', {
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


