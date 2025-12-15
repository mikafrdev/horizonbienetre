import nodemailer from "nodemailer";
import { validationResult } from "express-validator";

export const emailContact = async (req, res) => {
   const rawEnv = process.env.NODE_ENV || "";
   const NODE_ENV = rawEnv ? rawEnv.trim() : "";

   // Vérification des erreurs de validation des données de la requête
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      console.error("Erreur de validation du formulaire : ", errors.array());
      return res.status(400).json({ success: false, errors: errors.array() });
   }

   // Extraction des données du formulaire
   const { firstName, lastName, email, message, website, formType } = req.body;

   // 🔒 Honeypot anti-bot (champ invisible côté front)
   if (website) {
      console.warn("Spam détecté : Champ 'website' est rempli (bot suspect).");
      return res.status(400).json({ success: false, message: "Spam détecté." });
   }

   try {
      // Création du transporteur nodemailer
      console.log(
         "Création du transporteur SMTP avec les informations suivantes : "
      );
      console.log("HOST :", process.env.SMTP_CONTACT_HOST);
      console.log("PORT :", process.env.SMTP_CONTACT_PORT);
      console.log("USER :", process.env.EMAIL_CONTACT_USER);

      const transporter = nodemailer.createTransport({
         host: process.env.SMTP_CONTACT_HOST,
         port: process.env.SMTP_CONTACT_PORT,
         secure: true,
         auth: {
            user: process.env.EMAIL_CONTACT_USER,
            pass: process.env.EMAIL_CONTACT_PASS,
         },
         tls: {
            // Désactiver la validation du certificat SSL uniquement en mode développement
            rejectUnauthorized:
               NODE_ENV === "development" ? false : true,
         },
      });

      // Vérification de la connexion au serveur SMTP
      console.log("Vérification de la connexion au serveur SMTP...");
      await transporter.verify();
      console.log("Connexion au serveur SMTP réussie.");

      // Configuration de l'email à envoyer
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

      console.log("Options de l'email à envoyer :");
      console.log(mailOptions);

      // Tentative d'envoi de l'email
      console.log("Tentative d'envoi de l'email...");
      await transporter.sendMail(mailOptions);
      console.log("Email envoyé avec succès.");

      // Réponse à l'utilisateur pour confirmer l'envoi
      return res.status(200).json({
         success: true,
         message: "Votre message a été envoyé avec grand succès.",
      });
   } catch (err) {
      // Capture des erreurs et logs détaillés
      console.error("Erreur lors de l'envoi de l'email :", err);

      // Vérifie si l'erreur vient du serveur SMTP
      if (err.response) {
         console.error("Réponse du serveur SMTP :", err.response);
      }
      if (err.code) {
         console.error("Code d'erreur SMTP :", err.code);
      }

      // Personnalisation du message d'erreur selon l'environnement
      const errorMessage =
         NODE_ENV === "development"
            ? err.message // En développement, on affiche le message complet
            : "Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer plus tard."; // Message générique en production

      // Envoi d'une réponse d'erreur à l'utilisateur
      return res.status(500).json({
         success: false,
         message: errorMessage,
      });
   }
};
