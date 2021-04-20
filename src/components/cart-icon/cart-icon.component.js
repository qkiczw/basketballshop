import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

//Redux Actions
import { toogleCartHidden } from '../../redux/cart/cart.actions'

// Assets
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';


const CartIcon = ({ toogleCartHidden, cartItems}) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-cart-icon' />
        <span className='item-counter'> {cartItems.reduce( (accumulatorQuantity, currentQuantity)=> accumulatorQuantity + currentQuantity.quantity, 0 )} </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: ()=> dispatch(toogleCartHidden())
})

const mapStateToProps = ( {cart: {cartItems}} ) => ({
    //CartItems is from deeper destructuring a state ( state > {cart} > {cart: {cartItems}}  ) 
    cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);