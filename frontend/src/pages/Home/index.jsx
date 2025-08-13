import { useEffect, useState } from "react";
import HomePrestations from "../../components/HomePrestations";
import Opinions from "../../components/Opinions";
import "./style.css";

export default function Home() {
   const [videoSrc, setVideoSrc] = useState("");

   useEffect(() => {
      const width = window.innerWidth;

      /* console.log("Current window width:", width); */

      if (width <= 800) {
         setVideoSrc("/videos/presentation-800.mp4");
      } else if (width <= 1024) {
         setVideoSrc("/videos/presentation-1024.mp4");
      } else {
         setVideoSrc("/videos/presentation-1440.mp4");
      }
   }, []);
   return (
      <main className="main-content">
         <section className="section-video">
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
   );
}
