import { useEffect, useState } from "react";
import SEOMetaData from "../../components/SeoMetaData";
import metaData from "../../data/metadata.json";
import HomePrestations from "../../components/HomePrestations";
import Opinions from "../../components/Opinions";
import "./style.css";

export default function Home() {
   const [videoSrc, setVideoSrc] = useState("");

   useEffect(() => {
      const width = window.innerWidth;

      if (width <= 800) {
         setVideoSrc("/videos/presentation-800.mp4");
      } else if (width <= 1024) {
         setVideoSrc("/videos/presentation-1024.mp4");
      } else {
         setVideoSrc("/videos/presentation-1440.mp4");
      }
   }, []);
   return (
      <>
         <SEOMetaData metadata={metaData.home} />

         <main className="main-content">
            <section className="section-video">
               <h1>Horizon-Bien-Être</h1>
               {videoSrc && (
                  <video playsInline autoPlay loop muted preload="metadata">
                     <source src={videoSrc} type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
               )}
            </section>

            <HomePrestations />
            <Opinions />
         </main>
      </>
   );
}
