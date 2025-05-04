import Illustration from '../../components/Illustration';
import imgMassages from './../../assets/Zen-stones-candles-and-flowers-on-the-background-of-woman-receiving-treatment.jpg'
import imgSoins from './../../assets/reiki-master-working-with-patient.jpg'
import imgFormules from './../../assets/Formule-detente-profonde.jpeg'
import CardHP from "../../components/CardHP";
import Opinions from '../../components/Opinions';
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
                    img={imgMassages}
                    link={'/massages'}
                />

                <CardHP
                    title={prestation2}
                    img={imgSoins}
                    link={'/soins'}
                />

                <CardHP
                    title={prestation3}
                    img={imgFormules}
                    link={'/formule'}
                />

            </div>

            <Opinions />

        </main>
    );
}