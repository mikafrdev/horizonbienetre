import dataOpinions from "../../data/opinions.json";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import PictoStar from "../../components/PictoStar";
import img1 from "../../assets/Carte_Cadeau_face_1.jpg";
import img2 from "../../assets/massage-bien-etre.jpeg";

import "./style.css";
import { TbBackground } from "react-icons/tb";

export default function Tests() {
    const [opinionIndex, SetOpinionIndex] = useState(0);

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

    function nextOpinion() {
        SetOpinionIndex((index) => {
            console.log(index);
            console.log(dataOpinions.length);
            if (index === dataOpinions.length - 1) return 0;
            return index + 1;
        });
    }

    function prevOpinion() {
        SetOpinionIndex((index) => {
            console.log(index);
            console.log(dataOpinions.length);
            if (index === 0) return dataOpinions.length - 1;
            return index - 1;
        });
    }
    return (
        <div className="opinions">
            <h2>Témoignages</h2>
            <section
                aria-label="Image Slider"
                style={{ width: "100%", height: "100%", position: "relative" }}
            >
                <a href="#after-image-slider-controls" className="skip-link">
                    Skip Image Slider Controls
                </a>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        overflow: "hidden",
                        paddingTop: "10rem",
                    }}
                >
                    {/* <div className="opinion">
                        <p className="opinion_name">TEST 1 <br /> TEST 1</p>
                    </div>

                    <div className="opinion" style={{ backgroundColor:"green" }}>
                        <p className="opinion_name">TEST 2 <br /> TEST 2</p>
                    </div>

                    <div className="opinion" style={{ backgroundColor:"brown" }}>
                        <p className="opinion_name">TEST 3 <br /> TEST 3</p>
                    </div> */}

                    {dataOpinions.map((item, index) => (
                        <div
                            className="opinion"
                            key={index}
                            style={{ translate: `${-100 * opinionIndex}%` }}
                        >
                            <div
                                className="opinion_stars_date"
                                data={`${index}`}
                            >
                                <ul className="opinion_stars">
                                    {renderStars(item.note)}
                                </ul>
                                <div className="opinion_date">{item.date}</div>
                            </div>
                            <p className="opinion_name">{item.name}</p>
                            <p className="opinion_text">{item.opinion}</p>
                        </div>
                    ))}

                    {/* {dataOpinions.map(({ item }, index) => (
                    <img
                        key={index}
                        src={img1}
                        className="img-slider-img"
                        style={{ translate: `${-100 * opinionIndex}%` }}
                    />
                ))} */}
                </div>
                <button
                    onClick={prevOpinion}
                    className="btn-left"
                    style={{ left: 0 }}
                    aria-label="View Previous Image"
                >
                    <RiArrowDropDownLine aria-hidden />
                </button>
                <button
                    onClick={nextOpinion}
                    className="btn-right"
                    style={{ right: 0 }}
                    aria-label="View Next Image"
                >
                    <RiArrowDropDownLine aria-hidden />
                </button>
                <div
                    style={{
                        position: "absolute",
                        bottom: ".5rem",
                        left: "50%",
                        translate: "-50%",
                        display: "flex",
                        gap: ".25rem",
                    }}
                >
                    {/* {dataOpinions.map((_, index) => (
                    <button
                        key={index}
                        className="img-slider-dot-btn"
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <CircleDot aria-hidden />
                        ) : (
                            <Circle aria-hidden />
                        )}
                    </button>
                ))} */}
                </div>
                <div id="after-image-slider-controls" />
            </section>
        </div>
    );
}
