import Infos, {formatPhoneNumber} from "../../utils/Infos";
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
      <footer>
         <div className="footer-container">
            <div className="footer-contacts">
               <h2>Contacts</h2>

               <div className="footer-contacts-infos">
                  <Button
                     component="a"
                     href={`tel:${Infos.tel}`}
                     className="btn-phone"
                     startIcon={<PictoPhone />}
                  >
                     <span className="phone-text">{formatPhoneNumber(Infos.tel)}</span>
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

            <div className="footer-social-links">
               <div className="footer_fb">
                  <Button
                     component="a"
                     href={`${Infos.facebook}`}
                     target="_blank"
                     className="link-facebook"
                     startIcon={<FacebookIcon className="icon-facebook" />}
                     title="Facebook Horizon-bien être"
                     rel="noopener noreferrer"
                  ></Button>
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
                  ></Button>
               </div>
            </div>

            

            <div className="horaires">
               <p>Horaires :</p>
               <p>Du lundi au samedi de 9h00 à 19h00</p>
            </div>
            <div className="detail_prestations">
               <p>Prestation sur RDV</p>
               <p>En cabine/ A domicile / En entreprise </p>
            </div>
         </div>
      </footer>
   );
}
