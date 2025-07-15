import VideoHP from "../../assets/hp.mp4";
import FormContact from "../../components/FormContact";
import "./style.css";

export default function Tests() {
   return (
      <main className="container_contact tests">
         <video playsInline autoPlay loop muted preload="metadata">
            <source src={VideoHP}  type="video/mp4" />
            Your browser does not support the video tag.
         </video>

         <div class="separator-title">OU</div>



      </main>
   );
}
