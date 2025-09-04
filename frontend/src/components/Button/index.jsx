import { Button as MuiButton } from "@mui/material";
import { SvgIcon } from "@mui/material";

import "./style.css";

export default function Button({
   component: Component = "button",
   variant,
   icon: Icon,
   href,
   children,
}) {
   return (
      <div className={variant ? variant : undefined}>
         <MuiButton
            component={Component}
            href={href || undefined}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{ padding: "8px 16px", borderRadius: "8px" }}
         >
            {Icon && <Icon sx={{ marginRight: 1 }} />}
            <span className="cta-text">{children}</span>
         </MuiButton>
      </div>
   );
}
