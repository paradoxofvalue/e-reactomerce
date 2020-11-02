import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Hj8cKIZSSQSglfnd8D1PdQwZhL27fZhWWXR59KpqPDnvUmbioLXrUpA7vhGUir859tn3RLgSXpnMlmhNwHyg8wb00GqbtyJol';

  const onToken = token => {
    console.log(token);
    alert('Payment Successuful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="E Reactomerce"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;