import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Configs/db.js";
import blogRoutes from "./Routes/blogRoutes.js";
import authRoutes from "./Routes/authRoutes.js";

dotenv.config();

// Force PORT to 5000
const PORT = 5000;
console.log("Loaded PORT =", PORT);

// Connect to MongoDB
connectDB();

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/blogs", blogRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;