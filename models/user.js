const mongoose = require('mongoose');
const Schema = mongoose.Schema


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  alias: String,
  bio: String,
  avatar: String,
  googleId: String,
  friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
  topics: [{ type: Schema.Types.ObjectId, ref: 'Topic'}]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

// const userSchema = new Schema(
//   {
//     name: String,
//     alias: String,
//     email: String,
//     avatar: String,
//     googleId: String,
//     bio: String,
//     friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
//     watchList: [watchListSchema]
//   },
//   {
//     timestamps: true,
//   }
// );