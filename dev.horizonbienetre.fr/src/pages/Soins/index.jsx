import Illustration from '../../components/Illustration';
import Accordion from '../../components/Accordion';
import CardPresta from '../../components/CardPresta';
import dataSoinsInfos from "../../data/soins_infos.json";
import dataSoins from '../../data/soins.json'
import "./style.css";

export default function Massages() {

    const IllustrationTxt = 'Soins énergétiques';

    return (
        <main>
            
            <Illustration title={IllustrationTxt} className='illustration_soins' />

            <div className="container_light massages_infos">
                {dataSoinsInfos.map((item) => (
                    <Accordion
                        key="1a"
                        num={item.num}
                        title={item.title}
                        text={item.text}
                    ></Accordion>
                ))}

                <Accordion title="Comment se déroule une séance ?">
                    <p>Voici les différentes étapes du soin :</p>
                    <ul className="decimal">
                        <li>
                            Accueil et échange Le soin débute par un moment
                            d'échange avec la personne, visant à cerner ses
                            besoins, ses attentes ainsi que son état émotionnel,
                            physique ou énergétique.
                        </li>
                        <li>
                            Préparation à la séance La personne s'allonge
                            confortablement sur la table de massage, habillée,
                            avec éventuellement une couverture.
                        </li>
                        <li>
                            Déroulement du soin
                            <ul className="disc">
                                <li>
                                    <span>Apposition des mains :</span> Je viens
                                    placer mes mains sur ou au-dessus, quelques
                                    minutes, de différentes zones du corps en
                                    fonction des besoins ressentis.
                                </li>
                                <li>
                                    <span>Circulation de l'énergie :</span>
                                    Lorsque l'énergie circule la personne peut
                                    ressentir des sensations de chaleur, de
                                    picotements ou simplement une profonde
                                    relaxation.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Clôture de la séance À la fin du soin, j'accompagne
                            la personne dans un retour en douceur à un état
                            d'éveil. Un moment d'échange permet ensuite de
                            partager les ressentis et de répondre aux questions
                            éventuelles.
                        </li>
                        <li>
                            Après la séance Les effets peuvent varier :
                            relaxation immédiate, légèreté émotionnelle, ou
                            encore un regain d'énergie dans les jours qui
                            suivent. Un soin énergétique est une expérience
                            personnelle et unique, conçue pour soutenir le
                            bien-être global et encourager l'équilibre
                            intérieur.
                        </li>
                    </ul>
                </Accordion>
            </div>

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