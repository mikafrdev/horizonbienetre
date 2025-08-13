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
                           type="image/avif"
                           srcSet={`
      /${img}-600.avif 600w,
      /${img}-800.avif 800w,
      /${img}-1024.avif 1024w,
      /${img}-1440.avif 1440w
    `}
                           sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <source
                           type="image/webp"
                           srcSet={`
      /${img}-600.webp 600w,
      /${img}-800.webp 800w,
      /${img}-1024.webp 1024w,
      /${img}-1440.webp 1440w
    `}
                           sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <source
                           type="image/jpeg"
                           srcSet={`
      /${img}-600.jpg 600w,
      /${img}-800.jpg 800w,
      /${img}-1024.jpg 1024w,
      /${img}-1440.jpg 1440w
    `}
                           sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <img
                           src={`/${img}-800.jpg`} // fallback si <picture> ne fonctionne pas
                           alt={title}
                           loading="lazy"
                           className="home-prestations__image"
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
