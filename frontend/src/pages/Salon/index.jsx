import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./style.css";

export default function Salon() {
   const imageModules = import.meta.glob(
      "../../assets/salon/*.{jpg,jpeg,png}",
      {
         eager: true,
      }
   );

   const itemData = Object.entries(imageModules).map(([path, module]) => ({
      img: module.default,
      title: path
         .split("/")
         .pop()
         .replace(/\.\w+$/, ""),
   }));

   return (
      <main className="main-content">
         <section className="presentation presentation-contact">
            <h1>Le salon</h1>
         </section>
         <section className="section-salon">
            <Box>
               <ImageList variant="masonry" gap={1}>
                  {itemData.map((item) => (
                     <ImageListItem key={item.img}>
                        <img
                           srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                           src={`${item.img}?w=248&fit=crop&auto=format`}
                           alt={item.title}
                           loading="lazy"
                        />
                     </ImageListItem>
                  ))}
               </ImageList>
            </Box>
         </section>
      </main>
   );
}
