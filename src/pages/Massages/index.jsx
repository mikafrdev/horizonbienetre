import Illustration from '../../components/Illustration';
import CardPresta from '../../components/CardPresta';
import "./style.css";
import img1 from './../../assets/visage-femme-mains1.jpg'
import img2 from './../../assets/Soin-energetique.jpg'
import img3 from './../../assets/Formule-detente-profonde.jpeg'

export default function Massages() {

    const dataPresta = [
        {
            title : 'Massage IVAO',
            img : img1,
            text : 'Massage relaxant du corps, avec pose et utilisation de pierres chaudes pour profiter d\'un moment de détente et de récupération.',
            prix : '60 min - 55 €90 min - 70 €'
        },
        {
            title : 'Massage IMAO',
            img : img2,
            text : 'Massage du haut du corps soulage les tensions physiques et nerveuses accumulées dans les épaules, la nuque, le visage, les bras et les mains. La chaleur des pierres chaudes apporte un',
            prix : '45 min - 45 €'
        },
        {
            title : 'Massage ERIS',
            img : img3,
            text : 'Massage du visage, du dos et des épaules pour détendre les muscles et favoriser la récupération.',
            prix : '30 min - 30 €'
        },
        {
            title : 'Massage ALIO',
            img : img3,
            text : 'Massage des jambes et des pieds qui aide à apaiser, et promouvoir la circulation sanguine.',
            prix : '30 min - 30 €'
        }
    ]

    const IllustrationTxt = 'Prestations Massages relaxants';

    return (
        <main>
            
            <Illustration title={IllustrationTxt} className='illustration_massages' />

            <div className="Container_prestations container_light">
                {dataPresta.map((product, index)=> 
                    <CardPresta
                        key={index}
                        title={product.title} 
                        img={product.img}
                        text={product.text}
                        prix={product.prix}
                    />
                )}
            </div>
            
        </main>
    );
}