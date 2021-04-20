import React from 'react';
import './Cart-tem.styles.scss';


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
                {console.log('id: ', id)}
            </div>
        </div>
    )
}

export default CartItem;