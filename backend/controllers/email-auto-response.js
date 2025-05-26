const React = require("react");
const nodemailer = require("nodemailer");
const { render, pretty } = require("@react-email/render");
const { EmailAutoResponse } = require("../emails/email-auto-response");

export const sendEmailAutoResponse = async (req, res) => {
   const { firstName, lastName, email, message } = req.body;
   const code = "596853";

   if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
   }

   const emailTemplate = await pretty(
      await render(<EmailAutoResponse verificationCode={code} />),
      {
         plainText: true,
      }
   );

   /* const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net", // Exemple d'un serveur SMTP
      port: 465,
      secure: true, // Utilisation de TLS/SSL
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
      },
   }); */

   const transporter = nodemailer.createTransport({
      host: "mail.horizonbienetre.fr", // Exemple d'un serveur SMTP
      port: 465,
      secure: true, // Utilisation de TLS/SSL
      auth: {
         user: "contact@horizonbienetre.fr",
         pass: "FPE9-KHNC-GVx}",
      },
   });

   // Options de l'email
   const mailOptions = {
      from: "contact@horizonbienetre.fr", // Ton email pour l'envoi
      /* to: email, // Email du destinataire */
      to: "mikadevfr@gmail.com",
      subject: "Horizonbienêtre - Merci pour votre message",
      html: emailTemplate, // Template HTML généré par @react-email/render
   };

   try {
      // Envoi de l'email de confirmation
      await transporter.sendMail(mailOptions);

      return res
         .status(200)
         .json({ success: "Message envoyé et réponse automatique envoyée." });
   } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      return res
         .status(500)
         .json({ error: "Erreur lors de l'envoi de l'email" });
   }
};
