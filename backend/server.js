import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; 
import loginRoutes from './routes/loginRoutes.js'; 
import blogRoutes from './routes/blogRoutes.js';

// 2. Call the function to connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// === Middleware ===
app.use(cors());
app.use(express.json());

// === API Routes ===
app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the backend! 👋" });
});

app.use('/api/auth', loginRoutes); // Use the login routes
app.use('/api/blogs', blogRoutes);
// === Start Server ===
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});