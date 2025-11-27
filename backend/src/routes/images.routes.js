import express from 'express';
import { imagesOptimizedController } from '../controllers/images-optimized-controller.js';
import { generateImagesJson } from '../controllers/images-generate-json.js';

const router = express.Router();
router.get('/optimized', imagesOptimizedController);
router.get('/generate-json', generateImagesJson);

export default router;