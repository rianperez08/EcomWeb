import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import "./editusers.css";
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

//Database Stuff
import { db } from './firebase-config';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from "@firebase/firestore";
import {useNavigate} from 'react-router-dom';



export const EditUsers = () => {
    const usersCollectionRef = collection(db, "users");
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [access, setAccess] = useState(2);
    
    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            //console.log(data);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };

        getUsers();

    }, []);

    const updateUser = async (id) => {
        const userDoc = doc(db, "users", id);
        console.log("Update Function GO!");
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
        
        if (access != 2) 
            await updateDoc(userDoc, { access: access }); 


        // await updateDoc(userDoc, {
        //     username: userName, 
        //     email: email,
        //     password: pass,
        //     address: address,
        //     contactNo: contactNo,
        //     access: access
        // });

        window.location.reload(false);
    };
    

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
        window.location.reload(false);
    };
    


 
    return (
        
        
        <form className="tablee">
            <Table striped bordered hover id="tablead">
                <thead>
                    <tr>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>ADDRESS</th>
                    <th>CONTACT NO.</th>
                    <th>TOTAL</th>
                    <th>ACCESS</th>
                    <th>ACTIONS </th>
                    </tr>
                </thead>
                <tbody>
                
                {users.map((users) => 
                <tr>
                    <td>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        placeholder="Username" 
                        name="username"
                        defaultValue={users.username}
                        onChange={(event) => setUserName(event.target.value)}
                        />
                    </Form.Group>
                    </td>
                    <td>
                    <Form.Group>
                        <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        defaultValue={users.email}
                        onChange={(event) => setEmail(event.target.value)}/>
                    </Form.Group>
                    </td>
                    <td>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        placeholder="Password" 
                        name="pass"
                        defaultValue={users.password}
                        onChange={(event) => setPass(event.target.value)}/>
                    </Form.Group>
                    </td>
                    <td>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        placeholder="Address" 
                        name="address"
                        defaultValue={users.address}
                        onChange={(event) => setAddress(event.target.value)}/>
                    </Form.Group>
                    </td>
                    <td>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        placeholder="Phone no." 
                        name="phoneno"
                        defaultValue={users.contactNo}
                        onChange={(event) => setContactNo(event.target.value)}/>
                    </Form.Group>
                    </td>
                    
                    <td id="total">
                        <br></br>
                        ${users.total}
                    </td>


                    <td>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        placeholder="Access" 
                        name="Access"
                        defaultValue={users.access}
                        onChange={(event) => setAccess(event.target.value)}/>
                    </Form.Group>
                    </td>
                    

                    <td>
                    <Button onClick={() => {updateUser(users.id)}} variant="light" type="button">Update</Button>{' '}
                    <Button onClick={() => {deleteUser(users.id)}} variant="danger" type="button">Delete</Button>{' '}
                    </td>
                </tr>
                )}
                
 
                    
                                    
                        
                    
                  
                </tbody>
            </Table>
        </form>
    );

}