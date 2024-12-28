import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className={styles.mainfooter}>
        <Container>
          <div className={styles.fotterbox}>
            <Row>
              <Col md={3}>
                <div className={styles.contactstyle}>
                  <img src="images/contact-us/phone.png"></img>
                  <p>602-860-2435</p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.contactstyle}>
                  <img src="images/contact-us/gmail.png"></img>
                  <p>info@syncdsolutions.com</p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.contactstyle1}>
                  <img src="images/contact-us/loction.png"></img>
                  <p>3707 E Southern Ave, Floors 1 & 2, Mesa, AZ 85206</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <Row>
            <Col md={12} xl={4}>
              <div className={styles.footerifo1}>
                <img src="images/footer/logo1.png"></img>
                <p>
                  Syncd Global Solutions is your trusted partner for
                  comprehensive offshore staffing solutions. Follow us on social
                  media.
                </p>
                <ul className={styles.iconsoc}>
                  <Link to="https://www.facebook.com/syncdsolutions/">
                    <li>
                      <img src="images/footer/face.png"></img>
                    </li>
                  </Link>
                  {/* <Link to="">
                    <li>
                      <img src="images/footer/inst.png"></img>
                    </li>
                  </Link> */}
                  <Link to="https://twitter.com/syncdsolutions">
                    <li>
                      <img src="images/footer/tww.png"></img>
                    </li>
                  </Link>
                  <Link to="https://www.linkedin.com/company/syncdsolutions/">
                    <li>
                      <img src="images/footer/link.png"></img>
                    </li>
                  </Link>
                </ul>
              </div>
            </Col>
            <Col md={6} xl={4} className={styles.footerAddress}>
              <div className={styles.footerifo}>
                <h5>WHO WE ARE</h5>
                <ul>
                  <Link to="/">
                    <li>Home</li>
                  </Link>

                  <Link to="/about">
                    <li>Services & About Us</li>
                  </Link>
                  <Link to="/why-syncd">
                    <li>Why Syncd</li>
                  </Link>
                  <Link to="/privacy-policy">
                    <li>Privacy Policy</li>
                  </Link>
                  <Link to="/security-and-compliance">
                    <li>Security & Compliance</li>
                  </Link>

                  {/* <Link to="/services">
                    <li>Services</li>
                  </Link> */}

                  {/* <Link to="/hiring">
                    <li>We're Hiring</li>
                  </Link> */}

                  <li>
                    {" "}
                    {/* <Link to="/faq" className="footer" aria-current="page">
                      FAQs
                    </Link> */}
                  </li>
                </ul>
              </div>
            </Col>
            {/* <Col md={4} lg={3}>
              <div className={styles.footerifo}>
                <h5>WHAT WE DO</h5>
                <ul>
                  <Link to="/hospitality-tourism">
                    <li>Hospitality & Tourism</li>
                  </Link>
                  <Link to="/services/real-estate">
                    <li>Real Estate Services</li>
                  </Link>

                  <Link to="/education-training">
                    <li>Education & Training</li>
                  </Link>

                  <Link to="/Retail-trade">
                    <li>Retail Trade & E-Commerce</li>
                  </Link>

                  <Link to="/Information-Media-Telecommunications">
                    {" "}
                    <li>Information Media Telecommunications</li>
                  </Link>

                  <Link to="/services">
                    {" "}
                    <li> More Industrys</li>
                  </Link>
                </ul>
              </div>
            </Col> */}
            <Col md={6} xl={4} className={styles.footerEmail}>
              <div className={styles.footerifo}>
                <h5>OUR OFFICES</h5>
                <ul>
                  <li>
                    {" "}
                    <img src="images/contact-us/loction.png"></img>
                    <p>Mesa, AZ, USA</p>
                  </li>

                  {/* <li>
                    <img src="images/contact-us/phone.png"></img>
                    <p>602-860-2435</p>
                  </li>
                  <li>
                    {" "}
                    <img src="images/contact-us/loction.png"></img>
                    <p>
                      3707 E Southern Ave, Floors 1 & <br></br>2, Mesa, AZ 85206
                    </p>
                  </li> */}

                  <li>
                    <img src="images/contact-us/loction.png"></img>
                    <p>Mohali, Punjab, India</p>
                  </li>
                  <li>
                    <img src="images/contact-us/loction.png"></img>
                    <p>Sangli, Maharashtra, India</p>
                  </li>
                </ul>
                <div className={styles.footerak}>
                  <Link to="/gdpr-compliant">
                    <img src="images/footer/jk.webp"></img>
                  </Link>
                  <Link to="/ccpa-compliant">
                    <img src="images/footer/jk2.webp"></img>
                  </Link>
                  <Link to="/iso-27001">
                    {" "}
                    <img src="images/footer/jk3.webp"></img>
                  </Link>
                  <Link to="/soc-compliant">
                    {" "}
                    <img src="images/footer/jk4.webp"></img>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className={styles.copy}>
                <p>
                  Copyright © 2023 Syncd Global Solutions. All rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
