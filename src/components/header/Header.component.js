import React from 'react';


const Header = () => (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <div style={{ width: '90%', height: '1px', border: '1px solid black'}}></div>
            <h1 style={ {
                padding: "20px 100px",
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '5px'
                
                } }>
                Basketball Shop
            </h1>
            <div style={{ width: '90%', height: '1px', border: '1px solid black'}}></div>
    </div>
)

export default Header;