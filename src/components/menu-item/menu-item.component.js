import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';


const MenuItem = ({ title, bgImgUrl, size, history, match, linkURL}) => (
    <div  className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkURL}`)} >
        <div className="menu-background" style={ {backgroundImage: `url(${bgImgUrl})`} }></div>
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div> 
)
export default withRouter(MenuItem);

