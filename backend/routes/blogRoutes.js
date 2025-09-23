import express from 'express';
import {
  getAllBlogPosts,
  createBlogPost,
  getLatestBlog,
  getBlogPostById
} from '../controllers/blogController.js';

const router = express.Router();

// Handles GET /api/blogs (get all) and POST /api/blogs (create one)
router.route('/').get(getAllBlogPosts).post(createBlogPost);

// Handles GET /api/blogs/data (get the single latest post)
router.get('/data', getLatestBlog);

// Handles GET /api/blogs/:id (get one post by its ID)
// This route with a parameter must come after more specific routes like '/data'
router.get('/:id', getBlogPostById);

export default router;