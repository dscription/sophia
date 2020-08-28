const mongoose = require('mongoose');
const Schema = mongoose.Schema

const topicSchema = new Schema({
  name: String,
  contents: [{ type: Schema.Types.ObjectId, ref: 'Content'}],
  attention: Number,
  streak: Number,
  goal: String,
  goalDate: Date
}, {
  timestamps: true
})


const userSchema = new mongoose.Schema({
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