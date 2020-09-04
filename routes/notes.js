var express = require('express');
var router = express.Router();
const notesCtrl = require('../controllers/notes')

router.get('/topics/:topicId/contents/:contentId/newNote',isLoggedIn, notesCtrl.new);
router.get('/contents/notes',isLoggedIn, notesCtrl.index);
router.post('/topics/:topicId/contents/:contentId',isLoggedIn, notesCtrl.create);
router.get('/topic/:topicId/content/:contentId/notes/:noteId/remove',isLoggedIn, notesCtrl.delete);
router.get('/topic/:topicId/content/:contentId/notes/:noteId/updateView',isLoggedIn, notesCtrl.updateView);
router.put('/topic/:topicId/content/:contentId/notes/:noteId/update',isLoggedIn, notesCtrl.update);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;