import { React, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { Notification } from "../../shared/Notification";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Button from "react-bootstrap/Button";

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
    name: "",

    phone: "",
    email: "",
    message: ""
  });
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
    <>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>GDPR Compliant</h1>
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
              <h2>GDPR Compliant</h2>
              <h2>Being a GDPR Compliant Company We Know</h2>

              <li>Where your data is being held.</li>
              <li>
                Ensure you have rights to view, amend, export or delete any
                information that we have on your behalf.
              </li>
              <li>Ensure authorized access only</li>
              <li>
                Ensure that consent is given during the sign-up process and can
                be withdrawal any time.
              </li>

              <br />
              <p>
                You are advised to go through our Privacy Policy. For any
                compliance concerns you can reach at support@syncdsolutions.com
              </p>
              <h2>
                Your Data Stored Securely. We follow the following Secure
                Methods
              </h2>
              <p>
                <b>Encryption at rest -</b> Our database has automatic
                encryption at rest, cloaking your data in another layer of
                protection.
              </p>
              <p>
                <b>CROSS SITE REQUEST FORGERY TOKENS -</b> We verify CSRF tokens
                at every point possible to help ensure your data can't be
                tampered with by malicious 3rd parties.
              </p>
              <p>
                <b>HTTP STRICT TRANSPORT SECURITY -</b> Our application forces
                all requests over HTTPS, ensuring all traffic is secured in
                transit and protecting against protocol downgrade attacks.
              </p>
              <p>
                <b>Regular external pen tests -</b> We test our own product
                regularly by hiring specialist security friendlies to attack us
                from the outside and in.
              </p>
              <p>
                <b>File Storage -</b> Your uploaded files can only be accessed
                through Synchronized Business Solutions, and team members can
                only get access to the files intended for them.
              </p>
              <p>
                <b>2 Factor Authentication -</b> We support (and encourage)
                Synchronized Business Solutions' users to use our two-factor
                authentication mechanism for additional user account protection.
              </p>
              <p>
                <b>SSL/TLS -</b> All traffic between Synchronized Business
                Solutions and the user's browser is encrypted in transit. We
                support TLS exclusively and only utilizing strong cipher suites.
              </p>
              <p>
                <b>Third Party Security Audit -</b> We are ISO 27001 certified
                company. So, we know the value of CIA(Confidentiality, Integrity
                and Availability). So, every year we undergo surveillance
                audits.
              </p>
              <p>
                <b> -</b> We have automated systems in place that monitor the
                versions and vulnerabilities in all the projects that power
                Synchronized Business Solutions
              </p>
              <p>
                <b>Customer Data Regulation -</b> We never move user data out of
                the secured environment for testing or any other reason. Your
                data always stays where it's put.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
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
                                  placeholder="Enter Your Name"
                                  {...register("name", {
                                    required: true,
                                    minLength: 2,
                                    onChange: (e) => changeHandler(e)
                                  })}
                                />

                                <span
                                  style={{
                                    display:
                                      formValue.name === "" ? "block" : "none"
                                  }}
                                >
                                  *
                                </span>
                                {errors.name &&
                                  errors.name.type === "required" &&
                                  errorMessage("Please enter a name")}
                                {errors.name &&
                                  errors.name.type === "minLength" &&
                                  errorMessage(" name must be 2 characters")}
                              </Form.Group>
                            </Col>

                            <Col md={12}>
                              <Form.Group
                                className={`${styles.ico_get} ${styles.starSecond}`}
                                controlId="formGroupEmail"
                              >
                                <AiOutlineMail color="#6C6C72" />
                                <Form.Control
                                  className={` ${styles.mainForm}`}
                                  type="email"
                                  placeholder="Enter Email"
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
                                  errorMessage("Invaid email")}
                              </Form.Group>
                            </Col>

                            <Col md={12}>
                              <Form.Group
                                className={`${styles.ico_get} ${styles.emailStar}`}
                                controlId="formGroupEmail"
                              >
                                <MdPhoneInTalk color="#6C6C72" />

                                <Form.Control
                                  className={` ${styles.mainForm}`}
                                  type="text"
                                  placeholder="Enter Your Mobile No."
                                  {...register("phone", {
                                    required: true,
                                    minLength: 10,
                                    pattern: {
                                      value: /^[0-9]{10}$/
                                    },
                                    onChange: (e) => changeHandler(e)
                                  })}
                                />
                                {errors.phone &&
                                  errors.phone.type === "required" &&
                                  errorMessage("Please enter a mobile Number")}
                                {errors.phone &&
                                  errors.phone.type === "minLength" &&
                                  errorMessage(
                                    "Phone mobile must be 10 characters"
                                  )}
                                {errors.phone &&
                                  errors.phone.type === "pattern" &&
                                  errorMessage("Invaid mobile Number")}

                                <span
                                  style={{
                                    display:
                                      formValue.phone === "" ? "block" : "none"
                                  }}
                                >
                                  *
                                </span>
                              </Form.Group>
                            </Col>
                            <Col md={12} className={styles.satarTextArea}>
                              <label
                                style={{
                                  display:
                                    formValue.message === "" ? "block" : "none"
                                }}
                              >
                                *
                              </label>
                              <textarea
                                className={` ${styles.textareaform}`}
                                placeholder="How Can We Help You?"
                                {...register("message", {
                                  required: true,
                                  onChange: (e) => changeHandler(e)
                                })}
                              ></textarea>
                              {errors.message &&
                                errors.message.type === "required" &&
                                errorMessage("Please enter a message")}
                            </Col>
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
            </Col>
          </Row>
        </Container>
        {/* Request Form========= */}
      </div>

      {/* Privacy Policy start  */}
      {/* Request Form========= */}
    </>
  );
};

export default index;
