import PictoPhone from "../PictoPhone";
import PictoPinpoint from "../PictoPinpoint";
import PictoMail from "../PictoMail";
import PictoFB from "../PictoFB";
import PictoInsta from "../PictoInsta";
import "./style.css";

export default function Header() {

    return (
        <footer>
            
            <div className='contacts'>
                <h2>Contacts</h2>

                <div className="contacts_infos">
                    <PictoPhone className='picto_phone_footer' fillPhoneColor='#1E1E1E' fillCallColor='1E1E1E' />
                    <div>Afficher le téléphone</div>

                    <div className='footer_adress'><PictoPinpoint strokeColor='#1E1E1E' /></div>
                    <div>45 rue Claude Bernard<br /> 59200 Tourcoing</div>

                    <div className='footer_mail'><PictoMail strokeColor='#1E1E1E' /></div>
                    <div>horizonbienetre5@gmail.com</div>
                </div>

            </div>

            <div className="contacts_infos_next">
                <div className='footer_fb'><PictoFB strokeColor='#1E1E1E' strokeWidth='5' /></div>
                <div className='footer_insta'><PictoInsta fillColor='transparent' strokeColor='#1E1E1E' /></div>
            </div>

            <div className="horaires">
                <p>Horaires :</p>
                <p>Du lundi au samedi de 10h00 à 19h00</p>
            </div>
            <div className="detail_prestations">
                <p>Prestation sur RDV</p>
                <p>En cabine/ A domicile / En entreprise </p>
            </div>
        </footer>
    );
}