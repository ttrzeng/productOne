import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import fetch from 'isomorphic-unfetch';
import config from '../../constants/config';

class CheckOutModal extends React.Component {

  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  async onToken(token) {
    const response = await fetch(config.stripe.apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.amount,
          currency: config.stripe.currency
        },
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  render() {
    return(
      <StripeCheckout
          name="productOne checkout"
          token={this.onToken}
          amount={this.props.amount}
          currency={config.stripe.currency}
          stripeKey={config.stripe.apiKey}
          allowRememberMe={true} />
    )
  }

}

export default CheckOutModal;
