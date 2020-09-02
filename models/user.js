const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const notesSchema = new Schema({
  text: String,
  title: String
}, {
  timestamps: true
})

const contentSchema = new Schema({
  name: String,
  method: {type: String, enum: ['book', 'video', 'article', 'online course']},
  link: String,
  notes: [notesSchema],
  completed: {type: Boolean, default: false},
  urgent: {type: Boolean, default: false}
})

const topicSchema = new Schema({
  name: String,
  contents: [contentSchema],
  attention: {type: Number, default: 0},
  streak: Number,
  goal: String,
  goalDate: Date,
  isPublic: {type: Boolean, default: true},
  isOpen: {type: Boolean, default: true}
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
