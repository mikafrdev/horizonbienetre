import "./style.css";
import img1 from './../../assets/massage-bien-etre.jpeg'
import img2 from './../../assets/close-up-of-hands-placed-on-girls-head.jpg'
import img3 from './../../assets/Formule-detente-profonde.jpeg'

export default function Salon() {

    const prestation1 = 'Massages Bien-Être Harmonisant';
    const prestation2 = 'Les soins énergétiques';
    const prestation3 = 'La formule détente profonde';

    return (
        <main>
            
            <div className="illustration">
                <div>
                    <h1>Salon</h1>
                </div>
            </div>
           
            <div className="Container_prestations">
                <div className="presta">
                    <h2>Massage IVAO</h2>
                    <div className="img_presta1"></div>
                    <p>Massage relaxant du corps, avec pose et utilisation de pierres chaudes pour profiter d’un moment de détente et de récupération.</p>
                </div>
            </div>

            

        </main>
    );
}