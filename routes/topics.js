const express = require('express');
const router = express.Router();
const topicsCtrl = require('../controllers/topics');

router.post('/users/:id/topics', isLoggedIn, topicsCtrl.create);
router.get('/users/:id/topics', isLoggedIn, topicsCtrl.index);
router.get('/topics/:id', isLoggedIn, topicsCtrl.show);
router.put('/topics/:id', isLoggedIn, topicsCtrl.update);
router.get('/topics/:id/remove', isLoggedIn, topicsCtrl.removeTopic)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;