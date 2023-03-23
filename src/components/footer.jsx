import React from 'react'
import "./footer.css";

export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Shop Apple</h4>
                        <ul className="list-unstyled">
                            <li>Iphone</li>
                            <li>Iphone</li>
                            <li>Iphone</li>
                            <li>Iphone</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Shop Iphone</h4>
                        <ul className="list-unstyled">
                            <li>Iphone</li>
                            <li>Iphone</li>
                            <li>Iphone</li>
                            <li>Iphone</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Link with us</h4>
                        <ul className="list-unstyled">
                            <li>inquiry@KALARO.ph</li>
                            <li>@KALAROapple</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>Rizal</li>
                            <li>0900-000-0000</li>
                            <li>BGC</li>
                            <li>0900-000-0001</li>
                            <li>Quezon City</li>
                            <li>0900-000-0002</li>
                            <li>Metro Manila</li>
                            <li>0900-000-0003</li>
                        </ul>
                    </div> 
                </div>
                <br></br>
                <br></br>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} KALARO. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
      )
};