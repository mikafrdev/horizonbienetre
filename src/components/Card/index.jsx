import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./style.css";

export default function Card({ title, img, link }) {

    return (
        <div className="card">
            <Link to={link}>
                <h3>{title}</h3>
            </Link>
            <img className='ombre' src={img} alt={title} />
            
            <Button
                title={'En savoir plus'}
                link={'#'}
            />
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