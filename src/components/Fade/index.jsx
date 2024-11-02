import { useState, useEffect, useRef } from "react";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3; //L'élement est en train de s'afficher dans le DOM selon l'animation
const LEAVING = 4;  //L'élement est en train de quitter le DOM selon l'animation

export default function Fade({ visible, children, duration = 0.3 }) {
    
    const childRef = useRef(children);
    const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
    const className = state === VISIBLE ? "fade" : "fade out";

    if (visible) {
        childRef.current = children;
    }

    useEffect(() => {
        if (!visible) {
            setState(LEAVING);
        } else {
            setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
        }
    }, [visible]);

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
    }, [state]);

    if (state === HIDDEN) {
        return null;
    }

    let style = {
        transitionDuration: `${duration}ms`,
        transitionProperty: "opacity transform",
    };

    return <div className={className}>{childRef.current}</div>;
}