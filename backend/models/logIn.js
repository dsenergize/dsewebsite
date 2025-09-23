// backend/models/logIn.js

import mongoose from 'mongoose';

const logInSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['user', 'admin'], // Restricts the role to only be 'user' or 'admin'
    default: 'user'         // Sets a default role if none is provided
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,      // Ensures no two users can have the same email
    lowercase: true    // Converts email to lowercase before saving
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Automatically adds 'createdAt' and 'updatedAt'
});

// Mongoose will create a collection named 'users' based on the model name 'User'
const User = mongoose.model('User', logInSchema);

export default User;