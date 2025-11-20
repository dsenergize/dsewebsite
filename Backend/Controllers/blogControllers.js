import Blog from "../Models/blogModels.js";
import generateSlug from "../Utils/generateSlug.js";
import imagekit from "../Configs/imagekitConfigs.js";

// GET all blogs
export const getAllBlogs = async (req, res) => {
  try {
    console.log("🔍 [GET] Fetching all blogs...");
    const blogs = await Blog.find().sort({ createdAt: -1 });
    console.log(`✅ Found ${blogs.length} blogs`);
    res.status(200).json(blogs);
  } catch (error) {
    console.error("❌ [GET All] Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// GET single blog by slug
export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    console.log(`🔍 [GET] Fetching blog by slug: ${slug}`);
    const blog = await Blog.findOne({ slug });
    
    if (!blog) {
      console.log(`⚠️ Blog not found for slug: ${slug}`);
      return res.status(404).json({ message: "Blog not found" });
    }
    
    console.log(`✅ Found blog: ${blog.title}`);
    res.status(200).json(blog);
  } catch (error) {
    console.error("❌ [GET By Slug] Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// CREATE a blog
export const createBlog = async (req, res) => {
  try {
    console.log("\n📤 [POST] Create Blog Request Received");
    console.log("Body:", req.body);
    console.log("File:", req.file ? `${req.file.originalname} (${req.file.size} bytes)` : "No file");
    
    const { title, author, publishedOn, mainContent, imageUrl } = req.body;
    
    // Validate required fields
    if (!title || !author || !mainContent) {
      console.log("⚠️ Missing required fields");
      return res.status(400).json({ 
        message: "Missing required fields: title, author, mainContent" 
      });
    }
    
    console.log(`📝 Creating slug for title: "${title}"`);
    const slug = generateSlug(title);
    console.log(`✅ Generated slug: ${slug}`);

    let finalImageUrl = imageUrl;

    // If image is uploaded with the request (not pre-uploaded)
    if (req.file) {
      console.log("📸 Uploading image to ImageKit...");
      try {
        const result = await imagekit.upload({
          file: req.file.buffer.toString('base64'),
          fileName: req.file.originalname,
          folder: "/DSEBlogs",
        });
        finalImageUrl = result.url;
        console.log(`✅ Image uploaded: ${finalImageUrl}`);
      } catch (uploadError) {
        console.error("❌ Image upload failed:", uploadError.message);
        return res.status(500).json({ message: `Image upload failed: ${uploadError.message}` });
      }
    } else {
      console.log("ℹ️ No image file uploaded, using provided imageUrl");
    }

    const newBlog = new Blog({
      title,
      slug,
      author,
      publishedOn: publishedOn || new Date(),
      mainContent,
      imageUrl: finalImageUrl
    });

    console.log("💾 Saving blog to database...");
    console.log("Blog data:", {
      title,
      slug,
      author,
      publishedOn: publishedOn || new Date(),
      imageUrl: finalImageUrl
    });

    const savedBlog = await newBlog.save();
    console.log(`✅ Blog saved successfully with ID: ${savedBlog._id}`);
    
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error("❌ [CREATE] Error:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ message: error.message });
  }
};

// UPDATE a blog
export const updateBlog = async (req, res) => {
  try {
    console.log(`\n📝 [PUT] Update Blog Request - ID: ${req.params.id}`);
    console.log("Body:", req.body);
    
    const { title, author, publishedOn, mainContent, imageUrl } = req.body;
    let updateData = { title, author, publishedOn, mainContent };

    // If image is uploaded with the request
    if (req.file) {
      console.log("📸 Uploading new image to ImageKit...");
      try {
        const result = await imagekit.upload({
          file: req.file.buffer.toString('base64'),
          fileName: req.file.originalname,
          folder: "/DSEBlogs",
        });
        updateData.imageUrl = result.url;
        console.log(`✅ New image uploaded: ${result.url}`);
      } catch (uploadError) {
        console.error("❌ Image upload failed:", uploadError.message);
        return res.status(500).json({ message: `Image upload failed: ${uploadError.message}` });
      }
    } else if (imageUrl) {
      console.log("ℹ️ Using provided imageUrl");
      updateData.imageUrl = imageUrl;
    }

    // Update slug if title changed
    if (title) {
      updateData.slug = generateSlug(title);
      console.log(`📝 Updated slug: ${updateData.slug}`);
    }

    console.log("💾 Updating blog in database...");
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!blog) {
      console.log(`⚠️ Blog not found with ID: ${req.params.id}`);
      return res.status(404).json({ message: "Blog not found" });
    }
    
    console.log(`✅ Blog updated successfully: ${blog._id}`);
    res.status(200).json(blog);
  } catch (error) {
    console.error("❌ [UPDATE] Error:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ message: error.message });
  }
};

// DELETE a blog
export const deleteBlog = async (req, res) => {
  try {
    console.log(`\n🗑️ [DELETE] Delete Blog Request - ID: ${req.params.id}`);
    
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      console.log(`⚠️ Blog not found with ID: ${req.params.id}`);
      return res.status(404).json({ message: "Blog not found" });
    }
    
    console.log(`✅ Blog deleted successfully: ${blog._id}`);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("❌ [DELETE] Error:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ message: error.message });
  }
};