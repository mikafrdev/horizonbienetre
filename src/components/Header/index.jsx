import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg";
import PictoPhone from "./../PictoPhone";
import IconMenu from "./../../assets/menu.png";
import PictoNav from "../PictoNav";
import NavBar from "../NavBar";
import "./style.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggleNavBar = () => {
        setOpen(!open);
    };

    if (open) {
        document.body.classList.add("active-navbar");
    } else {
        document.body.classList.remove("active-navbar");
    }

    // console.log("primaryHeader : ", primaryHeader);
    // console.log("scrollWatcher : ", scrollWatcher);
    
    useEffect(() => {
        const primaryHeader = document.querySelector(".primary-header");
        const scrollWatcher = document.querySelector(".data-scroll-watcher");
        
        const navObserver = new IntersectionObserver(
            (entries) => {
                console.log(entries)
                primaryHeader.classList.toggle(
                    "sticking",
                    !entries[0].isIntersecting
                );
            },
            { rootMargin: "50px 0px 0px 0px" }
        );
    
        navObserver.observe(scrollWatcher);
        
    }, []);


    return (
        <>
            <div className="data-scroll-watcher"></div>

            <header className="primary-header">
                <NavBar
                    open={open}
                    setOpen={setOpen}
                    toggleNavBar={toggleNavBar}
                />
                <div>
                    <Link to="/">
                        <img className="logo" src={Logo} alt="Logo Horizon Bien Etre" />
                    </Link>
                </div>
                <PictoPhone
                    className="picto_phone_header"
                    fillPhoneColor="#1E1E1E"
                    fillCallColor="1E1E1E"
                />
                <nav onClick={toggleNavBar}>
                    <PictoNav fillColor="#666" stroleColor="#666" />
                    {/* <img src={IconMenu} alt="Menu icon" onClick={handlerClick} /> */}
                    {/* <img src={`${open ? IconClose : IconMenu}`} alt="Menu icon" onClick={toggleNavBar} /> */}
                    {/* {open
                    ? [<PictoClose fillColor="#666" stroleColor="#666" />]
                    : [<PictoNav fillColor="#666" stroleColor="#666" />]} */}
                    {/* {open && <PictoClose fillColor="#666" stroleColor="#666" />}
                {!open && <PictoNav fillColor="#666" stroleColor="#666" />} */}
                </nav>
            </header>
        </>
    );
}
