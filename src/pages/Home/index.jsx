import Illustration from '../../components/Illustration';
import img1 from './../../assets/massage-bien-etre.jpeg'
import img2 from './../../assets/Soin-energetique.jpg'
import img3 from './../../assets/Formule-detente-profonde.jpeg'
import CardHP from "../../components/CardHP";
import Temoignages from "../../components/Temoignages";
import "./style.css";

export default function Home() {

    const prestation1 = 'Les massages du monde intuitifs';
    const prestation2 = 'Les soins énergétiques';
    const prestation3 = 'Les formules bien-être';

    return (
        <main>
            
            <Illustration title='Salon Bien-Ètre' className='illustration_hp' />
           
            <div className="container_light description">
                <h2>Horizon bien-être, un lieu de détente et de bienveillance</h2>
                <div className="img_salon ombre"></div>
                <p>Praticienne indépendante, mon objectif est de vous offrir une expérience unique et revitalisante. Que vous soyez à la recherche d’un moment de détente profonde, apaiser le stress, libérer  des blocages énergétiques ou vous reconnecter à votre essence intérieure, mes compétences me permettent de répondre à ces besoins.</p>
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