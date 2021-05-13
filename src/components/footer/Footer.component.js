import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    const DATE = new Date()
    const accualYear = DATE.getFullYear()

    return(
    <>
        <div className='footer-container'>
            <span>Baskeball Shop &copy; {accualYear}</span>
        </div>
    </>
)};

export default Footer;