export const spamCheckMiddleware = (req, res, next) => {
  const { validatedData } = req;
  const { message, firstName, lastName, email, website } = validatedData;
  
  // 1. Vérification Honeypot
  if (website !== '') {
    console.warn('🍯 Honeypot détecté:', req.ip);
    // Retourner un succès fictif pour ne pas alerter le bot
    return res.status(200).json({
      success: true,
      message: 'Message envoyé avec succès'
    });
  }
  
  // 2. Vérifier les liens suspects
  const urlPattern = /(https?:\/\/[^\s]+)/gi;
  const urls = message.match(urlPattern) || [];
  if (urls.length > 3) {
    console.warn('🚫 Trop de liens détectés:', req.ip);
    return res.status(400).json({
      success: false,
      message: 'Votre message contient trop de liens'
    });
  }
  
  // 3. Mots-clés spam
  const spamKeywords = [
    'viagra', 'cialis', 'casino', 'lottery', 'prize', 'winner',
    'click here', 'buy now', 'limited offer', 'act now',
    'crypto', 'bitcoin', 'investment opportunity', 'make money'
  ];
  const lowerMessage = message.toLowerCase();
  const hasSpam = spamKeywords.some(keyword => 
    lowerMessage.includes(keyword)
  );
  if (hasSpam) {
    console.warn('🚫 Mot-clé spam détecté:', req.ip);
    return res.status(400).json({
      success: false,
      message: 'Votre message n\'a pas pu être envoyé'
    });
  }
  
  // 4. Répétition excessive de caractères
  if (/(.)\1{10,}/.test(message)) {
    console.warn('🚫 Répétition excessive:', req.ip);
    return res.status(400).json({
      success: false,
      message: 'Votre message contient des caractères suspects'
    });
  }
  
  // 5. Nom/prénom avec beaucoup de chiffres
  if (/\d{3,}/.test(firstName + lastName)) {
    console.warn('🚫 Nom suspect:', req.ip);
    return res.status(400).json({
      success: false,
      message: 'Informations invalides'
    });
  }
  
  // 6. Emails jetables
  const disposableEmailDomains = [
    'tempmail.com', 'guerrillamail.com', '10minutemail.com',
    'mailinator.com', 'throwaway.email', 'temp-mail.org',
    'yopmail.com', 'maildrop.cc'
  ];
  const emailDomain = email.split('@')[1];
  if (disposableEmailDomains.includes(emailDomain)) {
    console.warn('🚫 Email jetable détecté:', req.ip);
    return res.status(400).json({
      success: false,
      message: 'Veuillez utiliser une adresse email valide'
    });
  }
  
  next();
};