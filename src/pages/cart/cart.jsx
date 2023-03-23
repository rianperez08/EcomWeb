import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

//Database Stuff
import { db } from './firebase-config';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from "@firebase/firestore";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  //Sent stuff to Database
  const usersCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        //console.log(data);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getUsers();
    {users.map((users) => 
      users.id == window.localStorage.getItem("ID") ? setTotal(users.total) : setTotal(users.total) 
    )}

  }, []);


  const updateUser = async () => {
      const userDoc = doc(db, "users", window.localStorage.getItem("ID"));
      totalAmount += total;
      await updateDoc(userDoc, { total: (totalAmount)});
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart1">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <Button variant="dark" onClick={() => navigate("/shop")} id="cshop"> Continue Shopping </Button>
          <Button variant="dark" onClick={() => { checkout(); updateUser(); navigate("/confirmation"); }} id="checkout" >
            {" "} Checkout {" "}
          </Button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
