import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
      <div className="cartItem">
        <img src={productImage} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> Price: ${price}</p>
          <div className="countHandler">
            <Button variant="dark" onClick={() => removeFromCart(id)}> - </Button>
            <input 
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <Button variant="dark" onClick={() => addToCart(id)}> + </Button>
          </div>
        </div>
      </div>
  );
};
