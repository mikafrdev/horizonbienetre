import { Link } from "react-router-dom";
import Button from "../Button";
import "./style.css";

export default function CardHP({ title, img, link }) {

    return (
        <div className="card_hp">
            <Link to={link}>
                <h3>{title}</h3>
                <img className='ombre' src={img} alt={title} />
            </Link>
            
            {/*
            <Button
                title={'En savoir plus'}
                link={'#'}
            />
            */}
        </div>
    );
}

/*
Card.propTypes = {
    title: PropTypes.string.isRequired,
    img:  PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
*/