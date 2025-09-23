import Blog from '../models/blogData.js';

/**
 * @description Create a new blog post
 * @route POST /api/blogs
 * @access Private (will be in the future)
 */
export const createBlogPost = async (req, res) => {
  try {
    // Get the data from the request body
    const { title, publishedBy, image, heading, text } = req.body;

    // Create a new blog post instance
    const newBlogPost = new Blog({
      title,
      publishedBy,
      image,
      heading,
      text,
    });

    // Save the new post to the database
    const savedPost = await newBlogPost.save();

    // Send the newly created post as a response
    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while creating post' });
  }
};

/**
 * @description Get all blog posts
 * @route GET /api/blogs
 * @access Public
 */
export const getAllBlogPosts = async (req, res) => {
  try {
    // Find all posts, but only select the _id and title fields
    // This is much more efficient than sending the full text of every post
    const posts = await Blog.find().sort({ createdAt: -1 }).select('_id title');

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching posts' });
  }
};

export const getLatestBlog = async (req, res) => {
  try {
    // Find one post and sort by newest to get the latest one
    const post = await Blog.findOne().sort({ createdAt: -1 });

    if (!post) {
      return res.status(404).json({ message: 'No blog posts found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBlogPostById = async (req, res) => {
  try {
    // Get the ID from the URL parameter
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    // Return the full blog post document
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};