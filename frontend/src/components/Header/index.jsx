import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg";
import LogoResalib from "./../../assets/logo-resalib.png";
import PictoPhone from "../PictoPhone";
import PictoNav from "../PictoNav";
import PictoClose from "../PictoClose";
import dataNavigation from "../../data/navigation.json";
import "./style.css";
import "../Button/style.css";
import PictoCalendar from "../PictoCalendar";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import ButtonCTA from "../../components/ButtonCTA";
/* import ChildModal from "./ChildModal"; */

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   pt: 2,
   px: 4,
   pb: 3,
};

function ChildModal() {
   const [isChildModalOpen, setIsChildModalOpen] = useState(false);
   const handleOpen = () => {
      setIsChildModalOpen(true);
   };
   const handleClose = () => {
      setIsChildModalOpen(false);
   };

   return (
      <>
         <Button onClick={handleOpen}>
            <InfoOutlinedIcon color="primary" />
         </Button>
         <Modal
            open={isChildModalOpen}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
         >
            <Box sx={{ ...style, width: 200 }}>
               <IconButton
                  onClick={handleClose}
                  aria-label="Fermer"
                  sx={{
                     position: "absolute",
                     top: 8,
                     right: 8,
                     color: (theme) => theme.palette.grey[500],
                  }}
               >
                  <CloseIcon />
               </IconButton>
               <h2 id="child-modal-title">Text in a child modal</h2>
               <p id="child-modal-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </p>
            </Box>
         </Modal>
      </>
   );
}

export default function Header() {
   const [open, setOpen] = useState(false);

   const [isHeaderRDVModalOpen, setIsHeaderRDVModalOpen] = useState(false);
   const openHeaderRDVModal = () => setIsHeaderRDVModalOpen(true);
   const closeHeaderRDVModal = () => setIsHeaderRDVModalOpen(false);

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
               <Button
                  component="a"
                  className="cta-header"
                  variant="text"
                  startIcon={<CalendarMonthOutlinedIcon />}
                  onClick={openHeaderRDVModal}
               >
                  <span className="cta-text">Prendre RDV</span>
               </Button>
               <Modal
                  open={isHeaderRDVModalOpen}
                  onClose={closeHeaderRDVModal}
                  aria-labelledby="rdv-modal-title"
                  aria-describedby="rdv-modal-description"
                  closeAfterTransition
               >
                  <Box sx={style}>
                     <IconButton
                        onClick={closeHeaderRDVModal}
                        aria-label="Fermer"
                        sx={{
                           position: "absolute",
                           top: 8,
                           right: 8,
                           color: (theme) => theme.palette.grey[500],
                        }}
                     >
                        <CloseIcon />
                     </IconButton>
                     <div className="header-modal-content">
                        <div>
                           Contacter par téléphone
                        </div>
                        <Button
                           component="a"
                           href="tel:0102030405"
                           className="cta-phone"
                           startIcon={<PictoPhone />}
                        >
                           <span className="cta-text">01 02 03 04 05</span>
                        </Button>

                        <div className="divider">
                           <span>ou</span>
                        </div>

                        <div className="resalib-partenaire">
                           <div>Avec notre partenaire</div>
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

                        {/* <ChildModal /> */}
                     </div>
                  </Box>
               </Modal>
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
