import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";



export const Navbar = () => {


  const username = sessionStorage.getItem("userName");
  console.log(sessionStorage.getItem("userName"));


  return (

    <div className="navbar">
      <h2>{username}</h2>
      <div className="links">
        <Link to="/landingpage"> Home </Link>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/login"> Login </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
