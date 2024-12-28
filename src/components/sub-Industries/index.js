import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Col, Container, Row, useAccordionButton, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";
import FindYourNext from "../shared/find-next";
import Accordion from "react-bootstrap/Accordion";
import { useParams, Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

const SubIndustries = () => {
  const [name, setName] = useState("Role");
  const [img, setImg] = useState("");

  const { url } = useParams();
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

  const currentRole = IndustryData.find((d) => d.link === url);

  useEffect(() => {
    setName(currentRole.name);
    setImg(currentRole.img);
  }, [currentRole.name]);

  return (
    <>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>INDUSTRIES</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}
      {/* indusries desgin section start */}
      <div>
        <Container>
          <Row className={`mt-5`}>
            {/* side desgin section start */}
            <Col md={5} xs={12} sm={12} lg={3}>
              <StickyBox offsetTop={100} offsetBottom={100}>
                <div className={`${styles.sidebg}`}>
                  <div className={`${styles.sideheading}`}>
                    <h6>ALL INDUSTRIES</h6>
                    <hr />
                  </div>
                  <div>
                    <Accordion
                      className={`${styles.headerbg}`}
                      defaultActiveKey
                    >
                      {IndustryData.map((data, i) => (
                        <Card className={`  ${styles.headerbg1}`} key={i}>
                          <Card.Header className={`${styles.headercolor}`}>
                            <Link to={`/roles/${data.link}`}>
                              <CustomToggle eventKey={i}>
                                {data.name}
                              </CustomToggle>
                            </Link>
                            <hr />
                          </Card.Header>
                          <Accordion.Collapse eventKey={i}>
                            <Card.Body className={`${styles.listbodybg}`}>
                              <Col lg={12}>
                                <div className={` me-3 ${styles.iconbox}`}>
                                  <Link to={`/roles/${data.link}`}>
                                    <h1>
                                      <img
                                        src="/images/industrymain/role.png"
                                        alt=""
                                        className={` me-3 ${styles.iconimg}`}
                                      />{" "}
                                      Roles1
                                    </h1>
                                  </Link>
                                  <Link to={`/roles/${data.link}`}>
                                    <h1>
                                      <img
                                        src="/images/industrymain/role.png"
                                        alt=""
                                        className={` me-3 ${styles.iconimg}`}
                                      />{" "}
                                      Roles2
                                    </h1>
                                  </Link>
                                  <Link to={`/roles/${data.link}`}>
                                    <h1>
                                      <img
                                        src="/images/industrymain/role.png"
                                        alt=""
                                        className={` me-3 ${styles.iconimg}`}
                                      />{" "}
                                      Roles3
                                    </h1>
                                  </Link>
                                  <Link to={`/roles/${data.link}`}>
                                    <h1>
                                      <img
                                        src="/images/industrymain/role.png"
                                        alt=""
                                        className={` me-3 ${styles.iconimg}`}
                                      />{" "}
                                      Roles4
                                    </h1>
                                  </Link>
                                </div>
                              </Col>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ))}
                    </Accordion>
                  </div>
                </div>
                <div className={`mt-3 ${styles.sidebg}`}>
                  <div className={`${styles.sideheading}`}>
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
              </StickyBox>
            </Col>
            {/* slide desgin section end */}

            {/* right desgin section start */}
            <Col lg={9} md={7} xs={12} sm={12}>
              {/* outsourcing desgin section start */}

              <div className={` ${styles.outsourcing} `}>
                <h1>What is {name} Services Outsourcing?</h1>
                <Row className="mt-4">
                  <Col md={12} lg={4} xs={12} sm={12} mt-5>
                    <div className={` ${styles.herosection} `}>
                      <img src={img} alt="" />
                    </div>
                  </Col>
                  <Col md={12} lg={8} xs={12} sm={12}>
                    <div className={` ${styles.herotext} `}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit the world of exciting and
                        rewarding web consulting and digital marketing
                        solutions. we deliver exactly what we promise to our
                        clients.
                        <br /> With more than 600+ Clients worldwide, their
                        trust in us speaks volumes about our expertise and
                        unflinching commitment towards growing their business.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions. we deliver exactly what we
                        promise to our clients. Founded in the year 2019, we are
                        a reputable Business consultancy{" "}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* outsourcing desgin section end */}

              {/* typesservices desgin section start */}

              <div className={` ${styles.typesservices} `}>
                <h1>Top Reasons To Consider {name} Services Outsourcing</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding <br />
                  web consulting and digital marketing solutions.{" "}
                </p>

                <Row>
                  <Col lg={6} md={12} xs={12} sm={12}>
                    <div className={` ${styles.typebox} `}>
                      <img src="/images/industrymain/icon.png" alt="" />
                      <h2>Lorem ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions Lorem ipsum dolor sit amet,
                        consectetur adipescent alit we deliver exactly what we
                        promise.
                        <br /> The world of exciting and rewarding web
                        consulting and digital marketing solutions. we deliver
                        exactly what we promise to our Lorem ipsum dolor sit
                        amet clients.
                        <br /> With more than 600+ Clients worldwide, their
                        trust in us speaks volumes about our expertise and
                        unflinching commitment towards growing their business
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} sm={12}>
                    <div className={` ${styles.typebox2nd} `}>
                      <img src="/images/industrymain/icon.png" alt="" />
                      <h2>Lorem ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions Lorem ipsum dolor sit amet,
                        consectetur adipescent alit we deliver exactly what we
                        promise.
                        <br /> The world of exciting and rewarding web
                        consulting and digital marketing solutions. we deliver
                        exactly what we promise to our Lorem ipsum dolor sit
                        amet clients.
                        <br /> With more than 600+ Clients worldwide, their
                        trust in us speaks volumes about our expertise and
                        unflinching commitment towards growing their business
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} sm={12}>
                    <div className={` ${styles.typebox3rd} `}>
                      <img src="/images/industrymain/icon.png" alt="" />
                      <h2>Lorem ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions Lorem ipsum dolor sit amet,
                        consectetur adipescent alit we deliver exactly what we
                        promise.
                        <br /> The world of exciting and rewarding web
                        consulting and digital marketing solutions. we deliver
                        exactly what we promise to our Lorem ipsum dolor sit
                        amet clients.
                        <br /> With more than 600+ Clients worldwide, their
                        trust in us speaks volumes about our expertise and
                        unflinching commitment towards growing their business
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} sm={12}>
                    <div className={` ${styles.typebox} `}>
                      <img src="/images/industrymain/icon.png" alt="" />
                      <h2>Lorem ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions Lorem ipsum dolor sit amet,
                        consectetur adipescent alit we deliver exactly what we
                        promise.
                        <br /> The world of exciting and rewarding web
                        consulting and digital marketing solutions. we deliver
                        exactly what we promise to our Lorem ipsum dolor sit
                        amet clients.
                        <br /> With more than 600+ Clients worldwide, their
                        trust in us speaks volumes about our expertise and
                        unflinching commitment towards growing their business
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} sm={12}>
                    <div className={` ${styles.typebox2nd} `}>
                      <img src="/images/industrymain/icon.png" alt="" />
                      <h2>Lorem ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions Lorem ipsum dolor sit amet,
                        consectetur adipescent alit we deliver exactly what we
                        promise.
                        <br /> The world of exciting and rewarding web
                        consulting and digital marketing solutions. we deliver
                        exactly what we promise to our Lorem ipsum dolor sit
                        amet clients.
                        <br /> With more than 600+ Clients worldwide, their
                        trust in us speaks volumes about our expertise and
                        unflinching commitment towards growing their business
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} sm={12}>
                    <div className={` ${styles.typeboxbg} `}>
                      <h1>Need More Help? Contact Us</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions of exciting and rewarding
                        digital marketing solutions.{" "}
                      </p>
                      <Link to="/contact">
                        <button href="#" className={` ${styles.typebtn} `}>
                          Contact Us
                        </button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* typesservices desgin section end */}

              {/* stepss desgin section start */}
              <div className={` ${styles.steps} `}>
                <h1>steps to outsource {name} Services</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding <br />
                  web consulting and digital marketing solutions.{" "}
                </p>
                <Container fluid>
                  <Row>
                    <Col>
                      <Swiper
                        style={{
                          height: "580px"
                        }}
                        slidesPerView={1}
                        spaceBetween={15}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false
                        }}
                        pagination={{
                          clickable: true
                        }}
                        breakpoints={{
                          540: {
                            slidesPerView: 1,
                            spaceBetween: 10
                          },
                          768: {
                            slidesPerView: 1
                          },
                          1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 30
                          }
                        }}
                        modules={[Pagination, Autoplay]}
                        className="our_steps_slider"
                      >
                        <SwiperSlide>
                          <div className={styles.stepboxbg}>
                            <img src="/images/industrymain/1.png" alt="" />
                            <h1>Lorem ipsum</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit the world of exciting and rewarding web
                              consulting and digital marketing solutions Lorem
                              ipsum dolor sit amet, consectetur adipescent alit
                              we deliver exactly what we promise. the world of
                              exciting and rewarding web consulting and digital
                              marketing solutions. we deliver exactly what we
                              promise to our Lorem ipsum dolor sit amet clients.
                              With more than 600+ Clients worldwide, their trust
                              in us speaks volumes about our expertise and
                              unflinching commitment towards growing their
                              business.
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.stepboxbg}>
                            <img src="/images/industrymain/2.png" alt="" />
                            <h1>Lorem ipsum</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit the world of exciting and rewarding web
                              consulting and digital marketing solutions Lorem
                              ipsum dolor sit amet, consectetur adipescent alit
                              we deliver exactly what we promise. the world of
                              exciting and rewarding web consulting and digital
                              marketing solutions. we deliver exactly what we
                              promise to our Lorem ipsum dolor sit amet clients.
                              With more than 600+ Clients worldwide, their trust
                              in us speaks volumes about our expertise and
                              unflinching commitment towards growing their
                              business.
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.stepboxbg}>
                            <img src="/images/industrymain/3.png" alt="" />
                            <h1>Lorem ipsum</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit the world of exciting and rewarding web
                              consulting and digital marketing solutions Lorem
                              ipsum dolor sit amet, consectetur adipescent alit
                              we deliver exactly what we promise. the world of
                              exciting and rewarding web consulting and digital
                              marketing solutions. we deliver exactly what we
                              promise to our Lorem ipsum dolor sit amet clients.
                              With more than 600+ Clients worldwide, their trust
                              in us speaks volumes about our expertise and
                              unflinching commitment towards growing their
                              business.
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.stepboxbg}>
                            <img src="/images/industrymain/1.png" alt="" />
                            <h1>Lorem ipsum</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit the world of exciting and rewarding web
                              consulting and digital marketing solutions Lorem
                              ipsum dolor sit amet, consectetur adipescent alit
                              we deliver exactly what we promise. the world of
                              exciting and rewarding web consulting and digital
                              marketing solutions. we deliver exactly what we
                              promise to our Lorem ipsum dolor sit amet clients.
                              With more than 600+ Clients worldwide, their trust
                              in us speaks volumes about our expertise and
                              unflinching commitment towards growing their
                              business.
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.stepboxbg}>
                            <img src="/images/industrymain/2.png" alt="" />
                            <h1>Lorem ipsum</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit the world of exciting and rewarding web
                              consulting and digital marketing solutions Lorem
                              ipsum dolor sit amet, consectetur adipescent alit
                              we deliver exactly what we promise. the world of
                              exciting and rewarding web consulting and digital
                              marketing solutions. we deliver exactly what we
                              promise to our Lorem ipsum dolor sit amet clients.
                              With more than 600+ Clients worldwide, their trust
                              in us speaks volumes about our expertise and
                              unflinching commitment towards growing their
                              business.
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.stepboxbg}>
                            <img src="/images/industrymain/3.png" alt="" />
                            <h1>Lorem ipsum</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit the world of exciting and rewarding web
                              consulting and digital marketing solutions Lorem
                              ipsum dolor sit amet, consectetur adipescent alit
                              we deliver exactly what we promise. the world of
                              exciting and rewarding web consulting and digital
                              marketing solutions. we deliver exactly what we
                              promise to our Lorem ipsum dolor sit amet clients.
                              With more than 600+ Clients worldwide, their trust
                              in us speaks volumes about our expertise and
                              unflinching commitment towards growing their
                              business.
                            </p>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </Col>
                  </Row>
                </Container>
              </div>
              {/* steps desgin section end */}

              {/* benifits desgin section start */}
              <div className={` ${styles.benefitsbg} `}>
                <h1>Syncd Solutions advantage</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit the world of exciting
                  and rewarding web consulting and digital marketing solutions.
                  we deliver exactly what we promise to our clients. With more
                  than 600+ Clients worldwide, their trust in us speaks volumes
                  about our expertise and unflinching commitment towards growing
                  their business. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting solutions.
                </p>
              </div>
              {/* benifits desgin section end */}

              {/* role desgin section start */}
              <div className={` ${styles.role} `}>
                <h1>
                  We are experts in hiring for various roles in {name} staff
                </h1>
                <p>
                  Lorem ipsum dolor sit the world of exciting and rewarding
                  amet, consectetur adipiscing elit the world of exciting and
                  rewarding web consulting and digital marketing solutions.
                </p>
                <Row>
                  <Col lg={4} md={6} xs={6} sm={6}>
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles1</h1>
                    </div>
                  </Col>
                  <Col lg={4} md={6} xs={6} sm={6}>
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles2</h1>
                    </div>
                  </Col>
                  <Col lg={4} md={6} xs={6} sm={6}>
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles3</h1>
                    </div>
                  </Col>
                  <Col lg={4} md={6} xs={6} sm={6}>
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles4</h1>
                    </div>
                  </Col>
                  <Col lg={4} md={6} xs={6} sm={6}>
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles5</h1>
                    </div>
                  </Col>
                  <Col lg={4} md={6} xs={6} sm={6}>
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles6</h1>
                    </div>
                  </Col>
                  <Col lg={4} md={6} xs={6} sm={6}>
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles7</h1>
                    </div>
                  </Col>
                  <Col lg={4} md={6} xs={6} sm={6}>
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles8</h1>
                    </div>
                  </Col>
                  <Col lg={4} md={6} xs={6} sm={6} className="mx-auto">
                    <div className={` ${styles.rolebg}`}>
                      <img
                        src="/images/industrymain/role.png"
                        alt=""
                        className={` ${styles.roleimg}`}
                      />
                      <h1>Roles9</h1>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* role desgin section end */}

              {/* contact form desgin section start */}
              <div className={`${styles.contactbg}`}>
                <Row>
                  <Col lg={7} md={12} xs={12} sm={12}>
                    <div className={`${styles.contacttext}`}>
                      <h1>Client Case Study</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        the world of exciting and rewarding web consulting and
                        digital marketing solutions Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit the world of exciting and
                        rewarding web consulting and digital marketing
                        solutions.{" "}
                      </p>
                      <div>
                        <button href="#" className={`${styles.contacbtn}`}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5} md={12} xs={12} sm={12}>
                    <div className={`${styles.contacimg}`}>
                      <img src="/images/industrymain/contact.png" alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
              {/* contact form desgin section end */}
            </Col>

            {/* right desgin section start */}
          </Row>
        </Container>
      </div>
      {/* indusries desgin section end */}

      {/* ClientSlider section start */}
      <div className="mt-5">{/* <ClientSlider /> */}</div>
      {/* ClientSlider section start */}
      {/* ServiceCatelogSlider section start */}
      <div>{/* <ServiceCatelogSlider /> */}</div>
      {/* ServiceCatelogSlider section start */}
      {/* find section start */}
      <div>{/* <FindYourNext /> */}</div>
      {/* find section end */}
    </>
  );
};

