import express from 'express';
import { UserController } from '../../controllers/UserController';
import { authMiddleware } from '../../middleware/auth';

const router = express.Router();

router.use(authMiddleware);

router.get('',UserController.getUsers);

export default router;