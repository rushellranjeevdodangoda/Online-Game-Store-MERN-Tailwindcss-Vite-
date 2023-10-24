const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
  },
  email: {
    type: String,
    unique: true,
  },
  telephone: {
    type: String,
    unique: false,
  },
  password: {
    type: String,
    required: true, // Include the password field
  }
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema);

