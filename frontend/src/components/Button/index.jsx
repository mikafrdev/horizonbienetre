import { Button as MuiButton } from '@mui/material'; // Importer le composant Button de MUI
import { SvgIcon } from '@mui/material'; // Si tu utilises des icônes personnalisées en SVG

import "./style.css";

export default function Button({ component: Component = "button", variant, icon: Icon, href, children }) {
  return (
    <div className={variant ? variant : undefined}>
      <MuiButton
        component={Component}  // Utilisation de la prop component pour rendre soit un bouton soit un lien
        href={href || undefined} // Si component="a", utilise href pour l'URL
        target="_blank" // Ouvre le lien dans un nouvel onglet
        rel="noopener noreferrer"
        variant="contained" // Exemple de variante, tu peux personnaliser
        sx={{ padding: '8px 16px', borderRadius: '8px' }} // Styles personnalisés avec sx
      >
        {/* Si une icône est fournie, la rendre avant le texte */}
        {Icon && <Icon sx={{ marginRight: 1 }} />}
        <span className="cta-text">{children}</span>
      </MuiButton>
    </div>
  );
}
