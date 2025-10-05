import { Link } from "react-router-dom";
import prestationsData from "../../data/prestationsData.json";
import "./style.css";

export default function HomePrestations() {
   const imageSizes = [
      { size: 600, media: "(max-width: 600px)" },
      { size: 800, media: "(min-width: 601px) and (max-width: 800px)" },
      /* { size: 1024, media: "(min-width: 801px) and (max-width: 1024px)" },
      { size: 1440, media: "(min-width: 1025px)" }, */
   ];

   const imageFormats = ["webp", "jpg", "png"];

   return (
      <section className="home-prestations">
         <h2>Les prestations</h2>

         <div className="home-prestations__list">
            {prestationsData.map(({ id, title, img, link }) => {
               const imageBasePath = `/${img}`;

               return (
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
                           {imageSizes.map(({ size, media }) =>
                              imageFormats.map((format) => (
                                 <source
                                    key={`${size}-${format}`}
                                    srcSet={`${imageBasePath}-${size}.${format}`}
                                    media={media}
                                    type={`image/${format}`}
                                 />
                              ))
                           )}

                           <img
                              srcSet={`${imageBasePath}-800.webp`}
                              alt={title}
                              loading="lazy"
                              sizes="(max-width: 600px) 100vw, (max-width: 800px) 80vw, (max-width: 1024px) 70vw, 50vw"
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
               );
            })}
         </div>
      </section>
   );
}
