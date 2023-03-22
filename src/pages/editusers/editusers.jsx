import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import "./editusers.css";
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';




export const EditUsers = () => {

 
    return (
        
        
        <form>
            <Table striped bordered hover id="tablead">
                <thead>
                    <tr>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>ADDRESS</th>
                    <th>CONTACT NO.</th>
                    <th>ACCESS</th>
                    <th>ACTIONS </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Form.Group>
                            <Form.Control 
                            type="text" 
                            placeholder="Username" 
                            name="username"/>
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            name="email"/>
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="pass"/>
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control 
                            type="text" 
                            placeholder="Address" 
                            name="address"/>
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control 
                            type="tel" 
                            placeholder="Phone no." 
                            name="phoneno"/>
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control 
                            type="text" 
                            placeholder="Access" 
                            name="Access"/>
                        </Form.Group>
                    </td>
                    <td>
                    <Button variant="light" id="">Update</Button>{' '}
                    <Button variant="danger" id="">Delete</Button>{' '}
                    </td>
                </tr>
                                    
                        
                    
                  
                </tbody>
            </Table>
        </form>
    );

}