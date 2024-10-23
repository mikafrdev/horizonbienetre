import Illustration from '../../components/Illustration';
import CardPresta from '../../components/CardPresta';
import "./style.css";
import img1 from './../../assets/femme_55_ans_soin_energetique.jpg'
import img2 from './../../assets/Soin-energetique.jpg'
import img3 from './../../assets/Formule-detente-profonde.jpeg'

export default function Massages() {

    const dataPresta = [
        {
            title : 'Reiki Usui',
            img : img1,
            text : 'Le reiki est une méthode de soins énergétiques japonaise dont le but est de rétablir l’équilibre énergétique dans le corps. Le soin libère les énergies bloquées et  permet activation du processus d’auto guérison de la personne.',
            prix : '60 min - 45 €'
        },
        {
            title : 'Reiki Karuna',
            img : img2,
            text : 'Le Reiki Karuna travaille sur la mémoire somatique (l’inconscient), la mémoire cellulaire. Ce soin permet au corps de remettre de l’ordre dans les mémoires anciennes et de les libérer en favorisant les  prises de conscience.',
            prix : '60 min - 45 €'
        },
        {
            title : 'Thérapie d’Energie Intégrée – IET',
            img : img3,
            text : 'Le soin permet de libérer les blocages émotionnels et la libération des mémoires cellulaires. Ce sont les émotions non exprimées que le corps garde en mémoire',
            prix : '60 min - 45 €'
        }
    ]

    const IllustrationTxt = 'Prestations Soins énergétiques';

    return (
        <main>
            
            <Illustration title='Prestations Les soins énergétiques' className='illustration_soins' />

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