import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/system/Box";
import Collapse from "@mui/material/Collapse";
import useMediaQuery from "@mui/material/useMediaQuery";
import parse from "html-react-parser";
import ResponsiveImage from "../../utils/ResponsiveImage";
import "./style.css";

export default function Prestations({ imagesData, collapsible }) {
   const [openIndex, setOpenIndex] = useState(false);

   const handleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   const isMobile = useMediaQuery("(min-width:800px)");

   return (
      <section className="section-prestations">
         <div className="prestations-list">
            {imagesData.map((imageData, index) => {
               const isLast = index === imagesData.length - 1;

               return (
                  <React.Fragment key={index}>
                     <div
                        className={`prestation-card prestation-card--shadow ${
                           index % 2 !== 0 ? "reverse" : ""
                        }`}
                     >
                        <div className="prestation-title">
                           <h2>{parse(imageData.title)}</h2>
                        </div>
                        <div className="prestation-img">
                           <ResponsiveImage
                              imageData={imageData}
                              alt={imageData.alt}
                           />
                        </div>
                        <div className="prestation-content">
                           {isMobile && collapsible ? (
                              <>
                                 <Collapse
                                    in={openIndex === index}
                                    className="collapsesize"
                                    collapsedSize={"205px"}
                                 >
                                    <span className="prestation-text">
                                       {parse(imageData.text)}
                                    </span>
                                    <span className="prestation-price">
                                       {parse(imageData.prix)}
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
                                    {parse(imageData.text)}
                                 </span>
                                 <span className="prestation-price">
                                    {parse(imageData.prix)}
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
