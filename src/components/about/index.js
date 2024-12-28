import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import emailjs from "@emailjs/browser";

import { Autoplay, Pagination } from "swiper";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";
import FindYourNext from "../shared/find-next";
import Service from "../shared/ourServices/services";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { Notification } from "../shared/Notification";

//helper
const errorMessage = (error) => {
  return (
    <div
      style={{ color: "red", margintTop: "0px !important", display: "flex" }}
    >
      {error}
    </div>
  );
};

const About = () => {
  const Router = useLocation();
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const contactRef = useRef();
  const [formValue, setFormValue] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });

  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    reset,

    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (Router.hash) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
          setFormValue({
            name: "",
            last_name: "",
            phone: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  // input change handler
  const changeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log("name,val", name, val);

    setFormValue((pre) => {
      return {
        ...pre,
        [name]: val
      };
    });
  };

  return (
    <div>
      {/* <div className={styles.bannerAbout}></div> */}
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>SERVICES & ABOUT US</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}
      <div className={styles.aboutMain}>
        <Container>
          <Row className="mb-5">
            <Col className={styles.aboutcol} lg={5}>
              <img src="/images/About/CombineImage.webp" alt="" />
            </Col>
            <Col className={styles.aboutcontent} lg={7}>
              <h5>ABOUT SYNCD GLOBAL SOLUTIONS</h5>
              <p>
                At Syncd Global Solutions, we specialize in offshore staffing
                services tailored to modern business needs. Originating from
                serving Appraisal Management Companies (AMCs) with premium
                quality control, we've expanded our expertise across multiple
                industries. Our offshore teams ensure uninterrupted operations
                and operational efficiency and offer a significant cost
                advantage, with potential savings of up to 75% compared to local
                hiring. Whether you need hourly, dedicated, or assignment-based
                offshore support, our solutions are designed for flexibility and
                efficiency. Experience the transformative impact of
                cost-effective global staffing. Contact us for a personalized
                consultation to discover how Syncd Global Solutions can redefine
                your business operations and financial strategy.
              </p>
              {/* <Row>
                <Col md={3}>
                  <div className={styles.abouticon}>
                    <img src="/images/About/Award.png" alt="" />
                    <h6>Award Winner</h6>
                  </div>
                </Col>
                <Col md={3}>
                  <div className={styles.abouticon}>
                    <img src="/images/About/247.png" alt="" />
                    <h6>24/7 Support</h6>
                  </div>
                </Col>
                <Col md={3}>
                  <div className={styles.abouticon}>
                    <img src="/images/About/percentage.png" alt="" />
                    <h6>Award Winner</h6>
                  </div>
                </Col>
                <Col md={3}>
                  <div className={styles.abouticon}>
                    <img src="/images/About/expert.png" alt="" />
                    <h6>100% Trusted</h6>
                  </div>
                </Col>
              </Row> */}
              <Row>
                <Col md={6} lg={3}>
                  <div className={styles.featurrbox}>
                    <img src="/images/home/cost.png" alt="" />
                    <h5>
                      <span> Reduced Cost</span>
                    </h5>
                    {/* <img src="/images/home/errow.png" alt="" /> */}
                  </div>
                </Col>
                <Col md={6} lg={3}>
                  <div className={styles.featurrbox1}>
                    <img src="/images/home/scale.png" alt="" />
                    <h5>
                      <span>Scale Quickly</span>
                    </h5>
                    {/* <img src="/images/home/errow.png" alt="" /> */}
                  </div>
                </Col>
                <Col md={6} lg={3}>
                  <div className={styles.featurrbox2}>
                    <img src="/images/home/increased.png" alt="" />
                    <h5>
                      <span>Increase Efficiency</span>
                    </h5>
                    {/* <img src="/images/home/errow.png" alt="" /> */}
                  </div>
                </Col>
                <Col md={6} lg={3}>
                  <div className={styles.featurrbox3}>
                    <img src="/images/home/flexible.png" alt="" />
                    <h5>
                      <span>Flexible Solutions</span>
                    </h5>
                    {/* <img src="/images/home/errow.png" alt="" /> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container></Container>
      </div>

      <div className={`${styles.serviceBg}`}>
        <Container>
          <Row className={styles.mainOwner}>
            {/* <div className={styles.mainOwner}> */}
            <Col md={8} className={styles.ownerSection}>
              <h5>The Benefits of Continuous Operational Efficiency</h5>
              <p>
                "Offshore outsourcing is synonymous with round-the-clock
                productivity. By leveraging time zone differences, businesses
                can enjoy continuous operations, ensuring faster turnaround
                times and enhanced service delivery."
              </p>
              {/* <img src="/images/About/sign.png" alt="" /> */}
              <h6>Rick & Upi Sagoo</h6>
              <p className={styles.ownrDg}>Founder, CEO, and COO</p>
            </Col>
            <Col className={styles.mainOwnerImg} md={4}>
              <img src="/images/About/IMG_0202.webp" alt="" />
            </Col>

            <Col className={styles.mainOwnerHide} md={4}>
              <img src="/images/About/IMG_0202.webp" alt="" />
              <h6>Rick & Upi Sagoo</h6>
              <p>Founder, CEO, and COO</p>
            </Col>

            {/* </div> */}
          </Row>
        </Container>
        <img
          className={styles.viIcon}
          src="/images/About/videoicon.png "
          alt=""
        />
      </div>
      <div className={styles.expert}>
        <Container className="pb-lg-4">
          <Row className="">
            <Col md={12} className={`mt-lg-5  ${styles.team}`}>
              <h2> Some of Our Offered Services </h2>
              <p>
                Syncd Global Solutions creates customized teams to meet the
                specific needs of your business. Our services are tailored to
                different industries and are designed to help you achieve your
                organization's goals. We are committed to providing the proper
                support to help you succeed. If you want personalized solutions,
                contact Syncd.
              </p>
            </Col>
            <Col md={12}>
              <Service />
              {/* <Swiper
                style={{
                  height: "450px"
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                pagination={{
                  clickable: true
                }}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },

                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 40
                  },
                  1366: {
                    slidesPerView: 4,
                    spaceBetween: 50
                  }
                }}
                modules={[Pagination]}
                className="our_expert_slider"
              >
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member4.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member1.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member2.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member3.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member4.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member1.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member2.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member3.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.sliderTeam}>
                    <img src="images/About/member4.jpg" alt="" />
                  </div>
                  <div className={styles.teamMemberName}>
                    <h3>Team Member Name</h3>
                    <h6>Hr Manager</h6>
                  </div>
                </SwiperSlide>
              </Swiper> */}
            </Col>
          </Row>
        </Container>
        <div></div>
        <div className={styles.getInToch} id="contact1" ref={contactRef}>
          <Container className={styles.contactForm}>
            <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <Row>
                <Col lg={6}>
                  <div className={styles.contactMail}>
                    <h5>Contact Us</h5>
                    <p>
                      Elevate your business with Syncd Global Solutions. Our
                      offshore outsourcing expertise offers cost-effective
                      scalability and a dedicated talent pool with
                      round-the-clock support. Brief us on your goals, and we'll
                      tailor solutions that sync perfectly with your needs.
                      Reach out now – let's create success together.
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
                          {...register("name", {
                            required: true,
                            minLength: 2,
                            onChange: (e) => changeHandler(e)
                          })}
                        />

                        <span
                          style={{
                            display: formValue.name === "" ? "block" : "none"
                          }}
                        >
                          *
                        </span>
                        {errors.name &&
                          errors.name.type === "required" &&
                          errorMessage("Please enter a name")}
                        {errors.name &&
                          errors.name.type === "minLength" &&
                          errorMessage("Name must be 2 characters")}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className={`${styles.ico_get} ${styles.email_star}`}
                        controlId="formGroupEmail"
                      >
                        <AiOutlineMail color="#6C6C72" />
                        <Form.Control
                          className={` ${styles.mainForm}`}
                          type="email"
                          placeholder="Enter email"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            },
                            onChange: (e) => changeHandler(e)
                          })}
                        />
                        <span
                          style={{
                            display: formValue.email === "" ? "block" : "none"
                          }}
                        >
                          *
                        </span>
                        {errors.email &&
                          errors.email.type === "required" &&
                          errorMessage("Please enter email address")}
                        {errors.email &&
                          errors.email.type === "pattern" &&
                          errorMessage("Invaid Email")}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className={`${styles.ico_get} ${styles.phone_star}`}
                        controlId="formGroupEmail"
                      >
                        <MdPhoneInTalk color="#6C6C72" />

                        <Form.Control
                          className={` ${styles.mainForm}`}
                          type="tel"
                          placeholder="Phone"
                          {...register("phone", {
                            required: true,
                            minLength: 10,
                            onChange: (e) => changeHandler(e),

                            pattern: {
                              value: /^[0-9]{10}$/
                            }
                          })}
                        />
                        <span
                          style={{
                            display: formValue.phone === "" ? "block" : "none"
                          }}
                        >
                          *
                        </span>
                        {errors.phone &&
                          errors.phone.type === "required" &&
                          errorMessage("Please enter a Phone Number")}
                        {errors.phone &&
                          errors.phone.type === "minLength" &&
                          errorMessage("Phone Number must be 10 characters")}
                        {errors.phone &&
                          errors.phone.type === "pattern" &&
                          errorMessage("Invaid Phone Number")}
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
                          {...register("company")}
                        />
                      </Form.Group>
                    </Col>

                    <Form.Group
                      className={`${styles.ico_get2}  ${styles.satarTextArea}`}
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <GrDocumentText />
                      <label
                        style={{
                          display: formValue.message === "" ? "block" : "none"
                        }}
                      >
                        *
                      </label>
                      <Form.Control
                        className={` ${styles.textareaForm}`}
                        as="textarea"
                        placeholder="How can we help you?"
                        rows={3}
                        {...register("message", {
                          required: true,
                          onChange: (e) => changeHandler(e)
                        })}
                      />

                      {errors.message &&
                        errors.message.type === "required" &&
                        errorMessage("Please enter a Message")}
                    </Form.Group>
                    <Col className={styles.btn}>
                      <Button
                        className={styles.formbtn}
                        variant="primary"
                        type="submit"
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
                    </Col>
                  </Row>
                </Col>
                <Col className={styles.getIn_img} lg={6}>
                  <img src="/images/About/getintoctmg.png" />
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
      <div>{/* <ClientSlider /> */}</div>
      <div>{/* <ServiceCatelogSlider /> */}</div>
      {/* <FindYourNext /> */}
    </div>
  );
};

export default About;
