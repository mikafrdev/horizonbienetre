import SEOMetaData from "../../components/SeoMetaData";
import metaData from "../../data/metadata.json";
import HomePrestations from "../../components/HomePrestations";
import Opinions from "../../components/Opinions";
import "./style.css";

export default function Home() {
   return (
      <>
         <SEOMetaData metadata={metaData.home} />

         <main className="main-content">
            <section className="section-video">
               <h1>Horizon-Bien-Être</h1>
               <video autoPlay loop muted width="100%">
                  <source
                     src="/videos/Presentation-HP-V03-h264-01.mp4"
                     type="video/mp4"
                  />
                  {/* <source src="chemin/vers/ta-video.webm" type="video/webm" /> */}
                  Ton navigateur ne supporte pas la lecture de vidéos.
               </video>
            </section>

            <HomePrestations />
            <Opinions />
         </main>
      </>
   );
}
