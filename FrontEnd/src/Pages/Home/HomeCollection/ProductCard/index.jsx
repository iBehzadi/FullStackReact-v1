import React from "react";
import { FiEye, FiShoppingCart } from "react-icons/fi";
export default function ProductCard({ id, image, category, title, price }) {
  return (
    <>
      <div>
        <div>
          <p>New</p>
        </div>
        <img src={image} alt="" />
        <div>
          <button>
            <FiShoppingCart />
          </button>
          <FiEye />
        </div>
      </div>
      <div>
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
        </div>
        <p>{price}</p>
      </div>
    </>
  );
}
