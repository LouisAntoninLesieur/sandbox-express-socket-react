import * as authController from '../controllers/authController.js';
import { Router } from 'express';

export const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);