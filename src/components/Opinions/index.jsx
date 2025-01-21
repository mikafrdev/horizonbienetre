import dataOpinions from "../../data/opinions.json";
import OpinionsSlider from "../OpinionsSlider";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import PictoStar from "../PictoStar";
import "./style.css";

export default function Opinions() {
    const [opinionIndex, SetOpinionIndex] = useState(0);

    function nextOpinion() {
        SetOpinionIndex((index) => {
            if (index === images.length - 1) return 0;
            return index + 1;
        });
    }

    function prevOpinion() {
        SetOpinionIndex((index) => {
            if (index === 0) return images.length - 1;
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

    /* {
    "note" : 5,
    "date" : "Janvier 2025",
    "name" : "Marc",
    "opinion" : "opinion Marc opinion Marc opinion Marc opinion Marc opinion Marc opinion Marc opinion Marc opinion Marc "
},
{
    "note" : 3,
    "date" : "Avril 2023",
    "name" : "Didier",
    "opinion" : "opinion didier opinion didier opinion didier opinion didier opinion didier opinion didier opinion didier opinion didier "
},
{
    "note" : 1,
    "date" : "Septembre 2024",
    "name" : "Paul",
    "opinion" : "opinion Paul opinion Paul opinion Paul opinion Paul opinion Paul opinion Paul opinion Paul opinion Paul opinion Paul "
} */

    return (
        <div className="opinions">
            <h2>Témoignages</h2>

            {/* TEST */} 
            <section>
                <button className="btn-left">
                    <RiArrowDropDownLine
                        onClick={prevOpinion}
                    />
                </button>
                <button className="btn-right">
                    <RiArrowDropDownLine
                        onClick={nextOpinion}
                    />
                </button>

                <div className="opinion">

                </div>

                <div className="opinion">
                    
                </div>

                {/* {dataOpinions.map((item, index) => (
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
                ))} */}
            </section>
        </div>
    );
}
