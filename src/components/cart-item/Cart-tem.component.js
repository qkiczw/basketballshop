import React from 'react';
import './Cart-tem.styles.scss';


const CartItem = () => {

    return(
        <div className='cart-item'>
            <img className='cart-item-image' src='https://blob.sxv.pl/shops/media/f1000/2020/jordan/182191/air-jordan-xxxv-cq4227-030-5ffd526aea228.jpg'/>
            <div className='cart-item-details'>
                <div className='cart-item-name'>
                    name
                </div>
                <div className='cart-item-price'>
                    price x 3
                </div>
            </div>
        </div>
    )
}

export default CartItem;