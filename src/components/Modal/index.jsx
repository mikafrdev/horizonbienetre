import { useState, useEffect } from "react";
import PictoClose from "../PictoClose";
import dataNavigation from "../../data/navigation.json";
import "./style.css";

export default function Modal({ children }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Découvrir le soin
            </button>

            <div className="modal-close">
                <button onClick={toggleModal}>
                    <PictoClose fillColor="#666" stroleColor="#666" />
                </button>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    {children}
                </div>
            )}
        </>
    );
}
