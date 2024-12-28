import React from "react";
import styles from "./index.module.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";
import FindYourNext from "../shared/find-next";
import StickyBox from "react-sticky-box";

const index = () => {
  return (
    <>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>We Are Hiring</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}
      <Container>
        <Row className="mt-5">
          {/* side desgin section start */}
          <Col md={5} xs={12} sm={12} lg={3}>
            <StickyBox offsetTop={100} offsetBottom={100}>
              <div className={` ${styles.jobox}`}>
                <h1>Search For Job</h1>
                <p>
                  Lorem ipsum dolor the world of exciting and rewarding web
                  consulting and digital marketing solutions.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      className={styles.inputjob}
                      placeholder="Enter Job Keyword"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    className={styles.formbtn}
                    type="submit"
                  >
                    Search For job
                  </Button>
                </Form>
              </div>
              <div className={` ${styles.filterbox}`}>
                <h1>filter Categories</h1>
                <hr />
                <div className={` mt-5 mb-4 ${styles.salectsec}  `}>
                  <select className={styles.salectbox}>
                    <option>Enter Your Industries</option>
                    <option>Enter Your Industries</option>
                    <option>Enter Your Industries</option>
                    <option>Enter Your Industries</option>
                  </select>
                </div>
                <div className={` mb-4 ${styles.salectsec}  `}>
                  <select className={styles.salectbox}>
                    <option>Enter Your Roles</option>
                    <option>Enter Your Roles</option>
                    <option>Enter Your Roles</option>
                    <option>Enter Your Roles</option>
                  </select>
                </div>
                <div className={` mb-4 ${styles.salectsec}  `}>
                  <select className={styles.salectbox}>
                    <option>Enter Your Location</option>
                    <option>Enter Your Location</option>
                    <option>Enter Your Location</option>
                    <option>Enter Your Location</option>
                  </select>
                </div>
                <div className={` ${styles.salectsec}  `}>
                  <select className={styles.salectbox}>
                    <option>Work Type</option>
                    <option>Work Type</option>
                    <option>Work Type</option>
                    <option>Work Type</option>
                  </select>
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
                      className={`${styles.inputside}`}
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      type="email"
                      className={`${styles.inputside}`}
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      required
                      type="text"
                      className={`${styles.inputside}`}
                      placeholder="Enter Your Mobile No."
                    />
                  </Form.Group>
                  <textarea
                    className={`${styles.textareas}`}
                    placeholder="Enter Your Message"
                  ></textarea>
                  <Button type="submit" className={`${styles.formbtn1}`}>
                    Become our Client
                  </Button>
                </Form>
              </div>
            </StickyBox>
          </Col>
          {/* side desgin section end */}

          {/* right desgin section start */}
          <Col lg={9} md={7} xs={12} sm={12}>
            {/* jobs filter desgin section start */}
            <Row className={styles.flexset}>
              <Col lg={6} md={6} xs={12} sm={12}>
                <div className={styles.jobshowing}>
                  <h1>Showing 46 Jobs</h1>
                </div>
              </Col>
              <Col lg={6} md={6} xs={12} sm={12}>
                <div className={styles.jobshowing}>
                  <h5 className={styles.jobshowtext}>
                    Sort by
                    <select>
                      <option value="0"> : Newest post</option>
                      <option value="1">Newest post</option>
                      <option value="2">Newest post</option>
                      <option value="3">Newest post</option>
                    </select>
                  </h5>
                </div>
              </Col>
              {/* right desgin section start */}
            </Row>
            {/* jobs filter desgin section end*/}
            {/* jobs designation desgin section start */}
            <Row>
              {DesignationData.map((data, i) => (
                <Col lg={6} xl={6} md={12} key={i}>
                  <div className={` ${styles.designationbg}`}>
                    <img
                      src={data.img}
                      alt=""
                      className={`${styles.designationimg}`}
                    />
                    <h1>{data.heading}</h1>
                    <p>{data.para}</p>
                    <div>
                      <Button className={`me-2 ${styles.designationbtn}`}>
                        Full Time
                      </Button>
                      <Button className={`me-2 ${styles.designationbtn}`}>
                        Min. 1 Year
                      </Button>
                      <Button className={`${styles.designationbtn}`}>
                        Senior Level
                      </Button>
                    </div>
                    <Button className={`me-2 ${styles.applybtn}`}>
                      {data.btnapply}
                    </Button>
                  </div>
                </Col>
              ))}
              <div className="mt-5">
                <Col className={`${styles.pegiwidth}`}>
                  <Pagination>
                    <Pagination.Prev className={styles.items1} />
                    <Pagination.Item className={styles.items} active>
                      {3}
                    </Pagination.Item>
                    <Pagination.Item className={styles.items}>
                      {4}
                    </Pagination.Item>
                    <Pagination.Item className={styles.items}>
                      {5}
                    </Pagination.Item>
                    <Pagination.Item className={styles.items}>
                      {6}
                    </Pagination.Item>
                    <Pagination.Item className={styles.items}>
                      {7}
                    </Pagination.Item>
                    <div className={styles.itemsdot}>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                      <h1>.</h1>
                    </div>
                    <Pagination.Item className={styles.items}>
                      {22}
                    </Pagination.Item>
                    <Pagination.Item className={styles.items}>
                      {23}
                    </Pagination.Item>
                    <Pagination.Item className={styles.items}>
                      {24}
                    </Pagination.Item>
                    <Pagination.Item className={styles.items}>
                      {25}
                    </Pagination.Item>
                    <Pagination.Item className={styles.items}>
                      {26}
                    </Pagination.Item>
                    <Pagination.Next className={styles.items1} />
                  </Pagination>
                </Col>
              </div>
            </Row>
            {/*  jobs designation desgin section end */}
          </Col>
          {/* right desgin section end */}
        </Row>
      </Container>
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

export default index;

const DesignationData = [
  {
    img: "/images/hiring/icon1.png",
    heading: "UI/UX Designer",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon2.png",
    heading: "Hr Maneger",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon3.png",
    heading: "Accountant",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon1.png",
    heading: "UI/UX Designer",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon2.png",
    heading: "Hr Maneger",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon3.png",
    heading: "Accountant",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon1.png",
    heading: "UI/UX Designer",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon2.png",
    heading: "Hr Maneger",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon3.png",
    heading: "Accountant",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon1.png",
    heading: "UI/UX Designer",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon2.png",
    heading: "Hr Maneger",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon3.png",
    heading: "Accountant",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon1.png",
    heading: "UI/UX Designer",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon2.png",
    heading: "Hr Maneger",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon3.png",
    heading: "Accountant",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon1.png",
    heading: "UI/UX Designer",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon2.png",
    heading: "Hr Maneger",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon3.png",
    heading: "Accountant",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon1.png",
    heading: "UI/UX Designer",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon2.png",
    heading: "Hr Maneger",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  },
  {
    img: "/images/hiring/icon3.png",
    heading: "Accountant",
    para: "Lorem ipsum dolor the world of exciting and rewarding web consulting and digital marketing solutions.",
    btnapply: "Apply  Now"
  }
];
