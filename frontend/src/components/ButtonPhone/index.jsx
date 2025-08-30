import Button from "@mui/material/Button";
import PictoPhone from "../PictoPhone";

import "./style.css";

export default function ButtonPhone({ variant }) {
   return (
      <div className={variant ? variant : undefined}>
         <a
            className="phone-btn"
            href="tel:+0102030405"
            target="_blank"
            rel="noopener noreferrer"
         >
            <PictoPhone />
            <span className="cta-text">01 02 03 04 05</span>
         </a>
      </div>
   );
}
