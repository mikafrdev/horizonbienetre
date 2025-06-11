import express from 'express';
import { emailContact } from '../controllers/email-contact.js';
import { sendEmailAutoResponse } from '../controllers/email-auto-response.js';
import validateContact from '../middleware/validate-contact.js';

const router = express.Router();

router.post('/contact', validateContact, emailContact);
router.post('/auto-response', sendEmailAutoResponse);

export default router;
