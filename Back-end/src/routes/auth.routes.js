import express from 'express';
import { signup, login, logout, profileUpdate, checkAuth } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.post('/profileUpdate', protectRoute, profileUpdate);

router.get('/check', protectRoute, checkAuth);

export default router;
