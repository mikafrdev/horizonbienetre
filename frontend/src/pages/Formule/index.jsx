import Presentation from "../../components/Presentation";
import Prestations from "../../components/Prestations";
import dataFormules from "../../data/formules.json";
import "./style.css";

export default function Formule() {
   const PresentationTxt = "Les formules bien-être";

   return (
      <main className="main-content">
         <section className="section-presentation">
            <Presentation
               title={PresentationTxt}
               className="presentation_formule"
            />
         </section>

         <Prestations data={dataFormules} title="Nos formules" />
      </main>
   );
}
