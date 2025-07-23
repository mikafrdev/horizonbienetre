import Presentation from "../../components/Presentation";
import imgMassages from "./../../assets/Zen-stones-candles-and-flowers-on-the-background-of-woman-receiving-treatment.jpg";
import imgSoins from "./../../assets/reiki-master-working-with-patient.jpg";
import imgFormules from "./../../assets/Formule-detente-profonde.jpeg";
import CardHP from "../../components/CardHP";
import Opinions from "../../components/Opinions";
import VideoHP from "../../assets/hp.mp4";
import "./style.css";

export default function Home() {
   const prestation1 = "Les massages du monde intuitifs";
   const prestation2 = "Les soins énergétiques";
   const prestation3 = "Les formules bien-être";

   return (
      <main className="main-content">
      

         <section className="section-video">
            <video playsInline autoPlay loop muted preload="metadata">
               <source src={VideoHP} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </section>

         <section className="container_light section-prestations">
            <h2>Les prestations</h2>

            <div className="prestation-cards">
               <CardHP
                  title={prestation1}
                  img={imgMassages}
                  link={"/massages"}
               />

               <CardHP title={prestation2} img={imgSoins} link={"/soins"} />

               <CardHP
                  title={prestation3}
                  img={imgFormules}
                  link={"/formule"}
               />
            </div>
         </section>

         <Opinions />
      </main>
   );
}
