import React from "react";
import "./style.css";

export default function Prestations({ data, title }) {
   const images = import.meta.glob("../../assets/*", {
      eager: true,
      query: "?url",
      import: "default",
   });

   return (
      <section className="section-prestations">
         {title && <h2 className="section-prestations__title">{title}</h2>}
         <div className="section-prestations__list">
            {data.map((item, index) => {
               const imageUrl =
                  images[`../../assets/${item.img}`] ||
                  images["../../assets/default.jpg"];

               const isLast = index === data.length - 1;

               return (
                  <React.Fragment key={index}>
                     <div
                        className={`section-prestations__card section-prestations__card--shadow ${
                           index % 2 !== 0 ? "reverse" : ""
                        }`}
                        key={index}
                     >
                        <div className="section-prestations__img">
                           <img src={imageUrl} alt={item.title} />
                        </div>
                        <div className="section-prestations__content">
                           <h3>{item.title}</h3>
                           <p>{item.text}</p>
                           <span>{item.prix}</span>
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
