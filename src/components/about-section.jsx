import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import AboutImage from '../assets/images/about-image.png'


const AboutSection = () => {
    return (
    <div id="about-section">
     <Container>
        <Row className="mt-1 mb-2">
          <Col xs={{span:12, order:"last"}} md={{span:6, order:"first"}}>
            <div className="image_iman">
                <img src={AboutImage} className="about_img" />
            </div>
          </Col>
          <Col xs={{span:12, order:"first"}} md={{span:6, order:"last"}}>
            <div className="mt-2 mb-5">
              <h1 className="text-uppercase fs-1 fw-600">
                  About <span className="primary-color">Us</span>
              </h1>
              <p className="about-text fs-5 m-0">
    Welcome to our Car Rental System, your go-to platform for easy, reliable, and affordable vehicle rentals. We aim to simplify the process of finding and booking a car, offering a wide range of vehicles that cater to all needs, whether it's a compact car for city driving or an SUV for long trips. With a user-friendly interface, customers can browse available cars, compare prices, and make reservations in just a few clicks. Our mission is to provide a seamless and secure car rental experience, ensuring convenience and satisfaction at every step. We are committed to offering flexible options and excellent customer service to meet the diverse demands of our clients.
</p>

              <div className="mt-3">
                  <a href="#" className="readmore-btn fs-5 px-3 py-2">Read More</a>
              </div>
            </div>
          </Col>
        </Row>
     </Container>
    </div>
    );
    };
    export default AboutSection;