import ContactInfos from "../../components/ContactInfos";
import FormContact from "../../components/FormContact";
import "./style.css";

export default function Contacts() {
    return (
        <main className="container_contact">
            <div className="presentation_contact">
                <h1>Nous contacter</h1>
            </div>

            <div className="container_light">
                <FormContact />
            </div>
        </main>
    );
}
