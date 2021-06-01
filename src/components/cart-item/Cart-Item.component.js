import React from 'react';
// import './Cart-Item.styles.scss';

// Styled Components
import {
    CartItemContainer,
    CartItemImage,
    CartItemDetails

} from './cart-item.styles';

const CartItem = ( { item: {name, price, imgURL, quantity} } ) => {

    return(
        <CartItemContainer>
            <CartItemImage src={imgURL} alt='Item' />
            <CartItemDetails>
                <span>
                    {name}
                </span>
                <span>
                    ${price} x {quantity}
                </span>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;