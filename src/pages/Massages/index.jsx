import Illustration from '../../components/Illustration';
import CardPresta from '../../components/CardPresta';
import dataMassages from "../../data/massages.json"
import "./style.css";

export default function Massages() {

    const IllustrationTxt = 'Massages relaxants';

    return (
        <main>
            
            <Illustration title={IllustrationTxt} className='illustration_massages' />

            <div className="Container_prestations container_light">
                {dataMassages.map((product, index)=> 
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