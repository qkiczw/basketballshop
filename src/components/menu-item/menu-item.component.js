import React from 'react';
import './menu-item.styles.scss';


const MenuItem = ({ title, bgImgUrl, size}) => (
    <div  className={`menu-item ${size}`} >
        <div className="menu-background" style={ {backgroundImage: `url(${bgImgUrl})`} }>

        </div>
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div> 
)
export default MenuItem;

