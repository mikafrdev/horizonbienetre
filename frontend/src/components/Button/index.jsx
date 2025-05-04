import "./style.css";

export default function Button({ title, link }) {

    return (
        <div className="button">
            <a href={link}>
                <button>{title}</button>
            </a>
        </div>
    );
}