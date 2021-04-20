import React from 'react';
import './cart-dropdown.styles.scss';

// Redux
import { connect } from 'react-redux';

//Components
import CustomButton from '../custom-button/Custom-button.component';
import CartItem from '../cart-item/Cart-tem.component';


const cartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map( cartItem => <CartItem item={cartItem}/> )}
        </div>
        <CustomButton className='custom-button'>Checkout</CustomButton>
    </div>

);

const mapStateToProps = ( {cart: {cartItems} } ) => ({
    //CartItems is from deeper destructuring a state ( state > {cart} > {cart: {cartItems}}  ) 
    cartItems
});


export default connect(mapStateToProps)(cartDropdown);