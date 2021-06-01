import React from 'react';
// import './Checkout-item.styles.scss';

// Styled Components
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';


// Redux
import { connect } from 'react-redux';
import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';



const CheckoutItem = ( {cartItem, clearItem, addItem ,removeItem} ) => {
    const {name, imgURL, price, quantity} = cartItem
    
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imgURL} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={()=> removeItem(cartItem)} >&#10094;</div>
                <span>{quantity}</span>
            <div onClick={()=> addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>${price}</TextContainer>
        <RemoveButtonContainer onClick={ ()=> clearItem(cartItem) } >&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem))

});

export default connect(null, mapDispatchToProps)(CheckoutItem);