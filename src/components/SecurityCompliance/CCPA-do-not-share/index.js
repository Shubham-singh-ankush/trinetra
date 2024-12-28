import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";
import { useLocation } from "react-router";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { Notification } from "../../shared/Notification";
import Dropdown from "react-bootstrap/Dropdown";
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

const index = () => {
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    req_type: "",
    cal_resident: ""
  });
  const form = useRef();

  const Router = useLocation();

  const ccpaRef = useRef();

  useEffect(() => {
    if (Router.hash) {
      ccpaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
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
        "template_q8a8rki",
        form.current,
        "hOvyXh3-J1SxPha1n"
      )
      .then(
        (result) => {
          console.log(result.text);
          Notification("success", "sent sucessfully!");
          setIsLoading(false);
          setFormValue({
            first_name: "",
            last_name: "",
            company: "",
            email: "",
            req_type: "",
            cal_resident: ""
          });
          reset();
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
    <>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>CCPA Compliant</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}

      {/* Privacy Policy start  */}
      <div className={styles.priviMain}>
        <Container>
          <Row>
            <Col className={styles.privicy}>
              <h2>CCPA Compliant</h2>
              <p>
                Under the California Consumer Privacy Act of 2018 (“CCPA”),
                California residents have the right to opt-out of the “sale” of
                their personal information. We do not sell your personal
                information. While we do not receive financial compensation for
                your personal information, we may share it with third parties to
                personalize your experience on our site, improve our site and
                services, and so that we can engage you with interest-based
                advertising on other websites. To exercise this right, please
                see the options detailed below. Please visit our Website Privacy
                and Cookie Policy for further details about our privacy
                practices.
              </p>
              <h2>Submit your request via email Or fill out a request form</h2>
              <p>
                To opt-out of the “sharing” of your personal information, please
                exercise your choice below:
              </p>

              <li>
                Email request. You may submit your request to opt out of the
                sale of your personal information described above by contacting
                us at support@syncdsolutions.com.
              </li>
              <li>
                Request form. You may submit a request to opt out of the sale of
                your personal information described above by submitting Here.
              </li>
            </Col>
          </Row>
        </Container>
        <Container id="ccpa" ref={ccpaRef}>
          <Row>
            <Col className={styles.privicy}>
              <div className={styles.cpaForm}>
                <div className={styles.getInToch}>
                  <Container className={styles.contactForm}>
                    <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
                      <Row>
                        <Col>
                          <div className={styles.contactMail}>
                            <h2>Privacy Request </h2>
                          </div>
                          <Row>
                            <Col md={12}>
                              <Form.Group
                                className={styles.ico_get}
                                controlId="formGroupEmail"
                              >
                                <FaUser color="#6C6C72" />
                                <Form.Control
                                  className={` ${styles.mainForm}`}
                                  type="text"
                                  placeholder="First Name"
                                  {...register("first_name", {
                                    required: true,
                                    minLength: 2,
                                    onChange: (e) => changeHandler(e)
                                  })}
                                />

                                <span
                                  style={{
                                    display:
                                      formValue.first_name === ""
                                        ? "block"
                                        : "none"
                                  }}
                                >
                                  *
                                </span>
                                {errors.first_name &&
                                  errors.first_name.type === "required" &&
                                  errorMessage("Please enter a first name")}
                                {errors.first_name &&
                                  errors.first_name.type === "minLength" &&
                                  errorMessage(
                                    "First Name must be 2 characters"
                                  )}
                              </Form.Group>
                            </Col>
                            <Col md={12}>
                              <Form.Group
                                className={styles.ico_get}
                                controlId="formGroupEmail"
                              >
                                <FaUser color="#6C6C72" />
                                <Form.Control
                                  className={` ${styles.mainForm}`}
                                  type="text"
                                  placeholder="Last Name"
                                  {...register("last_name", {
                                    required: true,
                                    minLength: 2,
                                    onChange: (e) => changeHandler(e)
                                  })}
                                />
                                <span
                                  style={{
                                    display:
                                      formValue.last_name === ""
                                        ? "block"
                                        : "none"
                                  }}
                                >
                                  *
                                </span>
                                {errors.last_name &&
                                  errors.last_name.type === "required" &&
                                  errorMessage("Please enter a last name")}
                                {errors.last_name &&
                                  errors.last_name.type === "minLength" &&
                                  errorMessage(
                                    "Last Name must be 2 characters"
                                  )}
                              </Form.Group>
                            </Col>
                            <Col md={12}>
                              <Form.Group
                                className={styles.ico_get}
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
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    },
                                    onChange: (e) => changeHandler(e)
                                  })}
                                />
                                <span
                                  style={{
                                    display:
                                      formValue.email === "" ? "block" : "none"
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
                            <Col md={12}>
                              <Form.Group
                                className={`${styles.ico_get} ${styles.emailStar}`}
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
                            <Col
                              md={12}
                              className={`${styles.privicyRequest} mt-4`}
                            >
                              <lable
                                style={{
                                  display:
                                    formValue.req_type === "" ? "block" : "none"
                                }}
                              >
                                *
                              </lable>
                              <Form.Select
                                className={` ${styles.maiSlect}`}
                                aria-label="Default select example"
                                {...register("req_type", {
                                  required: true,
                                  onChange: (e) => changeHandler(e)
                                })}
                              >
                                <option disabled value="" selected>
                                  Select Privacy Request Type
                                </option>

                                <option value=" Adjust or correct my personal data">
                                  Adjust or correct my personal data
                                </option>
                                <option value="Delete my personal data">
                                  Delete my personal data
                                </option>
                                <option value="Request a copy of my personal data">
                                  Request a copy of my personal data
                                </option>
                                <option value="CA Residents Only: Do not sell & share my">
                                  CA Residents Only: Do not sell or share my
                                  personal infomation
                                </option>
                                <option
                                  value="CA Residents Only: Do not share my sensitive
                                  information"
                                >
                                  CA Residents Only: Do not share my sensitive
                                  information
                                </option>
                                <option value="Other privacy question or request">
                                  Other privacy question or request
                                </option>
                                <option value="Other complaints">
                                  Other complaints
                                </option>
                              </Form.Select>
                            </Col>
                            {errors.req_type &&
                              errors.req_type.type === "required" &&
                              errorMessage("Please enter Privacy Request Type")}
                            <Col
                              md={12}
                              className={`${styles.residentRequest} mt-4`}
                            >
                              <lable
                                style={{
                                  display:
                                    formValue.cal_resident === ""
                                      ? "block"
                                      : "none"
                                }}
                              >
                                *
                              </lable>
                              <Form.Select
                                className={styles.resChoose}
                                aria-label="Default select example"
                                {...register("cal_resident", {
                                  required: true,
                                  onChange: (e) => changeHandler(e)
                                })}
                              >
                                <option value="" selected disabled>
                                  I am a California Resident
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <Form.Control
                                  className={` ${styles.mainForm}`}
                                  type="text"
                                  {...register("cal_resident", {
                                    required: true,
                                    onChange: (e) => changeHandler(e)
                                  })}
                                />
                              </Form.Select>
                            </Col>
                            {errors.cal_resident &&
                              errors.cal_resident.type === "required" &&
                              errorMessage(
                                "You are California resident or not "
                              )}
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
                                  "Submit"
                                )}
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                </div>
              </div>

              <p>
                Note: Please note that we may need to request certain
                information from you to verify your identity or otherwise
                process your request. If you are making this request on behalf
                of someone else, as their authorized agent, we may request you
                to provide us with a copy of a valid power of attorney or
                evidence of their written authorization. We may deny requests
                from agents who cannot demonstrate their authorization.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Privacy Policy start  */}
    </>
  );
};

export default index;
