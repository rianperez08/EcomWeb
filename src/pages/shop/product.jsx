import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
  <div id="fade">
    <div fluid className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button variant="dark" className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  </div>
  );
};
