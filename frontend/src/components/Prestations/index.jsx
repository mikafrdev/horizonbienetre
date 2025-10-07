import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/system/Box";
import Collapse from "@mui/material/Collapse";

import "./style.css";

export default function Prestations({ data, title }) {
   const [openIndex, setOpenIndex] = useState(false);
   const handleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   const imageSizes = [
      { size: 600, media: "(max-width: 600px)" },
      { size: 800, media: "(min-width: 601px) and (max-width: 800px)" },
   ];

   const imageFormats = ["webp", "jpg", "png"];
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
                        <div className="prestation-img">
                          
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
                                    alt={title}
                                    loading="lazy"
                                    sizes="(max-width: 600px) 100vw, (max-width: 800px) 80vw, (max-width: 1024px) 70vw, 50vw"
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
