import React from 'react';
import './checkout.styles.scss';

// Components
import CheckoutItem from '../../components/checkout-item/Checkout-item.component';

// Redux 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Selectors
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Produckt</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>    
        </div>
        <div className='checkout-items'>
            {/* {cartItems.map(item => <p key={item.id}>{item.name}</p>)} */}
            {cartItems.map( item => <CheckoutItem key={item.id} cartItem={item} /> )}
        </div>
        <div className='checkout-total'>
            <span>TOTAL: ${cartTotal}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);