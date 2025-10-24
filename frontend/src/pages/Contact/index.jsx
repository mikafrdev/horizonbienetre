import FormContact from "../../components/FormContact";
import "./style.css";

export default function contact() {
   return (
      <main className="main-content">
         <section className="section-presentation contact">
            <h1>Nous contacter</h1>
         </section>

         <FormContact  formType="Contact" />
      </main>
   );
}
