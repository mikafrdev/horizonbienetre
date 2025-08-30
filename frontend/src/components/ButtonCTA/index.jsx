import Button from "@mui/material/Button";
/* import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; */
import PictoCalendar from "../PictoCalendar";

import "./style.css";

export default function ButtonCTA({ variant, linkActive }) {
   return (
      <div className={variant ? variant : undefined}>
         <Button
            className={`cta-btn ${linkActive ? "" : "disabled-link"}`}
            startIcon={<PictoCalendar />}
            {...(linkActive
               ? {
                    href: "https://www.resalib.fr/praticien/108707-horizon-bien-etre-centre-de-bien-etre-tourcoing",
                    target: "_blank",
                    rel: "noopener noreferrer",
                 }
               : {})}
            sx={{
               "--variant-textColor": "var(--color-secondary)",
            }}
         >
            <span className="cta-text">Prendre RDV</span>
         </Button>
      </div>
   );
}
