import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51H8jnFHAlfbxGYVYdEi2pLO8MX7PpkYi4qHNE7qKBgKBPmq75eFA8Ka3lzeJIyxscGXEARcJLT9Yr18K2KZc0TFH00x9ei1WcM";

    const onToken = (token) => {
        console.log(token);
        alert("Payment successful");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        ></StripeCheckout>
    );
};

export default StripeCheckoutButton;
