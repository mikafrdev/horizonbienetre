import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg";
import ButtonCTA from "../../components/ButtonCTA";
import Resalib from "../../components/Resalib";
import LogoResalib from "./../../assets/logo-resalib.png";
import PictoPhone from "../PictoPhone";
import PictoNav from "../PictoNav";
import PictoClose from "../PictoClose";
import ModalWrapper from "../ModalWrapper";
import dataNavigation from "../../data/navigation.json";
import "./style.css";
import ButtonPhone from "../ButtonPhone";

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
               {/* <ButtonCTA variant="cta-header" /> */}
               <ModalWrapper trigger={<ButtonCTA variant="cta-header" />}>
                  <div className="header-modal-content">
                     <ButtonPhone />
                     {/* <hr className="separator"></hr> */}
                     <div class="divider"><span>ou</span></div>
                     <div className="resalib-partenaire">
                        <span>Avec notre partenaire</span>
                        <img src={LogoResalib} alt="Logo Résalib" />
                     </div>
                     <ButtonCTA variant="cta-resalib" />
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
