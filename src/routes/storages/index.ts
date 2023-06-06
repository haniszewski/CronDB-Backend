import express from 'express';
import { StorageFtpController } from '../../controllers/StorageFtpController';

const router = express.Router();

// Ftp Storages
router.get('/storages/ftp',StorageFtpController.getAllStorages)
router.post('/storages/ftp/add',StorageFtpController.addStorage)
router.get('/storages/ftp/test',StorageFtpController.testConnection)

export default router;
