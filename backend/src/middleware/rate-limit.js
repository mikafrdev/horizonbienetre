// Solution simple en mémoire
const requests = new Map();

const RATE_LIMIT_CONFIG = {
  maxRequests: 3,
  windowMs: 60 * 60 * 1000, // 1 heure
};

export const rateLimitMiddleware = (req, res, next) => {
  const identifier = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();
  
  const userRequests = requests.get(identifier) || [];
  
  // Filtrer les requêtes récentes
  const recentRequests = userRequests.filter(
    timestamp => now - timestamp < RATE_LIMIT_CONFIG.windowMs
  );
  
  if (recentRequests.length >= RATE_LIMIT_CONFIG.maxRequests) {
    const oldestRequest = Math.min(...recentRequests);
    const retryAfter = Math.ceil(
      (oldestRequest + RATE_LIMIT_CONFIG.windowMs - now) / 1000
    );
    
    return res.status(429).json({
      success: false,
      message: 'Trop de requêtes. Veuillez réessayer plus tard.',
      retryAfter
    });
  }
  
  // Ajouter la nouvelle requête
  recentRequests.push(now);
  requests.set(identifier, recentRequests);
  
  next();
};

// Nettoyage périodique
setInterval(() => {
  const now = Date.now();
  for (const [identifier, timestamps] of requests.entries()) {
    const recent = timestamps.filter(
      t => now - t < RATE_LIMIT_CONFIG.windowMs
    );
    if (recent.length === 0) {
      requests.delete(identifier);
    } else {
      requests.set(identifier, recent);
    }
  }
}, RATE_LIMIT_CONFIG.windowMs);