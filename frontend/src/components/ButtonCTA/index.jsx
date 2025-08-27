import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "./style.css";

export default function ButtonCTA() {
   return (
      <>
         <Button
            className="btn-cta"
            startIcon={<CalendarMonthIcon />}
            href="https://www.resalib.fr/praticien/108707-horizon-bien-etre-centre-de-bien-etre-tourcoing"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
               "--variant-textColor": "var(--color-secondary)",
            }}
         >
            <span className="btn-cta-txt">Prendre RDV</span>
         </Button>
      </>
   );
}
