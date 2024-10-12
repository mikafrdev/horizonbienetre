import styled from 'styled-components'
import "./style.css";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export default function Header() {

    return (
        <footer>
            <h2>Contacts</h2>
            <ul className='contacts'>
                <li className='footer_phone'>Afficher le téléphone</li>
                <li className='footer_adress'>45 rue Claude Bernard<br /> 59200 Tourcoing</li>
                <li className='footer_mail'>horizonbienetre5@gmail.com</li>
                <li className='footer_fb'></li>
                <li className='footer_insta'></li>
            </ul>
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