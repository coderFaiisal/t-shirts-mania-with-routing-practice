import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import { clearDb, getStoredCart, setToDb } from "../../utilities/fakeDb";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const shoppingCart = getStoredCart();
    let savedCart = [];
    for (const key in shoppingCart) {
      const addedProduct = tShirts.find((pd) => pd._id === key);
      if (addedProduct) {
        addedProduct.quantity = shoppingCart[key];
        savedCart.push(addedProduct);
      }
    }

    setCart(savedCart);
  }, [tShirts]);

  const handleAddToCart = (product) => {
    let newCart = [...cart, product];
    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((pd) => pd._id !== product._id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    setToDb(product._id);
  };
  const handleClearCart = () => {
    console.log("clear");
    setCart([]);
    clearDb();
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <Tshirt
            key={tShirts.id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders">
            <button className="cart-btn">Procced Orders</button>
          </Link>
          <button onClick={handleClearCart} className="cart-btn">
            Clear Cart
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Home;
