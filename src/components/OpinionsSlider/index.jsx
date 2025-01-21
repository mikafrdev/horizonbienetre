import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./style.css";

export default function OpinionsSlider() {
    const [opinionIndex, SetOpinionIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => {
            if (index === images.length - 1) return 0;
            return index + 1;
        });
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return images.length - 1;
            return index - 1;
        });
    }

    return (
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
                }}
            >
                {images.map(({ url, alt }, index) => (
                    <img
                        key={url}
                        src={url}
                        alt={alt}
                        aria-hidden={imageIndex !== index}
                        className="opinions-slider-img"
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <RiArrowDropDownLine className={`arrow ${1 == 1 ? "active" : ""}`} />
            <button
                onClick={showPrevImage}
                className="opinions-slider-btn"
                style={{ left: 0 }}
                aria-label="View Previous Image"
            >
                <ArrowBigLeft aria-hidden />
            </button>
            <button
                onClick={showNextImage}
                className="opinions-slider-btn"
                style={{ right: 0 }}
                aria-label="View Next Image"
            >
                <ArrowBigRight aria-hidden />
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
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="opinions-slider-dot-btn"
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <CircleDot aria-hidden />
                        ) : (
                            <Circle aria-hidden />
                        )}
                    </button>
                ))}
            </div>
            <div id="after-image-slider-controls" />
        </section>
    );
}
