import express from 'express';
// import { loginUser } from '../controllers/authController.js';
import {loginUser}  from '../controllers/loginController.js';

const router = express.Router();

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', loginUser);

export default router;