import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImgBea from "../../assets/Bea-photo-contours.png";
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
         <section className="section-presentation salon">
            <h1>Le salon</h1>
         </section>
         <section className="section-salon">
            <h2>
               Offrez-vous une expérience unique de bien-être et d’harmonie.
            </h2>

            <div className="salon-description">
               <div className="salon-img">
                  <img src={ImgBea} alt="Salon Horizon Bien Être" />
               </div>
               <div className="salon-text">
                  <p>
                     Mon objectif est de vous proposer un véritable voyage
                     sensoriel et revitalisant, adapté à vos besoins. Que vous
                     recherchiez une détente profonde, un soulagement du stress,
                     une libération des blocages énergétiques ou une reconnexion
                     avec votre essence intérieure, je mets à votre service mon
                     savoir-faire et des techniques variée pour vous accompagner
                     vers un mieux-être durable.
                  </p>
                  <p>
                     Tous mes soins sont réalisés avec des produits bio et
                     naturels, respectueux de votre peau et de votre énergie,
                     pour une expérience authentique et bienfaisante.
                  </p>
                  <p>
                     Prenez le temps de vous recentrer et laissez-vous porter
                     par des instants de pure relaxation.
                  </p>
               </div>
            </div>
         </section>
         <section className="section-salon-gallery">
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
