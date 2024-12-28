import React, { useState, useEffect } from "react";
import { Col, Row, Container, useAccordionButton, Card } from "react-bootstrap";
import styles from "./index.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ClientSlider from "../shared/client-slider";
import ServiceCatelogSlider from "../shared/service-catelog";
import FindYourNext from "../shared/find-next";
import StickyBox from "react-sticky-box";
import Accordion from "react-bootstrap/Accordion";
import { useParams, Link } from "react-router-dom";

const index = () => {
  const [name, setName] = useState("Role");

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

  const currentRole = IndustryDataRole.find((d) => d.link === url);

  useEffect(() => {
    setName(currentRole.name);
  }, [currentRole.name]);

  return (
    <>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>Roles</h1>
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
            {/* slide desgin section start */}
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
              <div className={`${styles.heroimage}`}>
                <img src="/images/roles/outsourse.webp" alt="" />
              </div>
              {/* textsection start */}
              <div className={`${styles.herotextarea}`}>
                <h1>What is an outsource {name} assistant?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of digital marketing solutions. we
                  deliver exactly what we promise to our clients.
                  <br />
                  With more than 600+ Clients worldwide, their trust in us
                  speaks volumes about our expertise and unflinching commitment
                  towards growing their business.
                </p>
                <h4>
                  outsource {name} assistant duties and tasks can include:
                </h4>
                <div className={`${styles.textslide}`}>
                  <ul>
                    <li>
                      {" "}
                      <img src="/images/whysyncd/check.png" alt="" />
                      <span>
                        Lorem ipsum dolor sit amet, phone messages or mail, to
                        relevant members of an organisation
                      </span>
                    </li>
                    <li>
                      {" "}
                      <img src="/images/whysyncd/check.png" alt="" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </li>
                    <li>
                      {" "}
                      <img src="/images/whysyncd/check.png" alt="" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </li>
                    <li>
                      {" "}
                      <img src="/images/whysyncd/check.png" alt="" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </li>
                    <li>
                      {" "}
                      <img src="/images/whysyncd/check.png" alt="" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of digital marketing solutions. we
                  deliver exactly what we promise to our clients.
                  <br />
                  With more than 600+ Clients worldwide, their trust in us
                  speaks volumes about our expertise and unflinching commitment
                  towards growing their business.
                </p>
              </div>
              <div className={`${styles.herotextareabg}`}>
                <div className={`${styles.herotextarea}`}>
                  <h1>
                    What key skills and qualifications make a great outsource
                    admin assistant?
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                    world of exciting and rewarding web consulting and digital
                    marketing solutions Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit the world of digital marketing solutions. we
                    deliver exactly what we promise to our clients.{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                    world of exciting and rewarding web consulting and digital
                    marketing solutions Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit the world of exciting digital marketing
                    solutions.
                  </p>
                  <h4>outsource {name} assistant Key Skills :</h4>
                  <div className={`${styles.textslide}`}>
                    <ul>
                      <li>
                        {" "}
                        <img src="/images/whysyncd/check.png" alt="" />
                        <span>
                          Lorem ipsum dolor sit amet, phone messages or mail, to
                          relevant members of an organisation
                        </span>
                      </li>
                      <li>
                        {" "}
                        <img src="/images/whysyncd/check.png" alt="" />
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      </li>
                      <li>
                        {" "}
                        <img src="/images/whysyncd/check.png" alt="" />
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      </li>
                      <li>
                        {" "}
                        <img src="/images/whysyncd/check.png" alt="" />
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      </li>
                      <li>
                        {" "}
                        <img src="/images/whysyncd/check.png" alt="" />
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-3 mb-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                    world of exciting and rewarding web consulting and digital
                    marketing solutions Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit the world of digital marketing solutions. we
                    deliver exactly what we promise to our clients.
                  </p>
                  <h4>outsource {name} assistant Qualifications :</h4>
                  <div className={`${styles.textslide}`}>
                    <ul>
                      <li>
                        {" "}
                        <img src="/images/whysyncd/check.png" alt="" />
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      </li>
                      <li>
                        {" "}
                        <img src="/images/whysyncd/check.png" alt="" />
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`mt-4 ${styles.herotextarea}`}>
                <h1>Benefits of outsource {name} assistant roles</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting and rewarding web consulting and digital
                  marketing solutions Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit the world of digital marketing solutions. we
                  deliver exactly what we promise to our clients.
                  <br />
                  With more than 600+ Clients worldwide, their trust in us
                  speaks volumes about our expertise and unflinching commitment
                  towards growing their business.
                </p>
              </div>
              {/* textsection end */}

              {/* box section start */}
              <div className={`${styles.herotextmarn}`}>
                <Row>
                  {RoleboxData.map((data, i) => (
                    <Col lg={6} xl={4} md={12} xs={12} sm={12} key={i}>
                      <div className={`${styles.rolebox}`}>
                        <img
                          src={data.img}
                          alt=""
                          className={`${styles.roleboximg}`}
                        />
                        <h1>{data.heading}</h1>
                        <p>{data.para}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              {/* box section start */}

              {/* costs desgin section start */}
              <div className={` ${styles.costsbg} `}>
                <h1>
                  What are the costs associated with outsource {name} assistant
                  roles?
                </h1>
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
              {/* costs desgin section end */}
            </Col>
            {/* right desgin section start */}
          </Row>
        </Container>
      </div>
      {/* indusries desgin section end */}

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

const IndustryData = [
  {
    link: "hospitality-tourism",
    name: "Hospitality & Tourism"
  },

  {
    link: "real-estate",
    name: "Real Estate Services"
  },

  {
    link: "education-training",
    name: "Education & Training"
  },

  {
    link: "Retail-trade",
    name: "Retail Trade & E-Commerce"
  },

  {
    link: "Information-Media-Telecommunications",
    name: "Information Media Telecommunications"
  },
  {
    link: "Professional-Services",
    name: "Professional Services"
  },
  {
    link: "Transport-Postal-Warehousing",
    name: "Transport, Postal & Warehousing"
  },
  {
    link: "Legal-services",
    name: "Legal services"
  },
  {
    link: "Administration-Support",
    name: "Administration & Support"
  },
  {
    link: "Engineering-Construction",
    name: "Engineering & Construction"
  },
  {
    link: "Financial-Insurance-Services",
    name: "Financial & Insurance Services"
  },
  {
    link: "Health-Care",
    name: "Health Care"
  },
  {
    link: "Wholesale-Trade",
    name: "Wholesale Trade"
  }
];

const RoleboxData = [
  {
    img: "/images/roles/role.png",
    heading: "Reduced costs",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit the world of exciting and rewarding web consulting and digital marketing solutions the world of  digital marketing solutions.  "
  },
  {
    img: "/images/roles/role2.png",
    heading: "Expert support",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit the world of exciting and rewarding web consulting and digital marketing solutions the world of  digital marketing solutions.  "
  },
  {
    img: "/images/roles/role3.png",
    heading: "Improve staff satisfaction",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit the world of exciting and rewarding web consulting and digital marketing solutions the world of  digital marketing solutions.  "
  },
  {
    img: "/images/roles/role4.png",
    heading: "Business growth",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit the world of exciting and rewarding web consulting and digital marketing solutions the world of  digital marketing solutions.  "
  },
  {
    img: "/images/roles/role5.png",
    heading: "Flexibility and availability",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit the world of exciting and rewarding web consulting and digital marketing solutions the world of  digital marketing solutions.  "
  },
  {
    img: "/images/roles/role6.png",
    heading: "Access global talent pool",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit the world of exciting and rewarding web consulting and digital marketing solutions the world of  digital marketing solutions.  "
  }
];

const IndustryDataRole = [
  {
    link: "information-technology-(I.T)",
    name: "information technology (I.T)"
  },

  {
    link: "AdministrativeSupportServices",
    name: "Administrative & Support Services"
  },

  {
    link: "HospitalityandTourism",
    name: "Hospitality and Tourism"
  },

  {
    link: "RetailEstateService",
    name: "Retail Estate Service"
  },

  {
    link: "educationServices",
    name: "Education And Training"
  },
  {
    link: "PostalWarehousingServices",
    name: "Transport ,Postal & Warehousing Services"
  },
  {
    link: "Transport-Postal-Warehousing",
    name: "Transport, Postal & Warehousing"
  },
  {
    link: "Legal-services",
    name: "Legal services"
  },
  {
    link: "wholesale-trade",
    name: "Wholesale trade"
  },
  {
    link: "retailtrade",
    name: "Reatail Trade & Ecommerce Services"
  },
  {
    link: "EngineeringandConstruction",
    name: "Engineering and Construction"
  },
  {
    link: "ProfessionalServices",
    name: "Professional Services "
  },
  {
    link: " InformationMediaTelecommunications",
    name: "Information Media & Telecommunications"
  },
  {
    link: " FinancialandInsuranceServices",
    name: "Financial and Insurance Services"
  },
  {
    link: "HealthcareServices",
    name: "Healthcare Services"
  },
  {
    link: "hospitality-tourism",
    name: "Hospitality & Tourism"
  },

  {
    link: "real-estate",
    name: "Real Estate Services"
  },

  {
    link: "education-training",
    name: "Education & Training"
  },

  {
    link: "Retail-trade",
    name: "Retail Trade & E-Commerce"
  },

  {
    link: "InformationMediaTelecommunications",
    name: "Information Media Telecommunications"
  },
  {
    link: "Professional-Services",
    name: "Professional Services"
  },
  {
    link: "Transport-Postal-Warehousing",
    name: "Transport, Postal & Warehousing"
  },
  {
    link: "Legal-services",
    name: "Legal services"
  },
  {
    link: "Administration-Support",
    name: "Administration & Support"
  },
  {
    link: "Engineering-Construction",
    name: "Engineering & Construction"
  },
  {
    link: "Financial-Insurance-Services",
    name: "Financial & Insurance Services"
  },
  {
    link: "Health-Care",
    name: "Health Care"
  },
  {
    link: "Wholesale-Trade",
    name: "Wholesale Trade"
  }
];
