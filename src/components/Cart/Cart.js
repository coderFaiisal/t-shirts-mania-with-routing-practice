import React from "react";
import "./Cart.css";

const Cart = ({ cart, children }) => {
  console.log(children);
  let pdPrice = 0;
  let total = 0;
  let shippingCost = 0;
  let vat = 0;
  let quantity = 0;
  const toFixedNum = (num) => {
    return parseFloat(num).toFixed(2);
  };
  for (const pd of cart) {
    quantity = quantity + pd.quantity;
    pdPrice = pdPrice + pd.price * pd.quantity;
    if (quantity < 5) {
      shippingCost = 10;
    } else if (quantity < 10) {
      shippingCost = 20;
    } else if (quantity < 15) {
      shippingCost = 10;
    } else if (quantity > 20) {
      shippingCost = 0;
    }
    vat = pdPrice * 0.1;
    total = pdPrice + shippingCost + vat;
  }
  return (
    <div
      className={`cart-container ${
        quantity < 1 ? "danger" : quantity < 5 ? "yellow" : "green"
      }`}
    >
      <h3>Order Summary</h3>
      <h4>Items: {quantity}</h4>
      <h4>Price: ${toFixedNum(pdPrice)}</h4>
      <h4>Shipping Cost: ${toFixedNum(shippingCost)}</h4>
      <h4>Vat: ${toFixedNum(vat)}</h4>
      <h3>Total Price: ${toFixedNum(total)}</h3>
      {children}
      {quantity < 5 ? (
        <h3>You have to pay $10 shipping cost on first 5 products order</h3>
      ) : quantity < 10 ? (
        <h3>You have to pay $20 shipping cost on first 10 products order</h3>
      ) : quantity < 15 ? (
        <h3> Buy upto 15 products for 10$ shipping charge</h3>
      ) : (
        <h3>Congratulations! shipping cost is free!</h3>
      )}
    </div>
  );
};

export default Cart;
