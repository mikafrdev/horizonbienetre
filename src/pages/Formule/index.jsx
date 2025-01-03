import Illustration from '../../components/Illustration';
import CardPresta from '../../components/CardPresta';
import dataFormules from "../../data/formules.json"
import "./style.css";

export default function Formule() {

    const IllustrationTxt = 'Formule détente profonde';

    return (
        <main>
            
            <Illustration title={IllustrationTxt} className='illustration_massages' />

            <div className="Container_prestations container_light">
                {dataFormules.map((product, index)=> 
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