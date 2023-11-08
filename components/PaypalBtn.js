import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

function PayPalBtn(props) {
  const {
    amount,
    currency,
    createSubscription,
    onApprove,
    catchError,
    onError,
    onCancel,
  } = props;
  
  const paypalKey =
    "AW1jYHOVfktuEXdj-Qq0xphgrGGYokLnU20PrTWXHoeobYyGNlPnZL2O2iOnv4pJ3zIHs7fsrcRDXVL3";

  return (
    <div className="relative z-0">
      <PayPalButton
        amount={amount}
        currency={currency}
        createSubscription={(data, details) =>
          createSubscription(data, details)
        }
        onApprove={(data, details) => onApprove(data, details)}
        onError={(err) => onError(err)}
        catchError={(err) => catchError(err)}
        onCancel={(err) => onCancel(err)}
        options={{
          clientId: paypalKey,
          vault: true,
        }}
        style={{
          shape: "rect",
          color: "gold",
          layout: "vertical",
          label: "paypal",
        }}
      />
    </div>
  );
}
export default PayPalBtn;
