import FormContact from "../../components/FormContact";
import "./style.css";

export default function Contacts() {
   return (
      <main className="main-content">
         <section className="presentation presentation-contact">
            <h1>Nous contacter</h1>
         </section>

         <FormContact />
      </main>
   );
}
