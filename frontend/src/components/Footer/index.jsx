import Infos, { formatPhoneNumber } from "../../utils/Infos";
import { Link, NavLink } from "react-router-dom";
import PictoPhone from "../PictoPhone";
import PictoPinpoint from "../PictoPinpoint";
import PictoMail from "../PictoMail";
import PictoFB from "../PictoFB";
import PictoInsta from "../PictoInsta";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./style.css";

export default function Header() {
   return (
      <footer className="footer-container">
         <div className="footer-contacts footer-block">
            <h2>Contacts</h2>
            <div className="footer-contacts-infos">
               <Button
                  component="a"
                  href={`tel:${Infos.tel}`}
                  className="btn-phone"
                  startIcon={<PictoPhone />}
               >
                  <span className="phone-text">
                     {formatPhoneNumber(Infos.tel)}
                  </span>
               </Button>

               <Button
                  variant="contained"
                  sx={{ gap: '1rem', mt: 3, backgroundColor: "white", color: "black", padding: "0.5rem 2rem", borderRadius: "15px", border: '1px solid var(--bg-button-primary)' }}
                  component="a"
                  href={`tel:${Infos.tel}`}
                  startIcon={<PictoPhone />}
               >
                  <span className="phone-text" style={{ color: "black" }}>
                     {formatPhoneNumber(Infos.tel)}
                  </span>
               </Button>

               <div className="footer-adress">
                  <LocationOnIcon className="icon-location" />
                  <div className="adress-text">
                     <span>{Infos.adress.street}</span>
                     <span>
                        {Infos.adress.cp} {Infos.adress.town}
                     </span>
                  </div>
               </div>

               <div className="footer-email">
                  <MailOutlineIcon className="icon-email" />
                  <div className="email-text">
                     <span>{Infos.email}</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer-infos-pratiques footer-block">
            <div className="footer-opening-hours">
               <p>Horaires :</p>
               <p>Du lundi au samedi de 9h00 à 19h00</p>
            </div>

            <div className="footer-appointment-info">
               <p>Prestation sur RDV</p>
               <p>En cabine / À domicile / En entreprise</p>
            </div>
         </div>

         <div className="footer-social-links footer-block">
            <div className="footer_fb">
               <Button
                  component="a"
                  href={`${Infos.facebook}`}
                  target="_blank"
                  className="link-facebook"
                  startIcon={<FacebookIcon className="icon-facebook" />}
                  title="Facebook Horizon-bien être"
                  rel="noopener noreferrer"
               />
            </div>
            <div className="footer_insta">
               <Button
                  component="a"
                  href={`${Infos.instagram}`}
                  target="_blank"
                  className="link-instagram"
                  startIcon={<InstagramIcon className="icon-instagram" />}
                  title="Instagram Horizon-bien être"
                  rel="noopener noreferrer"
               />
            </div>
         </div>

         <div className="plan-de-site footer-block">
            <ul>
               <li>
                  <NavLink to="/">Accueil</NavLink>
               </li>
               <li>
                  <NavLink to="/massages">Massages</NavLink>
               </li>
               <li>
                  <NavLink to="/soins-energetiques">Soins énergétiques</NavLink>
               </li>
               <li>
                  <NavLink to="/formules-bien-etre">Formules bien-être</NavLink>
               </li>
               <li>
                  <NavLink to="/cartes-cadeaux">Cartes Cadeaux</NavLink>
               </li>
               <li>
                  <NavLink to="/contact">Nous contacter</NavLink>
               </li>
               <li>
                  <NavLink to="/le-salon">Le salon</NavLink>
               </li>
            </ul>
         </div>

         <div className="legal-links footer-block">
            <ul>
               <li>
                  <NavLink to="/mentions-legales" className="legal-link">
                     Mentions légales
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/politique-confidentialite"
                     className="legal-link"
                  >
                     Politique de confidentialité
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/cgv" className="legal-link">
                     CGV
                  </NavLink>
               </li>
            </ul>
         </div>

         <div className="copyright footer-block">
            <p>© 2025 Horizon Bien-être</p>
            <p>Tous droits réservés</p>
         </div>
      </footer>
   );
}
