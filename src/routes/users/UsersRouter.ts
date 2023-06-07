import express from 'express';
import { UserController } from '../../controllers/UserController';
import { authMiddleware } from '../../middleware/auth';

const router = express.Router();

router.use(authMiddleware);

router.get('',UserController.getUsers);
router.post('/add',UserController.createUser);
router.get('/:id',UserController.getUserById);
router.post('/update/:id',UserController.updateUser);
router.delete('/delete/:id',UserController.deleteUser);

export default router;