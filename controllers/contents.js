const User = require('../models/user');

module.exports = {
  create, 
  delete: deleteOne,
  update
}

function create(req, res) {
  User.findById(req.user._id, function(err, user) {
    let topic = user.topics.id(req.params.id);
    topic.contents.push(req.body)
    user.save(function(err) {
      console.log(topic.contents);
    })
  })
  
}
function deleteOne(req, res) {

}
function update(req, res) {

}