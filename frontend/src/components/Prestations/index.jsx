import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/system/Box";
import Collapse from "@mui/material/Collapse";
import useMediaQuery from "@mui/material/useMediaQuery";
import parse from "html-react-parser";
import ResponsiveImage from "../../utils/ResponsiveImage";

import "./style.css";

export default function Prestations({ data, collapsible }) {
   const [openIndex, setOpenIndex] = useState(false);

   const handleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   const imageSizes = [
      { size: 600, media: "(max-width: 600px)" },
      { size: 800, media: "(min-width: 601px) and (max-width: 800px)" },
   ];

   const isMobile = useMediaQuery("(min-width:800px)");

   return (
      <section className="section-prestations">
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
                        <div className="prestation-title">
                           <h2>{parse(item.title)}</h2>
                        </div>
                        <div className="prestation-img">
                           <ResponsiveImage
                              item={item}
                              imageSizes={imageSizes}
                              imageFormats={["webp", "jpeg"]}
                              alt="Une image dynamique"
                           />
                        </div>
                        <div className="prestation-content">
                           {isMobile && collapsible ? (
                              <>
                                 <Collapse
                                    in={openIndex === index}
                                    className="collapsesize"
                                    collapsedSize={'205px'}
                                 >
                                    <span className="prestation-text">
                                       {parse(item.text)}
                                    </span>
                                    <span className="prestation-price">
                                       {parse(item.prix)}
                                    </span>
                                 </Collapse>

                                 <Box className="collapse-arrow-box">
                                    <KeyboardArrowDownIcon
                                       onClick={() => handleAccordion(index)}
                                       className={`icon-KeyboardArrowDownIcon ${openIndex === index ? "rotated" : ""}`}
                                       fontSize="large"
                                    />
                                 </Box>
                              </>
                           ) : (
                              <>
                                 <span className="prestation-text">
                                    {parse(item.text)}
                                 </span>
                                 <span className="prestation-price">
                                    {parse(item.prix)}
                                 </span>
                              </>
                           )}
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
