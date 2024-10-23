import "./style.css";

export default function CardPresta({ title, img, text, prix }) {
    return (
        <div className="card_presta ombre">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            <span>{prix}</span>
        </div>
    );
}