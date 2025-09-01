import Resalib from "../../components/Resalib";
import Button from "@mui/material/Button";
import PictoCalendar from "../../components/PictoCalendar";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";




import "./style.css";

export default function Test() {
   return (
      <main className="main-content">
         <section className="section-test">
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
            <Button
               component="a"
               className="cta-resalib-b"
               endIcon={<OpenInNewIcon />}
               href="https://www.resalib.fr/praticien/108707-horizon-bien-etre-centre-de-bien-etre-tourcoing#top"
               target="_blank"
               rel="noopener noreferrer"
            >
               <span className="cta-text">Prendre RDV avec Résalib</span>
            </Button>
            <Resalib />

            <a
               href="https://autresite.com"
               target="_blank"
               rel="noopener noreferrer"
               className="button-externe"
            >
               Visiter Autre Site
               <OpenInNewIcon fontSize="small" style={{ marginLeft: "6px" }} />
            </a>
         </section>
      </main>
   );
}
