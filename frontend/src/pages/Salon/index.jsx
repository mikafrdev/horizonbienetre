import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ResponsiveImage from "../../utils/ResponsiveImage";
import ImgBea from "../../assets/Bea-photo-contours.png";
import dataSalon from "../../data/salon.json";
import "./style.css";

export default function Salon() {

   /* const imageModules = import.meta.glob(
      "../../assets/salon/*.{jpg,jpeg,png}",
      "/salon/*.{jpg,jpeg,png}",
      {
         eager: true,
      }
   );

   console.log("imageModules : ", imageModules);

   const itemData = Object.entries(imageModules).map(([path, module]) => ({
      img: module.default,
      title: path
         .split("/")
         .pop()
         .replace(/\.\w+$/, ""),
   }));

   console.log("itemData : ", itemData); */

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
                  {dataSalon.map((item) => (
                     <ImageListItem key={item.img}>
                        {/* <span>{item.img}</span> */}
                        
                        <picture>
                           <source srcSet="Massage-relaxant-pose-de-pierres-chaudes-600.webp" media="(max-width: 600px)" type="image/webp" />
                           <img alt="Une image dynamique" loading="lazy" sizes="(max-width: 600px) 100vw, (max-width: 800px) 80vw, (max-width: 1024px) 70vw, 50vw" srcSet="Massage-relaxant-pose-de-pierres-chaudes-800.webp" />
                        </picture>


                        {/* <img
                           srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                           src={`${item.img}?w=248&fit=crop&auto=format`}
                           alt={item.title}
                           loading="lazy"
                        /> */}

                        {/* <picture>
                           <source srcSet="/src/assets/salon/rosier-fleurissant-roses-pink-jardin-printemps-800.png-600.webp" media="(max-width: 600px)" type="image/webp" />
                           <img alt="Une image dynamique" loading="lazy" sizes="(max-width: 600px) 100vw, (max-width: 800px) 80vw, (max-width: 1024px) 70vw, 50vw" srcSet="/src/assets/salon/rosier-fleurissant-roses-pink-jardin-printemps-800.png-800.webp" />
                        </picture> */}


                        <ResponsiveImage
                           item={item}
                           imageFormats={["webp", "jpeg"]}
                           alt="Une image dynamique"
                        />


                     </ImageListItem>
                  ))}
               </ImageList>
            </Box>
         </section>
      </main>
   );
}
