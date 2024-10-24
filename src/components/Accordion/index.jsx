import React, { useRef } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

import "./style.css";

export default function Accordion({ num, title, text, isOpen, onClick }) {

    const contentHeight = useRef()

    return (
        
            <div className="accordion wrapper" >
                <button className={`title-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
                    <div className='title-content'>
                        <span>{num}</span>
                        <h2>{title}</h2>
                    </div>
                    <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} /> 
                </button>

                <div ref={contentHeight} className="text-container container_light" style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                    }>
                    <p className="text-content">{text}</p>
                </div>
            </div>
    );
}