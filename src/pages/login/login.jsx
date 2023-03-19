import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css";


export const Login = () => {
    return (
        <Container className="contact-form">
        
        <div align="center">
            <img style={{ width: '11%', margintop: '-2%'}}  src="http://cdn.onlinewebfonts.com/svg/img_202755.png" alt="no_img.png"/>
        </div>

        <Row>
        <Form method="post">
            <h1>LOG IN</h1>
            <Row>
                <Col className="mx-auto" style={{maxwidth: '50%'}}>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Email"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="password" placeholder="Passowrd"/>
                    </Form.Group>

                    <Form.Group align="center">
                        <Button className="btnContact"  type="submit"> LOG IN </Button>
                        {/* <a href=""><button type="button" style={{color: '#fff', background: '#4285f4', width: '100%'}} className="btnContact">Sign Up</button></a> */}
                    </Form.Group>
                </Col>
            </Row>
        </Form>
        </Row>

        </Container>
      );
    

}