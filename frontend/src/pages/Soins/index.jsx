import Presentation from "../../components/Presentation";
import Prestations from "../../components/Prestations";
import dataSoinsInfos from "../../data/soins_infos.json";
import dataSoins from "../../data/soins.json";
import Accordion from "@mui/material/Accordion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import RenderContent, {
   formatText,
} from "../../components/AccordionContent/RenderContent";
import "../../components/AccordionContent/AccordionContent.css";
import "./style.css";

export default function Massages() {
   const PresentationTxt = "Soins Énergétiques";

   return (
      <main className="main-content">
         <Presentation title={PresentationTxt} img="Les-soins-energetiques" />

         <section className="section-accordion">
            {dataSoinsInfos.map((item, index) => (
               <Accordion
                  key={index}
                  slotProps={{ transition: { timeout: 800 } }}
                  sx={{
                     boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                     "&::before": {
                        display: "none",
                     },
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
                     {item.text && (
                        <Typography>{formatText(item.text)}</Typography>
                     )}
                     {item.content && <RenderContent content={item.content} />}
                  </AccordionDetails>
               </Accordion>
            ))}
         </section>

         <Prestations data={dataSoins} collapsible={false} />
      </main>
   );
}
