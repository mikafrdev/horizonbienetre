import { useActionState } from "react";
import "./style.css";
// import { signUpNewUser } from "./api";

export default function FormContact() {
    // async function signup(prevState, formData) {
    //     "use server";
    //     const email = formData.get("email");
    //     try {
    //         await signUpNewUser(email);
    //         alert(`Added "${email}"`);
    //     } catch (err) {
    //         return err.toString();
    //     }
    // }
    // const [message, signupAction] = useActionState(signup, null);
    return (
        <div className="formcontact">
            <form id="formcontact">
                <label htmlFor="name">Nom: </label>
                <input name="name" id="name" placeholder="Nom" />
                <label htmlFor="prenom">Prénom: </label>
                <input name="prenom" id="prenom" placeholder="Prénom"/>
                <label htmlFor="email">Email: </label>
                <input name="email" id="email" placeholder="Email" />
                <label htmlFor="message">Message: </label>
                <textarea name="message" id="message" placeholder="Message" rows="3" cols="10" />
                <button>Envoyer</button>
            </form>
            {/* <form action={signupAction} id="signup-form">
                <label htmlFor="email">Email: </label>
                <input
                    name="email"
                    id="email"
                    placeholder="react@example.com"
                />
                <button>Sign up</button>
                {!!message && <p>{message}</p>}
            </form> */}
        </div>
    );
}
