import "./style.css";

// ✅ Nouvelle syntaxe recommandée par Vite
const images = import.meta.glob('../../assets/*', {
  eager: true,
  query: '?url',
  import: 'default'
});

export default function CardPresta({ title, img, text, prix }) {
    const imageUrl = images[`../../assets/${img}`] || images['../../assets/default.jpg'];

    return (
        <div className="card_presta ombre">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            <span>{prix}</span>
        </div>
    );
}
