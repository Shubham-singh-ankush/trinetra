import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Home.module.css";
import Slider from "../shared/service-catelog";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";
import FindYourNext from "../shared/find-next";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className={styles.bannersection}>
        <Container>
          <Row className={styles.reverceBanner}>
            <Col xs={{ order: "last" }} md={{ order: "first" }} lg={6}>
              <div className={styles.bannerinfo}>
                <h1>
                  <span>Expand </span>Your Team
                  <br />
                  <p>Anytime, Anywhere!</p>
                </h1>
                <b>
                  Unlock round-the-clock efficiency with Syncd Global Solutions.
                  Your Ultimate Partner in Outsourcing and Offshore Support!{" "}
                </b>
                <Link to="/about#contact">
                  <button>Inquire Now</button>
                </Link>
              </div>
            </Col>
            <Col
              xs={{ order: "first" }}
              md={{ order: "last" }}
              className={styles.heroiImg}
              lg={6}
            >
              <div className={styles.bannerpic}>
                <img src="/images/home/bannerpic.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className={styles.logosection}>
        <Container>
          <Row>
            <p>Trusted by hundreds of progressive companies</p>
            <Col md={2}>
              <div className={styles.logoc}>
                <img src="/images/home/clientlogo1.png" alt="" />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.logoc}>
                <img src="/images/home/clientlogo2.png" alt="" />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.logoc}>
                <img src="/images/home/clientlogo3.png" alt="" />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.logoc}>
                <img src="/images/home/clientlogo4.png" alt="" />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.logoc}>
                <img src="/images/home/clientlogo5.png" alt="" />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.logoc}>
                <img src="/images/home/clientlogo1.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className={styles.featuressec}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.featurinfo}>
                <h4>
                  Syncd Global Solutions: Your Gateway to Global Staffing
                  Solutions
                </h4>
                <p>
                  At Syncd Global Solutions, we bridge the gap between your
                  business needs and the world's talent. Our expertise in
                  offshore outsourcing provides cost-effective, scalable, and
                  efficient staffing solutions tailored to your unique needs.
                </p>
              </div>
            </Col>
            <Col md={12} lg={3}>
              <div className={styles.featurrbox}>
                <img src="/images/home/cost.png" alt="" />
                <h5>
                  <span> Reduced Cost</span>
                </h5>
                {/* <img src="/images/home/errow.png" alt="" /> */}
              </div>
            </Col>
            <Col md={12} lg={3}>
              <div className={styles.featurrbox1}>
                <img src="/images/home/scale.png" alt="" />
                <h5>
                  <span>Scale Quickly</span>
                </h5>
                {/* <img src="/images/home/errow.png" alt="" /> */}
              </div>
            </Col>
            <Col md={12} lg={3}>
              <div className={styles.featurrbox2}>
                <img src="/images/home/increased.png" alt="" />
                <h5>
                  <span>Increase Efficiency</span>
                </h5>
                {/* <img src="/images/home/errow.png" alt="" /> */}
              </div>
            </Col>
            <Col md={12} lg={3}>
              <div className={styles.featurrbox3}>
                <img src="/images/home/flexible.png" alt="" />
                <h5>
                  <span>Flexible Solutions</span>
                </h5>
                {/* <img src="/images/home/errow.png" alt="" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.reducesection}>
        <Container>
          <Row>
            <Col
              lg={{ span: 7, order: "first" }}
              sm={{ order: "last" }}
              xs={{ order: "last" }}
            >
              <div className={styles.reduce}>
                <h5>
                  Boost Your Budget: Reduce Cost Up to 75% With Syncd Global
                  Solutions <br></br>
                </h5>
                <p>
                  Explore the transformative benefits of offshore staffing,
                  where exceptional quality meets unparalleled cost-efficiency.
                  Dive in to understand how Syncd Global Solutions stands out as
                  the premier choice for businesses aiming to optimize their
                  operations without straining their budgets.{" "}
                </p>
                <ul>
                  <li>
                    {" "}
                    <img src="/images/home/check.png" alt="" />
                    <span>Dramatic Cost Reduction</span>
                  </li>
                  <li>
                    {" "}
                    <img src="/images/home/check.png" alt="" />
                    <span>Premium Quality</span>
                  </li>
                  <li>
                    {" "}
                    <img src="/images/home/check.png" alt="" />
                    <span>Operational Efficiency</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              className={styles.thoroughtPree}
              lg={{ span: 5, order: "last" }}
              sm={{ order: "first" }}
              xs={{ order: "first" }}
            >
              <div className={styles.reduceimg}>
                <img src="/images/home/SyncBoost.png" alt="" />
              </div>
            </Col>
            <Col
              className={styles.thoroughtMobile}
              lg={{ span: 5, order: "last" }}
              sm={{ order: "first" }}
              xs={{ order: "first" }}
            >
              <div className={styles.reduceimg}>
                <img src="/images/home/SyncBoostMobile.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.bg}>
        <div className={styles.bg1}>
          <Container>
            <Row>
              <Col lg={5} className={styles.thoroughtPree}>
                <div className={styles.reduceimg}>
                  <img src="/images/home/cost1.png" alt="" />
                </div>
              </Col>
              <Col lg={7}>
                <div className={styles.reduce}>
                  <h5>Thorough and Preemptive: Serious About Security</h5>
                  <p>
                    In the digital age, data security, and compliance aren't
                    just checkboxes—they're imperatives. At Syncd Global
                    Solutions, our certifications are a testament to our
                    unwavering commitment to best practices. Our prestigious
                    certifications, such as SOC2 Type II, VAPT and ISO 27001,
                    enhance our service offerings, ensuring your peace of mind.
                    Experience the difference of partnering with a firm that
                    prioritizes your data security at every step.
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <img src="/images/home/check.png" alt="" />
                      <span>SOC2 Type II</span>
                    </li>
                    <li>
                      {" "}
                      <img src="/images/home/check.png" alt="" />
                      <span>
                        Vulnerability Assessment & Penetration Testing (VAPT)
                      </span>
                    </li>
                    <li>
                      {" "}
                      <img src="/images/home/check.png" alt="" />
                      <span>ISO 27001 Certification</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={styles.reducesection}>
        <Container>
          <Row>
            <Col
              lg={{ span: 7, order: "first" }}
              sm={{ order: "last" }}
              xs={{ order: "last" }}
            >
              <div className={styles.reduce}>
                <h5>
                  Adaptable and Affordable: The Syncd Approach to Flexible
                  Solutions <br></br>
                </h5>
                <p>
                  In a dynamic business landscape, flexibility is paramount.
                  Syncd Global Solutions is at the forefront of offering
                  adaptable offshoring solutions that align perfectly with your
                  operational needs. Explore our flexible options.
                </p>
                <ul>
                  <li>
                    {" "}
                    <img src="/images/home/check.png" alt="" />
                    <span>Dedicated Offshore Staff </span>
                  </li>
                  <li>
                    {" "}
                    <img src="/images/home/check.png" alt="" />
                    <span>Volume-Based Pricing </span>
                  </li>
                  <li>
                    {" "}
                    <img src="/images/home/check.png" alt="" />
                    <span>
                      Hourly or Assignment-Based Solutions, Starting at $9.00
                      per hour.
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              className={styles.thoroughtPree}
              lg={{ span: 5, order: "last" }}
              sm={{ order: "first" }}
              xs={{ order: "first" }}
            >
              <div className={styles.reduceimg}>
                <img
                  className={styles.bannerImg}
                  src="/images/home/Adaptable.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.staffsec}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.staffin}>
                <h5>
                  Effortless Onboarding: Simple 4-Step Process <br></br>for
                  Optimal Offshore Outsourcing
                </h5>
                <p>
                  Welcome to a hassle-free onboarding experience with our 4-Step
                  Process, tailor-made for dynamic offshore outsourcing. At
                  Syncd Global Solutions, we blend precision with efficiency,
                  ensuring your seamless transition to a global talent pool that
                  amplifies your business success.
                </p>
              </div>
            </Col>
            <Col md={12} lg={6} xl={3} className="mt-3">
              <div className={styles.staffinbox}>
                <img src="/images/home/stafficon.png" alt="" />
                <span>
                  {" "}
                  <img src="/images/home/1.png" alt="" />
                </span>
                <h2>Provide us with a job description</h2>
                <p>
                  Begin by sharing a detailed job description. This should
                  include the specific roles and responsibilities and the
                  objectives you aim to achieve.
                  <br />
                  <br />
                </p>
              </div>
            </Col>
            <Col md={12} lg={6} xl={3} className="mt-3">
              <div className={styles.staffinbox}>
                <img src="/images/home/stafficon.png" alt="" />
                <span>
                  {" "}
                  <img src="/images/home/2.png" alt="" />
                </span>
                <h2>Client Success Manager Alignment </h2>
                <p>
                  We'll pair you with one of our Client Success Managers, who is
                  committed to understanding and executing your unique needs and
                  ensuring effective service.
                  <br />
                  <br />
                </p>
              </div>
            </Col>
            <Col md={12} lg={6} xl={3} className="mt-3">
              <div className={styles.staffinbox}>
                <img src="/images/home/stafficon.png" alt="" />
                <span>
                  {" "}
                  <img src="/images/home/3.png" alt="" />
                </span>
                <h2> Dedicated Contact & Scalable Training </h2>
                <p>
                  Your Client Success Manager is your primary offshore contact
                  and is responsible for training additional staff to adhere to
                  your expectations, facilitating scalability and consistency.
                </p>
              </div>
            </Col>
            <Col md={12} lg={6} xl={3} className="mt-3">
              <div className={`${styles.lastOngoing} ${styles.staffinbox}`}>
                <img src="/images/home/stafficon.png" alt="" />
                <span>
                  {" "}
                  <img src="/images/home/4.png" alt="" />
                </span>
                <h2> Ongoing Support and Quality Control </h2>
                <p>
                  Regular check-ins and updates will be conducted to ensure your
                  outsourced team meets your expectations to maintain high
                  performance and satisfaction.
                  <br />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* our cleint section start */}
      {/* <ClientSlider /> */}
      {/* our cleint section end */}

      {/* service cataloge section start */}
      {/* <ServiceCatelogSlider /> */}
      {/* service cataloge section end */}
      {/* find section start */}
      {/* <FindYourNext /> */}
      {/* find section end */}
    </>
  );
};

export default Home;
