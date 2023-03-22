import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import "./register.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

export const Register = () => {

    return (
        <Container className="register-form">
            <div align="center">
                <img id="icn" style={{ width: '11%', margintop: '-2%'}}  
                src="http://cdn.onlinewebfonts.com/svg/img_202755.png" alt="no_img.png"/>
            </div>

            <Row id="regrow">
                <Form>
                    <h1>REGISTER ACCOUNT</h1>
                    <Row>
                        <Col className="mx-auto" style={{maxwidth: '50%'}}>
                            <Form.Group>
                                <Form.Control 
                                type="text" 
                                placeholder="Username" 
                                name="username"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                name="email"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name="pass"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="password" 
                                placeholder="Confirm Password" 
                                name="cpass"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="text" 
                                placeholder="Address" 
                                name="address"/>
                            </Form.Group>

                            <Form.Group id="radiogrp">
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        label="Cash on Delivery"
                                        name="group1"
                                        type={type}
                                        id={`cod`}
                                    />
                                    <Form.Check
                                        label="Gcash"
                                        name="group1"
                                        type={type}
                                        id={`gcash`}
                                    />
                                </div>
                            ))}
                            </Form.Group>

                            <Form.Group align="center">
                                <Button className="btnContact"  type="submit"> REGISTER </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Row>

        </Container>

    );
}