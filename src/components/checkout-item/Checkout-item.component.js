import React from 'react';
import './Checkout-item.styles.scss';


const CheckoutItem = ({ cartItem: {name, imgURL, price, quantity} }) => ( //deep destructuring
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imgURL} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity '>{quantity}</span>
        <span className='price'>${price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;