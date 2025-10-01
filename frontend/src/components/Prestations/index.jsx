import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from '@mui/system/Box'
import Collapse from "@mui/material/Collapse";

import "./style.css";

export default function Prestations({ data, title }) {
   const images = import.meta.glob("../../assets/*", {
      eager: true,
      query: "?url",
      import: "default",
   });

   const [openIndex, setOpenIndex] = useState(false);
   const handleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
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

               let textCollapse = item.text;
               textCollapse = !setOpenIndex ? textCollapse.slice(0, 100) + " ...": textCollapse;
               textCollapse = item.text;

               return (
                  <React.Fragment key={index}>
                     <div
                        className={`prestations-card prestations-card--shadow ${
                           index % 2 !== 0 ? "reverse" : ""
                        }`}
                     >
                        <div className="prestations-img">
                           <img src={imageUrl} alt={item.title} />
                        </div>
                        <div className="prestations-content">
                           <h2>{item.title}</h2>
                           
                           <Collapse in={openIndex === index} collapsedSize={100}>
                              {textCollapse}
                           </Collapse>
                           <Box
                           sx={{
                              width: "100%",
                              bgcolor: '#FFF',
                              textAlign: 'center'
                           }}>
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
