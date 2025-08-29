import Button from "@mui/material/Button";
import PictoPhone from "../PictoPhone";

import "./style.css";

export default function ButtonPhone({variant}) {
   return (
      <div className={variant ? variant : undefined}>
         <Button
            className="phone-btn"
            startIcon={<PictoPhone />}
            href="tel:+0102030405"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
               "--variant-textColor": "var(--color-secondary)",
            }}
         >
            <span className="cta-text">01 02 03 04 05</span>
         </Button>
      </div>
   );
}
