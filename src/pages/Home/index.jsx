import "./style.css";
/*import img_illustration from './../../assets/Illustration_hp_big.jpg'
import img_illustration from './../../assets/Illustration_hp_big.png'*/
import Card from "../../components/Card";

export default function Home() {

    return (
        <main>
            
            <div className="illustration">
                <div>
                    <h1>Salon Bien-Ètre</h1>
                </div>
            </div>
           
            <div className="description">
                <h2>Horizon bien-être, un lieu de détente et de bienveillance</h2>
                <div className="img_salon"></div>
                <p>Mon objectif est de vous offrir une expérience unique et revitalisante. Que vous soyez à la recherche d'un moment de détente profonde, d'un soulagement du stress, de l'élimination des blocages énergétiques ou d'une reconnexion avec votre essence intérieure, j'ai les compétences et les techniques pour répondre à vos besoins spécifiques. j'utilise des produits bio et naturels.</p>
            </div>

            <div className="prestation">
                <h2>Les prestations</h2>
                <Card />
            </div>


        </main>
    );
}