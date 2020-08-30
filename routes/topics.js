const express = require('express');
const router = express.Router();
const topicsCtrl = require('../controllers/topics');

router.post('/users/:id/topics', topicsCtrl.create);
router.get('/users/:id/topics', topicsCtrl.index);
router.get('/topics/:id', topicsCtrl.show);
router.put('/topics/:id', topicsCtrl.update);



module.exports = router;