var express = require('express');
var router = express.Router();
const notesCtrl = require('../controllers/notes')

router.get('/topics/:topicId/contents/:contentId/newNote', notesCtrl.new);
router.get('/contents/notes', notesCtrl.index);
router.post('/topics/:topicId/contents/:contentId/newNote', notesCtrl.create);
// update
// delete


module.exports = router;