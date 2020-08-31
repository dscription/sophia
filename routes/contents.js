var express = require('express');
var router = express.Router();
const contentsCtrl = require('../controllers/contents')

// router.get('/puppies', puppiesCtrl.index);
// router.get('/puppies/:id', puppiesCtrl.show);
router.post('/users/:id/topics/:id/contents', contentsCtrl.create);
router.put('/topics/:id/contents/:id', contentsCtrl.update);
router.delete('/topics/:id/contents/:id', contentsCtrl.delete)

module.exports = router;