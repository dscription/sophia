const express = require('express');
const router = express.Router();
const topicsCtrl = require('../controllers/topics');

router.post('/users/:id/topics', topicsCtrl.create);
router.get('/users/:id/topics', topicsCtrl.show);
// router.get('/users/:id/topics/new', topicsC)


module.exports = router;