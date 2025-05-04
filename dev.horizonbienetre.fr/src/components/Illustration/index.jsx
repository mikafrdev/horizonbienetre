import "./style.css";

export default function illustration({title, className}) {
    return (
        <div className={`illustration ${className}`}>
            <div>
                <h1>{title}</h1>
            </div>
        </div>
    );
}