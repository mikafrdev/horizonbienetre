import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/Logo.jpg'
import PictoPhone from "./../PictoPhone"
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
            <PictoPhone className='picto_phone_header' fillPhoneColor='#1E1E1E' fillCallColor='1E1E1E' />
            <nav>
                <img src={IconMenu} alt="Menu icon" />
            </nav>
        </header>
    );
}