import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/Logo.jpg'
import IconPhone from './../../assets/Phone.png'
import IconMenu from './../../assets/menu.png'
import "./style.css";

export default function Header() {

    return (

        <header>
            <div>
                <Link to="/">
                    <img src={Logo} alt="Logo Horizon Bien Etre" />
                </Link>
            </div>
            <div className='phone'>
                <a href="#">
                <img src={IconPhone} alt="Phone icon" />
                </a>
            </div>
            <nav>
                <img src={IconMenu} alt="Menu icon" />
            </nav>
        </header>
    );
}