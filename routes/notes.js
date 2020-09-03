var express = require('express');
var router = express.Router();
const notesCtrl = require('../controllers/notes')

router.get('/topics/:topicId/contents/:contentId/newNote', notesCtrl.new);
router.get('/contents/notes', notesCtrl.index);
router.post('/topics/:topicId/contents/:contentId', notesCtrl.create);
router.get('/topic/:topicId/content/:contentId/notes/:noteId/remove', notesCtrl.delete);
router.get('/topic/:topicId/content/:contentId/notes/:noteId/updateView', notesCtrl.updateView);
router.put('/topic/:topicId/content/:contentId/notes/:noteId/update', notesCtrl.update);


module.exports = router;