import * as adminController from '../controllers/adminAuthController.js';
import { Router } from 'express';

export const router = Router();

router.post('/signup', adminController.signup);
router.post('/login', adminController.login);