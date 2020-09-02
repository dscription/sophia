var express = require('express');
var router = express.Router();
const contentsCtrl = require('../controllers/contents')

router.post('/users/:id/topics/:id/contents', contentsCtrl.create);
router.get('/topics/:topicId/contents/:contentId/remove', contentsCtrl.delete);
router.put('/topics/:topicId/contents/:contentId', contentsCtrl.update);
router.get('/topics/:topicId/contents/:contentId/urgent', contentsCtrl.setUrgency);
router.get('/topics/:topicId/contents/:contentId/completed', contentsCtrl.setCompleted);
router.get('/contents/urgent', contentsCtrl.showAllUrgent);


module.exports = router;