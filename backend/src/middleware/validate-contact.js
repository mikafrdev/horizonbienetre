import { body, validationResult } from "express-validator";
const validateContact = [
   body("firstName")
      .trim()
      .notEmpty()
      .withMessage("Le prénom est requis.")
      .escape(),

   body("lastName")
      .trim()
      .notEmpty()
      .withMessage("Le nom est requis.")
      .escape(),

   body("email")
      .isEmail()
      .withMessage("Adresse e-mail invalide.")
      .normalizeEmail(),

   body("message")
      .trim()
      .notEmpty()
      .withMessage("Le message est requis.")
      .escape(),

   body("rgpd").equals("true").withMessage("Consentement RGPD requis."),

   body("website") // Champ honeypot anti-bot
      .optional()
      .isEmpty()
      .withMessage("Spam détecté."),

   (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
         return res.status(400).json({
            success: false,
            message: "Le formulaire contient des erreurs.",
            errors: errors.array(),
         });
      }

      next();
   },
];

export default validateContact;
