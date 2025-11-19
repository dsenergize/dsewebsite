import express from "express";
import { getAllBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog } from "../Controllers/blogControllers.js";
import { authenticateToken } from "../Middlewares/authMiddlewares.js";
import { uploadImage } from "../Controllers/imageControllers.js";
import uploadMiddleware from "../Middlewares/uploadMiddleware.js";

const router = express.Router();

// GET routes
router.get("/", getAllBlogs);
router.get("/:slug", getBlogBySlug);

// POST routes (Create)
router.post("/", authenticateToken, uploadMiddleware.single("image"), createBlog);
router.post("/upload", authenticateToken, uploadMiddleware.single("image"), uploadImage);

// PUT routes (Update)
router.put("/:id", authenticateToken, uploadMiddleware.single("image"), updateBlog);

// DELETE routes
router.delete("/:id", authenticateToken, deleteBlog);

export default router;