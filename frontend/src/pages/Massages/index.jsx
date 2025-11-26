import Presentation from "../../components/Presentation";
import Prestations from "../../components/Prestations";
import dataMassagesInfos from "../../data/massages_infos.json";
import dataMassages from "../../data/massages.json";
import Accordion from "@mui/material/Accordion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./style.css";
import "../../components/AccordionContent/AccordionContent.css";

export default function Massages() {
   const PresentationTxt = "Massages Relaxants";

   return (
      <main className="main-content">
         <Presentation
            title={PresentationTxt}
            img="massage-relaxation-femme-bougies-fleurs-spa"
         />

         <section className="section-accordion">
            {dataMassagesInfos.map((item, index) => (
               <Accordion
                  key={index}
                  slotProps={{ transition: { timeout: 800 } }}
                  sx={{
                     /* boxShadow:
                        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;", */
                     boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px -6px 12px, rgba(0, 0, 0, 0.15) 0px 6px 12px",
                  }}
               >
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
         </section>

         <Prestations imagesData={dataMassages} collapsible={false} />
      </main>
   );
}
