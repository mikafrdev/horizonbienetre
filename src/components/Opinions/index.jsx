import dataOpinions from "../../data/opinions.json";
import PictoStar from "../PictoStar";
import "./style.css";

export default function Opinions() {
    const renderStars = (note) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <li key={i}>
                    <PictoStar
                        fillColor={i < note ? "#8FC3D3" : "#FFF"}
                        strokeColor="#8FC3D3"
                    />
                </li>
            );
        }
        return stars;
    };

    return (
        <div className="container_light opinions">
            <h2>Témoignages</h2>

            {dataOpinions.map((item, index) => (
                <div className="opinion" key={index}>
                    <div className="opinion_stars_date" data={`${index}`}>
                        <ul className="opinion_stars">{renderStars(item.note)}</ul>
                        <div className="opinion_date">{item.date}</div>
                    </div>
                    <p className="opinion_name">{item.name}</p>
                    <p className="opinion_text">{item.opinion}</p>
                    <p>NAVIGATION</p>
                </div>
            ))}
        </div>
    );
}
