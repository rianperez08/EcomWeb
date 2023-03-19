import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import "./landingpage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const lower = {
    color: 'black',
};

const divpad = {
    padding: "80px",
};

export const LandingPage = () => {
    return(
    <>
        <div id="fade">
            <div>
            
            </div>
            <div>
                
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="carousel/slide1.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <a href="/">
                                <Button variant="dark">Shop Now</Button>{' '}
                            </a>
                            <p style={lower}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="carousel/slide1.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <a href="/">
                                <Button variant="dark">Shop Now</Button>{' '}
                            </a>
                        <p style={lower}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="carousel/slide1.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <a href="/">
                                <Button variant="dark">Shop Now</Button>{' '}
                            </a>
                        <p style={lower}>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            

            <div style={divpad}>
            <h2>What's New?</h2>
            <br></br>
            <Container>
                <Row>
                    <Col sm>
                        <img id="ip" src="homeprod/6.png" class="d-block w-100"
                        alt="14pro"/>
                        <p id="homeprd">IPhone 14 Pro Max 
                            <br></br>
                            <a href="/">
                                <Button variant="primary" id="prdbuy">Buy</Button>{' '}
                            </a>
                        </p>
                        </Col>
                    <Col sm>
                        <img id="ip" src="homeprod/4.png" class="d-block w-100"
                        alt="14pro"/>
                        <p id="homeprd">IPhone 14 Pro Max
                            <br></br>
                            <a href="/">
                                <Button variant="primary" id="prdbuy">Buy</Button>{' '}
                            </a>
                        </p>
                    </Col>
                    <Col sm>
                        <img id="ip" src="homeprod/5.png" class="d-block w-100"
                        alt="14"/>
                        <p id="homeprd">Iphone 14
                            <br></br>
                            <a href="/">
                                    <Button variant="primary" id="prdbuy">Buy</Button>{' '}
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>;

        
    </>

    
    )
    
};