import HomePrestations from "../../components/HomePrestations";
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

         <HomePrestations />
         <Opinions />
      </main>
   );
}
