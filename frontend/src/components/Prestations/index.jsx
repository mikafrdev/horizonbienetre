import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
/* import CircularProgress from '@mui/joy/CircularProgress'; */
import Box from "@mui/system/Box";
import Collapse from "@mui/material/Collapse";

import "./style.css";

export default function Prestations({ data, title }) {
   const [openIndex, setOpenIndex] = useState(false);
   /* const [loading, setLoading] = useState({}); */

   const handleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   const imageSizes = [
      { size: 600, media: "(max-width: 600px)" },
      { size: 800, media: "(min-width: 601px) and (max-width: 800px)" },
   ];

   const imageFormats = ["webp", "jpg", "png"];

   // Initialiser le loading à true pour chaque image dès que le composant est monté
   /* useEffect(() => {
      const initialLoading = {};
      data.forEach((item, index) => {
         initialLoading[index] = true; 
      });
      setLoading(initialLoading);
   }, [data]);

   const handleImageLoad = (index) => {
      setLoading((prevLoading) => ({ ...prevLoading, [index]: false }));
   };

   const handleImageError = (index) => {
      setLoading((prevLoading) => ({ ...prevLoading, [index]: false }));
      console.error(`Erreur de chargement de l'image à l'index ${index}`);
   }; */

   return (
      <section className="section-prestations">
         {title && <h2 className="section-prestations__title">{title}</h2>}
         <div className="prestations-list">
            {data.map((item, index) => {
               const isLast = index === data.length - 1;

               return (
                  <React.Fragment key={index}>
                     <div
                        className={`prestation-card prestation-card--shadow ${
                           index % 2 !== 0 ? "reverse" : ""
                        }`}
                     >
                        <div className="prestation-img" style={{ position: "relative" }}>
                           {/* Affichage du loader uniquement si l'image est en cours de chargement */}
                           {/* {loading[index] && (
                              <div className="image-loader">
                                 
                              </div>
                           )} */}

                           <picture>
                              {imageSizes.map(({ size, media }) =>
                                 imageFormats.map((format) => (
                                    <source
                                       key={`${size}-${format}`}
                                       srcSet={`${item.img}-${size}.${format}`}
                                       media={media}
                                       type={`image/${format}`}
                                    />
                                 ))
                              )}

                              <img
                                 srcSet={`${item.img}-800.webp`}
                                 alt={item.title} // Utilisation de `item.title` pour l'attribut alt
                                 loading="lazy"
                                 sizes="(max-width: 600px) 100vw, (max-width: 800px) 80vw, (max-width: 1024px) 70vw, 50vw"
                                 /* onLoad={() => handleImageLoad(index)}
                                 onError={() => handleImageError(index)} // Si l'image échoue
                                 onLoadStart={() =>
                                    setLoading((prevLoading) => ({
                                       ...prevLoading,
                                       [index]: true,
                                    }))
                                 } */
                              />
                           </picture>
                        </div>
                        <div className="prestation-content">
                           <h2>{item.title}</h2>

                           <Collapse
                              in={openIndex === index}
                              className="collapsesize"
                              collapsedSize={120}
                           >
                              <span className="prestation-text">{item.text}</span>
                              <span className="prestation-price">{item.prix}</span>
                           </Collapse>

                           <Box
                              sx={{
                                 width: "100%",
                                 bgcolor: "#FFF",
                                 textAlign: "center",
                              }}
                           >
                              <KeyboardArrowDownIcon
                                 onClick={() => handleAccordion(index)}
                                 className={`icon-KeyboardArrowDownIcon ${openIndex === index ? "rotated" : ""}`}
                                 fontSize="large"
                              />
                           </Box>
                        </div>
                     </div>
                     {!isLast && <hr className="separator" />}
                  </React.Fragment>
               );
            })}
         </div>
      </section>
   );
}
