import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import "./editProfile.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

//Database Stuff
import { db } from './firebase-config';
import { collection, getDocs, updateDoc, doc } from "@firebase/firestore";
import {useNavigate} from 'react-router-dom';

export const EditProfile = () => {
    const [visible, setVisible]=useState(false);

    const usersCollectionRef = collection(db, "users");
    const [users, setUsers] = useState([]);
    
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConf, setPassConf] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('N/A');
    const navigate = useNavigate();

    useEffect(() => {
        
        const getUser = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
            
        };

        getUser();
        

    }, []);

    const updateUser = async (id) => {
        const userDoc = doc(db, "users", id);
        console.log("UPDATED!@");
        console.log(userName);
        if (userName != "") 
            await updateDoc(userDoc, { username: userName });

        if (email != "") 
            await updateDoc(userDoc, { email: email });
        
        if (pass != "") 
            await updateDoc(userDoc, { password: pass });
        
        if (address != "") 
            await updateDoc(userDoc, { address: address });  
        
        if (contactNo != "") 
            await updateDoc(userDoc, { contactNo: contactNo }); 

        window.location.reload(false);
    };


    return (
        <div id="fade">
            <Container className="register-form">
                <div align="center">
                    <img id="icn" style={{ width: '11%', margintop: '-2%'}}  
                    src="http://cdn.onlinewebfonts.com/svg/img_202755.png" alt="no_img.png"/>
                </div>
            
            
            
            
            
            <Row id="regrow">
                <form>
                    <h1>UPDATE ACCOUNT</h1>
                    {users.map((users) => 
                    users.id == window.localStorage.getItem("ID") ?
                        
                    <Row>
                        <Col className="mx-auto" style={{maxwidth: '50%'}}>
                            <Form.Group>
                                <Form.Control 
                                type="text" 
                                placeholder="Username" 
                                name="username"
                                defaultValue={users.username}
                                onChange={(event)=>setUserName(event.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                name="email"
                                defaultValue={users.email}
                                onChange={(event)=>setEmail(event.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="text" 
                                placeholder="Password" 
                                name="pass"
                                defaultValue={users.password}
                                onChange={(event)=>setPass(event.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control 
                                type="text" 
                                placeholder="Address" 
                                name="address"
                                defaultValue={users.address}
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
                                        defaultValue={users.contactNo}
                                        onChange={(event)=>setContactNo(event.target.value)}/>
                                    }

                                        
                                    </div>
                                ))}
                                </Form.Group>

                            <Form.Group align="center">
                                <Button onClick={() => {updateUser(users.id)}} className="btnContact"  type="button"> Update </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                    : null
                    )}
                </form>
            </Row>

            </Container>
        </div>

    );
}