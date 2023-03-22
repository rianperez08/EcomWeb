import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavbarBS = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="Nav">
      <Container fluid id="con">
        <Navbar.Brand style={{fontWeight: "700"}}href="/" title="KALARO">KALARO.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div fluid id="divlink">
              <Nav.Link id="leftlink" href="/">Home</Nav.Link>
            </div>
            <div fluid id="divlink">
              <Nav.Link id="leftlink" href="/shop">Shop</Nav.Link>
            </div>
            <div fluid id="divlink">
              <Nav.Link id="leftlink" href="/contact">Contact us</Nav.Link>
            </div>
            
          </Nav>
          <Nav className="d-flex">
            <a type="button" className="btn btn-dark" id="navbtn" href="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </a>
            <NavDropdown title="Account" align="end" id="basic-nav-dropdown">
              <Container id="nav-dropdown-con">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/dbTest">Test</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/register">
                  Create Account
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  Edit User
                </NavDropdown.Item>
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
