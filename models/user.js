const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  workExperience: [Object], // Array of objects for work experiences
});

const User = mongoose.model("user", userSchema); // Will create a "users" collection in MongoDB

module.exports = User;
