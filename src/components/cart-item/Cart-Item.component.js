import React from 'react';
import './Cart-Item.styles.scss';


const CartItem = ( { item: {id, name, price, imgURL, quantity} } ) => {

    return(
        <div className='cart-item'>
            <img className='cart-item-image' src={imgURL}/>
            <div className='cart-item-details'>
                <div className='cart-item-name'>
                    {name}
                </div>
                <div className='cart-item-price'>
                    ${price} x {quantity}
                </div>
            </div>
        </div>
    )
}

export default CartItem;