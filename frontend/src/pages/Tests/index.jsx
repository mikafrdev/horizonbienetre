import Accordion from "@mui/material/Accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import VideoHP from "../../assets/hp.mp4";
import "./style.css";

export default function Tests() {
   return (
      <main className="container_contact tests">

         <div className="container_light">
            <Accordion
               sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
               <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
               >
                  <Typography component="span">Accordion 1</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
               </AccordionDetails>
            </Accordion>
         </div>
      </main>
   );
}
