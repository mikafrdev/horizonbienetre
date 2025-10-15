import Presentation from "../../components/Presentation";
import FormContact from "../../components/FormContact";
import dataCarteCadeau from "../../data/cartecadeau.json";
import Accordion from "@mui/material/Accordion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import RenderContent, {
   formatText,
} from "../../components/AccordionContent/RenderContent";
import "./style.css";

export default function Cadeau() {
   const PresentationTxt = "Carte Cadeau";

   return (
      <main className="main-content">
         <Presentation img="Carte-cadeau-blanche-bleue" classname="cadeau" />
         <section className="cadeau-offre">
            <p>
               Envie de faire plaisir ou marquer une occasion ?<br /> Offrez la carte
               cadeau <strong>Horizon Bien-Être</strong>.
            </p>
            <p>
               Elle est valable pour tous les soins et toutes les formules.<br /> Il
               vous suffit de choisir le(s) soin(s), ou le montant que vous
               souhaitez offrir.
            </p>
         </section>

         <section className="section-accordion">
            {dataCarteCadeau.map((item, index) => (
               <Accordion
                  key={index}
                  slotProps={{ transition: { timeout: 800 } }}
               >
                  <AccordionSummary
                     expandIcon={<ArrowDropDownIcon />}
                     aria-controls={`panel${index}-content`}
                     id={`panel${index}-header`}
                  >
                     <Typography component="span">{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ textAlign: "left" }}>
                     {item.text && (
                        <Typography>{formatText(item.text)}</Typography>
                     )}
                     {item.content && <RenderContent content={item.content} />}
                  </AccordionDetails>
               </Accordion>
            ))}
         </section>

         <FormContact />
      </main>
   );
}
