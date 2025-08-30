import Resalib from "../../components/Resalib";
import Button from "../../components/Button";
import ButtonPhone from "../../components/ButtonPhone";

import "./style.css";

export default function Test() {
   return (
      <main className="main-content">
         <section className="section-test">
            <ButtonPhone />
            <Button linkActive={true} />
            <Button variant="cta-header" />
            <Button variant="cta-resalib" linkActive={true} />
            <Resalib />
            
         </section>
      </main>
   );
}
