import { useActionState } from "react";
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
      <div className="formcontact">
         {state.success ? (
            <div className="success-message" aria-live="polite">
               <h2>Merci !</h2>
               <p>{state.success}</p>
               <button>Envoyer un autre messsage</button>
            </div>
         ) : (
            <form action={formAction}>
               {state.error && <p className="error-message">{state.error}</p>}

               <label htmlFor="firstName">Prénom</label>
               <input
                  type="text"
                  autoComplete="given-name"
                  id="firstName"
                  name="firstName"
                  placeholder="Ex: Michel"
               />
               <label htmlFor="lastName">Nom *</label>
               <input
                  type="text"
                  id="lastName"
                  autoComplete="family-name"
                  name="lastName"
                  placeholder="Ex: Durant"
                  required
               />
               <label htmlFor="email">Email *</label>
               <input
                  type="email"
                  id="email"
                  placeholder="monemail@email.fr"
                  autoComplete="email"
                  name="email"
                  aria-invalid={!!state.fieldErrors?.email}
                  aria-describedby="email-error"
                  required
               />
               {state.fieldErrors?.email && (
                  <span id="email-error" className="text-red-500">
                     {state.fieldErrors.email}
                  </span>
               )}
               <label htmlFor="message">Message *</label>
               <textarea
                  id="message"
                  name="message"
                  placeholder="Demandez un rendez-vous ou posez une question ?"
                  required
               ></textarea>

               {state.error && (
                  <p className="text-red-600" role="alert" aria-live="polite">
                     {state.error}
                  </p>
               )}

               <button type="submit" disabled={isPending}>
                  {isPending ? "Envoi en cours..." : "Envoyer"}
               </button>
            </form>
         )}

         {/* <form className="flex flex-col gap-2"> */}
         {/* <form id="formcontact" onSubmit={handleSubmit}>
            
            <label htmlFor="lastName">Nom: </label>
            <input name="lastName" id="firstName" placeholder="Nom" />
            <label htmlFor="firstName">Prénom: </label>
            <input name="firstName" id="firstName" placeholder="Prénom" />
            <label htmlFor="email">Email: </label>
            <input name="email" id="email" placeholder="Email" />
            <label htmlFor="message">Message: </label>
            <textarea
               name="message"
               id="message"
               placeholder="Message"
               rows="3"
               cols="10"
            />
            <button>Envoyer</button>
         </form> */}
      </div>
   );
}
