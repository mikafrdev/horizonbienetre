import { Link } from "react-router-dom";
import prestationsData from "../../data/prestationsData.json";
import ResponsiveImage from "../../utils/ResponsiveImage";
import "./style.css";

export default function HomePrestations() {
   const imageSizes = [
      { size: 600, media: "(max-width: 600px)" },
      { size: 800, media: "(min-width: 601px) and (max-width: 800px)" },
      /* { size: 1024, media: "(min-width: 801px) and (max-width: 1024px)" },
      { size: 1440, media: "(min-width: 1025px)" }, */
   ];

   return (
      <section className="home-prestations">
         <h2>Les prestations</h2>

         <div className="home-prestations__list">
            {prestationsData.map((item, index) => {
               return (
                  <figure
                     key={index}
                     role="group"
                     aria-labelledby={`card-title-${item.id}`}
                     className="home-prestations__card"
                  >
                     <Link
                        to={item.link}
                        className="home-prestations__link"
                        data-discover="true"
                     >
                        <ResponsiveImage
                           item={item}
                           imageSizes={imageSizes}
                           imageFormats={["webp", "jpeg"]}
                           alt="Une image dynamique"
                        />

                        <figcaption className="home-prestations__caption">
                           <h3
                              id={`card-title-${item.id}`}
                              className="home-prestations__title"
                           >
                              {item.title}
                           </h3>
                        </figcaption>
                     </Link>
                  </figure>
               );
            })}
         </div>
      </section>
   );
}
