import React from "react";
import "./ReviewItem.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewItem = ({ product, deleteItemFromList }) => {
  const { _id, name, quantity, picture, price } = product;

  return (
    <div className="review-container">
      <div>
        <img src={picture} alt="" />
      </div>
      <div className="review-info-container">
        <div className="review-info">
          <h2>Name: {name}</h2>
          <h3>Price: {price}</h3>
          <h4>Quantity: {quantity}</h4>
        </div>
        <div onClick={() => deleteItemFromList(_id)}>
          <TrashIcon className="delete-icon" />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
