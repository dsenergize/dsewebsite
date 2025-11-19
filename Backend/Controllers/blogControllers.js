import Blog from "../Models/blogModels.js";
import generateSlug from "../Utils/generateSlug.js";
import imagekit from "../Configs/imagekitConfigs.js";

// GET all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single blog by slug
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE a blog
export const createBlog = async (req, res) => {
  try {
    const { title, author, publishedOn, mainContent, imageUrl } = req.body;
    const slug = generateSlug(title);

    let finalImageUrl = imageUrl;

    // If image is uploaded with the request (not pre-uploaded)
    if (req.file) {
      const result = await imagekit.upload({
        file: req.file.buffer.toString('base64'),
        fileName: req.file.originalname,
        folder: "/DSEBlogs",
      });
      finalImageUrl = result.url;
    }

    const newBlog = new Blog({
      title,
      slug,
      author,
      publishedOn,
      mainContent,
      imageUrl: finalImageUrl
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE a blog
export const updateBlog = async (req, res) => {
  try {
    const { title, author, publishedOn, mainContent, imageUrl } = req.body;
    let updateData = { title, author, publishedOn, mainContent };

    // If image is uploaded with the request
    if (req.file) {
      const result = await imagekit.upload({
        file: req.file.buffer.toString('base64'),
        fileName: req.file.originalname,
        folder: "/DSEBlogs",
      });
      updateData.imageUrl = result.url;
    } else if (imageUrl) {
      // If imageUrl is provided in body
      updateData.imageUrl = imageUrl;
    }

    // Update slug if title changed
    if (title) {
      updateData.slug = generateSlug(title);
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE a blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

