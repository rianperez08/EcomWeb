import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import "./purchasehist.css";
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export const PurchaseHist = () => {

    return (
        <div>
            <div className="headp">
                <h1>Purchase History</h1>
            </div>
            <div className="purchasetable">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Date of Purchase</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        </div>
    )
}