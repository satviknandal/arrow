import React from "react";
import "./Cart.scss";
import { MockData } from "../../../MockData";

const CartComponent = () => {
  return (
    <div className="cart">
      <div className="cart-left">
        <img src="./img/cart-image.png" alt="" />
        {MockData?.cart?.title}
      </div>
      <div className="cart-right">
        <button onClick={() => alert("popup will open on click")}>
          {MockData?.cart?.order}
        </button>
        <span>{MockData?.cart?.price}</span>
      </div>
    </div>
  );
};

CartComponent.propTypes = {};

export default CartComponent;
