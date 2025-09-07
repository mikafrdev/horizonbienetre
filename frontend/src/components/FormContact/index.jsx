import { useState } from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./style.css";

export default function FormContact() {
   const API_URL = import.meta.env.VITE_API_URL;

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      rgpd: false,
   });

   const [loading, setLoading] = useState(false);
   const [successMsg, setSuccessMsg] = useState("");
   const [errorMsg, setErrorMsg] = useState("");
   const [fieldErrors, setFieldErrors] = useState({});
   const [rgpdError, setRgpdError] = useState(false);

   const handleChange = (e) => {
      const { name, type, value, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === "checkbox" ? checked : value,
      }));
   };

   /* const resetForm = () => {
      setFormData({
         firstName: "",
         lastName: "",
         email: "",
         message: "",
      });
      setSuccessMsg("");
      setErrorMsg("");
      setFieldErrors({});
   }; */

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");
      setFieldErrors({});
      setRgpdError(false); // ✅ ici pour réinitialiser l'erreur RGPD

      const { firstName, lastName, email, message } = formData;

      if (!firstName || !lastName || !message) {
         setLoading(false);
         setErrorMsg("Tous les champs sont requis.");
         return;
      }
      // Validation simple côté client
      if (!email || !email.includes("@")) {
         setLoading(false);
         setFieldErrors({ email: "Format incorrect." });
         setErrorMsg("Veuillez saisir une adresse e-mail valide.");
         return;
      }

      if (!formData.rgpd) {
         setLoading(false);
         setRgpdError(true);
         setErrorMsg("Vous devez accepter la politique de confidentialité.");
         return;
      }

      try {
         const contactRes = await fetch(`${API_URL}/api/email/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         if (!contactRes.ok) {
            const err = await contactRes.text();
            throw new Error(err);
         }

         const autoRes = await fetch(`${API_URL}/api/email/auto-response`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         if (!autoRes.ok) {
            setSuccessMsg(
               "Message envoyé, mais échec de la réponse automatique."
            );
         } else {
            setSuccessMsg(
               <>
                  Votre demande a bien été envoyée.
                  <br /> Vous recevrez un e-mail de confirmation.
               </>
            );
         }

         setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } catch (err) {
         console.error(err);
         setErrorMsg("Erreur lors de l'envoi du message. Veuillez réessayer.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <section className="section-form">
         {successMsg ? (
            <div className="form-success-message">
               <Alert severity="success">
                  <Typography variant="h6">Merci !</Typography>
                  <Typography>{successMsg}</Typography>
               </Alert>
            </div>
         ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
               {errorMsg && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                     {errorMsg}
                  </Alert>
               )}

               <div className="input-group input-group--firstlastname">
                  <div className="input-group input-group--firstname">
                     <label htmlFor="firstName">Prénom</label>
                     <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Ex: Michel"
                        autoComplete="given-name"
                     />
                  </div>

                  <div className="input-group input-group--lastname">
                     <label htmlFor="lastName">Nom *</label>
                     <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Ex: Durant"
                        autoComplete="family-name"
                        required
                     />
                  </div>
               </div>

               <div className="input-group input-group--email">
                  <label htmlFor="email">Email *</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="monemail@email.fr"
                     autoComplete="email"
                     required
                     aria-invalid={!!fieldErrors?.email}
                     aria-describedby="email-error"
                  />
                  {fieldErrors?.email && (
                     <span
                        id="email-error"
                        className="text-red-500"
                        role="alert"
                     >
                        {fieldErrors.email}
                     </span>
                  )}
               </div>

               <div className="input-group input-group--message">
                  <label htmlFor="message">Message *</label>
                  <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Demandez un rendez-vous ou posez une question ?"
                     required
                  />
               </div>

               <div className="input-group input-group--rgpd">
                  <FormControlLabel
                     control={
                        <input
                           type="checkbox"
                           name="rgpd"
                           checked={formData.rgpd}
                           onChange={handleChange}
                           style={{
                              accentColor: "#1976d2",
                              width: "16px",
                              height: "16px",
                              marginRight: "8px",
                           }}
                        />
                     }
                     label={
                        <Typography variant="body2">
                           J'accepte la{" "}
                           <a
                              href="/politique-confidentialite"
                              target="_blank"
                              rel="noreferrer"
                              style={{ textDecoration: "underline" }}
                           >
                              politique de confidentialité
                           </a>{" "}
                           *
                        </Typography>
                     }
                  />
                  {rgpdError && (
                     <Typography
                        variant="caption"
                        color="error"
                        sx={{ mt: 0.5 }}
                     >
                        Vous devez accepter la politique de confidentialité.
                     </Typography>
                  )}
               </div>

               <div className="input-group-submit">
                  {/* <Button
                     className="btn-submit"
                     variant="contained"
                     type="submit"
                     size="large"
                     loading={true}
                     endIcon={<SendIcon />}
                     loadingPosition="end"
                  >
                     Envoyer
                  </Button> */}

                  <Button
                     className="btn-submit"
                     variant="contained"
                     type="submit"
                     size="large"
                     loading={loading}
                     endIcon={<SendIcon />}
                     loadingPosition="end"
                  >
                     Envoyer
                  </Button>
               </div>
            </form>
         )}
      </section>
   );
}
