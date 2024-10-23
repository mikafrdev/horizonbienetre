import "./style.css";
/*import star from './../../assets/star_filled.svg'*/
import PictoStar from "../PictoStar";

export default function Temoignages() {

    return (
        
        <div className="container_light temoignages">
            <h2>Témoignages</h2>

            <div className="stars_date">
                <ul className="stars">
                    <li><PictoStar fillColor='#8FC3D3' strokeColor='#8FC3D3' /></li>
                    <li><PictoStar fillColor='#8FC3D3' strokeColor='#8FC3D3' /></li>
                    <li><PictoStar fillColor='#8FC3D3' strokeColor='#8FC3D3' /></li>
                    <li><PictoStar fillColor='#8FC3D3' strokeColor='#8FC3D3' /></li>
                    <li><PictoStar fillColor='#ffffff' strokeColor='#8FC3D3' /></li>
                </ul>
                <div className="date">Juillet 2024</div>
            </div>
        
            <p className="name">Françoise</p>
            <p className="avis">« Séance énérgétique avec Béatrice très agréable. Elle est accueillante et de très bon conseil. On sort de là très sereine et zen. »</p>
            <p>NAVIGATION</p>
        </div>
    );
}