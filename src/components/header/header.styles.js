import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 100px 50px;
    background-color: #cfd8dc;
`;

export const LogoAndWelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LogoContainer = styled(Link)`

`;

export const WelcomeTextContainer = styled.span`
    font-weight: bold;
    font-size: 2rem;
`;