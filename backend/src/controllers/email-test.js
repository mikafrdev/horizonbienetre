import nodemailer from "nodemailer";
import { validationResult } from "express-validator";

export const sendEmailTest = async (req, res) => {
   const rawEnv = process.env.NODE_ENV || "";
   const NODE_ENV = rawEnv ? rawEnv.trim() : "";
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      console.error("Erreur de validation du formulaire : ", errors.array());
      return res.status(400).json({ success: false, errors: errors.array() });
   }

   try {
      const transporter = nodemailer.createTransport({
         host: process.env.SMTP_CONTACT_HOST,
         port: process.env.SMTP_CONTACT_PORT,
         secure: true,
         auth: {
            user: process.env.EMAIL_CONTACT_USER,
            pass: process.env.EMAIL_CONTACT_PASS,
         },
         tls: {
            rejectUnauthorized: false,
         },
      });

      await transporter.verify();
      console.log("Server is ready to take our messages");

      const mailOptions = {
         from: '"Horizon Bien-être" <contact@horizonbienetre.fr>',
         to: "mikadevfr@gmail.com",
         subject: "Test Email",
         text: "Ceci est un test.",
         html: "<b>Ceci est un test.</b>",
      };
      console.log("Tentative d'envoi de l'email...");
      await transporter.sendMail(mailOptions);
      console.log("Email envoyé avec succès.");

      return res.status(200).json({
         success: true,
         message: "Votre message a été envoyé avec grand succès.",
      });
   } catch (err) {
      console.error("Erreur lors de l'envoi de l'email :", err);

      if (err.response) {
         console.error("Réponse du serveur SMTP :", err.response);
      }
      if (err.code) {
         console.error("Code d'erreur SMTP :", err.code);
      }

      const errorMessage =
         NODE_ENV === "development"
            ? err.message
            : "Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer plus tard."; // Message générique en production

      return res.status(500).json({
         success: false,
         message: errorMessage,
      });
   }
};
