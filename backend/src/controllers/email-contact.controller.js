import { emailService } from '../services/email.service.js';

export const emailContactController = {
  async sendContactEmail(req, res) {
    try {
      const { validatedData } = req;
      
      // Enrichir les données
      const emailData = {
        ...validatedData,
        submittedAt: new Date().toISOString(),
        ip: req.ip || req.headers['x-forwarded-for'] || 'unknown',
        userAgent: req.headers['user-agent'] || 'unknown',
      };
      
      // Envoi de l'email
      await emailService.sendContactEmail(emailData);
      
      // Réponse succès
      return res.status(200).json({
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
      });
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);
      
      return res.status(500).json({
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.'
      });
    }
  }
};