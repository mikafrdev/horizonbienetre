import { z } from "zod";

export const contactSchema = z.object({
   firstName: z.string().min(1, "Le nom est requis").max(100).trim(),
   lastName: z.string().min(1, "Le prénom est requis").max(100).trim(),
   email: z.string().email("Email invalide").max(255).toLowerCase(),
   message: z
      .string()
      .min(18, "Le message doit contenir au moins 18 caractères")
      .max(5000)
      .trim(),
   website: z.string().max(0, "Champ invalide"), // Honeypot
   rgpd: z.boolean().refine((val) => val === true, {
      message: "Vous devez accepter les conditions RGPD",
   }),
   formType: z
      .string()
      .min(1, "Le type de formulaire est requis")
      .max(100, "Le type de formulaire est trop long"),
});
