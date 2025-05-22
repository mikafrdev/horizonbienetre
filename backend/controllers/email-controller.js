const React = require("react");
const nodemailer = require("nodemailer");
const { render, pretty } = require("@react-email/render");
const { EmailAutoResponse } = require("../emails/email-auto-response");

export const sendContactEmail = async (req, res) => {
   const { firstName, lastName, email, message } = req.body;

   if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
   }

   const emailTemplate = await pretty(await render(<EmailAutoResponse />), {
      plainText: true,
   });

   const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net", // Exemple d'un serveur SMTP
      port: 465,
      secure: true, // Utilisation de TLS/SSL
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
      },
   });

   // Options de l'email
   const mailOptions = {
      from: "ton-email@example.com", // Ton email pour l'envoi
      to: email, // Email du destinataire
      subject: "Confirmation de réception de votre message",
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
