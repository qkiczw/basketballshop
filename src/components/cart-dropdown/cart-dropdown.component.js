import React from 'react';
// import './cart-dropdown.styles.scss';

// Router
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

// Selectors
import { createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

//Components
import CartItem from '../cart-item/Cart-Item.component';

// Styled Components
import {
    CartDropdownContainer,
    CartItemsContainer,
    CartDropdownButton,
    EmptyCartMessageContainer
} from './cart-dropdown.styles.js'


const cartDropdown = ({cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length 
                ?
                cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
                :
                <EmptyCartMessageContainer >Your Cart is empty!</EmptyCartMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={ ()=> {
            history.push('/checkout');
            dispatch(toogleCartHidden()); //connect pass dispatch to props if we dont supply second argument in it (just for one action?)
            }  }>
            Checkout
        </CartDropdownButton>
    </CartDropdownContainer>

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(cartDropdown));