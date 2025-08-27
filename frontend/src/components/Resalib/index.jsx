import Button from "@mui/material/Button";
import PhotoResalib from "./../../assets/photo-resalib.png";
import LogoResalib from "./../../assets/logo-resalib.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "./style.css";

export default function Resalib() {
   return (
      <section className="resalib">
         <div className="resalib-container">
            <div className="resalib-infos">
               <div className="resalib-photo">
                  <img src={PhotoResalib} alt="Photo Résalib" />
               </div>
               <div className="resalib-hero">
                  <div className="resalib-horizon">
                     Horizon Bien-Être
                     <br />
                     Centre de bien-être
                  </div>
                  <div className="resalib-cta">
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
                        Prendre RDV
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <div className="resalib-partenaire">
            <span>Avec notre partenaire</span>
            <img src={LogoResalib} alt="Logo Résalib" />
         </div>
      </section>
   );
}
