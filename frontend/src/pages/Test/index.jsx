import PictoCalendar from "../../components/PictoCalendar";
import ModalWrapper from "../../components/ModalWrapper";
import "./style.css";

export default function Test() {
   return (
      <main className="main-content">
         <section className="section-test">
            <ModalWrapper
               trigger={
                  <>
                     <PictoCalendar
                        className="picto_phone_footer"
                        fillPhoneColor="#1E1E1E"
                        fillCallColor="#1E1E1E"
                     />
                     <span>Prendre rendez-vous</span>
                  </>
               }
            >
               <div>
                  <h2>Contenu du modal</h2>
                  <p>Ici tu mets ce que tu veux.</p>
               </div>
            </ModalWrapper>
         </section>
      </main>
   );
}
