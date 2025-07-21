import Illustration from "../../components/Illustration";
import CardPresta from "../../components/CardPresta";
import dataMassagesInfos from "../../data/massages_infos.json";
import dataMassages from "../../data/massages.json";
import Accordion from "@mui/material/Accordion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./style.css";
import "../../components/AccordionContent/style.css";


export default function Massages() {
   const IllustrationTxt = "Massages relaxants";

   return (
      <main>
         <Illustration
            title={IllustrationTxt}
            className="illustration_massages"
         />

         <div className="container_light massages_infos">
            {dataMassagesInfos.map((item, index) => (
               <Accordion key={index} slotProps={{ transition: { timeout: 800 } }}>
                  <AccordionSummary
                     expandIcon={<ArrowDropDownIcon />}
                     aria-controls={`panel${index}-content`}
                     id={`panel${index}-header`}
                  >
                     <Typography component="span">{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ textAlign: "left" }}>
                     {item.text}
                  </AccordionDetails>
               </Accordion>
            ))}
         </div>

         <div className="Container_prestations container_light">
            {dataMassages.map((product, index) => (
               <CardPresta
                  key={index}
                  title={product.title}
                  img={product.img}
                  text={product.text}
                  prix={product.prix}
               />
            ))}
         </div>
      </main>
   );
}
