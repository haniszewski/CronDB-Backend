import express from 'express';
import { StorageFtpController } from '../../controllers/StorageFtpController';

const router = express.Router();

// Ftp Storages
router.get('/ftp', StorageFtpController.getAllStorages);
router.post('/ftp/add', StorageFtpController.addStorage);
router.get('/ftp/test', StorageFtpController.testConnection);
router.delete('/ftp/:id', StorageFtpController.deleteStorage);

export default router;
