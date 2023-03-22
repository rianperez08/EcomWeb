import React, { useEffect, useState } from "react";
import "./dbTest.css";
import { db } from './firebase-config';
import { collection, getDocs } from "@firebase/firestore";


export const DbTest = () => {
    const [userDb, setUsersDb] = useState([]);
    const [productDb, setProductsDb] = useState([]);
    const userDbCollectionTargA = collection(db, "users");
    const userDbCollectionTargB = collection(db, "products");

    useEffect(() => {

        const getDb = async () => {
            const dataUserDb = await getDocs(userDbCollectionTargA);
            const dataProductDb = await getDocs(userDbCollectionTargB);
            setUsersDb(dataUserDb.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setProductsDb(dataProductDb.docs.map((doc) => ({...doc.data(), id: doc.id})));

            console.log(dataUserDb);
        };
        getDb();


    }, []);
    
    return (
        <div className="App"> 
            
            {
            //Display Users
            userDb.map((user) => {
                return (
                <div> 
                    <h1> Email: {user.email} </h1>
                </div>
            );})
            }

            {
            //Show Products
            productDb.map((product) => {
                return (
                <div> 
                    <h1> Name: {product.name} </h1>
                </div>
            );})
            }
            
        
        </div>

        
    );
}