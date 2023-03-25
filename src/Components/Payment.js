import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useStateValue } from "../context/StateProvider";
import "../checkout.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(
  "pk_test_51JlbVpSChO663qU8vNGvwdxRmUbtk1DJZwKLXZjZgbt3YG0b3mR9FLvpeUqIvsN9t509ftVowYK86BOok0pmL1Ef0062rVYo12"
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const [{ user, discount }] = useStateValue();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const getClientSecret = async () => {
      let body = {
        email: user.email,
        coin: 0,
      };
      if (discount) {
        body.coin = user.coins;
      }
      await fetch("http://localhost:5000/api/bill/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ email: user.email }),
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    };

    getClientSecret();
  }, [user.email, discount, user.coins]);

  const appearance = {
    theme: "flat",
    variables: {
      colorPrimary: "#EA580C",
      // colorBackground: '#f1efef',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {user && (
        <div className="App-checkout">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      )}
    </>
  );
}
