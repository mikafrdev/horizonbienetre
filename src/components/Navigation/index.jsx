import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import dataNavigation from "../../data/navigation.json";
import "./style.css";


export default function Navigation({ displayNav, toggle }) {
    const VISIBLE = 1;
    const HIDDEN = 2;
    const ENTERING = 3; //L'élement est en train de s'afficher dans le DOM selon l'animation
    const LEAVING = 4; //L'élement est en train de quitter le DOM selon l'animation
    console.log("Navigation - displayNav : ", displayNav);
    
    const [state, setState] = useState(displayNav ? VISIBLE : HIDDEN);
    const className = state === VISIBLE ? "fade" : "fade out";

    console.log("HEIGHT : ", screen.height)
    console.log("screen.availHeight : ", screen.availHeight)

    useEffect(() => {
        /* className = "fade out"; */
        console.log("useEffect");
        if (!displayNav) {
            setState(LEAVING);
        } else {
            setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
        }
        console.log("useEffect1 : ", state);
    }, [displayNav]);

    useEffect(() => {
        if (state === LEAVING) {
            const timer = setTimeout(() => {
                setState(HIDDEN);
            }, 1000);
            return () => {
                clearTimeout(timer);
            };
        } else if (state === ENTERING) {
            document.body.offsetHeight;
            setState(VISIBLE);
        }
        console.log("useEffect2 : ", state);
    }, [state]);

    if (state === HIDDEN) {
        return null;
    }

    /* if(displayNav) {
        className = "fade";
        console.log("className FADE");
        } else {
            console.log("className FADE OUT ");
            className = "fade out";
            return null;
    } */

    return (
        <div className={`navigation ${className}`} style={{minHeight: screen.availHeight}}>
            <ul>
                {dataNavigation.map((item, index) => (
                    <li key={index} onClick={toggle}>
                        <NavLink to={item.UrlPage}>{item.PageName}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
