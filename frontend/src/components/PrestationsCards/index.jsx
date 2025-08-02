import { Link } from "react-router-dom";
import prestationsData from "../../data/prestationsData.json";
import "./style.css";

export default function PrestationsCards() {

  return (
    <div className="prestation-cards">
      {prestationsData.map(({ id, title, img, link }) => (
        <figure
          key={id}
          role="group"
          aria-labelledby={`card-title-${id}`}
          className="card-hp"
        >
          <Link to={link} className="card-hp__link" data-discover="true">
            <img
              className="card-hp__image"
              src={`/${img}`}
              alt={title}
              loading="lazy"
            />
            <figcaption className="card-hp__caption">
              <h3 id={`card-title-${id}`} className="card-hp__title">
                {title}
              </h3>
            </figcaption>
          </Link>
        </figure>
      ))}
    </div>
  );
}
