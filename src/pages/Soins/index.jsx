import Illustration from '../../components/Illustration';
import CardPresta from '../../components/CardPresta';
import dataSoins from '../../data/soins.json'
import "./style.css";

export default function Massages() {

    const IllustrationTxt = 'Soins énergétiques';

    return (
        <main>
            
            <Illustration title={IllustrationTxt} className='illustration_soins' />

            <div className="Container_prestations container_light">
                {dataSoins.map((product, index)=> 
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