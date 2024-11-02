import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import Fade from "../Fade"; */
import Logo from "./../../assets/Logo.jpg";
import PictoPhone from "./../PictoPhone";
import IconMenu from "./../../assets/menu.png";
import Navigation from "../Navigation";
import "./style.css";

export default function Header() {
    const [displayNav, setdisplayNav] = useState(false);
    const toggle = () => {
        console.log("CLIC !!!!!");
        setdisplayNav((o) => !o)
    };

    return (
        <header>
            <Navigation displayNav={displayNav} />
            <div>
                <Link to="/">
                    <img src={Logo} alt="Logo Horizon Bien Etre" />
                </Link>
            </div>
            <PictoPhone
                className="picto_phone_header"
                fillPhoneColor="#1E1E1E"
                fillCallColor="1E1E1E"
            />
            <nav>
                <img src={IconMenu} alt="Menu icon" onClick={toggle} />
            </nav>
        </header>
    );
}
