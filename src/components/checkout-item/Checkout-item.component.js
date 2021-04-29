import React from 'react';
import './Checkout-item.styles.scss';

// Components
import { clearItemFromCart } from '../../redux/cart/cart.actions';

// Redux
import { connect } from 'react-redux'



const CheckoutItem = ( {cartItem, clearItem} ) => {
    console.log('test:',cartItem)
    console.log('clear:',clearItem)
    const {name, imgURL, price, quantity} = cartItem
    
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imgURL} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity '>{quantity}</span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={ ()=> clearItem(cartItem) } >&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);