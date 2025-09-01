/* import Button from "@mui/material/Button"; */
import PhotoResalib from "./../../assets/photo-resalib.png";
import LogoResalib from "./../../assets/logo-resalib.png";
import Button from "@mui/material/Button";
import PictoCalendar from "../../components/PictoCalendar";


import "./style.css";

export default function Resalib() {
   return (
      <section className="resalib-container">
         <div className="resalib-wrapper">
            <div className="resalib-infos">
               <div className="resalib-photo">
                  <img src={PhotoResalib} alt="Photo Résalib" />
               </div>
               <div className="resalib-hero">
                  <div className="resalib-horizon">
                     <p>Horizon Bien-Être</p>
                     <p>Centre de bien-être</p>
                  </div>
                  <Button
                     component="a"
                     className="cta-resalib"
                     startIcon={<PictoCalendar />}
                     href="https://www.resalib.fr/praticien/108707-horizon-bien-etre-centre-de-bien-etre-tourcoing#top"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <span className="cta-text">Prendre RDV</span>
                  </Button>
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
