import styled from 'styled-components'
import "./style.css";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export default function Header() {

    return (
        <header>
            HeaderContainer
            <a href="#">
                <img src="" alt="" />
            </a>
            <a href="#">
            <img src="" alt="" />
            </a>
            <nav>
                <img src="" alt="" />
            </nav>
        </header>
    );
}