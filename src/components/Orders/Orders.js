import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { clearDb, removeItemFromDb } from "../../utilities/fakeDb";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const deleteItemFromList = (id) => {
    const remaining = cart.filter((pd) => pd._id !== id);

    setCart(remaining);
    removeItemFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    clearDb();
  };

  return (
    <div className="home-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            deleteItemFromList={deleteItemFromList}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleClearCart} className="cart-btn">
            Clear Cart
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
