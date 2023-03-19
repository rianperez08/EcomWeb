import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {useNavigate} from 'react-router-dom';
import {Row, Col, Container, Button, Form} from 'react-bootstrap';
import "./login.css";
import { db } from './firebase-config';
import { collection, getDocs } from "@firebase/firestore";

import { Routes, Route } from 'react-router-dom';



export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            console.log(data);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };

        getUsers();

    }, []);

    const navigate = useNavigate();

    
    

    function HandleSubmit(event){
        event.preventDefault();
        var { email, pass } = document.forms[0];
        {users.map((user) => {
            if (event.target[0].value == user.email) {
                if (event.target[1].value == user.password){
                    sessionStorage.setItem("userName", user.username);
                    navigate("/landingpage");
                }
                console.log("Nop");
            }
            console.log("Nop");
            
            console.log(user.email + " " + user.password);
            console.log(event.target[0].value + " " + event.target[1].value);
        })};

        
    }




    return (
        <Container className="contact-form">
        
        <div align="center">
            <img style={{ width: '11%', margintop: '-2%'}}  
            src="http://cdn.onlinewebfonts.com/svg/img_202755.png" alt="no_img.png"/>
        </div>

        <Row>
        <Form onSubmit={HandleSubmit}>
            <h1>LOG IN</h1>
            <Row>
                <Col className="mx-auto" style={{maxwidth: '50%'}}>
                    <Form.Group>
                        <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        name="email"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control 
                        type="password" 
                        placeholder="Passowrd" 
                        name="pass"/>
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