import Presentation from "../../components/Presentation";
import Prestations from "../../components/Prestations";
import dataFormules from "../../data/formules.json";
import "./style.css";

export default function Formule() {
   const PresentationTxt = "Les formules bien-être";

   return (
      <main className="main-content">
         <Presentation title={PresentationTxt} img="Formule-detente-profonde" />
         <Prestations data={dataFormules} collapsible={true} />
      </main>
   );
}
