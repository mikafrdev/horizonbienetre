import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import dataNavigation from "../../data/navigation.json";
import "./style.css";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3; //L'élement est en train de s'afficher dans le DOM selon l'animation
const LEAVING = 4; //L'élement est en train de quitter le DOM selon l'animation

export default function Navigation({ displayNav }) {
    console.log("Navigation - displayNav : ", displayNav);
    let className = "";

    useEffect(() => {
        let init = true;
        console.log("useEffect");
    });

    if(displayNav) {
        className = "fade";
        console.log("className FADE");
        } else {
            console.log("className FADE OUT ");
            className = "fade out";
            return null;
    }

    /* console.log("state : ", state) */

    /* useEffect(() => {
    console.log("visible : ", visible)
    if (visible === "init") {
        console.log("1 : ")
        return null
    }else if (visible){
        console.log("2 : ")
        className = "fade";
    } else {
        console.log("3 : ")
    className = "fade out";
    return null;
}
}, [visible]); */

    return (
        <div className={`navigation ${className}`}>
            <ul>
                {dataNavigation.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.UrlPage}>{item.PageName}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
