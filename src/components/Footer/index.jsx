import PictoPhone from "../PictoPhone";
import PictoFB from "../PictoFB";
import "./style.css";
import PictoInsta from "../PictoInsta";

export default function Header() {

    return (
        <footer>
            
            <div className='contacts'>
                <h2>Contacts</h2>

                <div className="contacts_infos">
                    <div className='footer_phone'><PictoPhone fillColor='#8FC3D3' strokeColor='#8FC3D3' /></div>
                    <div>Afficher le téléphone</div>

                    <div className='footer_adress'><PictoPhone fillColor='#8FC3D3' strokeColor='#8FC3D3' /></div>
                    <div>45 rue Claude Bernard<br /> 59200 Tourcoing</div>

                    <div className='footer_mail'><PictoPhone fillColor='#8FC3D3' strokeColor='#8FC3D3' /></div>
                    <div>horizonbienetre5@gmail.com</div>
                </div>

            </div>

            <div className="contacts_infos_next">
                <div className='footer_fb'><PictoFB fillColor='#1E1E1E' strokeColor='#1E1E1E' /></div>
                <div className='footer_insta'><PictoInsta fillColor='transparent' strokeColor='#1E1E1E' /></div>
            </div>

            <div className="horaires">
                <p>Horaires :</p>
                <p>Du lundi au samedi de 10h00 à 19h00</p>
            </div>
            <div className="detail_prestations">
                <p>Horaires :</p>
                <p>Du lundi au samedi de 10h00 à 19h00</p>
            </div>
        </footer>
    );
}