import Infos from "../../utils/Infos";
import PictoPhone from "../PictoPhone";
import PictoPinpoint from "../PictoPinpoint";
import PictoMail from "../PictoMail";
import PictoFB from "../PictoFB";
import PictoInsta from "../PictoInsta";
import ModalWrapper from "../ModalWrapper";
import "./style.css";

export default function ContactInfos() {
    return (
        <>
            <div className="contacts">
                <h2>Contacts</h2>

                <div className="contacts_infos">
                    <div>
                        <ModalWrapper>
                            <PictoPhone
                                className="picto_phone_footer"
                                fillPhoneColor="#1E1E1E"
                                fillCallColor="1E1E1E"
                            />
                        </ModalWrapper>
                    </div>
                    <div>
                        <ModalWrapper>
                            <a href="#" className="display_phone">
                                Afficher le téléphone
                            </a>
                        </ModalWrapper>
                    </div>

                    <div className="footer_adress">
                        <PictoPinpoint strokeColor="#1E1E1E" />
                    </div>
                    <div>
                        {Infos.adress.street} <br /> {Infos.adress.cp}
                        {Infos.adress.town}
                    </div>

                    <div className="footer_mail">
                        <PictoMail strokeColor="#1E1E1E" />
                    </div>
                    <div>{Infos.email}</div>
                </div>
            </div>

            <div className="contacts_infos_next">
                <div className="footer_fb">
                    <a
                        href={`${Infos.facebook}`}
                        target="blank"
                        title="Facebook Horizon-bien être"
                    >
                        <PictoFB strokeColor="#1E1E1E" strokeWidth="5" />
                    </a>
                </div>
                <div className="footer_insta">
                    <a
                        href={`${Infos.instagram}`}
                        target="blank"
                        title="Instagram Horizon-bien être"
                    >
                        <PictoInsta
                            fillColor="transparent"
                            strokeColor="#1E1E1E"
                        />
                    </a>
                </div>
            </div>

            <div className="horaires">
                <p>Horaires :</p>
                <p>Du lundi au samedi de 9h00 à 19h00</p>
            </div>
            <div className="detail_prestations">
                <p>Prestation sur RDV</p>
                <p>En cabine/ A domicile / En entreprise </p>
            </div>
        </>
    );
}
