import React from 'react'
import "./footer.css";

export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
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
      );
};