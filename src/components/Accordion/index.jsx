import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./style.css";

export default function Accordion({ num, title, text, children }) {
    const contentHeight = useRef();
    const [open, setOpen] = useState(null);

    if (children !== undefined) text = children;

    const handleItemClick = () => {
        setOpen(!open);
    };

    return (
        <div className="accordion wrapper">
            <button
                className={`title-container ${open ? "active" : ""}`}
                onClick={handleItemClick}
            >
                <div className="title-content">
                    <span>{num}</span>
                    <h2>{title}</h2>
                </div>
                <RiArrowDropDownLine
                    className={`arrow ${open ? "active" : ""}`}
                />
            </button>

            <div
                ref={contentHeight}
                className="text-container container_light"
                style={
                    open
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className="text-content">{text}</div>
            </div>
        </div>
    );
}