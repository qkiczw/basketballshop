import React from 'react';
import './cart-dropdown.styles.scss';

//Components
import CustomButton from '../custom-button/Custom-button.component';
import CartItem from '../cart-item/Cart-tem.component';


const cartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CartItem/>
        </div>
        <CustomButton className='custom-button'>Checkout</CustomButton>
    </div>

)

export default cartDropdown;