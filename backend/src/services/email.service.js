import nodemailer from "nodemailer";

// ✅ Lazy loading : le transporter est créé à la demande, pas à l'import
let transporter = null;

function getTransporter() {
   if (!transporter) {
      // Vérification que les variables existent
      if (!process.env.SMTP_CONTACT_HOST || !process.env.SMTP_CONTACT_PORT) {
         throw new Error(
            "❌ Variables SMTP manquantes. Vérifiez votre fichier .env",
         );
      }

      console.log("🔧 Création du transporteur SMTP...");
      console.log("  Host:", process.env.SMTP_CONTACT_HOST);
      console.log("  Port:", process.env.SMTP_CONTACT_PORT);

      transporter = nodemailer.createTransport({
         host: process.env.SMTP_CONTACT_HOST,
         port: parseInt(process.env.SMTP_CONTACT_PORT),
         secure: process.env.SMTP_CONTACT_PORT === "465",
         auth: {
            user: process.env.EMAIL_CONTACT_USER,
            pass: process.env.EMAIL_CONTACT_PASS,
         },
         tls: {
            rejectUnauthorized: false,
         },
      });

      console.log("✅ Transporteur créé avec succès");
   }
   return transporter;
}

export const emailService = {
   async sendContactEmail(data) {
      const { firstName, lastName, email, message, formType } = data;

      // Personnalisation selon le type
      const subjects = {
         contact: "📧 Nouveau message de contact",
         cadeau: "🎁 Nouvelle demande de cadeau",
      };

      const subject = subjects[formType] || "📬 Nouveau message";

      // Template HTML
      const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6; 
            color: #333; 
            background: #f5f5f5;
          }
          .container { 
            max-width: 600px; 
            margin: 20px auto; 
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; 
            padding: 30px 20px;
            text-align: center;
          }
          .header h2 { margin: 0; font-size: 24px; }
          .content { padding: 30px; }
          .field { 
            margin: 20px 0; 
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }
          .field:last-child { border-bottom: none; }
          .label { 
            font-weight: 600; 
            color: #667eea; 
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          .value { 
            font-size: 16px;
            color: #333;
            word-wrap: break-word;
          }
          .message-box {
            background: #f9fafb;
            border-left: 4px solid #667eea;
            padding: 15px;
            border-radius: 4px;
            margin-top: 10px;
          }
          .footer { 
            background: #f9fafb;
            padding: 20px;
            text-align: center;
            font-size: 12px; 
            color: #666;
            border-top: 1px solid #eee;
          }
          .badge {
            display: inline-block;
            padding: 4px 12px;
            background: #667eea;
            color: white;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>${subject}</h2>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Type de formulaire</div>
              <div class="value">
                <span class="badge">${formType === "contact" ? "📧 Contact" : "🎁 Cadeau"}</span>
              </div>
            </div>
            
            <div class="field">
              <div class="label">Nom complet</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Adresse email</div>
              <div class="value">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                  ${email}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>📅 ${new Date().toLocaleString("fr-FR", {
               dateStyle: "full",
               timeStyle: "short",
            })}</p>
            <p style="color: #999; margin-top: 10px;">
              Ce message a été envoyé via le formulaire ${formType} de votre site web.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

      // Texte brut (fallback)
      const textContent = `
${subject}

Type : ${formType}
Nom : ${firstName} ${lastName}
Email : ${email}

Message :
${message}

---
Date : ${new Date().toLocaleString("fr-FR")}
    `;

      // Options de l'email
      const mailOptions = {
         from: `"${process.env.SITE_NAME || "Horizon Bien-être"}" <${process.env.EMAIL_CONTACT_USER}>`, // ✅ Corrigé
         to: process.env.EMAIL_CONTACT_USER, // ✅ L'email va à TON adresse, pas à celle du visiteur
         replyTo: email, // ✅ Permet de répondre directement au visiteur
         subject: subject,
         text: textContent,
         html: htmlContent,
      };

      console.log("📧 Email envoyé À:", mailOptions.to);
      console.log("📧 Email envoyé DE:", mailOptions.from);
      console.log("📧 Reply-To:", mailOptions.replyTo);

      try {
         // ✅ Récupération du transporter à la demande
         const emailTransporter = getTransporter();
         const info = await emailTransporter.sendMail(mailOptions);
         console.log("✅ Email envoyé:", info.messageId);
         return info;
      } catch (error) {
         console.error("❌ Erreur lors de l'envoi:", error);
         throw error;
      }
   },
};
