import React, { useState } from "react";
import LogoResalib from "./../../assets/logo-resalib.png";
import PictoPhone from "../PictoPhone";
import PictoCalendar from "../PictoCalendar";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
/* import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"; */
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";
import "../Button/style.css";

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
            <InfoOutlinedIcon className="icon-test" />
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

export default function HeaderModalCTA() {
   /* const [isChildModalOpen, setIsChildModalOpen] = useState(false);
   const handleOpen = () => {
      setIsChildModalOpen(true);
   };
   const handleClose = () => {
      setIsChildModalOpen(false);
   }; */
   const [isHeaderRDVModalOpen, setIsHeaderRDVModalOpen] = useState(false);
   const openHeaderRDVModal = () => setIsHeaderRDVModalOpen(true);
   const closeHeaderRDVModal = () => setIsHeaderRDVModalOpen(false);

   return (
      <div className="header-cta">
         <Button
            component="a"
            className="cta-header"
            variant="text"
            startIcon={<CalendarMonthOutlinedIcon className="icon-calendar" />}
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
                  <div>Contacter par téléphone</div>
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
   );
}
