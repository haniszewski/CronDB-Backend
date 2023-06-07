import express from 'express';
import { ScheduleController } from '../../controllers/ScheduleController';

const router = express.Router();

router.post('/add',ScheduleController.add);
router.delete('/:id',ScheduleController.delete);



export default router;
