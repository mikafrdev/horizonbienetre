import express from "express";
import { emailContactController } from "../controllers/email-contact.controller.js";
import { validateContact } from "../middleware/validate-contact.js";
import { rateLimitMiddleware } from "../middleware/rate-limit.js";
import { spamCheckMiddleware } from "../middleware/spam-check.js";
import { sendEmailAutoResponse } from "../controllers/email-auto-response.js";

const router = express.Router();

router.post(
   "/contact",
   rateLimitMiddleware, // 1. Vérifier rate limit
   validateContact, // 2. Valider les données
   spamCheckMiddleware, // 3. Vérifier spam
   emailContactController.sendContactEmail, // 4. Envoyer l'email
);

router.post("/auto-response", sendEmailAutoResponse);

export default router;
