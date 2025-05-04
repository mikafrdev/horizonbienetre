import { useActionState } from "react";
import "./style.css";

export default function FormContact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const message = formData.get("message");

        /* form.reset(); */
        alert(
            `Prénom : ${firstName}, Nom : ${lastName}, Email : ${email}, Message : ${message}`
        );
    };

    return (
        <div className="formcontact">
            <form id="formcontact" onSubmit={handleSubmit}>
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
