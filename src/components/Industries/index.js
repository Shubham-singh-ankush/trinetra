import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styles from "./Industries.module.css";
import Accordion from "react-bootstrap/Accordion";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";
import FindYourNext from "../shared/find-next";
import { Link } from "react-router-dom";

const Industries = () => {
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

      {/* Industries staffing start  */}

      <Container>
        <Row className={` ${styles.staffingtabs}`}>
          <Col className={styles.staffingImage} lg={5}>
            <img src="/images/INDUSTRIES/staffing.png" alt="" />
          </Col>

          <Col className={styles.staffingContent} lg={7}>
            <h2>Industry Staffing Expertise</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit the world
              of exciting and rewarding web consulting and digital marketing
              solutions Lorem ipsum dolor sit amet, consectetur adipiscing elit
              the world of exciting and rewarding web consulting and digital
              marketing solutions. we deliver exactly what we promise to our
              clients.
            </p>
            <p>
              With more than 600+ Clients worldwide, their trust in us speaks
              volumes about our expertise and unflinching commitment towards
              growing their business. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit the world of exciting and rewarding web consulting
              and digital marketing solutions. we deliver exactly what we
              promise to our clients. Founded in the year 2019, we are a
              reputable Business consultancy.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit the world
              of exciting and rewarding web consulting and digital marketing
              solutions Lorem ipsum dolor sit amet, consectetur adipiscing elit
              the world of Lorem ipsum dolor sit amet, consectetur adipiscing
              elit we deliver exactly what we promise to our clients.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Industries staffing end  */}

      {/* hire talent in your industry  */}
      <div className={`${styles.hireMain} hireMainAcc `}>
        <Container>
          <Row className={styles.stepsHire}>
            <h1 className="text-center">
              <br />
              Hire Talent in Your Industry
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit the world
              of exciting and rewarding
              <br /> web consulting and digital marketing solutions.{" "}
            </p>
          </Row>
          <Row>
            <Col lg={4}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/ind1.png" alt="" />
                    </span>
                    Administration & Support
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img3.png" alt="" />
                    </span>
                    Financial & Insurance
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img6.png" alt="" />
                    </span>
                    Information Technology
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img9.png" alt="" />
                    </span>
                    Legal Services
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img12.png" alt="" />
                    </span>
                    Transport & warehousing
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg={4}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img1.png" alt="" />
                    </span>
                    Education & Training
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img4.png" alt="" />
                    </span>
                    Healthcare
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img7.png" alt="" />
                    </span>
                    Information media
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img10.png" alt="" />
                    </span>
                    Real Estate Services
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img13.png" alt="" />
                    </span>
                    Hire Talent in Your Industry
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg={4}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img2.png" alt="" />
                    </span>
                    Engineering & Construction
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img5.png" alt="" />
                    </span>
                    Hospitality & Tourism
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img8.png" alt="" />
                    </span>
                    Telecommunications
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img11.png" alt="" />
                    </span>
                    Retail & E-commerce
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span>
                      <img src="/images/INDUSTRIES/img14.png" alt="" />
                    </span>
                    Wholesale Trade
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>

      {/* hire talent in your industry  */}

      {/* benifites section start  */}

      {/* stepss desgin section start */}
      <Container>
        <div className={` ${styles.steps}`}>
          <div className={`${styles.mainStep}`}>
            <h1 className=" text-center">
              {" "}
              <br />
              Benefits of outsourcing offshore
            </h1>
          </div>

          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit the world of
            exciting and rewarding
            <br /> web consulting and digital marketing solutions.{" "}
          </p>
          <Container>
            <Row>
              <Col>
                <Swiper
                  style={{
                    height: "440px"
                  }}
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
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
                      spaceBetween: 0
                    },
                    768: {
                      slidesPerView: 1
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 30
                    },
                    1366: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    }
                  }}
                  modules={[Pagination, Autoplay]}
                  className="steps_slider"
                >
                  <SwiperSlide>
                    <div className={styles.stepboxbg}>
                      <img src="/images/INDUSTRIES/ind1.png" alt="" />
                      <h1>Cost savings</h1>
                      <p>
                        Hiring an offshore team or engaging in offshore staffing
                        services can help control costs in your organisation.
                        With the ability to save up to 70% on labour costs
                        compared to hiring locally, outsourcing is a
                        cost-effective solution for managing routine tasks.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.stepboxbg}>
                      <img src="/images/INDUSTRIES/ind1.png" alt="" />
                      <h1>Efficiency increase</h1>
                      <p>
                        By sharing the workload between your onshore and
                        offshore teams, organisations can increase efficiency
                        and productivity. Outsourcing routine tasks to an
                        offshore team provides access to 24/7 business
                        operations without the added cost of overtime.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.stepboxbg}>
                      <img src="/images/INDUSTRIES/ind1.png" alt="" />
                      <h1>Business growth</h1>
                      <p>
                        Hiring offshore staff can drive business growth by
                        adding the extra capability to your local team. With the
                        additional capacity, your local employees can take on
                        more work, helping to grow your business.
                        <br />
                        <br />
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.stepboxbg}>
                      <img src="/images/INDUSTRIES/ind1.png" alt="" />
                      <h1>Cost savings</h1>
                      <p>
                        Hiring an offshore team or engaging in offshore staffing
                        services can help control costs in your organisation.
                        With the ability to save up to 70% on labour costs
                        compared to hiring locally, outsourcing is a
                        cost-effective solution for managing routine tasks.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.stepboxbg}>
                      <img src="/images/INDUSTRIES/ind1.png" alt="" />
                      <h1>Efficiency increase</h1>
                      <p>
                        By sharing the workload between your onshore and
                        offshore teams, organisations can increase efficiency
                        and productivity. Outsourcing routine tasks to an
                        offshore team provides access to 24/7 business
                        operations without the added cost of overtime.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.stepboxbg}>
                      <img src="/images/INDUSTRIES/ind1.png" alt="" />
                      <h1>Business growth</h1>
                      <p>
                        Hiring offshore staff can drive business growth by
                        adding the extra capability to your local team. With the
                        additional capacity, your local employees can take on
                        more work, helping to grow your business.
                        <br />
                        <br />
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      {/* tranparentPrice desgin section end */}

      <div className={`${styles.featuresbg}`}>
        <Container>
          <Row>
            <div className={`${styles.heading}`}>
              <h1>Transparent Pricing Full Service Offshore Staffing</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                world of exciting and rewarding <br />
                web consulting and digital marketing solutions.{" "}
              </p>
            </div>
          </Row>
          <Row className={`${styles.features}`}>
            <Col lg={4} xl={2} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbox} ${styles.staff}`}>
                <img src="/images/INDUSTRIES/price1.png" alt="" />
                <h1>Staff Salary</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions.{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} xl={2} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbx}`}>
                <img src="/images/INDUSTRIES/price2.png" alt="" />
                <h1>Recruitment/HR</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions.{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} xl={2} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbx}`}>
                <img src="/images/INDUSTRIES/price3.png" alt="" />
                <h1>Facilities</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions.{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} xl={2} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbx}`}>
                <img src="/images/INDUSTRIES/price4.png" alt="" />
                <h1>Operations</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions.{" "}
                </p>
              </div>
            </Col>
            <Col lg={4} xl={2} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbx}`}>
                <img src="/images/INDUSTRIES/price5.png" alt="" />
                <h1>I.T</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions.{" "}
                </p>
              </div>
            </Col>

            <Col lg={4} xl={2} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbox3}`}>
                <img src="/images/INDUSTRIES/price6.png" alt="" />
                <h1>Monthly staffing Fee</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* out Source Work */}
      <div className={`${styles.outSourceWork} pt-5 pb-5`}>
        <Container>
          <Row>
            <div className={`${styles.heading}`}>
              <h1>How Outsource Work</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                world of exciting and rewarding <br />
                web consulting and digital marketing solutions.{" "}
              </p>
              <img src="/images/INDUSTRIES/work1.png" alt="" />
            </div>
          </Row>
        </Container>
      </div>
      {/* out source work  */}
      {/* home based staffing  */}
      <div className={`${styles.choosebg}`}>
        <Container>
          <Row>
            <Col lg={7} className={styles.office}>
              <div className={`${styles.textarea}`}>
                <h1>Home Based Staff</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions of exciting and rewarding digital
                  marketing solutions. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions of exciting and
                  rewarding digital marketing solutions.
                </p>
                <Row>
                  <Col>
                    <div className={`${styles.textcheck}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>
                            Helping Companies Find and retain top talent
                          </span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Team of HR and Recruitment Experts</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={5}>
              <div className={`${styles.imagearea}`}>
                <img src="/images/INDUSTRIES/home.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* home based staffing  */}

      {/* office based staffing  */}

      <div className={`${styles.choosebgOne}`}>
        <Container>
          <Row>
            <Col lg={5}>
              <div className={`${styles.imagearea}`}>
                <img src="/images/INDUSTRIES/office.png" alt="" />
              </div>
            </Col>
            <Col lg={7} className={styles.office}>
              <div className={`${styles.textarea}`}>
                <h1>Office Based Staff</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions of exciting and rewarding digital
                  marketing solutions. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions of exciting and
                  rewarding digital marketing solutions.
                </p>
                <Row>
                  <Col>
                    <div className={`${styles.textcheck}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>
                            Helping Companies Find and retain top talent
                          </span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Team of HR and Recruitment Experts</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* office based staffing  */}
      {/* Hybrid based staffing  */}
      <div className={`${styles.choosebg}`}>
        <Container>
          <Row>
            <Col lg={7} className={styles.office}>
              <div className={`${styles.textarea}`}>
                <h1>Hybrid Staff</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions of exciting and rewarding digital
                  marketing solutions. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of exciting and rewarding web
                  consulting and digital marketing solutions of exciting and
                  rewarding digital marketing solutions.
                </p>
                <Row>
                  <Col>
                    <div className={`${styles.textcheck}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>
                            Helping Companies Find and retain top talent
                          </span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Team of HR and Recruitment Experts</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Comprehensive and Personalized approach</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={5}>
              <div className={`${styles.imagearea}`}>
                <img src="/images/INDUSTRIES/hybride.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Hybrid based staffing  */}
      {/* service and jurney start */}
      <Container className={styles.jurnerToday}>
        <Row className={`${styles.rowsJurney} mb-5 mt-5`}>
          <Col md={9}>
            <h3 className="">
              Start Your Syncd Solution
              <br /> Outsourced Service Journey Today
            </h3>
            <div className={`${styles.startJurney} d-flex`}>
              <div>
                <img src="/images/whysyncd/check.png" alt="" />
                <span>Helping Companies </span>
              </div>
              <div className={styles.helping}>
                <img src="/images/whysyncd/check.png" alt="" />
                <span>Helping Companies </span>
              </div>
              <div className={styles.helping}>
                <img src="/images/whysyncd/check.png" alt="" />
                <span>Helping Companies </span>
              </div>
            </div>
          </Col>
          <Col md={3} className={styles.contacBtn}>
            <Link to="/contact">
              <button className={styles.jurneyImg}>Contact Us</button>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* service and jurney end */}

      {/* Contact section end */}
      {/* ClientSlider section start */}
      <div>{/* <ClientSlider /> */}</div>
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

export default Industries;
