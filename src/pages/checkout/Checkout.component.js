import React from 'react';
import './checkout.styles.scss';

// Components
import CheckoutItem from '../../components/checkout-item/Checkout-item.component';
import StripeButton from '../../components/stripe-button/Stripe-button.component';

// Redux 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Selectors
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>    
        </div>
        <div className='checkout-items'>
            {cartItems.map( item => <CheckoutItem key={item.id} cartItem={item} /> )}
        </div>
        <div className='checkout-total'>
            <span>TOTAL: ${cartTotal}</span> 
        </div>
        <div className='test-warning'>
            *Please use the following test credit card data for payments*
            <br />
            <span>4242 4242 4242 4242 - Exp: 01/22, CVV: 123 </span>
        </div>
        <StripeButton price={cartTotal}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);