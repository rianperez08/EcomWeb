import React from "react";
import "./contact.css";
import Accordion from 'react-bootstrap/Accordion';

export const Contact = () => {
  return (
    
      <div className="contact">
        <div className="contacttitlediv">
          <div className="contactTitle">
            <h1>CONTACT US</h1>
          </div>
        </div>
        <div id="fade">
          <div className="concontent">
            <h1>Reach out to us.</h1>
            <div className="accord">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>E-mail</Accordion.Header>
                  <Accordion.Body>
                  E-mail us at inquiry@KALARO.ph
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Branch Numbers</Accordion.Header>
                  <Accordion.Body>
                  <p>You may contact these numbers to reach out to our different branches that is available everyday from 9AM to 9PM to assist you.</p>
                  <br></br>

                  <ul>
                    <li>Rizal Area
                    <p id="connum">0900-000-0000</p></li>
                    <li>BGC Area
                    <p id="connum">0900-000-0001</p></li>
                    <li>Quezon City Area
                    <p id="connum">0900-000-0002</p></li>
                    <li>Metro Manila Area
                    <p id="connum">0900-000-0003</p></li>
                  </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    
    

  )
};
