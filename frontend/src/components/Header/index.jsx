import React from "react";
import dataNavigation from "../../data/navigation.json";
import { Link, NavLink } from "react-router-dom";
import {
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Drawer,
   CssBaseline,
   AppBar,
   Toolbar,
   IconButton,
   Box,
   Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import LogoSVG from "./../LogoSVG";
import HeaderModalCTA from "../HeaderModalCTA";

import "./style.css";
import "../Button/style.css";

const drawerWidth = 240;

export default function Header() {
   const isMobile = useMediaQuery("(max-width:1024px)");
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const handleNavClick = () => {
      setMobileOpen(false);
   };

   const navItems = dataNavigation.map((item, index) => (
      <ListItem key={index} disablePadding onClick={handleNavClick}>
         <ListItemButton
            className="nav-link"
            component={NavLink}
            to={item.UrlPage}
         >
            <ListItemText primary={item.PageName} />
         </ListItemButton>
      </ListItem>
   ));

   const drawer = (
      <>
         <Toolbar
            sx={{
               backgroundColor: "white",
            }}
         >
            <Typography
               variant="h6"
               component="div"
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
               }}
            >
               <Link
                  to="/"
                  /* onClick={handleLogoClick} */
                  aria-label="Retour à la page d'accueil"
                  style={{
                     textDecoration: "none",
                  }}
               >
                  <LogoSVG color="#8fc3d3" text="true" />
               </Link>
            </Typography>
         </Toolbar>
         <Box className="header-mobile">
            <List
               sx={{
                  padding: "0",
               }}
            >
               {navItems}
            </List>
         </Box>
      </>
   );

   return (
      <>
         <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" className="site-header">
               <Toolbar className="header-container">
                  <div className="header-logo">
                     <Link to="/">
                        {isMobile ? (
                           <LogoSVG color="#8fc3d3" text="true" />
                        ) : (
                           <LogoSVG color="#8fc3d3" />
                        )}
                     </Link>
                  </div>

                  {!isMobile && (
                     <div className="header-desktop">
                        <List>{navItems}</List>
                     </div>
                  )}

                  <HeaderModalCTA />

                  {/* Icon Menu */}
                  {isMobile && (
                     <div className="header-drawer">
                        <IconButton edge="end" onClick={handleDrawerToggle}>
                           <MenuIcon className="icon-menu" />
                        </IconButton>
                     </div>
                  )}
               </Toolbar>
            </AppBar>

            {isMobile ? (
               <Drawer
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                     keepMounted: true,
                  }}
                  sx={{
                     "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        backgroundColor: "var(--bg-tertiary)",
                     },
                  }}
               >
                  {drawer}
               </Drawer>
            ) : null}
         </Box>
      </>
   );
}
