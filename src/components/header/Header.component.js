import React from 'react';
import { Link } from 'react-router-dom'
import './Header.styles.scss';

// firebase auth
import { auth } from '../../firebase/firebase.utilities';
 

// Assets
import { ReactComponent as BallIcon } from '../../assets/ball-icon.svg';


const Header = ({ currentUser }) => (
    <header className="header">
        <Link to={"/"}>
            <BallIcon className="ball-icon"/> 
        </Link>
        <div className="main-menu">
            <Link className="main-menu-item" to="/shop">shop</Link> 
            
            <Link className="main-menu-item" to="/shop">contact</Link>
            {
                currentUser
                ?
                <div className='main-menu-item main-menu-item-sign-out' onClick={ ()=> auth.signOut() } >Sign Out</div>
                :
                <Link className="main-menu-item" to="/signin">Sign In</Link> 
            }
        </div>
    </header>
    
    
)

export default Header;