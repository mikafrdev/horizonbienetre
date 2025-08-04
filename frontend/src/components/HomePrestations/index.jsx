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
                     <img
                        className="home-prestations__image"
                        src={`/${img}`}
                        alt={title}
                        loading="lazy"
                     />
                     <figcaption className="home-prestations__caption">
                        <h3 id={`card-title-${id}`} className="home-prestations__title">
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
