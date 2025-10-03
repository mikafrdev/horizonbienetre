import express from 'express';
import { imagesController } from '../controllers/images-controller.js';

const router = express.Router();
router.get('/process', imagesController);

export default router;
