import React from "react";
import styles from "./BlogDetail.module.css";
import { Col, Container, Row, useAccordionButton, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";

const blogsDetials = () => {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => "");

    return (
      <button
        type="button"
        onMouseEnter={decoratedOnClick}
        // onMouseLeave={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  return (
    <>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>BLOGS DETAILS</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}

      {/* indusries desgin section start */}

      {/* indusries desgin section start */}
      <div>
        <Container>
          <Row className={`mt-5`}>
            {/* slide desgin section start */}
            <Col md={5} xs={12} sm={12} lg={3}>
              <div style={{ top: "50px", position: "sticky" }}>
                <div className={`mt-2 ${styles.searchTop}`}>
                  <form className="bg-gray-200 py-4">
                    <input
                      // type="text"
                      // name="text"
                      placeholder="search here..."
                      className=" p-2  outline-none "
                    />
                    <button
                      className={`${styles.topbtn}  text-center text-blue-500  `}
                    >
                      <IoSearchOutline />
                    </button>
                  </form>
                </div>

                <div className={`mt-3 ${styles.slidebgTop}`}>
                  <div className={styles.topFormText}>
                    <p>
                      Lorem ipsum dolor the world of exciting and rewarding web
                      consulting and digital marketing solutions.
                    </p>
                  </div>

                  <Form className={` ${styles.formboxpaddingTop}`}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        type="email"
                        className={`${styles.inputslide}`}
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                    <div className={styles.topFormBtn}>
                      <Button type="submit" className={`${styles.formbtnTop}`}>
                        SUBSCRIBE
                      </Button>
                    </div>
                  </Form>
                </div>

                <div className={`mt-3 ${styles.slidebg}`}>
                  <div className={`${styles.slideheading}`}>
                    <h6>Contact us</h6>
                    <hr />
                  </div>
                  <Form className={`mt-5 ${styles.formboxpadding}`}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        required
                        type="text"
                        className={`${styles.inputslide}`}
                        placeholder="Enter Your Name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        type="email"
                        className={`${styles.inputslide}`}
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control
                        required
                        type="text"
                        className={`${styles.inputslide}`}
                        placeholder="Enter Your Mobile No."
                      />
                    </Form.Group>
                    <textarea
                      className={`${styles.textareas}`}
                      placeholder="Enter Your Message"
                    ></textarea>
                    <Button type="submit" className={`${styles.formbtn}`}>
                      Become our Client
                    </Button>
                  </Form>
                </div>

                <div className={`${styles.slidebg}`}>
                  <div className={`${styles.slideheading}`}>
                    <h6>ALL INDUSTRIES</h6>
                    <hr />
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Card className={`${styles.listbox}`}>
                      <Card.Header className={`${styles.listbtnhead}`}>
                        <Link href="#" className={`${styles.listbtn}`}>
                          <CustomToggle
                            eventKey="2"
                            className={styles.accordiHeading}
                          >
                            Administration & Support
                          </CustomToggle>
                        </Link>
                      </Card.Header>
                      <Accordion.Collapse
                        eventKey="2"
                        className={`${styles.linklist}`}
                      >
                        <>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles1
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles2
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles3
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles4
                            </Card.Body>
                          </Link>
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card className={`${styles.listbox}`}>
                      <Card.Header className={`${styles.listbtnhead}`}>
                        <Link href="#" className={`${styles.listbtn}`}>
                          <CustomToggle eventKey="2">
                            Hospitality & Support
                          </CustomToggle>
                        </Link>
                      </Card.Header>
                      <Accordion.Collapse
                        eventKey="2"
                        className={`${styles.linklist}`}
                      >
                        <>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles1
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles2
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles3
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles4
                            </Card.Body>
                          </Link>
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card className={`${styles.listbox}`}>
                      <Card.Header className={`${styles.listbtnhead}`}>
                        <Link href="#" className={`${styles.listbtn}`}>
                          <CustomToggle eventKey="2">
                            Real Estate Services
                          </CustomToggle>
                        </Link>
                      </Card.Header>
                      <Accordion.Collapse
                        eventKey="2"
                        className={`${styles.linklist}`}
                      >
                        <>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles1
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles2
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles3
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles4
                            </Card.Body>
                          </Link>
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card className={`${styles.listbox}`}>
                      <Card.Header className={`${styles.listbtnhead}`}>
                        <Link href="#" className={`${styles.listbtn}`}>
                          <CustomToggle eventKey="2">
                            Education & Training
                          </CustomToggle>
                        </Link>
                      </Card.Header>
                      <Accordion.Collapse
                        eventKey="2"
                        className={`${styles.linklist}`}
                      >
                        <>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles1
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles2
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles3
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles4
                            </Card.Body>
                          </Link>
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card className={`${styles.listbox}`}>
                      <Card.Header className={`${styles.listbtnhead}`}>
                        <Link href="#" className={`${styles.listbtn}`}>
                          <CustomToggle eventKey="2">
                            Information Technology
                          </CustomToggle>
                        </Link>
                      </Card.Header>
                      <Accordion.Collapse
                        eventKey="2"
                        className={`${styles.linklist}`}
                      >
                        <>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles1
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles2
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles3
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles4
                            </Card.Body>
                          </Link>
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card className={`${styles.listbox}`}>
                      <Card.Header className={`${styles.listbtnhead}`}>
                        <Link href="#" className={`${styles.listbtn}`}>
                          <CustomToggle eventKey="2">
                            Retail Trade & ECommerce
                          </CustomToggle>
                        </Link>
                      </Card.Header>
                      <Accordion.Collapse
                        eventKey="2"
                        className={`${styles.linklist}`}
                      >
                        <>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles1
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles2
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles3
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles4
                            </Card.Body>
                          </Link>
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card className={`${styles.listbox}`}>
                      <Card.Header className={`${styles.listbtnhead}`}>
                        <Link href="#" className={`${styles.listbtn}`}>
                          <CustomToggle eventKey="2">
                            Engineering & Construction
                          </CustomToggle>
                        </Link>
                      </Card.Header>
                      <Accordion.Collapse
                        eventKey="2"
                        className={`${styles.linklist}`}
                      >
                        <>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles1
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles2
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles3
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles4
                            </Card.Body>
                          </Link>
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card className={`${styles.listbox}`}>
                      <Card.Header className={`${styles.listbtnhead}`}>
                        <Link href="#" className={`${styles.listbtn}`}>
                          <CustomToggle eventKey="2">
                            Lorem ipsum dolor
                          </CustomToggle>
                        </Link>
                      </Card.Header>
                      <Accordion.Collapse
                        eventKey="2"
                        className={`${styles.linklist}`}
                      >
                        <>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles1
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles2
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles3
                            </Card.Body>
                          </Link>
                          <Link href="#">
                            <Card.Body
                              className={`${styles.listbtnbody} d-flex`}
                            >
                              <img
                                src="/images/industrymain/role.png"
                                alt=""
                                className={` me-3 ${styles.listimg}`}
                              />
                              Roles4
                            </Card.Body>
                          </Link>
                        </>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </Col>
            {/* slide desgin section end */}

            {/* right desgin section start */}
            <Col lg={9} md={7} xs={12} sm={12}>
              {/* outsourcing desgin section start */}

              <Row className={`${styles.bredCrump}  `}>
                <Col md={12}>
                  <Link>Home /</Link>
                  <Link>Community /</Link>
                  <Link>Latest Blog</Link>{" "}
                </Col>
                {/* <Col md={4}>
              <p>Latest Events Blog</p>
            </Col> */}
              </Row>
              <Row className={styles.detialedBlog}>
                <h2>Outsourcing as a solution for talent shortages</h2>
                <Col md={12} className={`${styles.bredCrump} mb-4`}>
                  <Link>Last update: 24 nov, 2023 By Vcana Global | </Link>
                  <Link>6 Minutes Read</Link>
                </Col>
                <img src="/images/blogDetials/blor.png" />
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions. we deliver exactly
                  what we promise to our clients. With more than 600+ Clients
                  worldwide, their trust in us speaks volumes about our
                  expertise and unflinching commitment towards growing their
                  business. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit the world of exciting and rewarding web consulting and
                  digital marketing solutions. we deliver exactly what we
                  promise to our clients. Founded in the year 2019, we are a
                  reputable Business consultancy Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit the world of
                  exciting and rewarding web consulting and digital marketing
                  solutions.
                </p>
                <h2>Lorem ipsum dolor Outsourcing as a solution </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions. we deliver exactly
                  what we promise to our clients. With more than 600+ Clients
                  worldwide, their trust in us speaks volumes about our
                  expertise and unflinching commitment towards growing their
                  business. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit the world of exciting and rewarding web consulting and
                  digital marketing solutions. we deliver exactly what we
                  promise to our clients. Founded in the year 2019, we are a
                  reputable Business consultancy Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit the world of
                  exciting and rewarding web consulting and digital marketing
                  solutions.
                </p>
                <h2>Lorem ipsum dolor Outsourcing as a solution </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions. we deliver exactly
                  what we promise to our clients. With more than 600+ Clients
                  worldwide, their trust in us speaks volumes about our
                  expertise and unflinching commitment towards growing their
                  business. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit the world of exciting and rewarding web consulting and
                  digital marketing solutions. we deliver exactly what we
                  promise to our clients. Founded in the year 2019, we are a
                  reputable Business consultancy Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit the world of
                  exciting and rewarding web consulting and digital marketing
                  solutions.
                </p>
                <h2>Lorem ipsum dolor Outsourcing as a solution </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions. we deliver exactly
                  what we promise to our clients. With more than 600+ Clients
                  worldwide, their trust in us speaks volumes about our
                  expertise and unflinching commitment towards growing their
                  business. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit the world of exciting and rewarding web consulting and
                  digital marketing solutions. we deliver exactly what we
                  promise to our clients. Founded in the year 2019, we are a
                  reputable Business consultancy Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit the world of
                  exciting and rewarding web consulting and digital marketing
                  solutions.
                </p>

                <h2>Lorem ipsum dolor Outsourcing as a solution </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions. we deliver exactly
                  what we promise to our clients. With more than 600+ Clients
                  worldwide, their trust in us speaks volumes about our
                  expertise and unflinching commitment towards growing their
                  business. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit the world of exciting and rewarding web consulting and
                  digital marketing solutions. we deliver exactly what we
                  promise to our clients. Founded in the year 2019, we are a
                  reputable Business consultancy Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit the world of
                  exciting and rewarding web consulting and digital marketing
                  solutions.
                </p>
                <h2>Lorem ipsum dolor Outsourcing as a solution </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions. we deliver exactly
                  what we promise to our clients. With more than 600+ Clients
                  worldwide, their trust in us speaks volumes about our
                  expertise and unflinching commitment towards growing their
                  business. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit the world of exciting and rewarding web consulting and
                  digital marketing solutions. we deliver exactly what we
                  promise to our clients. Founded in the year 2019, we are a
                  reputable Business consultancy Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit the world of
                  exciting and rewarding web consulting and digital marketing
                  solutions.
                </p>
                <h2>Lorem ipsum dolor Outsourcing as a solution </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions. we deliver exactly
                  what we promise to our clients. With more than 600+ Clients
                  worldwide, their trust in us speaks volumes about our
                  expertise and unflinching commitment towards growing their
                  business. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit the world of exciting and rewarding web consulting and
                  digital marketing solutions. we deliver exactly what we
                  promise to our clients. Founded in the year 2019, we are a
                  reputable Business consultancy Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit the world of
                  exciting and rewarding web consulting and digital marketing
                  solutions.
                </p>
                <h2>Lorem ipsum dolor Outsourcing as a solution </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions. we deliver exactly
                  what we promise to our clients. With more than 600+ Clients
                  worldwide, their trust in us speaks volumes about our
                  expertise and unflinching commitment towards growing their
                  business. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit the world of exciting and rewarding web consulting and
                  digital marketing solutions. we deliver exactly what we
                  promise to our clients. Founded in the year 2019, we are a
                  reputable Business consultancy Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit the world of
                  exciting and rewarding web consulting and digital marketing
                  solutions.
                </p>
              </Row>
              <Row>
                <Col className={styles.iconSocial} md="4">
                  <h5>Share With US</h5> <hr></hr>
                </Col>
                <Col md="8">
                  {" "}
                  <ul className={styles.iconsoc}>
                    <li>
                      <img src="images/blogDetials/img1.png"></img>
                    </li>
                    <li>
                      <img src="images/blogDetials/img2.png"></img>
                    </li>
                    <li>
                      <img src="images/blogDetials/img3.png"></img>
                    </li>
                    <li>
                      <img src="images/blogDetials/img4.png"></img>
                    </li>
                    <li>
                      <img src="images/blogDetials/img5.png"></img>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            {/* right desgin section start */}
          </Row>
        </Container>
      </div>
      {/* indusries desgin section end */}

      {/* get in touch */}

      <div className={`${styles.getInToch} mt-5 pt-4 pb-4 mb-5`}>
        <Container className={styles.contactForm}>
          <Form>
            <Row>
              <Col className={styles.getIn_img} md={6}>
                <img src="/images/blogs/getin.png" />
              </Col>
              <Col md={6}>
                <div className={styles.contactMail}>
                  <h5>Get in Touch</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                    world of exciting and rewarding web consulting and digital
                    marketing solutions. we deliver exactly what we promise to
                    our clients. Founded in the year 2019,
                  </p>
                </div>
                <Row>
                  <Col md={6}>
                    <Form.Group
                      className={styles.ico_get}
                      controlId="formGroupEmail"
                    >
                      <FaUser color="#6C6C72" />
                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className={styles.ico_get}
                      controlId="formGroupEmail"
                    >
                      <AiOutlineMail color="#6C6C72" />
                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className={styles.ico_get}
                      controlId="formGroupEmail"
                    >
                      <MdPhoneInTalk color="#6C6C72" />

                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="tel"
                        placeholder="Phone"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className={styles.ico_get}
                      controlId="formGroupEmail"
                    >
                      <HiOutlineHomeModern color="#6C6C72" />

                      <Form.Control
                        className={` ${styles.mainForm}`}
                        type="text"
                        placeholder="Company Name"
                      />
                    </Form.Group>
                  </Col>

                  <Form.Group
                    className={styles.ico_get2}
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <GrDocumentText />

                    <Form.Control
                      className={` ${styles.textareaForm}`}
                      as="textarea"
                      placeholder="Describe your Project in Short"
                      rows={3}
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
      </div>

      {/* get in touch */}
      {/* ClientSlider section start */}
      <div>{/* <ClientSlider /> */}</div>
      {/* ClientSlider section start */}

      {/* ServiceCatelogSlider section start */}
      <div>{/* <ServiceCatelogSlider /> */}</div>
      {/* ServiceCatelogSlider section start */}
    </>
  );
};

export default blogsDetials;
