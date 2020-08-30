const mongoose = require('mongoose');
const Schema = mongoose.Schema


const contentSchema = new Schema({
  name: String,
  method: {type: String, enum: ['book', 'video', 'article', 'online course']},
  link: String,
  notes: String,
  completed: {type: Boolean, default: false}
})

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
  topics: [topicSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
