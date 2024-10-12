import "./style.css";
import Button from "../../components/Button";

export default function Card({ title, img, link }) {

    return (
        <div className="card">
            <h3>{title}</h3>
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