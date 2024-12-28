import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Contact.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";
import FindYourNext from "../shared/find-next";
import { useLocation } from "react-router-dom";
// import india from "../../../public/images/contact-us/india.jpg"
const Contact = () => {
  const Router = useLocation();

  const contactRef = useRef();

  useEffect(() => {
    if (Router.hash) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>CONTACT US</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}
      <Container>
        <Row>
          <div className={styles.outsecsec}>
            <h5>WELCOME TO OUR LOCATIONS</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit the world
              of exciting and rewarding <br></br>web consulting and digital
              marketing solutions.
            </p>
          </div>
        </Row>
        <Row className={styles.contactImg}>
          <Col md={6}>
            <img src="/images/contact-us/india.webp" alt="" />
            <h1>india oFFICE lOCTION</h1>
            <h5>oFFICE aDDRESS</h5>
            <p>3707 E Southern Ave,Floors 1 & 2,Mesa, AZ 85206</p>
          </Col>
          <Col md={6}>
            <img src="/images/contact-us/usa.webp" alt="" />
            <h1>usa oFFICE lOCTION</h1>
            <h5>oFFICE aDDRESS</h5>
            <p>3707 E Southern Ave,Floors 1 & 2,Mesa, AZ 85206</p>
          </Col>
        </Row>
      </Container>
      <div id="contact1" ref={contactRef}>
        <Container className={styles.contactForm}>
          <Row>
            <div className={styles.contactMail}>
              <h5>Need Help? Contact Us Now!</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                world of exciting and rewarding <br></br>web consulting and
                digital marketing solutions.
              </p>
            </div>
          </Row>

          <Form>
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="tel"
                        placeholder="Enter Your Mobile No."
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="text"
                        placeholder="Your Location "
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="text"
                        placeholder="Company Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="number"
                        placeholder="How Many Staff Are You Looking For?"
                      />
                    </Form.Group>
                  </Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      className={` ${styles.textareaForm}`}
                      as="textarea"
                      rows={4}
                      placeholder="What Roles Are you Looking For?"
                    />
                  </Form.Group>
                  <Col className={styles.btn}>
                    <Button
                      className={styles.formbtn}
                      variant="primary"
                      type="submit"
                    >
                      Become our Client
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Container>
        <div>{/* <ClientSlider /> */}</div>
        <div>{/* <ServiceCatelogSlider /> */}</div>
      </div>
      {/* <FindYourNext /> */}
    </div>
  );
};

export default Contact;
