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
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Logo from "./../../assets/Logo.jpg";
import HeaderModalCTA from "../HeaderModalCTA";

import "./style.css";
import "../Button/style.css";

const drawerWidth = 240;

export default function Header() {
   const theme = useTheme();
   const isMobile = useMediaQuery("(max-width:1280px)");
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
            component={NavLink}
            to={item.UrlPage}
            
            /* sx={{
               "&.active": {
                  backgroundColor: "var(--color-primary)",
                  color: "white",
               },
            }} */
         >
            <ListItemText primary={item.PageName} />
         </ListItemButton>
      </ListItem>
   ));

   const drawer = (
      <>
         <Toolbar>
            <Typography
               variant="h6"
               component="div"
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "1rem",
               }}
            >
               <Link to="/">
                  <img
                     className="logo"
                     src={Logo}
                     alt="Logo Horizon Bien Etre"
                  />
               </Link>
            </Typography>
         </Toolbar>
         <Box
         className="header-mobile"
            sx={{
               
            }}
         >
            <List>{navItems}</List>
         </Box>
      </>
   );

   return (
      <>
         <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" className="site-header">
               <Toolbar
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     width: "100%",
                     height: "5rem",
                     minHeight: "5rem !important",
                  }}
               >
                  {/* ⬅️ Logo */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                     <Link to="/">
                        <img
                           className="logo"
                           src={Logo}
                           alt="Logo Horizon Bien Etre"
                        />
                     </Link>
                  </Box>

                  {!isMobile && (
                     <Box className="header-desktop" sx={{}}>
                        <List sx={{}}>{navItems}</List>
                     </Box>
                  )}

                  {/* CTA + ☰ MenuIcon (mobile only) */}
                  <Box
                     sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                     }}
                  >
                     <HeaderModalCTA />
                  </Box>
                  <Box>
                     {isMobile && (
                        <IconButton edge="end" onClick={handleDrawerToggle}>
                           <MenuIcon className="icon-menu" />
                        </IconButton>
                     )}
                  </Box>
               </Toolbar>
            </AppBar>

            {/* Menu Mobile */}
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
