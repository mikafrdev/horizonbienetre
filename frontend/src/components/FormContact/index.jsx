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
               "Message envoyé avec succès, une réponse automatique vous a été adressée.",
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
         <form action={formAction}>
            <input name="firstName" placeholder="Prénom" />
            <input name="lastName" placeholder="Nom" />
            <input name="email" type="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" />
            <button type="submit" disabled={isPending}>
               {isPending ? "Envoi..." : "Envoyer"}
            </button>
            {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
            {state?.message && <p style={{ color: "red" }}>{error.stack}</p>}
            {state?.success && (
               <p style={{ color: "green" }}>{state.success}</p>
            )}
         </form>

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
