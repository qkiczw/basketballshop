import React from 'react';

// Styled Components
import { FooterContainer } from './footer-styles';

const Footer = () => {
    const DATE = new Date()
    const accualYear = DATE.getFullYear()

    return(
    <>
        <FooterContainer>
            <span>Baskeball Shop &copy; {accualYear}</span>
        </FooterContainer>
    </>
)};

export default Footer;