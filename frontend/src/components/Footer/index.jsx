import Infos, { formatPhoneNumber } from "../../utils/Infos";
import dataNavigation from "../../data/navigation.json";
import { NavLink } from "react-router-dom";
import PictoPhone from "../PictoPhone";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { matomoTrackEvent } from "../MatomoTracking";
import "./style.css";

export default function Footer() {
   return (
      <footer className="footer-container">
         <div className="footer-contact footer-block">
            <div className="footer-contact-infos">
               <Button
                  variant="contained"
                  className="btn-phone"
                  component="a"
                  href={`tel:${Infos.tel}`}
                  startIcon={<PictoPhone />}
                  onClick={() =>
                     matomoTrackEvent("Téléphone", "Click", "Footer", 1)
                  }
               >
                  <span className="phone-text" style={{ color: "black" }}>
                     {formatPhoneNumber(Infos.tel)}
                  </span>
               </Button>

               <div className="footer-email">
                  <MailOutlineIcon className="icon-email" />
                  <div className="email-text">
                     <span>
                        <a href="mailto:horizonbienetre5@gmail.com">
                           {Infos.email}
                        </a>
                     </span>
                  </div>
               </div>

               <div className="footer-adress">
                  <LocationOnIcon className="icon-location" />
                  <div className="adress-text">
                     <span>{Infos.adress.street}</span>
                     <span>
                        {Infos.adress.cp} {Infos.adress.town}
                     </span>
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

         <div className="plan-de-site footer-block">
            <ul>
               {dataNavigation.map((item, index) => (
                  <li key={index}>
                     <NavLink to={item.UrlPage}>{item.PageName}</NavLink>
                     <span>{index !== dataNavigation.length - 1 && " | "}</span>
                  </li>
               ))}
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
         <div className="copyright footer-block">
            <p>© 2025 Horizon Bien-être</p>
            <p>Tous droits réservés</p>
         </div>
      </footer>
   );
}
