import Illustration from "../../components/Illustration";
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
   const IllustrationTxt = "Carte Cadeau";

   return (
      <main>
         <Illustration className="illustration_cadeau" />

         <div className="container_cadeau container_light">
            <p>
               Envie de faire plaisir ou pour diverses occasions offrez la carte
               cadeau Horizon Bien-Être. La carte cadeau est valable pour tous
               les soins et toutes les formules. Il vous sufit de choisir le(s)
               soin(s) ou alors le montant que vous souhaitez offrir.
            </p>

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

            <FormContact />
         </div>
      </main>
   );
}
