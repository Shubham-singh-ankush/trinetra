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
    last_name: "",
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
                <h1>SOC Compliant</h1>
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
              <h2>SOC Compliant</h2>

              <p>
                System and Organizational Controls 2 (SOC 2) is sometimes known
                as Service Organization Controls. Maintained by the American
                Institute of Certified Public Accountants (AICPA), SOC 2 is a
                standard for auditing and reporting on the efficacy of internal
                controls to protect the confidentiality, integrity, and
                availability of an information system. It is a business tool for
                companies providing information systems as a service to assure
                their customers that their systems are compliant and secure.
              </p>

              <p>
                SOC 2 auditing and reporting is an important business
                consideration for cloud and enterprise service providers who
                store or process third-party data. A SOC 2 report gives service
                provider customers the required information they use as part of
                their cyber-governance and risk management processes. Often,
                providing security and privacy compliance is a sales
                requirement. SOC 2 applies to nearly every SaaS company and
                having a SOC 2 report in hand can help streamline the sales
                process and build trust with your clientele.
              </p>
              <p>
                Synchronized Business Solutions Committed for security for your
                valuable data. Hence every year SBS undergo with SOC 2 Type 2
                Assessment
              </p>
              <br />
              <p>
                SOC 2 Type 2 reports may be requested via the
                <Link to="/ccpa-compliant#ccpa">
                  {" "}
                  <b> Compliance Request Form</b>
                </Link>{" "}
                or write to support@syncdsolutions.com.
              </p>
            </Col>
          </Row>
        </Container>
        {/* Request Form========= */}
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
    </>
  );
};

export default index;
