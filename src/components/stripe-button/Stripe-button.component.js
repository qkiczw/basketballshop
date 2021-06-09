import React from 'react'

// Stripe
import StripeCheckout from 'react-stripe-checkout';



const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ItDFEGOMN22GMIE4ZG50q4X5ULgjZfm9gkrJ1mPVCHHEZVnNg62nwl0YnI54xSkfLbI9XLKXIjirFc5Tn7K2Zzd00FbXlyYe9'

    const onToken = (token) => {
        console.log(token)
        alert('Payment successful')
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='Basketball Store'
            billingAddress
            shippingAddress
            description={`Your toral is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
            panelLabel='Pay Now'
            image='https://www.svgrepo.com/show/65840/basketball.svg'
            token={onToken}
        />
    );
};


export default StripeButton;