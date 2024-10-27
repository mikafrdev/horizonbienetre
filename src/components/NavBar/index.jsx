import "./style.css";

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li className="active"><a href="#">Accueil</a></li>
                <li><a href="#">Prestations - Massages</a></li>
                <li><a href="#">Prestations - Soins énergétiques</a></li>
                <li><a href="#">Prestation - Formule détante profonde</a></li>
                <li><a href="#">Carte Cadeau</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Salon</a></li>
            </ul>
        </div>
    );
}