import PrestationsCards from "../../components/PrestationsCards";
import Opinions from "../../components/Opinions";
import VideoHP from "../../assets/hp.mp4";
import "./style.css";

export default function Home() {
   return (
      <main className="main-content">
         <section className="section-video">
            <video playsInline autoPlay loop muted preload="metadata">
               <source src={VideoHP} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </section>

         <section className="prestations">
            <h2>Les prestations</h2>

            <div className="prestation-cards">
               <PrestationsCards />
            </div>
         </section>

         <Opinions />
      </main>
   );
}
