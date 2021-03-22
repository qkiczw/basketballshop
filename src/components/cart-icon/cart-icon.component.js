import React from 'react';
import './cart-icon.styles.scss';

// Assets
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';


const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-cart-icon' />
        <span className='item-counter'> 0 </span>
    </div>
)

export default CartIcon;