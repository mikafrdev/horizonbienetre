import { Link } from "react-router-dom";
import prestationsData from "../../data/prestationsData.json";
import ResponsiveImage from "../../utils/ResponsiveImage";
import "./style.css";

export default function HomePrestations() {
   return (
      <section className="home-prestations">
         <h2>Les prestations</h2>

         <div className="home-prestations-list">
            {prestationsData.map((imageData, index) => {
               return (
                  <figure
                     key={index}
                     role="group"
                     aria-labelledby={`card-title-${imageData.id}`}
                     className="home-prestations-card"
                  >
                     <Link
                        to={imageData.link}
                        className="home-prestations-link"
                        data-discover="true"
                     >
                        <ResponsiveImage
                           imageData={imageData}
                           alt="Une image dynamique"
                        />

                        <figcaption className="home-prestations-caption">
                           <h3
                              id={`card-title-${imageData.id}`}
                              className="home-prestations-title"
                           >
                              {imageData.title}
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
