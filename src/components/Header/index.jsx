import styled from 'styled-components'
import "./style.css";
import Logo from './../../assets/Logo.jpg'
import IconPhone from './../../assets/Phone.png'
import IconMenu from './../../assets/menu.png'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export default function Header() {

    return (

        <header>
            <div>
                <a href="#">
                    <img src={Logo} alt="Logo Horizon Bien Etre" />
                </a>
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