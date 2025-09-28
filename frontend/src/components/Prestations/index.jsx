import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import truncateText from "../../utils/utils";

import "./style.css";

export default function Prestations({ data, title }) {
   const images = import.meta.glob("../../assets/*", {
      eager: true,
      query: "?url",
      import: "default",
   });

   const [isOpenAccordion, setisOpenAccordion] = React.useState(false);
   const [isRotated, setIsRotated] = useState(false);
   const handleAccordion = () => {
      setisOpenAccordion(!isOpenAccordion);
      setIsRotated(!isRotated);
   };

   return (
      <section className="section-prestations">
         {title && <h2 className="section-prestations__title">{title}</h2>}
         <div className="prestations-list">
            {data.map((item, index) => {
               const imageUrl =
                  images[`../../assets/${item.img}`] ||
                  images["../../assets/default.jpg"];

               const isLast = index === data.length - 1;

               return (
                  <React.Fragment key={index}>
                     <div
                        className={`prestations-card prestations-card--shadow ${
                           index % 2 !== 0 ? "reverse" : ""
                        }`}
                        key={index}
                     >
                        <div className="prestations-img">
                           <img src={imageUrl} alt={item.title} />
                        </div>
                        <div className="prestations-content">
                           <h2>{item.title}</h2>
                           <Collapse
                              className="accordion-content"
                               in={isOpenAccordion}
                              collapsedSize={200}
                           >
                              {!isOpenAccordion
                                    ? truncateText(item, 100)
                                    : item.text}
                              <span className="prestation-price">{item.prix}</span>
                           </Collapse>
                        <KeyboardArrowDownIcon
                           onClick={handleAccordion}
                           className={`icon-KeyboardArrowDownIcon ${isRotated ? "rotated" : ""}`}
                           fontSize="large"
                        />
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
