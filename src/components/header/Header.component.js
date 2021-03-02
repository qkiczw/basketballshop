import React from 'react';
import { Link } from 'react-router-dom'
import './Header.styles.scss';


// Assets
import { ReactComponent as BallIcon } from '../../assets/ball-icon.svg';


const Header = () => (
    <header className="header">
        <Link to={"/"}>
            <BallIcon className="ball-icon"/> 
        </Link>
        <div className="main-menu">
            <Link className="main-menu-item" to="/shop">shop</Link> 
            <Link className="main-menu-item" to="/signin">Sign In</Link> 
            <Link className="main-menu-item" to="/shop">contact</Link>
        </div>
    </header>
    
    
)

export default Header;