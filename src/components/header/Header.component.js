import React from 'react';
import { connect } from  'react-redux';


// Seletors
import { createStructuredSelector } from 'reselect';
import { selectCurrentUSer } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Styled components
import './Header.styles.scss';
import { 
    HeaderContainer, 
    LogoContainer, 
    LogoAndWelcomeContainer,
    WelcomeTextContainer,
    OptionLink,
    MainMenuContainer
    } from './header.styles';

// firebase auth
import { auth } from '../../firebase/firebase.utilities'; 

// Assets
import { ReactComponent as BallIcon } from '../../assets/basketball-svgrepo-com.svg';


const Header = ({ currentUser, cartDropdownIsHidden }) => (
    <HeaderContainer>
        <LogoAndWelcomeContainer>
            <LogoContainer to={"/"}>
                <BallIcon/> 
            </LogoContainer>
            <WelcomeTextContainer>
                Basketball store
            </WelcomeTextContainer>
        </LogoAndWelcomeContainer>
        <MainMenuContainer>
            <OptionLink to={"/"}>home</OptionLink>
            <OptionLink to="/shop">shop</OptionLink>             
            <OptionLink to="/shop">contact</OptionLink>
            {
                currentUser
                ?
                <OptionLink as='div' onClick={ ()=> auth.signOut() } >Sign Out</OptionLink>
                :
                <OptionLink to="/signin">Sign In</OptionLink> 
            }
            <CartIcon /> 
        </MainMenuContainer>
        {cartDropdownIsHidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    // currentUser, //because key and value are the same ( currentUser: currentUser) 
    cartDropdownIsHidden: selectCartHidden,
    currentUser: selectCurrentUSer,
})

export default connect(mapStateToProps)(Header);