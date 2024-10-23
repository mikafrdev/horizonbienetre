import Illustration from '../../components/Illustration';
import img1 from './../../assets/massage-bien-etre.jpeg'
import img2 from './../../assets/Soin-energetique.jpg'
import img3 from './../../assets/Formule-detente-profonde.jpeg'
import CardHP from "../../components/CardHP";
import Temoignages from "../../components/Temoignages";
import "./style.css";

export default function Home() {

    const prestation1 = 'Massages Bien-Être Harmonisant';
    const prestation2 = 'Les soins énergétiques';
    const prestation3 = 'La formule détente profonde';

    return (
        <main>
            
            <Illustration title='Salon Bien-Ètre' className='illustration_hp' />
           
            <div className="container_light description">
                <h2>Horizon bien-être, un lieu de détente et de bienveillance</h2>
                <div className="img_salon ombre"></div>
                <p>Mon objectif est de vous offrir une expérience unique et revitalisante. Que vous soyez à la recherche d'un moment de détente profonde, d'un soulagement du stress, de l'élimination des blocages énergétiques ou d'une reconnexion avec votre essence intérieure, j'ai les compétences et les techniques pour répondre à vos besoins spécifiques. j'utilise des produits bio et naturels.</p>
            </div>

            <div className="container_light prestation">
                <h2>Les prestations</h2>

                <CardHP
                    title={prestation1}
                    img={img1}
                    link={'/massages'}
                />

                <CardHP
                    title={prestation2}
                    img={img2}
                    link={'/soins'}
                />

                <CardHP
                    title={prestation3}
                    img={img3}
                    link={'/formule'}
                />

            </div>

            <Temoignages />

        </main>
    );
}