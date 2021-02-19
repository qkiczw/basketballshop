import React from 'react';

import './homepage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
        <div className="directory-menu">
            <div className="first-row">
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>SHOES</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div> 
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>CLOTHES</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>ACCESORIES</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div> 
            </div>
            <div className="second-row">
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>BALLS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>OTHER</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;