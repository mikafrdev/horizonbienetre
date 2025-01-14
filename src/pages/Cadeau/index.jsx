import Illustration from '../../components/Illustration';
import Accordion from '../../components/Accordion';
import FormContact from '../../components/FormContact';
import dataCarteCadeau from "../../data/cartecadeau.json"
import "./style.css";

export default function Cadeau() {

    const IllustrationTxt = 'Carte Cadeau';

    return (
        <main>
            
            <Illustration className='illustration_cadeau' />

            <div className="container_cadeau container_light">
                
                <p>Envie de faire plaisir ou pour diverses occasions offrez la carte cadeau Horizon Bien-Être. La carte cadeau est valable pour tous les soins et toutes les formules. Il vous sufit de choisir le(s) soin(s) ou alors le montant que vous souhaitez offrir.</p>

                {dataCarteCadeau.map((item, index) => (
                    <Accordion
                        key={index}
                        num={item.num}
                        title={item.title}
                        text={item.text}
                    />
                ))}

                <FormContact />
                
            </div>
            
        </main>
    );
}