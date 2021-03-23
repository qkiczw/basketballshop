import React from 'react';
import './cart-dropdown.styles.scss';

//Components
import CustomButton from '../custom-button/Custom-button.component';


const cartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        </div>
        <CustomButton className='custom-button'>Checkout</CustomButton>
    </div>

)

export default cartDropdown;