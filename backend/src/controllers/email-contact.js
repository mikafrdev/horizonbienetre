import nodemailer from "nodemailer";
import { validationResult } from "express-validator";

export const emailContact = async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
   }

   const { firstName, lastName, email, message, website } = req.body;

   // 🔒 Honeypot anti-bot (champ invisible côté front)
   if (website) {
      return res.status(400).json({ success: false, message: "Spam détecté." });
   }

   try {
      // Création du transporteur
      const transporter = nodemailer.createTransport({
         host: process.env.SMTP_CONTACT_HOST,
         port: process.env.SMTP_CONTACT_PORT,
         secure: false, // Assurez-vous que le port est correct pour non-secure
         auth: {
            user: process.env.EMAIL_CONTACT_USER,
            pass: process.env.EMAIL_CONTACT_PASS,
         },
      });

      // Vérification de la connexion SMTP avant d'envoyer le mail
      await transporter.verify(); // Vérifie la connexion au serveur SMTP

      console.log("Connexion SMTP réussie !");

      // Tentative d'envoi du mail
      await transporter.sendMail({
         from: `"horizonbienetre.fr - Internaute" <${process.env.EMAIL_CONTACT_USER}>`,
         to: process.env.EMAIL_CONTACT_USER,
         subject: "Nouveau message de contact",
         text: "Un utilisateur a envoyé un message.",
         html: `
            <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Message :</strong><br>${message}</p>
         `,
      });

      // Si tout se passe bien, on envoie une réponse de succès
      return res.status(200).json({
         success: true,
         message: "Votre message a été envoyé avec grand succès.",
      });
   } catch (err) {
      // Log détaillé de l'erreur dans la console
      console.error("Erreur lors de l'envoi de l'email :", err); // Log complet de l'erreur pour comprendre ce qui se passe

      // Vérification du type d'erreur
      if (err.response) {
         console.error("Réponse du serveur SMTP : ", err.response);
      }
      if (err.code) {
         console.error("Code d'erreur SMTP : ", err.code);
      }

      // Message d'erreur selon l'environnement
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
