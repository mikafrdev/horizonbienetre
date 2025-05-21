import dataOpinions from "../../data/opinions.json";
import { useState } from "react";
import PictoStar from "../PictoStar";
import PictoArrow from "../PictoArrow";
import "./style.css";

export default function Opinions() {
    const [opinionIndex, SetOpinionIndex] = useState(0);

    function nextOpinion() {
        SetOpinionIndex((index) => {
            if (index === dataOpinions.length - 1) return 0;
            return index + 1;
        });
    }

    function prevOpinion() {
        SetOpinionIndex((index) => {
            if (index === 0) return dataOpinions.length - 1;
            return index - 1;
        });
    }

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
        <div className="opinions">
            <h2>Témoignages</h2>
            <section>
                <button className="btn-left" onClick={prevOpinion}>
                    <PictoArrow />
                </button>
                <button className="btn-right" onClick={nextOpinion}>
                    <PictoArrow />
                </button>

                {dataOpinions.map((item, index) => (
                    <div
                        className="opinion"
                        key={index}
                        style={{ translate: `${-100 * opinionIndex}%` }}
                    >
                        <div className="opinion_stars_date" data={`${index}`}>
                            <ul className="opinion_stars">
                                {renderStars(item.note)}
                            </ul>
                            <div className="opinion_date">{item.date}</div>
                        </div>
                        <p className="opinion_name">{item.name}</p>
                        <p className="opinion_text">{item.opinion}</p>
                    </div>
                ))}

                {/* <div
                    style={{
                        position: "absolute",
                        bottom: ".5rem",
                        left: "50%",
                        translate: "-50%",
                        display: "flex",
                        gap: ".25rem",
                    }}
                >
                    {dataOpinions.map((_, index) => (
                        <button
                            key={index}
                            className="img-slider-dot-btn"
                            aria-label={`View Image ${index + 1}`}
                            onClick={() => setOpinionIndex(index)}
                        >
                            {index === opinionIndex ? (
                                <CircleDot aria-hidden />
                            ) : (
                                <Circle aria-hidden />
                            )}
                        </button>
                    ))}
                </div>
                <div id="after-image-slider-controls" /> */}
            </section>
        </div>
    );
}
