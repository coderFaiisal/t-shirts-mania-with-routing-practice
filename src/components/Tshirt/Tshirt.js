import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tShirt, handleAddToCart }) => {
  const { picture, price, name } = tShirt;
  return (
    <div className="tshirt-card">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <button onClick={() => handleAddToCart(tShirt)}>Buy Me</button>
    </div>
  );
};

export default Tshirt;
