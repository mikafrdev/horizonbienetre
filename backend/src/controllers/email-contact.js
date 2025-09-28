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
      const transporter = nodemailer.createTransport({
         host: process.env.SMTP_CONTACT_HOST,
         port: process.env.SMTP_CONTACT_PORT,
         secure: false,
         auth: {
            user: process.env.EMAIL_CONTACT_USER,
            pass: process.env.EMAIL_CONTACT_PASS
         },
      });

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

      return res.status(200).json({
         success: true,
         message: "Votre message a été envoyé avec succès.",
      });
   } catch (err) {
      console.error("Erreur lors de l'envoi de l'email :", err);
      return res.status(500).json({
         success: false,
         message: "Une erreur est survenue lors de l'envoi de l'email.",
      });
   }
};
