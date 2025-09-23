// backend/controllers/authController.js

// ... other imports
import jwt from 'jsonwebtoken';
import User from '../models/logIn.js';

// ... your registerUser function (if you have one) ...

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", email);
    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 2. Compare the plain text passwords directly
    if (password !== user.password) { // <-- This is the main change
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 3. If passwords match, create and sign the token
    const payload = { id: user.id, name: user.name, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};