export default SubIndustries;

const IndustryData = [
  {
    link: "hospitality-tourism",
    name: "Hospitality & Tourism",
    img: "/images/industrymain/hospitalitytourism.webp"
  },

  {
    link: "real-estate",
    name: "Real Estate Services",
    img: "/images/industrymain/realstate.webp"
  },

  {
    link: "education-training",
    name: "Education & Training",
    img: "/images/industrymain/educationtraining.webp"
  },

  {
    link: "Retail-trade",
    name: "Retail Trade & E-Commerce",
    img: "/images/industrymain/e-commerce.webp"
  },

  {
    link: "Information-Media-Telecommunications",
    name: "Information Media Telecommunications",
    img: "/images/industrymain/telecommunications.webp"
  },
  {
    link: "Professional-Services",
    name: "Professional Services",
    img: "/images/industrymain/professionalservices.webp"
  },
  {
    link: "Transport-Postal-Warehousing",
    name: "Transport, Postal & Warehousing",
    img: "/images/industrymain/transtport.webp"
  },
  {
    link: "Legal-services",
    name: "Legal services",
    img: "/images/industrymain/legalservices.webp"
  },
  {
    link: "Administration-Support",
    name: "Administration & Support",
    img: "/images/industrymain/admanistartive-and-services.webp"
  },
  {
    link: "Engineering-Construction",
    name: "Engineering & Construction",
    img: "/images/industrymain/engineeringconstruction.webp"
  },
  {
    link: "Financial-Insurance-Services",
    name: "Financial & Insurance Services",
    img: "/images/industrymain/financialinsurance.webp"
  },
  {
    link: "Health-Care",
    name: "Health Care",
    img: "/images/industrymain/healthcare.webp"
  },
  {
    link: "Wholesale-Trade",
    name: "Wholesale Trade",
    img: "/images/industrymain/wholesaletrade.webp"
  }
];
