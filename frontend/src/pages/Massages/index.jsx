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
   const PresentationTxt = "Massages relaxants";

   return (
      <main className="main-content">
         <section className="section-presentation">
            <Presentation
               title={PresentationTxt}
               className="presentation_massages"
            />
         </section>

         <section className="section-accordion">
            {dataMassagesInfos.map((item, index) => (
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
                     {item.text}
                  </AccordionDetails>
               </Accordion>
            ))}
         </section>

         <Prestations data={dataMassages} title="Nos massages" />
      </main>
   );
}
