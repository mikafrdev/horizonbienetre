import { useState } from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./style.css";

export default function FormContact({ formType }) {
   console.log("formType dans FormContact : ", formType);

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      rgpd: false,
      website: "", // 🛡️ Honeypot
      formType: formType,
   });

   const [loading, setLoading] = useState(false);
   const [successMsg, setSuccessMsg] = useState("");
   const [errorMsg, setErrorMsg] = useState("");
   const [fieldErrors, setFieldErrors] = useState({});

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
         rgpd: false,
         website: "",
      });
      setFieldErrors({});
      setSuccessMsg("");
      setErrorMsg("");
   }; */

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");
      setFieldErrors({});

      console.log("ENVOI : ", formData);

      try {
         const res = await fetch(`/api/email/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         const data = await res.json();

         console.log("data : ", data);

         if (!res.ok) {
            if (data.errors) {
               const formattedErrors = {};
               data.errors.forEach((err) => {
                  formattedErrors[err.path] = err.msg;
               });
               setFieldErrors(formattedErrors);
            }

            setErrorMsg(data.message || "Une erreur est survenue.");
            return;
         }

         // Email auto-response
         const autoRes = await fetch(`/api/email/auto-response`, {
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

         /* resetForm(); */
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

               {/* 🛡️ Honeypot invisible */}
               <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  autoComplete="off"
                  tabIndex="-1"
               />

               <div className="input-group input-group--firstlastname">
                  <div className="input-group input-group--firstname">
                     <label htmlFor="firstName">Prénom *</label>
                     <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        autoComplete="given-name"
                        aria-invalid={!!fieldErrors.firstName}
                     />
                     {fieldErrors.firstName && (
                        <span className="error-text text-red-500" role="alert">
                           {fieldErrors.firstName}
                        </span>
                     )}
                  </div>

                  <div className="input-group input-group--lastname">
                     <label htmlFor="lastName">Nom *</label>
                     <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                        aria-invalid={!!fieldErrors.lastName}
                     />
                     {fieldErrors.lastName && (
                        <span className="error-text text-red-500" role="alert">
                           {fieldErrors.lastName}
                        </span>
                     )}
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
                     autoComplete="email"
                     aria-invalid={!!fieldErrors.email}
                  />
                  {fieldErrors.email && (
                     <span className="error-text text-red-500" role="alert">
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
                     aria-invalid={!!fieldErrors.message}
                  />
                  {fieldErrors.message && (
                     <span className="error-text text-red-500" role="alert">
                        {fieldErrors.message}
                     </span>
                  )}
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
                  {fieldErrors.rgpd && (
                     <Typography
                        variant="caption"
                        color="error"
                        sx={{ mt: 0.5 }}
                     >
                        {fieldErrors.rgpd}
                     </Typography>
                  )}
               </div>

               <div className="input-group-submit">
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
