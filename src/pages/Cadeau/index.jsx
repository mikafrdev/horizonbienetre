import React, { useState } from 'react'
import Accordion from '../../components/Accordion';
import Illustration from '../../components/Illustration';
import "./style.css";

export default function Cadeau() {

    const IllustrationTxt = 'Carte Cadeau';

    const dataCarteCadeau = [
        {
            num : '1',
            title : 'Réserver votre carte cadeau',
            text : 'Après avoir choisi le soin que vous voulez offrir ou le montant de la carte cadeau, envoyez le formulaire ci-dessous en précisant dans la partie message le choix que vous avez effectué et le nom / prénom de la personne à qui vous offrez la carte ou contactez moi au 06 21 03 77 44. Si vous voulez personnaliser la carte par un message, ajoutez le à votre mail.'
        },
        {
            num : '2',
            title : 'Procéder au paiement',
            text : 'Après avoir choisi le soin que vous voulez offrir ou le montant de la carte cadeau, envoyez le formulaire ci-dessous en précisant dans la partie message le choix que vous avez effectué et le nom / prénom de la personne à qui vous offrez la carte ou contactez moi au 06 21 03 77 44. Si vous voulez personnaliser la carte par un message, ajoutez le à votre mail.'
        },{
            num : '3',
            title : 'Le bénéficiaire prend rendez-vous',
            text : 'Après avoir choisi le soin que vous voulez offrir ou le montant de la carte cadeau, envoyez le formulaire ci-dessous en précisant dans la partie message le choix que vous avez effectué et le nom / prénom de la personne à qui vous offrez la carte ou contactez moi au 06 21 03 77 44. Si vous voulez personnaliser la carte par un message, ajoutez le à votre mail.'
        }
    ]

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <main>
            
            <Illustration className='illustration_cadeau' />

            <div className="container_cadeau container_light">
                
                <p>Envie de faire plaisir ou pour diverses occasions offrez la carte cadeau Horizon Bien-Être. La carte cadeau est valable pour tous les soins et la formule. Il vous sufit de choisir le(s) soin(s) ou alors le montant que vous souhaitez offrir.</p>

                {dataCarteCadeau.map((item, index) => (
                    <Accordion
                        key={index}
                        num={item.num}
                        title={item.title}
                        text={item.text}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
                
            </div>
            
        </main>
    );
}