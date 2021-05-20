import React from 'react'
import './strip-button.styles.scss';

// Stripe
import StripeCheckout from 'react-stripe-checkout';


class StripeButton extends React.Component {

    onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }

    render() {
        return (
            <StripeCheckout 
                token={this.onToken}
                stripeKey='pk_test_51ItDFEGOMN22GMIE4ZG50q4X5ULgjZfm9gkrJ1mPVCHHEZVnNg62nwl0YnI54xSkfLbI9XLKXIjirFc5Tn7K2Zzd00FbXlyYe9'
            />
        )
    }
}

export default StripeButton;