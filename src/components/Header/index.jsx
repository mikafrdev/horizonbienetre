import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg";
import PictoPhone from "./../PictoPhone";
import IconMenu from "./../../assets/menu.png";
import dataNavigation from "../../data/navigation.json";

/* import Fade from "../Fade"; */
/* import Navigation from "../Navigation"; */
import "./style.css";

export default function Header() {
    const [displayNav, setdisplayNav] = useState(false);
    const [state, setState] = useState(false);
    /* const className = state === VISIBLE ? "fade" : "fade out"; */

    let refNavigation = useRef();

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    })

    const handleClickOutside = (e) => {
        if (refNavigation.current && !refNavigation.current.contains(e.target)) setdisplayNav(false)
        
    };
    const toggle = () => {
        /* console.log("CLIC !!!!!"); */
        setdisplayNav((o) => !o);
    };

    console.log("Navigation - displayNav : ", displayNav);

    return (
        <header>
            {displayNav ? (
                <div
                    /* className={`navigation ${className}`} */
                    className="navigation fade"
                    style={{ minHeight: screen.availHeight }}
                    ref={refNavigation}
                >
                    <ul>
                        {dataNavigation.map((item, index) => (
                            <li key={index} onClick={toggle} className="test">
                                <NavLink to={item.UrlPage}>
                                    {item.PageName}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                ""
            )}
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
