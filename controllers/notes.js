const User = require('../models/user');
const MarkdownIt = require('markdown-it');
let md = new MarkdownIt();

module.exports = {
  create,
  new: newNote,
  index,
  delete: deleteNote,
  updateView,
  update
}

function create(req, res) {
  User.findById(req.user._id, function (err, user) {
    let topic = user.topics.id(req.params.topicId);
    topic.contents.forEach(content => {
      if (content.id === req.params.contentId) {
        content.notes.push(req.body)
      }
    })
    user.save(function (err) {
      res.redirect(`/topics/${req.params.topicId}`)
    })
  })
}

function newNote(req, res) {
  res.render('notes/newNote', {
    title: 'Take Notes',
    user: req.user,
    topicId: req.params.topicId,
    contentId: req.params.contentId
  })
}

function index(req, res) {
  res.render('notes/noteIndex', {
    title: 'All Notes',
    user: req.user,
    topics: req.user.topics,
    topicId: req.params.topicId,
    markdown: md
  })
}


function deleteNote(req, res) {
  User.findById(req.user._id, function (err, user) {
    let topic = user.topics.id(req.params.topicId);
    console.log('----topic------',topic)
    topic.contents.forEach(content => {
      if (content.id === req.params.contentId) {
        content.notes.forEach((note, idx) => {
          if (note.id === req.params.noteId) {
            content.notes.splice(idx, 1)
          }
        })
      }
    })
    user.save(function (err) {
      res.redirect(req.headers.referer)
    })
  })
}

function update(req, res) {
  console.log('update route hit!', req.body)
  User.findById(req.user._id, function (err, user) {
    let topic = user.topics.id(req.params.topicId);
    topic.contents.forEach(content => {
      if (content.id === req.params.contentId) {
        content.notes.forEach((note, idx) => {
          if (note.id === req.params.noteId) {
            note.title = req.body.title;
            note.text = req.body.text
          }
        })
      }
    })
    user.save(function (err) {
      res.redirect(req.headers.referer)
    })
  })
}

function updateView(req, res) {
  User.findById(req.user._id, function (err, user) {
    let topic = user.topics.id(req.params.topicId);
    topic.contents.forEach(content => {
      if (content.id === req.params.contentId) {
        content.notes.forEach((note, idx) => {
          if (note.id === req.params.noteId) {
            res.render('notes/updateNote', {
              title: 'Update Note',
              user: req.user,
              topicId: req.params.topicId,
              contentId: req.params.contentId,
              noteId: req.params.noteId,
              note: note
            })
          }
        })
      }
    })
  })
}