import express from 'express';
import { DatabasePostgresController } from '../../controllers/DatabasePostgresController';

const router = express.Router();

router.get('/postgres', DatabasePostgresController.getAllDatabases);
router.post('/postgres/add',DatabasePostgresController.addDatabase)
router.post('/postgres/test',DatabasePostgresController.testConnection)

export default router;
