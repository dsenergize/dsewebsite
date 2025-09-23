// backend/models/blogData.js

import mongoose from 'mongoose';

// This is the schema or "blueprint" for your blog posts
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // This means a title is mandatory
  },
  publishedBy: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // Sets the current date automatically if not provided
  },
  image: {
    type: String, // This will store the URL of the image
    required: false // An image is optional
  },
  heading: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Automatically adds 'createdAt' and 'updatedAt' fields
});

// This creates the model from the schema
// Mongoose will create a collection named 'blogs' (plural and lowercase) in MongoDB
const Blog = mongoose.model('Blog', blogSchema);

// This makes the model available to be used in other files
export default Blog;