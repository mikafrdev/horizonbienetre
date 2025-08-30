import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg";
import Resalib from "../../components/Resalib";
import LogoResalib from "./../../assets/logo-resalib.png";
import PictoPhone from "../PictoPhone";
import PictoNav from "../PictoNav";
import PictoClose from "../PictoClose";
import ModalWrapper from "../ModalWrapper";
import dataNavigation from "../../data/navigation.json";
import "./style.css";
import "../Button/style.css";
import ButtonPhone from "../ButtonPhone";
import PictoCalendar from "../PictoCalendar";

/* import Button from "../../components/Button"; */
/* import Modal from '@mui/material/Modal'; */
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Button from "@mui/material/Button";

export default function Header() {
   const [open, setOpen] = useState(false);

   const toggleNavBar = () => {
      console.log("Toggle NavBar");
      setOpen(!open);
   };

   if (open) {
      document.body.classList.add("active-navbar");
   } else {
      document.body.classList.remove("active-navbar");
   }

   useEffect(() => {
      const handleScroll = () => {
         const header = document.querySelector(".site-header");
         if (window.scrollY > 50) {
            header.classList.add("sticking");
         } else {
            header.classList.remove("sticking");
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const handleNavClick = () => {
      if (window.innerWidth < 1024) {
         toggleNavBar();
      }
   };

   const navItems = dataNavigation.map((item, index) => (
      <li key={index} onClick={handleNavClick}>
         <NavLink to={item.UrlPage}>{item.PageName}</NavLink>
      </li>
   ));

   return (
      <header className="site-header">
         <div className="header-container">
            <div className="header-logo">
               <Link to="/">
                  <img
                     className="logo"
                     src={Logo}
                     alt="Logo Horizon Bien Etre"
                  />
               </Link>
            </div>
            <div className="header-desktop">
               <ul>{navItems}</ul>
            </div>
            <div className="header-cta">
               <ModalWrapper
                  trigger={
                     <Button
                        component="a"
                        className="cta-header"
                        variant="text"
                        startIcon={<CalendarMonthOutlinedIcon />}
                     >
                        <span className="cta-text">Prendre RDV</span>
                     </Button>
                  }
               >
                  <div className="header-modal-content">
                     <Button
                        component="a"
                        className="cta-phone"
                        startIcon={<PictoPhone />}
                     >
                        <span className="cta-text">01 02 03 04 05</span>
                     </Button>

                     <div className="divider">
                        <span>ou</span>
                     </div>
                     <div className="resalib-partenaire">
                        <span>Avec notre partenaire</span>
                        <img src={LogoResalib} alt="Logo Résalib" />
                     </div>
                     <Button
                        component="a"
                        className="cta-resalib"
                        startIcon={<PictoCalendar />}
                        href="https://www.resalib.fr/praticien/108707-horizon-bien-etre-centre-de-bien-etre-tourcoing#top"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <span className="cta-text">Prendre RDV</span>
                     </Button>
                  </div>
               </ModalWrapper>
            </div>
            <nav className="nav-toggle">
               <PictoNav
                  onClick={toggleNavBar}
                  strokeColor="var(--navbar-picto)"
               />
            </nav>

            {open && (
               <div className="navbar">
                  <div onClick={toggleNavBar} className="overlay"></div>
                  <div className="navbar-content">
                     <ul>{navItems}</ul>
                  </div>
                  <div className="navbar-close">
                     <button onClick={toggleNavBar}>
                        <PictoClose fillColor="#666" stroleColor="#666" />
                     </button>
                  </div>
               </div>
            )}
         </div>
      </header>
   );
}
