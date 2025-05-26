const nodemailer = require("nodemailer");

export const emailContact = async (req, res) => {
   const { firstName, lastName, email, message } = req.body;

   try {
      const transporter = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 587,
         secure: false, // upgrade later with STARTTLS
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
         },
      });

      await transporter.sendMail({
         from: `"horizonbienetre.fr - Internaute" <${process.env.EMAIL_USER}>`,
         to: process.env.EMAIL_USER,
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
