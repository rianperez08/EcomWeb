import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

export const Confirmation = () => {

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Thank You For Ordering!</h1>
                <h2>Continue Shopping?</h2>
                <br></br>
                <Button variant="dark" onClick={() => navigate("/shop")} id="cshop"> Yes </Button>
            </div>
        </div>
    ); 
}