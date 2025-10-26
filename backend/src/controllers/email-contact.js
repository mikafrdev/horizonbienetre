import nodemailer from "nodemailer";
import { validationResult } from "express-validator";

export const emailContact = async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
   }

   const { firstName, lastName, email, message, website, formType } = req.body;

   // 🔒 Honeypot anti-bot (champ invisible côté front)
   if (website) {
      return res.status(400).json({ success: false, message: "Spam détecté." });
   }

   try {
      const transporter = nodemailer.createTransport({
         host: process.env.SMTP_CONTACT_HOST,
         port: process.env.SMTP_CONTACT_PORT,
         secure: true, // Assurez-vous que le port est correct pour non-secure
         auth: {
            user: process.env.EMAIL_CONTACT_USER,
            pass: process.env.EMAIL_CONTACT_PASS,
         },
      });

      /* console.log(
         "email-contact.js",
         "firstName :",
         firstName,
         "lastName :",
         lastName,
         "email :",
         email,
         "message :",
         message,
         "website :",
         website,
         "formType :",
         formType,
         "HOST : ",
         process.env.SMTP_CONTACT_HOST,
         "PORT : ",
         process.env.SMTP_CONTACT_PORT,
         "USER : ",
         process.env.EMAIL_CONTACT_USER,
         "PASS : ",
         process.env.EMAIL_CONTACT_PASS
      ); */

      await transporter.verify();

      const mailOptions = {
         from: '"Horizon Bien-être" <contact@horizonbientre.fr>',
         to: "horizonbienetre5@gmail.com",
         subject: `${firstName} ${lastName} - Demande de ${formType} `,
         text: "Un utilisateur a envoyé un message.",
         html: `
            <p><strong>Demande de :</strong> ${formType}</p>
            <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Message :</strong><br>${message}</p>
         `,
      };

      /* console.log("Mail Options :", mailOptions); */

      try {
         await transporter.sendMail(mailOptions);
      } catch (err) {
         console.error("Erreur lors de l'envoi de l'email :", err);

         // Vérifie si l'erreur vient du serveur SMTP
         if (err.response) {
            console.error("Réponse du serveur SMTP :", err.response);
         }
         if (err.code) {
            console.error("Code d'erreur SMTP :", err.code);
         }
      }

      console.log("Email de contact envoyé avec succès.");

      return res.status(200).json({
         success: true,
         message: "Votre message a été envoyé avec grand succès.",
      });
   } catch (err) {
      console.error("Erreur lors de l'envoi de l'email :", err);

      if (err.response) {
         console.error("Réponse du serveur SMTP : ", err.response);
      }
      if (err.code) {
         console.error("Code d'erreur SMTP : ", err.code);
      }

      const errorMessage =
         process.env.NODE_ENV === "development"
            ? err.message // En développement, on affiche le message complet
            : "Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer plus tard."; // Message générique en production

      return res.status(500).json({
         success: false,
         message: errorMessage,
         message: "Une erreur est survenue lors de l'envoi de l'email.",
      });
   }
};
