import PictoCircle from "../../components/PictoCircle";
import { useEffect } from "react";

import "./style.css";

export default function Tests() {
    
    /* const getUserdata = async () => {};  */
    let fetchUrl = "https://www.anapioficeandfire.com/api/books";
    fetchUrl = "http://localhost/phpmyadmin/";
    fetchUrl = "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml";
    


    
    useEffect(() => {
        const result = fetch(fetchUrl)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }, []);

    fetch

    return (
        <div className="test">
            <h2>TEST</h2>
            <main></main>
        </div>
    );
}
