import { z } from "zod";
import { contactSchema } from "../utils/validation-schemas.js";

export const validateContact = (req, res, next) => {
   try {
      // Validation avec Zod
      const validatedData = contactSchema.parse(req.body);

      // Attacher les données validées à req
      req.validatedData = validatedData;

      next();
   } catch (error) {
      if (error instanceof z.ZodError) {
         return res.status(400).json({
            success: false,
            message: "Données invalides",
            errors:
               error.errors?.map((err) => ({
                  // 👈 Ajout de ?. (optional chaining)
                  field: err.path.join("."),
                  message: err.message,
               })) || [], // 👈 Fallback à un tableau vide
         });
      }

      console.error("Erreur de validation:", error);
      return res.status(400).json({
         success: false,
         message: "Erreur de validation",
         error: error.message || "Erreur inconnue", // 👈 Plus de détails
      });
   }
};
