import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {IoLocation} from "react-icons/io5";
import {BsTelephoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {BiLogoFacebook, BiLogoLinkedin} from "react-icons/bi";
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {useLocation} from "react-router-dom";


const Footer = () => {

  const location = useLocation();

  return <>
    {
        !location.pathname.includes("admin") &&
        <footer id="footer" className="secondary-bg-color">
          <Container className="pt-3 pb-2">
            <Row>
              <Col>
                <h1 className="fs-1 text-center quinary-color">Rent a Car</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  
                  
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Contact Us</h4>
                    <p className="fs-6 text-white m-0">
                  <span>
                    <IoLocation className="header-line-2-icon"/>&nbsp;
                    <a href="https://www.google.com/maps/place/Erode,+Tamil+Nadu/@11.3466233,77.6741971,13z/data=!3m1!4b1!4m6!3m5!1s0x3ba96f46762f4671:0xd97da6e3d9c7f75e!8m2!3d11.3410364!4d77.7171642!16zL20vMDQ3N2hk?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-white">Eode</a>
                  </span>
                      <br/>
                      <span>
                    <BsTelephoneFill size="0.9em" className="header-line-2-icon"/>&nbsp;
                        <a href="tel:+918870099495" target="_blank" className="text-white">+91 8870099495</a>
                  </span>
                      <br/>
                      <span>
                    <GrMail className="header-line-2-icon"/>&nbsp;
                        <a href="mailto:veldineshkumar67@gmail.com" target="_blank" className="text-white">veldineshkumar67@gmail.com</a>
                  </span>
                    </p>
                   
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-white text-center fs-6 mt-2 mb-1">
                  {new Date().getFullYear()} All Rights Reserved. Developed & Designed by &nbsp;
                  <a href="https://github.com/dineshkumarvelmurugan/" target="_blank" className="text-primary">dineshkumar</a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
    }
    </>
};
export default Footer;