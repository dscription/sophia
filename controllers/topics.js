const User = require('../models/user');

module.exports = {
  create
};


function create(req, res) {
  console.log('request information', req)
  User.findById(req.user._id, function (err, user) {
    user.topics.push(req.body);
    user.save(function (err) {
      res.redirect(`/users/${user._id}`)
    })
  })
}