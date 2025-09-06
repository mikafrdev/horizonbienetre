import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { console as inspectorConsole } from "inspector";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendEmailAutoResponse = async (req, res) => {
   const { firstName, lastName, email, message } = req.body;
   const code = "596853";

   if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
   }

   // 🔽 Lire le HTML pré-généré depuis le dossier de build
   let emailTemplate;
   try {
      emailTemplate = await fs.readFile(
         path.resolve(__dirname, "../../emails/dist/email-auto-response.html"),
         "utf8"
      );
   } catch (err) {
      inspectorConsole.error(
         "Erreur lors de la lecture du template email :",
         err
      );
      return res
         .status(500)
         .json({ error: "Erreur de génération de l'email." });
   }

   const transporter = nodemailer.createTransport({
      host: process.env.SMTP_AUTO_RESPONSE_HOST,
      port: process.env.SMTP_AUTO_RESPONSE_PORT,
      secure: true,
      auth: {
         user: process.env.EMAIL_AUTO_RESPONSE_USER,
         pass: process.env.EMAIL_AUTO_RESPONSE_PASS
      },
   });

   // Options de l'email
   const mailOptions = {
      from: `"Horizon Bien-être" <contact@horizonbienetre.fr>`,
      to: `${email}`,
      subject: "TEST - Horizonbienêtre - Merci pour votre message",
      html: emailTemplate.replace("{{code}}", code), // injecte dynamiquement si besoin
   };

   try {
      // Envoi de l'email de confirmation
      await transporter.sendMail(mailOptions);

      return res
         .status(200)
         .json({ success: "Message envoyé et réponse automatique envoyée." });
   } catch (error) {
      inspectorConsole.error("Erreur lors de l'envoi de l'email:", error);
      // Ajoute ce log pour voir l'erreur dans la console normale aussi
      inspectorConsole.error("Erreur lors de l'envoi de l'email:", error);
      return res.status(500).json({
         error: "Erreur lors de l'envoi de l'email",
         details: error.message, // Ajoute temporairement pour debug
      });
   }
};
