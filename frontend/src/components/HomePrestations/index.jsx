import { Link } from "react-router-dom";
import prestationsData from "../../data/prestationsData.json";
import "./style.css";

export default function HomePrestations() {
   return (
      <section className="home-prestations">
         <h2>Les prestations</h2>

         <div className="home-prestations__list">
            {prestationsData.map(({ id, title, img, link }) => (
               <figure
                  key={id}
                  role="group"
                  aria-labelledby={`card-title-${id}`}
                  className="home-prestations__card"
               >
                  <Link
                     to={link}
                     className="home-prestations__link"
                     data-discover="true"
                  >
                     <picture>
                        <source
                           srcSet={`/${img}-600.webp`}
                           media="(max-width: 600px)"
                        />

                        <source
                           srcSet={`/${img}-800.webp`}
                           media="(min-width: 601px) and (max-width: 800px)"
                        />

                        <source
                           srcSet={`/${img}-1024.webp`}
                           media="(min-width: 801px) and (max-width: 1024px)"
                        />

                        <source
                           srcSet={`/${img}-1440.webp`}
                           media="(min-width: 1025px)"
                        />

                        <img
                           srcSet={`/${img}-800.webp`}
                           alt="Image responsive"
                        />
                     </picture>

                     <figcaption className="home-prestations__caption">
                        <h3
                           id={`card-title-${id}`}
                           className="home-prestations__title"
                        >
                           {title}
                        </h3>
                     </figcaption>
                  </Link>
               </figure>
            ))}
         </div>
      </section>
   );
}
