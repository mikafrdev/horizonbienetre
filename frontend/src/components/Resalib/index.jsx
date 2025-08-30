/* import Button from "@mui/material/Button"; */
import PhotoResalib from "./../../assets/photo-resalib.png";
import LogoResalib from "./../../assets/logo-resalib.png";
import Button from "../../components/Button";

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
                  <Button variant="cta-resalib" linkActive={true} />
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
