import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SendIcon from "@mui/icons-material/Send";
/* import { matomoTrackEvent } from "../MatomoTracking"; */
import "./style.css";

const schema = z.object({
   firstName: z.string().min(1, "Le nom est requis"),
   lastName: z.string().min(1, "Le prénom est requis"),
   email: z.string().email("Email invalide"),
   message: z
      .string()
      .min(18, "Le message doit comporter au moins 18 caractères"),
   website: z
      .string()
      .optional() // Le champ peut être vide
      .refine((val) => val === "", {
         message: "Ce champ ne doit pas être rempli.",
      }), // Validation honeypot
   formType: z.string().min(1, "Le type de formulaire est requis"), // formType obligatoire
   rgpd: z.boolean().refine((val) => val === true, {
      message: "Vous devez accepter les conditions RGPD",
   }),
});

export default function FormContact({ formType }) {
   const {
      register,
      handleSubmit,
      control,
      setValue,
      formState: { errors, isSubmitting },
   } = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
         firstName: "",
         lastName: "",
         email: "",
         message: "",
         website: "",
         rgpd: false, // 👈 AJOUTÉ pour corriger l'erreur
      },
   });

   useEffect(() => {
      setValue("formType", formType);
   }, [formType, setValue]);

   //Backend

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      rgpd: false,
      website: "", // 🛡️ Honeypot
      formType: formType,
   });

   const onSubmit = async (formdata) => {
      /* console.log("useForm methods and properties:", {
         register,
         handleSubmit,
         setError,
         errors,
         isSubmitting,
      }); */

      console.log("Données du formulaire soumises :", formdata);
      return;

      const url = "/api/email/contact";
      try {
         const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         if (!response.ok) {
            throw new Error("Erreur lors de l'envoi du formulaire");
         }
         const data = await response.json();

         console.log("Réponse du backend response :", response);
         console.log("Réponse du backend data :", data);
      } catch (error) {
         console.error("Erreur lors de l'envoi du formulaire:", error);
      }
   };

   return (
      <section className="section-form">
         <>
            <Box
               component="form"
               onSubmit={handleSubmit(onSubmit)}
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                  margin: "auto",
                  padding: 2,
               }}
            >
               <TextField
                  id="outlined-basic"
                  label="Nom"
                  variant="outlined"
                  {...register("firstName")}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  size="small"
               />

               <TextField
                  id="outlined-basic"
                  label="Prénom"
                  variant="outlined"
                  {...register("lastName")}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  size="small"
               />

               <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  size="small"
               />

               <TextField
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  {...register("message")}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  size="small"
                  multiline
                  minRows={4}
               />

               <TextField
                  id="outlined-basic"
                  label="website"
                  style={{ display: "none" }}
                  autoComplete="off"
                  tabIndex="-1"
                  {...register("website")}
               />

               <Controller
                  name="rgpd"
                  control={control}
                  render={({ field }) => (
                     <>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 checked={field.value}
                                 onChange={field.onChange}
                                 color={errors.rgpd ? "error" : "primary"}
                              />
                           }
                           label="J'accepte la politique de confidentialité"
                        />
                        {errors.rgpd && (
                           <FormHelperText error sx={{ mt: -3, ml: 2 }}>
                              {errors.rgpd.message}
                           </FormHelperText>
                        )}
                     </>
                  )}
               />

               <Button
                  className="btn-submit"
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                  loadingPosition="end"
                  size="small"
                  disabled={isSubmitting} // Désactive le bouton pendant la soumission
               >
                  Envoyer
               </Button>
            </Box>
         </>
      </section>
   );
}
