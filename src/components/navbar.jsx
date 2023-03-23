import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";


export const NavbarBS = () => {
  const signOut = async () =>{
    window.localStorage.clear();
    window.location.href = "/";
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="Nav">
      <Container id="con">
        <Navbar.Brand style={{fontWeight: "700"}}href="/" title="KALARO">KALARO.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div id="divlink">
              <Nav.Link id="leftlink" href="/">Home</Nav.Link>
            </div>
            <div id="divlink">
              <Nav.Link id="leftlink" href="/shop">Shop</Nav.Link>
            </div>
            <div id="divlink">
              <Nav.Link id="leftlink" href="/contact">Contact us</Nav.Link>
            </div>
            
          </Nav>
          <Nav className="d-flex">
          <Link to="/cart" id="navbtn">
              <ShoppingCart size={32} id="shopcart" />
            </Link>

            <NavDropdown title="Account" align="end" id="basic-nav-dropdown">
              <Container id="nav-dropdown-con">
                { window.localStorage.getItem('LoggedIn') == null ? 
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item> : <NavDropdown.Item onClick={() => {signOut()}}>Logout</NavDropdown.Item>
                }
                
                <NavDropdown.Divider />

                { window.localStorage.getItem('LoggedIn') == null || window.localStorage.getItem('LoggedIn') < 0 ? 
                  <NavDropdown.Item href="/register"> Sign Up </NavDropdown.Item> : <NavDropdown.Item href="/editProfile"> Profile Settings </NavDropdown.Item>
                }

                { window.localStorage.getItem('LoggedIn') == 1 ? 
                  <NavDropdown.Item href="/editusers"> Edit Users </NavDropdown.Item> : console.log("Not Admin!")
                }
                <NavDropdown.Item href="/purchasehist"> Purchase History </NavDropdown.Item>
              </Container>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

    // <div className="navbar">
    //   <div className="links">
    //     <Link to="/landingpage"> Home </Link>
    //     <Link to="/"> Shop </Link>
    //     <Link to="/contact"> Contact </Link>
    //     <Link to="/cart">
    //       <ShoppingCart size={32} />
    //     </Link>
    //   </div>
    // </div>
  );
};
