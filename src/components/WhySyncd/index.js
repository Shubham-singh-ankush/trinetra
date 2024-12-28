import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";
import FindYourNext from "../shared/find-next";
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { Notification } from "../shared/Notification";

//helper
const errorMessage = (error) => {
  return (
    <div
      style={{ color: "white", margintTop: "0px !important", display: "flex" }}
    >
      {error}
    </div>
  );
};
const index = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    reset,

    formState: { errors }
  } = useForm();

  const sendEmail = (e) => {
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_3gnqkiq",
        "template_fnscu3l",
        form.current,
        "hOvyXh3-J1SxPha1n"
      )
      .then(
        (result) => {
          console.log(result.text);
          Notification("success", "sent sucessfully!");
          setIsLoading(false);
          reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>WHY SYNCD</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}

      {/* feature section start */}
      <div className={`${styles.featuresbg}`}>
        <Container>
          <Row>
            <div className={`${styles.heading}`}>
              <h1>Advancing Your Business with Syncd Global Solutions</h1>
              <p>
                Discover the unparalleled benefits of offshore outsourcing with
                Syncd. Our tailored approach aligns with your business strategy,
                delivering quality, efficiency, and innovation through a global
                talent pool.
              </p>
            </div>
          </Row>
          <Row className={`${styles.features}`}>
            <Col xl={3} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbox}`}>
                <img src="/images/whysyncd/icon.png" alt="" />
                <h1>Strategic Savings </h1>
                <p>
                  Reduce costs by up to 75% without compromising quality.
                  Syncd's strategic savings empower you to optimize expenses
                  with our cost-effective staffing.
                </p>
              </div>
            </Col>
            <Col xl={3} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbx}`}>
                <img src="/images/whysyncd/icon2.png" alt="" />
                <h1>Dynamic Scaling </h1>
                <p>
                  Adapt swiftly to the ever-changing business landscape. With
                  Syncd, scaling up or down is seamless, ensuring you have the
                  right talent at the right time.
                </p>
              </div>
            </Col>
            <Col xl={3} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbox3}`}>
                <img src="/images/whysyncd/icon3.png" alt="" />
                <h1>Continuous Productivity </h1>
                <p>
                  Embrace the power of a 24/7 work cycle with Syncd. Our
                  offshore teams ensure that when one part of the world sleeps,
                  another achieves your business objectives.
                </p>
              </div>
            </Col>
            <Col xl={3} md={6} xs={12} sm={12}>
              <div className={`${styles.featuresbx2}`}>
                <img src="/images/whysyncd/icon4.png" alt="" />
                <h1>Pricing Agility </h1>
                <p>
                  Syncd offers unparalleled pricing flexibility, from dedicated
                  full-time employees to volume or assignment-based engagements.
                  Tailor your investment to your workload.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* feature section end */}
      {/* choose section start */}
      <div className={`${styles.choosebg}`}>
        <Container>
          <Row>
            <Col lg={4}>
              <div className={`${styles.imagearea}`}>
                <img src="/images/whysyncd/chooseimg.png" alt="" />
              </div>
            </Col>
            <Col lg={8}>
              <div className={`${styles.textarea}`}>
                <h1>
                  Excelling with Syncd: Your Offshore Outsourcing Advantage
                </h1>
                <p>
                  Syncd Global Solutions is the partner of choice for
                  forward-thinking companies seeking to harness the strategic
                  advantages of offshore outsourcing. Discover why our clients
                  believe Syncd stands apart from the rest.
                </p>
                <Row>
                  <Col lg={6} md={6}>
                    <div className={`${styles.textcheck}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Cost Reduction (up to 75%)</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Robust Data Security</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Quality Results</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Superior Client Experience</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span> Agile Scaling</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Customized Solutions</span>
                        </li>

                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Continuous Productivity</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Flexible Pricing</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className={`${styles.textcheck}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Elite Global Talent</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Continuous Quality Monitoring</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Freedom from Fixed Contracts</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Dedicated Offshore Representative</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Dedicated Onshore Contact</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Staff Performance</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Employment Compliance</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Workforce Wellbeing Focus</span>
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
      {/* choose section end */}

      {/* Our Expert section start */}
      <div className={`${styles.expertbg}`}>
        <Container>
          <Row>
            <div className={`${styles.heading}`}>
              <h1>
                Discover The Advantage: Elevate Your Operations with Syncd
                Global Solutions{" "}
              </h1>
              <p>
                Step into the future with Syncd Global Solutions, where we turn
                your outsourcing into a competitive edge. Embrace
                cost-effectiveness, robust data protection, and 24/7
                productivity. Our agile solutions and dedicated support network
                are designed for your growth. Tailored strategies and flexible
                pricing lead to unmatched excellence and satisfaction. Discover
                the Syncd difference — where your potential meets our precision.
              </p>
            </div>
          </Row>
          <Row className="mt-4">
            <Col md={12}>
              <Swiper
                style={{
                  height: "100%"
                }}
                slidesPerView={1}
                spaceBetween={30}
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
                    spaceBetween: 10
                  },
                  768: {
                    slidesPerView: 2
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  }
                }}
                modules={[Pagination, Autoplay]}
                className="our_expert_slider"
              >
                <SwiperSlide>
                  <div className={styles.boxbg}>
                    <img src="/images/whysyncd/expert.png" alt="" />
                    <h1>Cost-Effective Savings</h1>
                    <p>
                      Harness our offshore model to drastically cut expenses by
                      up to 75% without sacrificing quality. Our approach
                      focuses on efficiency, delivering top-tier services at a
                      fraction of the cost.
                    </p>
                    <div className={`${styles.textslide}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Access Global Expertise</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Flexible Team Scaling</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Boost Profit Margins</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxbg}>
                    <img src="/images/whysyncd/Safeguards.png" alt="" />
                    <h1> Certified Data Safeguards</h1>
                    <p>
                      Our offshore services are fortified by SOC 2 Type II,
                      VAPT, and ISO 27001 certifications, ensuring comprehensive
                      data protection tailored to stringent industry standards.
                    </p>
                    <div className={`${styles.textslide}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>SOC 2 Type II Compliance</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>VAPT Rigor</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>ISO 27001 Certified</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxbg}>
                    <img src="/images/whysyncd/Productivity.png" alt="" />
                    <h1>Uninterrupted Productivity</h1>
                    <p>
                      Our offshore outsourcing solutions are designed to
                      maintain continuous productivity, ensuring your business
                      operates smoothly around the clock.
                    </p>
                    <div className={`${styles.textslide}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span> 24/7 Workflows</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Efficient Resource Allocation</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Proactive Support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxbg}>
                    <img src="/images/whysyncd/AgileScaling.png" alt="" />
                    <h1>Agile Scaling Solutions</h1>
                    <p>
                      Embrace the agility of our offshore model to scale your
                      operations dynamically in response to market demands and
                      growth opportunities.
                    </p>
                    <div className={`${styles.textslide}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Rapid Deployment</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Scalability on Demand</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Cost-Effective Resourcing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxbg}>
                    <img src="/images/whysyncd/DedicateSupport.png" alt="" />
                    <h1>Dedicated Support Networks</h1>
                    <p>
                      Our blend of onshore and offshore contact support provides
                      round-the-clock, dedicated service to address your needs
                      and enhance customer satisfaction.
                    </p>
                    <div className={`${styles.textslide}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>24/7 Accessibility</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Localized Expertise</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Integrated Communication</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxbg}>
                    <img src="/images/whysyncd/CustomSolutions.png" alt="" />
                    <h1>Custom Solutions, Flexible Pricing</h1>
                    <p>
                      Our services offer customized and flexible processes,
                      procedures, and pricing solutions to meet your unique
                      business requirements effectively.
                    </p>
                    <div className={`${styles.textslide}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Process Adaptability</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Procedure Personalization</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Dynamic Pricing Models</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxbg}>
                    <img src="/images/whysyncd/Satisfaction.png" alt="" />
                    <h1>Excellence & Satisfaction</h1>
                    <p>
                      Our offshore services are geared to deliver quality
                      results that drive customer satisfaction and foster
                      long-term loyalty.
                    </p>
                    <div className={`${styles.textslide}`}>
                      <ul>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Quality Assurance</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Customer-Centric</span>
                        </li>
                        <li>
                          {" "}
                          <img src="/images/whysyncd/check.png" alt="" />
                          <span>Feedback Integration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Our Expert section end */}

      {/* Contact section start */}

      <div className={`${styles.contactbg} `}>
        <Container>
          <Row>
            <Col lg={7} md={6}>
              <div className={`${styles.contacttext}`}>
                <h1>Contact Us Now!</h1>
                <p>
                  Elevate your business with Syncd Global Solutions. Our
                  offshore outsourcing expertise offers cost-effective
                  scalability and a dedicated talent pool with round-the-clock
                  support. Brief us on your goals, and we'll tailor solutions
                  that sync perfectly with your needs. Reach out now - let's
                  create success together.
                </p>
              </div>
            </Col>
            <Col lg={5} md={6}>
              <div className={`${styles.formbg} mb-5`}>
                <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className={` ${styles.forminput}`}
                      placeholder="Enter Your Name"
                      {...register("name", {
                        required: true,
                        minLength: 2
                      })}
                    />
                    {errors.name &&
                      errors.name.type === "required" &&
                      errorMessage("Please enter a name")}
                    {errors.name &&
                      errors.name.type === "minLength" &&
                      errorMessage("name must be 2 characters")}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className={` ${styles.forminput}`}
                      type="email"
                      placeholder="Enter Email"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        }
                      })}
                    />
                    {errors.email &&
                      errors.email.type === "required" &&
                      errorMessage("Please enter email address")}
                    {errors.email &&
                      errors.email.type === "pattern" &&
                      errorMessage("Invaid email")}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      placeholder="Enter Your Mobile No."
                      className={` ${styles.forminput}`}
                      {...register("phone", {
                        required: true,
                        minLength: 10,
                        pattern: {
                          value: /^[0-9]{10}$/
                        }
                      })}
                    />
                    {errors.phone &&
                      errors.phone.type === "required" &&
                      errorMessage("Please enter a mobile Number")}
                    {errors.phone &&
                      errors.phone.type === "minLength" &&
                      errorMessage("mobile Number must be 10 characters")}
                    {errors.phone &&
                      errors.phone.type === "pattern" &&
                      errorMessage("Invaid mobile Number")}
                  </Form.Group>
                  <textarea
                    className={` ${styles.textareaform}`}
                    placeholder="How Can We Help You?"
                    {...register("message", {
                      required: true
                    })}
                  ></textarea>

                  {errors.message &&
                    errors.message.type === "required" &&
                    errorMessage("Please enter a message")}

                  <Button
                    variant="primary"
                    type="submit"
                    className={`mt-3 ${styles.formbtn}`}
                  >
                    {isLoading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Contact Us Now"
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

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

export default index;
