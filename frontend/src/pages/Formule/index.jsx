import SEOMetaData from "../../components/SeoMetaData";
import metaData from "../../data/metadata.json";
import Presentation from "../../components/Presentation";
import Prestations from "../../components/Prestations";
import dataFormules from "../../data/formules.json";
import "./style.css";

export default function Formule() {
   const PresentationTxt = "Les Formules Bien-Être";

   return (
      <>
         <SEOMetaData metadata={metaData.formules} />
         <main className="main-content">
            <Presentation
               title={PresentationTxt}
               img="Formule-detente-profonde"
            />
            <Prestations imagesData={dataFormules} collapsible={true} />
         </main>
      </>
   );
}
