import express from 'express';
import { ScheduleController } from '../../controllers/ScheduleController';

const router = express.Router();

router.post('/add',ScheduleController.add);
router.delete('/:id',ScheduleController.delete);
router.get('/database/:id',ScheduleController.getByDatabaseId)

export default router;
