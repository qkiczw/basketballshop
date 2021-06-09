import React from 'react';

// Components
import CheckoutItem from '../../components/checkout-item/Checkout-item.component';
import StripeButton from '../../components/stripe-button/Stripe-button.component';

// Styled Components
import {
    CheckoutPageContainer,
    CheckoutHeader,
    HeaderBlock,
    CheckoutTotal,
    TextWarnigContainer,
    ButtonContainer
} from './checkout.styles'

// Redux 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Selectors
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


const CheckoutPage = ({cartItems, cartTotal}) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>    
        </CheckoutHeader>
        <div className='checkout-items'>
            {cartItems.map( item => <CheckoutItem key={item.id} cartItem={item} /> )}
        </div>
        <CheckoutTotal>
            <span>TOTAL: ${cartTotal}</span> 
        </CheckoutTotal>
        <TextWarnigContainer>
            *Please use the following test credit card data for payments*
            <br />
            <span>4242 4242 4242 4242 - Exp: 01/22, CVV: 123 </span>
        </TextWarnigContainer>

        <ButtonContainer>
            <StripeButton price={cartTotal}/>
        </ButtonContainer>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);