var express = require('express');
var router = express.Router();
const contentsCtrl = require('../controllers/contents')

// router.get('/puppies', puppiesCtrl.index);
// router.get('/puppies/:id', puppiesCtrl.show);
router.post('/users/:id/topics/:id/contents', contentsCtrl.create);
router.get('/topics/:topicId/contents/:contentId/remove', contentsCtrl.delete)
router.get('/topics/:topicId/contents/:contentId/newNote', contentsCtrl.newNote)
router.put('/topics/:topicId/contents/:contentId', contentsCtrl.update),
router.get('/topics/:topicId/contents/:contentId/urgent', contentsCtrl.setUrgency)
router.get('/topics/:topicId/contents/:contentId/complete', contentsCtrl.setComplete)


module.exports = router;