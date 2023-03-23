import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import "./register.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

//Database Stuff
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from "@firebase/firestore";
import {useNavigate} from 'react-router-dom';

export const Register = () => {
    const [visible, setVisible]=useState(false);

    const userDbCollectionTargA = collection(db, "users");
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConf, setPassConf] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('N/A');
    const [access, setAccess] = useState(0);
    const navigate = useNavigate();

    const RegisterUser = async (event) => {
        event.preventDefault();

        if (pass === passConf) {
            await addDoc(userDbCollectionTargA, { 
                username: userName, 
                email: email,
                password: pass,
                address: address,
                contactNo: contactNo,
                access: access
            });
            navigate("/login");
        }else{
            console.log("Password Does Not Match!")
        }
    };

    return (
        <div id="fade">
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
                                name="username"
                                onChange={(event)=>setUserName(event.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                name="email"
                                onChange={(event)=>setEmail(event.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name="pass"
                                onChange={(event)=>setPass(event.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="password" 
                                placeholder="Confirm Password" 
                                name="cpass"
                                onChange={(event)=>setPassConf(event.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="text" 
                                placeholder="Address" 
                                name="address"
                                onChange={(event)=>setAddress(event.target.value)}/>
                            </Form.Group>

                                <Form.Group id="radiogrp">
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            label="Cash on Delivery"
                                            name="group1"
                                            type={type}
                                            id={`cod`}
                                            value="cod"
                                            onClick={ ()=>setVisible(false)}
                                        />
                                        <Form.Check
                                            label="Gcash"
                                            name="group1"
                                            type={type}
                                            id={`gcash`}
                                            value="gcash"
                                            onClick={ ()=>setVisible(true)}
                                        />

                                    { visible &&
                                        <Form.Control 
                                        type="tel" 
                                        placeholder="Phone no." 
                                        name="phoneno"
                                        onChange={(event)=>setContactNo(event.target.value)}/>
                                    }

                                        
                                    </div>
                                ))}
                                </Form.Group>

                            <Form.Group align="center">
                                <Button onClick={RegisterUser} className="btnContact"  type="submit"> REGISTER </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Row>

            </Container>
        </div>

    );
}