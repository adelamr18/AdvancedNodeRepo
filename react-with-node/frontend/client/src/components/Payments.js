import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

export default class Payments extends Component {
  render() {
    debugger;
    return (
      <StripeCheckout
        amount={500}
        token={token => console.log(token)}
        name="Emaily"
        description="$5 for 5 email credits"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}
