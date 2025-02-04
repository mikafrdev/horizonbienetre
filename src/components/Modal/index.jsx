import { useState, useEffect, useRef } from "react";
import Infos from "../../utils/Infos";
import PictoClose from "../PictoClose";
import PictoPhone from "./../PictoPhone";
import "./style.css";

export default function Modal({ children }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        document.body.classList.toggle("active-modal");
    };

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                {children}
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="modal-close">
                            <button onClick={toggleModal}>
                                <PictoClose
                                    fillColor="#666"
                                    stroleColor="#666"
                                />
                            </button>
                        </div>
                        <a className="CTA_call glow-on-hover" href={`tel:${Infos.tel}`}>
                            <PictoPhone
                                className="picto_phone_header"
                                fillPhoneColor="#f5f5f5"
                                fillCallColor="#f5f5f5"
                            />
                            <span>Appeler le {Infos.tel}</span>
                        </a>
                        <p>Appelez nous pour :</p>
                        <ul>
                            <li>Prendre rendez-vous</li>
                            <li>Commander une carte cadeau</li>
                            <li>En savoir plus sur nos prestations</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
