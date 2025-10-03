import Resalib from "../../components/Resalib";
import Button from "@mui/material/Button";
import PictoCalendar from "../../components/PictoCalendar";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState, useRef } from "react";
import "./style.css";

export default function Test() {
   const [data, setData] = useState(null);
   const [imgUrl, setImgUrl] = useState(null);
   const preRef = useRef(null);

   useEffect(() => {
      fetch("/api/test")
         .then((res) => res.json())
         .then((json) => {
            console.log("✅ API Test :", json);
            setData(json);
         })
         .catch((err) => {
            console.error("❌ Erreur API :", err);
         });
   }, []);

   /* useEffect(() => {
      fetch("/api/images/${imageName}")
         .then((res) => res.json())
         .then((json) => {
            console.log("✅ API Image :", json);
            setImgUrl(json);
         })
         .catch((err) => {
            console.error("❌ Erreur API :", err);
         });
   }, []);
 */
   const handleCopy = () => {
      if (preRef.current) {
         navigator.clipboard.writeText(preRef.current.textContent);
      }
   };

   return (
      <main className="main-content">
         <section className="section-test">
            <h1>TESTS</h1>

            <h2>Images responsive</h2>
            <section>
               {imgUrl}
            </section>

            <h2>Résultat de /api/test</h2>
            <div className="variables">
               {data ? (
                  <pre onClick={handleCopy} ref={preRef}>
                     {JSON.stringify(data, null, 2)}
                  </pre>
               ) : (
                  <p>Chargement...</p>
               )}
            </div>
            <h2>Boutons</h2>
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
