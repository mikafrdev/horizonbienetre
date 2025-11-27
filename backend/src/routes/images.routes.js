import express from 'express';
import { imagesController } from '../controllers/images-controller.js';
import { generateImagesJson } from '../controllers/images-generate-json.js';

const router = express.Router();
router.get('/process', imagesController);
router.get('/generate-json', generateImagesJson);

export default router;