import Illustration from "../../components/Illustration";
import Accordion from "../../components/Accordion";
import CardPresta from "../../components/CardPresta";
import dataMassagesInfos from "../../data/massages_infos.json";
import dataMassages from "../../data/massages.json";
import "./style.css";

export default function Massages() {
    const IllustrationTxt = "Massages relaxants";

    return (
        <main>
            <Illustration
                title={IllustrationTxt}
                className="illustration_massages"
            />

            <div className="container_light massages_infos">
                {dataMassagesInfos.map((item) => (
                    <Accordion
                        key="1a"
                        num={item.num}
                        title={item.title}
                        text={item.text}
                    ></Accordion>
                ))}
            </div>

            <div className="Container_prestations container_light">
                {dataMassages.map((product, index) => (
                    <CardPresta
                        key={index}
                        title={product.title}
                        img={product.img}
                        text={product.text}
                        prix={product.prix}
                    />
                ))}
            </div>
        </main>
    );
}
