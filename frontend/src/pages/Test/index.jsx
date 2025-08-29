import Resalib from "../../components/Resalib";
import ButtonCTA from "../../components/ButtonCTA";
import ButtonPhone from "../../components/ButtonPhone";

import "./style.css";

export default function Test() {
   return (
      <main className="main-content">
         <section className="section-test">
            <ButtonPhone />
            <ButtonCTA />
            <ButtonCTA variant="cta-header" />
            <ButtonCTA variant="cta-resalib" />
            <Resalib />
            
         </section>
      </main>
   );
}
