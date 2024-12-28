import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Autoplay, Pagination } from "swiper";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";
import Form from "react-bootstrap/Form";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";

const Blog = () => {
  return (
    <>
      <div className={styles.fullBackground}>
        {/* banner section start */}
        <div className={`${styles.bannerbg}`}>
          <Container>
            <Row>
              <Col lg={6}>
                <div className={`${styles.headingbg}`}>
                  <h1>BLOGS</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* banner section end */}
        {/* blog hero section start */}
        <Container className={styles.largBlog}>
          <Row className={`${styles.bredCrump} mt-5`}>
            <Col md={8}>
              <Link to="/">Home /</Link>
              <Link>Community /</Link>
              <Link>Latest Blog</Link>{" "}
            </Col>
            <Col md={4}>
              <p>Latest Events Blog</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12} lg={4} className={styles.heroimg}>
              <img src="/images/blogs/blo1.webp" alt="blog img" />
            </Col>
            <Col md={12} lg={4} className={`${styles.heroHeading} mt-3`}>
              <h2>Blog 1 Lorem ipsum dolor sit amet </h2>
              <Link>Latest News</Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                world of exciting and rewarding web consulting and digital
                marketing solutions Lorem ipsum dolor sit amet, consectetur
                adipescent alit we deliver exactly what we promise. the world of
                exciting and rewarding web consulting and digital marketing
                solutions. we deliver exactly what we promise to our Lorem ipsum
                dolor sit amet clients. With more than 600+ Clients worldwide,
                their trust in us speaks volumes about our expertise and
                unflinching commitment towards growing their business. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit the world of
                exciting and rewarding web consulting and digital marketing
                solutions elit the world of exciting and rewarding web
                consulting and digital marketing solutions Lorem ipsum dolor sit
                amet, consectetur adipescent alit we deliver exactly what we
                promise.
              </p>
              <Link to="/blogs/Blog 1 Lorem Ipsum Dolor Sit Amet">
                <Button className={styles.butt}> Read More</Button>
              </Link>
            </Col>
            <Col md={12} lg={4}>
              {imageSideBlog.map((data, i) => (
                <div key={i}>
                  <Row className={`${styles.sideBlog}`}>
                    <Col md={12} lg={4}>
                      <img src={data.img} alt="" />
                    </Col>
                    <Col md={8}>
                      <h3>Blog 1 Lorem ipsum dolor sit amet </h3>
                      <Link>Latest News</Link>
                      <br />
                      <Link to="/blogs/Blog 1 Lorem Ipsum Dolor Sit Amet">
                        <Button className={styles.sidebt}>Read More</Button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              ))}
            </Col>
          </Row>
        </Container>

        {/* blog hero section start */}
        {/* view all section start  */}
        <Container>
          <Row className={`${styles.viewAll}`}>
            <Col md={8}>
              <Link>Community / </Link>
              <Link>View All Blogs</Link>{" "}
            </Col>
            <Col md={4} className={styles.vBtn}>
              <Button className={styles.viewBtn}>View All</Button>
            </Col>
          </Row>

          <Row></Row>
        </Container>

        {/* view all section end  */}
        {/* Blog card View Start */}
        <Container className="mb-4">
          <Row>
            {blogCardView.map((data, i) => (
              <Col md={12} lg={4} key={i}>
                <div className={styles.cardBlog}>
                  <img src={data.img} alt="" />
                  <div className={styles.cardText}>
                    <h2>Blog 1 Lorem ipsum dolor sit amet </h2>
                    <Link>Latest News</Link>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      the world of exciting and rewarding web consulting and
                      digital marketing solutions. Lorem ipsum dolor sit amet,
                      consectetur digital marketing solutions.
                    </p>
                    <Link to="/blogs/Blog 1 Lorem Ipsum Dolor Sit Amet">
                      <Button className={styles.cardBtn}>Read More</Button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Blog card View Start */}

        {/* get in touch */}

        <div className={`${styles.getInToch} pt-4 pb-4 mb-5`}>
          <Container className={styles.contactForm}>
            <Form>
              <Row>
                <Col className={styles.getIn_img} md={6}>
                  <img src="/images/blogs/getin.png" />
                </Col>
                <Col md={12} lg={6}>
                  <div className={styles.contactMail}>
                    <h5>Get in Touch</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      the world of exciting and rewarding web consulting and
                      digital marketing solutions. we deliver exactly what we
                      promise to our clients. Founded in the year 2019,
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
      </div>
    </>
  );
};

const blogCardView = [
  {
    img: "/images/blogs/blog1.png"
  },
  {
    img: "/images/blogs/blo2.png"
  },
  {
    img: "/images/blogs/blog3.png"
  },
  {
    img: "/images/blogs/blog4.png"
  },
  {
    img: "/images/blogs/blog5.png"
  },
  {
    img: "/images/blogs/blog6.png"
  },
  {
    img: "/images/blogs/blog6.png"
  },
  {
    img: "/images/blogs/blo7.png"
  },
  {
    img: "/images/blogs/blog8.png"
  }
];

const imageSideBlog = [
  {
    img: "/images/blogs/smallimg1.png"
  },
  {
    img: "/images/blogs/smallimg2.png"
  },
  {
    img: "/images/blogs/smallimg3.png"
  },
  {
    img: "/images/blogs/smallimg4.png"
  }
];

export default Blog;
