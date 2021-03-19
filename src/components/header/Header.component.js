import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import './Header.styles.scss';

// firebase auth
import { auth } from '../../firebase/firebase.utilities';
 

// Assets
import { ReactComponent as BallIcon } from '../../assets/ball-icon.svg';


const Header = ({ currentUser }) => (
    <header className="header">
        <div className='brand-and-welcome'>
        <Link to={"/"}>
            <BallIcon className="ball-icon"/> 
        </Link>
        <p>{ currentUser ? `Hello ${currentUser.displayName}` : 'Welcome in a Basketball store'}</p>
        </div>
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
);

const mapStateToProps = (state ) => ({
    currentUser:  state.user.currentUser,
})

export default connect(mapStateToProps)(Header);