import { Link } from "react-router-dom";
import styled from 'styled-components';
import { device } from '../../utils/style/Devices';
import colors from '../../utils/style/colors'


const ErrorContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    
    
    & h1, h2 {
        color: ${colors.primary}
    }

    & h1 {
        font-size: 96px;
        margin-bottom: 10px;
        @media ${device.tablet} {
            font-size: 288px;
        }
    }

    & h2 {
        font-size: 18px;
        font-weight: normal;
        text-align: center;
        margin: 0;
        @media ${device.tablet} {
            font-size: 36px;
        }
    }
`

const LinkError = styled(Link)`
    margin: 100px 0;
    color: ${colors.primary};
    text-align: center;
    white-space: nowrap;
    font-size: 14px;
    @media ${device.tablet} {
        font-size: 18px;
    }
    &.active {
        font-weight: bold;
    }
`

export default function Error() {

    return (
        <ErrorContainer>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <LinkError to="/">Retourner sur la page d’accueil</LinkError>
        </ErrorContainer>
    );
}