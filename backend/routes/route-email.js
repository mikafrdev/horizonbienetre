import express from 'express';
const { sendContactEmail } = require('../controllers/email-controller');

const router = express.Router();
router.post('/email-auto-response', sendContactEmail);

/* router.post('/send', (req, res) => {
  res.send('Email envoyé avec succès');
}); */

export default router;