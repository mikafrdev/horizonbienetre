import { useActionState } from "react";
import Button from "@mui/material/Button";
import "./style.css";

export default function FormContact() {
   const [state, formAction, isPending] = useActionState(submitFormData, {});
   const API_URL = import.meta.env.VITE_API_URL;

   async function submitFormData(prevState, formData) {
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const message = formData.get("message");

      if (!email || !email.includes("@")) {
         return {
            error: "Veuillez saisir une adresse e-mail valide.",
            fieldErrors: {
               email: "Format incorrect.",
            },
         };
      }

      if (!firstName || !lastName || !email || !message) {
         return { error: "Tous les champs sont requis." };
      }

      try {
         // Envoi du message de contact
         const contactRes = await fetch(`${API_URL}/api/email/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, message }),
         });

         if (!contactRes.ok) {
            return { error: "Erreur lors de l'envoi du message de contact." };
         }

         // Envoi de la réponse automatique si le premier appel réussit
         const autoRes = await fetch(`${API_URL}/api/email/auto-response`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, message }),
         });

         if (!autoRes.ok) {
            return {
               error: "Message envoyé, mais échec de la réponse automatique.",
            };
         }

         return {
            success:
               "Votre demande a bien été envoyée. Vous recevrez un e-mail de confirmation.",
         };
      } catch (error) {
         console.error(error);
         return {
            error: "Erreur réseau ou serveur.",
            details: error.message || error,
         };
      }
   }

   return (
      <section className="section-form">
         {state.success ? (
            <div className="success-message" aria-live="polite">
               <h2>Merci !</h2>
               <p>{state.success}</p>
               <button>Envoyer un autre messsage</button>
            </div>
         ) : (
            <form action={formAction} className="contact-form">
               {state.error && (
                  <p className="error-message" role="alert" aria-live="polite">
                     {state.error}
                  </p>
               )}

               <div className="input-group input-group--firstlastname">
                  <div className="input-group input-group--firstname">
                     <label htmlFor="firstName">Prénom</label>
                     <input
                        type="text"
                        id="firstName"
                        name="firstName"
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
                     placeholder="monemail@email.fr"
                     autoComplete="email"
                     required
                     aria-invalid={!!state.fieldErrors?.email}
                     aria-describedby="email-error"
                  />
                  {state.fieldErrors?.email && (
                     <span
                        id="email-error"
                        className="text-red-500"
                        role="alert"
                     >
                        {state.fieldErrors.email}
                     </span>
                  )}
               </div>

               <div className="input-group input-group--message">
                  <label htmlFor="message">Message *</label>
                  <textarea
                     id="message"
                     name="message"
                     placeholder="Demandez un rendez-vous ou posez une question ?"
                     required
                  ></textarea>
               </div>

               <div className="input-group input-group--submit">
                  <button type="submit" className="cta-form-contact">
                     <span className="cta-text">
                        {isPending ? "Envoi en cours..." : "Prendre RDV"}
                     </span>
                     <span>Envoyer</span>
                  </button>
               </div>
            </form>
         )}
      </section>
   );
}
