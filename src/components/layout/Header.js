import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  Accordion,
  useAccordionButton,
  Card
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
  }

  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  window.onscroll = () => {
    const navbar = document.getElementById("nav123");
    if (window.scrollY > 80) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };

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

  const linkHandler = () => {
    const tt = document.getElementById("serviceToggle");
    tt.classList.remove("dropdown");
  };

  const hoverHandler = () => {
    const tt = document.getElementById("serviceToggle");
    tt.classList.add("dropdown");
  };

  return (
    <Container className={`${styles.navBg} activeBtn headDropDown`}>
      <nav
        className={`${styles.haderMain} navbar  navbar-expand-lg navbar-dark `}
        id="nav123"
      >
        <Container>
          <Link to="/" className={`${styles.navImg} navbar-brand`}>
            <img src="images/home/logon.png" alt="" />
          </Link>

          <button
            className={`${styles.humbergerBtn} openbtn`}
            onClick={openNav}
          >
            &#9776;
          </button>

          <div id="mySidepanel" className={`${styles.moblieMenu} sidepanel`}>
            <div className={"closebtn"} onClick={closeNav}>
              &times;
            </div>
            <Nav className="" navbarScroll>
              <ul className="navbar-nav ">
                <Link
                  to="/"
                  className="nav-link active mobileActive  dropdown"
                  aria-current="page"
                  onClick={closeNav}
                >
                  Home
                </Link>

                <li className="nav-item dropdown">
                  <div>
                    <Link
                      to="/about"
                      className="nav-link active-toggle dropdown"
                      aria-current="page"
                      onClick={closeNav}
                    >
                      Services & About Us
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <div>
                    <Link
                      to="/why-syncd"
                      className="nav-link active-toggle dropdown"
                      aria-current="page"
                      onClick={closeNav}
                    >
                      Why Syncd
                    </Link>
                  </div>
                </li>

                {/* <li className="nav-item dropdown ">
                  <div>
                    <Link
                      onClick={(e) =>
                        console.log(
                          "click on inmdustry==============",
                          e.target
                        )
                      }
                      className={`${styles.dropDownMenu} nav-link dropdown-toggle dropdown`}
                      to="/services"
                    >
                      SERVICES
                    </Link>
                  </div>
                  <ul
                    className={`${styles.headerDropDownMenu}  dropdown-menu dropdown-menu-dark`}
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <div className={styles.industriesmenu}>
                      <Row>
                        <Col md={12} className="dropMenu">
                          <Tabs
                            defaultActiveKey=""
                            id="justify-tab-example"
                            className="mb-3"
                            justify
                          >
                            <Tab eventKey="home" title="By Industry">
                              <Row>
                                {
                                  <Col md={4}>
                                    <li>
                                      Information Media Telecommunications
                                    </li>
                                    <li>Professional Services</li>
                                    <li>Transport, Postal &amp; Warehousing</li>
                                    <li>Legal services</li>
                                  </Col>
                                }
                                {
                                  <Col md={4}>
                                    <li>Administration &amp; Support</li>
                                    <li>Engineering &amp; Construction</li>
                                    <li>Financial &amp; Insurance Services</li>
                                    <li>Health Care</li>
                                    <li>Wholesale Trade</li>
                                  </Col>
                                }
                              </Row>
                            </Tab>
                            <Tab
                              eventKey="profile"
                              title="By Role Type "
                              className={styles.roleHead}
                            >
                              <Accordion>
                                <Row>
                                  <Col md={6}>
                                    <Row>
                                      <Col md={12}>
                                        <Card>
                                          <Card.Header>
                                            <CustomToggle eventKey="0">
                                              information technology (I.T){" "}
                                              <span>&#129168;</span>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="0">
                                            <>
                                              <Card.Body>
                                                <Row>
                                                  <Col md={6}>
                                                    <ul className="menudata inline">
                                                      <li>
                                                        <p>
                                                          Hardware/Systems/Network
                                                          Support
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          IT Systems Analyst
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          IT Network
                                                          Administrator
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Systems/Network
                                                          Engineer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>Desktop Support</p>
                                                      </li>
                                                      <li>
                                                        <p>Helpdesk Support</p>
                                                      </li>
                                                      <li>
                                                        <p>IT Support</p>
                                                      </li>
                                                      <li>
                                                        <p>Technical Support</p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Database Administrator
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Software Development &
                                                          Support
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Web Development &
                                                          Support
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Application Developer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>Devops Engineer</p>
                                                      </li>
                                                    </ul>
                                                  </Col>

                                                  <Col md={6}>
                                                    <ul className="menudata">
                                                      <li>
                                                        <p>Programmer</p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Software Developer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Frontend Developer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>Backend Developer</p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          IT Systems
                                                          Administrator
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Information Security
                                                          Analyst
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Full Stack Developer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>IT Consultant</p>
                                                      </li>
                                                      <li>
                                                        <p>QA Tester</p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Technical Support
                                                          Engineer
                                                        </p>
                                                      </li>

                                                      <li>
                                                        <p>
                                                          Ecommerce Specialist
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Social Media
                                                          Moderation
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>Game Developers</p>
                                                      </li>
                                                    </ul>
                                                  </Col>
                                                </Row>
                                              </Card.Body>
                                            </>
                                          </Accordion.Collapse>
                                        </Card>
                                        
                                      </Col>

                                      <Col md={12}>
                                      
                                        <Card>
                                          <Card.Header>
                                            <CustomToggle eventKey="1">
                                              Administrative & Support Services{" "}
                                              <span>&#129168;</span>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                              <Row>
                                                <Col md={6}>
                                                  <ul className="menudata inline">
                                                    <li>
                                                      <p>
                                                        Administrative Assistant
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>HR Specialist</p>
                                                    </li>
                                                    <li>
                                                      <p>Document Controller</p>
                                                    </li>
                                                    <li>
                                                      <p>Data Encoder</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Data Entry Specialist
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Data Analyst</p>
                                                    </li>
                                                    <li>
                                                      <p>Reports Analyst</p>
                                                    </li>
                                                    <li>
                                                      <p>Data Scientist</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                                <Col md={6}>
                                                  <ul className="menudata">
                                                    <li>
                                                      <p>Data Researcher</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Order
                                                        Processing/Fulfilment
                                                        Specialist
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>HR Manager</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Customer Service
                                                        Representative
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Personal Assistant</p>
                                                    </li>
                                                    <li>
                                                      <p>Recruiter</p>
                                                    </li>
                                                    <li>
                                                      <p>Appointment Setter</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                              </Row>
                                            </Card.Body>
                                          </Accordion.Collapse>
                                        </Card>
                                       
                                      </Col>
                                    </Row>

                                    <Col md={12}>
                                      <Accordion>
                                        <Card>
                                          <Card.Header>
                                            <CustomToggle eventKey="2">
                                              Hospitality and Tourism{" "}
                                              <span>&#129168;</span>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                              <Row>
                                                <Col md={6}>
                                                  <ul className="menudata inline">
                                                    <li>
                                                      <p>Reservations Agent</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Travel Advisor/Agent
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Sales & Reservations
                                                        Consultant
                                                      </p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                                <Col md={6}>
                                                  <ul className="menudata">
                                                    <li>
                                                      <p>Customer Care</p>
                                                    </li>
                                                    <li>
                                                      <p>Customer Service</p>
                                                    </li>
                                                    <li>
                                                      <p>Data Analyst</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                              </Row>
                                            </Card.Body>
                                          </Accordion.Collapse>
                                        </Card>
                                      </Accordion>
                                    </Col>

                                    <Col md={12}>
                                      <Accordion>
                                        <Card>
                                          <Card.Header>
                                            <CustomToggle eventKey="3">
                                              Real Estate Services{" "}
                                              <span>&#129168;</span>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                              <Row>
                                                <Col md={6}>
                                                  <ul className="menudata inline">
                                                    <li>
                                                      <p>
                                                        Administration
                                                        Coordinator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Interior Designer</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Collections Specialist
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Sales Administrator</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Architectural
                                                        Illustrator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Project Manager</p>
                                                    </li>
                                                    <li>
                                                      <p>Property Manager</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                                <Col md={6}>
                                                  <ul className="menudata">
                                                    <li>
                                                      <p>
                                                        Marketing Coordinator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Transaction Coordinator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Construction
                                                        Administrator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Animation</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Multimedia Specialist
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Real Estate Videographer
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Virtual Assistant</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                              </Row>
                                            </Card.Body>
                                          </Accordion.Collapse>
                                        </Card>
                                      </Accordion>
                                    </Col>

                                    <Col md={12}>
                                     
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="4">
                                            Education and Training{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Online Tutors</p>
                                                  </li>
                                                  <li>
                                                    <p>English Teachers</p>
                                                  </li>
                                                  <li>
                                                    <p>Teaching Assistants</p>
                                                  </li>
                                                  <li>
                                                    <p>Admissions Officer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>E-Learning Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Instructional
                                                      Designer/Modules Designer
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Student Enrollment Officer
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                     
                                    </Col>
                                    <Col md={12}>
                                     
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="5">
                                            Transport, Postal & Warehousing
                                            Services <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="5">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>
                                                      Logistics & Transport
                                                      Coordinator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Purchasing Officer</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Supply Chain Coordinator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Procurement Specialist
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>
                                                      Transport and Logistics
                                                      Analyst
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Supply Chain Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Customer Service
                                                      Representatives
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Data Analyst</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Transport, Logistics &
                                                      Warehousing
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                      
                                    </Col>
                                    <Col md={12}>
                                      
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="6">
                                            Legal Services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="6">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Legal Assistant</p>
                                                  </li>
                                                  <li>
                                                    <p>Paralegal</p>
                                                  </li>
                                                  <li>
                                                    <p>Legal Secretary</p>
                                                  </li>
                                                  <li>
                                                    <p>Corporate Lawyer</p>
                                                  </li>
                                                  <li>
                                                    <p>CPA</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>
                                                      Virtual Legal Executive
                                                      Assistant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Legal Personal Assistant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Lawyer</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Clinical Project Manager
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Paraplanner</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                      
                                    </Col>
                                    <Col md={12}>
                                     
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="7">
                                            Wholesale Trade{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="7">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Account Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>Sales Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>Customer Care</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Wholesale Trade & Supply
                                                      Chain
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Customer Service
                                                      Representative
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Data Entry Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Bookkeeper</p>
                                                  </li>
                                                  <li>
                                                    <p>Logistics Support</p>
                                                  </li>
                                                  <li>
                                                    <p>Marketing Coordinator</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                      
                                    </Col>
                                  </Col>
                                  <Col md={6}>
                                    <Col md={12}>
                                      
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="8">
                                            Retail Trade & Ecommerce Services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="8">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>
                                                      Customer Service
                                                      Representative
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Sales Consultant</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Technical Support
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Digital Marketing
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>UI/UX Developer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Account Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>E-commerce Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Accounts Payable
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Accounts Receivable
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Telemarketer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                      
                                    </Col>

                                    <Col md={12}>
                                      
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="9">
                                            Engineering and Construction{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="9">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Quantity Surveyor</p>
                                                  </li>
                                                  <li>
                                                    <p>Site Estimator</p>
                                                  </li>
                                                  <li>
                                                    <p>Electrical Engineer</p>
                                                  </li>
                                                  <li>
                                                    <p>Civil Engineer</p>
                                                  </li>
                                                  <li>
                                                    <p>Mechanical Engineer</p>
                                                  </li>
                                                  <li>
                                                    <p>Structural Engineer</p>
                                                  </li>
                                                  <li>
                                                    <p>Architect</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Draftsman</p>
                                                  </li>
                                                  <li>
                                                    <p>AutoCAD</p>
                                                  </li>
                                                  <li>
                                                    <p>CAD Operator</p>
                                                  </li>
                                                  <li>
                                                    <p>3D Modeler</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Quality
                                                      Engineer/Reliability
                                                      Engineer
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Engineering Technician
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Project Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Construction Administrator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Construction Estimator
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                      
                                    </Col>

                                    <Col md={12}>
                                      
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="10">
                                            professional services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="10">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Project Management</p>
                                                  </li>
                                                  <li>
                                                    <p>Geologist</p>
                                                  </li>
                                                  <li>
                                                    <p>Travel Advisor</p>
                                                  </li>
                                                  <li>
                                                    <p>Legal</p>
                                                  </li>
                                                  <li>
                                                    <p>Recruitment</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Performance Management
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Consulting</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>
                                                      Knowledge Process
                                                      Outsourcing
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Business Process Analysis
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Architecture</p>
                                                  </li>
                                                  <li>
                                                    <p>Logistics Support</p>
                                                  </li>
                                                  <li>
                                                    <p>Human Resources (HR)</p>
                                                  </li>
                                                  <li>
                                                    <p>Paralegal Services</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Transaction Coordinator
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                      
                                    </Col>

                                    <Col md={12}>
                                     
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="11">
                                            Information Media &
                                            Telecommunications{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="11">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>SEO Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>SEM Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Customer Service
                                                      Representative
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Technical Support
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Sales Representative</p>
                                                  </li>
                                                  <li>
                                                    <p>UI/UI Designer</p>
                                                  </li>
                                                  <li>
                                                    <p>Web Developer</p>
                                                  </li>
                                                  <li>
                                                    <p>Content Writer</p>
                                                  </li>
                                                  <li>
                                                    <p>Technical Writer</p>
                                                  </li>
                                                  <li>
                                                    <p>Copywriter</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Media Planner</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Administrative Assistant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>IT Support Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Market Researcher</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Marketing and Data Analyst
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Data Entry Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Graphic Designer</p>
                                                  </li>
                                                  <li>
                                                    <p>3D Designer/Artist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Animation
                                                      Specialist/Animator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Social Media Marketer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    
                                    </Col>
                                    <Col md={12}>
                                      
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="12">
                                            Financial and Insurance Services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="12">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Accountant</p>
                                                  </li>
                                                  <li>
                                                    <p>Bookkeeper</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Accounts Receivable
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Accounts Payable
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Accounts Supervisor</p>
                                                  </li>
                                                  <li>
                                                    <p>UI/UI Designer</p>
                                                  </li>
                                                  <li>
                                                    <p>Payroll Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Financial Analyst</p>
                                                  </li>
                                                  <li>
                                                    <p>Financial Advisor</p>
                                                  </li>
                                                  <li>
                                                    <p>Insurance Broker</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Underwriter</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Loans/Mortgage Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Collections Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Mortgage Processor</p>
                                                  </li>
                                                  <li>
                                                    <p>Payroll Processor</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Debt Collection Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Administrative Support
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Data Entry Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Mortgage Broker</p>
                                                  </li>
                                                  <li>
                                                    <p>Claims Processor</p>
                                                  </li>
                                                  <li>
                                                    <p>Loans Processing</p>
                                                  </li>
                                                  <li>
                                                    <p>Auditor</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Real Estate Accountant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>SMSF Accountant</p>
                                                  </li>
                                                  <li>
                                                    <p>Billing Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Finance Officer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                     
                                    </Col>
                                    <Col md={12}>
                                      
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="13">
                                            Healthcare Services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="13">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Medical Coder</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Medical Transcriptionist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Administrative Assistant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Clinical Data Coordinator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Telemedicine Physician
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Clinical Research
                                                      Coordinator
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>QA Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Medical Billing Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Medical Science Liaison
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Clinical Project Manager
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Case Manager</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Col>
                                  </Col>
                                </Row>
                              </Accordion>
                            </Tab>
                          </Tabs>
                        </Col>
                      </Row>
                    </div>
                  </ul>
                </li> */}

                {/* <a className="navbar-brand d-none d-md-block" href="/">
                  <img src={logo11} alt="logo" />
                </a> */}
                {/* <li className="nav-item dropdown">
                  <div>
                    <Link
                      to="/hiring"
                      className="nav-link -toggle"
                      onClick={closeNav}
                    >
                      We're Hiring
                    </Link>
                  </div>
                </li> */}
              </ul>
            </Nav>
          </div>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className={`${styles.menuColor} navbar-nav ms-auto `}>
              <li>
                <Link
                  to="/"
                  className="nav-link active-toggle  dropdown"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div>
                  <Link
                    to="/about"
                    className="nav-link active-toggle dropdown"
                    aria-current="page"
                  >
                    Services & About Us
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <div>
                  <Link
                    to="/why-syncd"
                    className="nav-link active-toggle dropdown"
                    aria-current="page"
                  >
                    why syncd
                  </Link>
                </div>
              </li>

              {/* <li id="serviceToggle" className="nav-item dropdown ">
                <div onMouseEnter={hoverHandler}>
                  <Link
                    onClick={(e) =>
                      console.log("click on inmdustry==============", e.target)
                    }
                    className="nav-link dropdown-toggle dropdown "
                    id="serviceToggle"
                    to="/services"
                  >
                    SERVICES
                  </Link>
                </div>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <div className={styles.industriesmenu}>
                    <Row>
                      <Col md={12}>
                        <Tabs
                          defaultActiveKey=""
                          id="justify-tab-example"
                          className="mb-3"
                          justify
                        >
                          <Tab eventKey="home" title="By Industry">
                            <Row>
                              <Col md={4}>
                                {IndustryData.slice(0, 4).map((d) => {
                                  return (
                                    <Link
                                      onClick={linkHandler}
                                      key={d.name}
                                      to={`/services/${d.link}`}
                                    >
                                      <li key={d.name}>{d.name}</li>
                                    </Link>
                                  );
                                })}
                              </Col>
                              <Col md={4}>
                                {IndustryData.slice(4, 9).map((d) => {
                                  return (
                                    <Link
                                      onClick={linkHandler}
                                      key={d.name}
                                      to={`/services/${d.link}`}
                                    >
                                      <li key={d.name}>{d.name}</li>
                                    </Link>
                                  );
                                })}
                              </Col>
                              <Col md={4}>
                                {IndustryData.slice(9, 15).map((d) => {
                                  return (
                                    <Link
                                      onClick={linkHandler}
                                      key={d.name}
                                      to={`/services/${d.link}`}
                                    >
                                      <li key={d.name}>{d.name}</li>
                                    </Link>
                                  );
                                })}
                              </Col>
                            </Row>
                          </Tab> */}
              {/* <Tab eventKey="profile" title="By Role Type">
                            <Accordion>
                              <Row> */}
              {/* <Col md={6}> */}
              {/* <Row> */}
              {/* <Col md={12}>
                                      <Link
                                        onClick={linkHandler}
                                        to="/roles/information-technology-(I.T)"
                                      >
                                        <Card>
                                          <Card.Header>
                                            <CustomToggle eventKey="0">
                                              information technology (I.T){" "}
                                              <span>&#129168;</span>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="0">
                                            <>
                                              <Card.Body>
                                                <Row>
                                                  <Col md={6}>
                                                    <ul className="menudata inline">
                                                      <li>
                                                        <p>
                                                          Hardware/Systems/Network
                                                          Support
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          IT Systems Analyst
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          IT Network
                                                          Administrator
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Systems/Network
                                                          Engineer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>Desktop Support</p>
                                                      </li>
                                                      <li>
                                                        <p>Helpdesk Support</p>
                                                      </li>
                                                      <li>
                                                        <p>IT Support</p>
                                                      </li>
                                                      <li>
                                                        <p>Technical Support</p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Database Administrator
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Software Development &
                                                          Support
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Web Development &
                                                          Support
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Application Developer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>Devops Engineer</p>
                                                      </li>
                                                    </ul>
                                                  </Col>

                                                  <Col md={6}>
                                                    <ul className="menudata">
                                                      <li>
                                                        <p>Programmer</p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Software Developer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Frontend Developer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>Backend Developer</p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          IT Systems
                                                          Administrator
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Information Security
                                                          Analyst
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Full Stack Developer
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>IT Consultant</p>
                                                      </li>
                                                      <li>
                                                        <p>QA Tester</p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Technical Support
                                                          Engineer
                                                        </p>
                                                      </li>

                                                      <li>
                                                        <p>
                                                          Ecommerce Specialist
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>
                                                          Social Media
                                                          Moderation
                                                        </p>
                                                      </li>
                                                      <li>
                                                        <p>Game Developers</p>
                                                      </li>
                                                    </ul>
                                                  </Col>
                                                </Row>
                                              </Card.Body>
                                            </>
                                          </Accordion.Collapse>
                                        </Card>
                                      </Link>
                                    </Col> */}

              {/* <Col md={12}>
                                      <Link
                                        onClick={linkHandler}
                                        to="/roles/AdministrativeSupportServices"
                                      >
                                        <Card>
                                          <Card.Header>
                                            <CustomToggle eventKey="1">
                                              Administrative & Support Services{" "}
                                              <span>&#129168;</span>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                              <Row>
                                                <Col md={6}>
                                                  <ul className="menudata inline">
                                                    <li>
                                                      <p>
                                                        Administrative Assistant
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>HR Specialist</p>
                                                    </li>
                                                    <li>
                                                      <p>Document Controller</p>
                                                    </li>
                                                    <li>
                                                      <p>Data Encoder</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Data Entry Specialist
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Data Analyst</p>
                                                    </li>
                                                    <li>
                                                      <p>Reports Analyst</p>
                                                    </li>
                                                    <li>
                                                      <p>Data Scientist</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                                <Col md={6}>
                                                  <ul className="menudata">
                                                    <li>
                                                      <p>Data Researcher</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Order
                                                        Processing/Fulfilment
                                                        Specialist
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>HR Manager</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Customer Service
                                                        Representative
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Personal Assistant</p>
                                                    </li>
                                                    <li>
                                                      <p>Recruiter</p>
                                                    </li>
                                                    <li>
                                                      <p>Appointment Setter</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                              </Row>
                                            </Card.Body>
                                          </Accordion.Collapse>
                                        </Card>
                                      </Link>
                                      
                                    </Col> */}
              {/* </Row> */}

              {/* <Col md={12}>
                                    <Accordion>
                                      <Link
                                        onClick={linkHandler}
                                        to="/roles/HospitalityandTourism"
                                      >
                                        <Card>
                                          <Card.Header>
                                            <CustomToggle eventKey="2">
                                              Hospitality and Tourism{" "}
                                              <span>&#129168;</span>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                              <Row>
                                                <Col md={6}>
                                                  <ul className="menudata inline">
                                                    <li>
                                                      <p>Reservations Agent</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Travel Advisor/Agent
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Sales & Reservations
                                                        Consultant
                                                      </p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                                <Col md={6}>
                                                  <ul className="menudata">
                                                    <li>
                                                      <p>Customer Care</p>
                                                    </li>
                                                    <li>
                                                      <p>Customer Service</p>
                                                    </li>
                                                    <li>
                                                      <p>Data Analyst</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                              </Row>
                                            </Card.Body>
                                          </Accordion.Collapse>
                                        </Card>
                                      </Link>
                                    </Accordion>
                                  </Col> */}

              {/* <Col md={12}>
                                    <Accordion>
                                      <Link
                                        onClick={linkHandler}
                                        to="/roles/RetailEstateService"
                                      >
                                        <Card>
                                          <Card.Header>
                                            <CustomToggle eventKey="3">
                                              Real Estate Services{" "}
                                              <span>&#129168;</span>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                              <Row>
                                                <Col md={6}>
                                                  <ul className="menudata inline">
                                                    <li>
                                                      <p>
                                                        Administration
                                                        Coordinator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Interior Designer</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Collections Specialist
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Sales Administrator</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Architectural
                                                        Illustrator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Project Manager</p>
                                                    </li>
                                                    <li>
                                                      <p>Property Manager</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                                <Col md={6}>
                                                  <ul className="menudata">
                                                    <li>
                                                      <p>
                                                        Marketing Coordinator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Transaction Coordinator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Construction
                                                        Administrator
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Animation</p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Multimedia Specialist
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>
                                                        Real Estate Videographer
                                                      </p>
                                                    </li>
                                                    <li>
                                                      <p>Virtual Assistant</p>
                                                    </li>
                                                  </ul>
                                                </Col>
                                              </Row>
                                            </Card.Body>
                                          </Accordion.Collapse>
                                        </Card>
                                      </Link>
                                    </Accordion>
                                  </Col> */}

              {/* <Col md={12}>
                                    
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/educationServices"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="4">
                                            Education and Training{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Online Tutors</p>
                                                  </li>
                                                  <li>
                                                    <p>English Teachers</p>
                                                  </li>
                                                  <li>
                                                    <p>Teaching Assistants</p>
                                                  </li>
                                                  <li>
                                                    <p>Admissions Officer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>E-Learning Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Instructional
                                                      Designer/Modules Designer
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Student Enrollment Officer
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>

                                  </Col> */}
              {/* <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/PostalWarehousingServices"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="5">
                                            Transport, Postal & Warehousing
                                            Services <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="5">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>
                                                      Logistics & Transport
                                                      Coordinator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Purchasing Officer</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Supply Chain Coordinator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Procurement Specialist
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>
                                                      Transport and Logistics
                                                      Analyst
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Supply Chain Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Customer Service
                                                      Representatives
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Data Analyst</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Transport, Logistics &
                                                      Warehousing
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>
                                  </Col> */}
              {/* <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/Legal-services"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="6">
                                            Legal Services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="6">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Legal Assistant</p>
                                                  </li>
                                                  <li>
                                                    <p>Paralegal</p>
                                                  </li>
                                                  <li>
                                                    <p>Legal Secretary</p>
                                                  </li>
                                                  <li>
                                                    <p>Corporate Lawyer</p>
                                                  </li>
                                                  <li>
                                                    <p>CPA</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>
                                                      Virtual Legal Executive
                                                      Assistant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Legal Personal Assistant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Lawyer</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Clinical Project Manager
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Paraplanner</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>
                                  </Col> */}
              {/* <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/wholesale-trade"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="7">
                                            Wholesale Trade{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="7">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Account Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>Sales Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>Customer Care</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Wholesale Trade & Supply
                                                      Chain
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Customer Service
                                                      Representative
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Data Entry Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Bookkeeper</p>
                                                  </li>
                                                  <li>
                                                    <p>Logistics Support</p>
                                                  </li>
                                                  <li>
                                                    <p>Marketing Coordinator</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>

                                  </Col> */}
              {/* </Col> */}
              {/* <Col md={6}>
                                  <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/retailtrade"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="8">
                                            Retail Trade & Ecommerce Services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="8">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>
                                                      Customer Service
                                                      Representative
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Sales Consultant</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Technical Support
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Digital Marketing
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>UI/UX Developer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Account Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>E-commerce Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Accounts Payable
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Accounts Receivable
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Telemarketer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>
                                  </Col>

                                  <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/EngineeringandConstruction"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="9">
                                            Engineering and Construction{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="9">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Quantity Surveyor</p>
                                                  </li>
                                                  <li>
                                                    <p>Site Estimator</p>
                                                  </li>
                                                  <li>
                                                    <p>Electrical Engineer</p>
                                                  </li>
                                                  <li>
                                                    <p>Civil Engineer</p>
                                                  </li>
                                                  <li>
                                                    <p>Mechanical Engineer</p>
                                                  </li>
                                                  <li>
                                                    <p>Structural Engineer</p>
                                                  </li>
                                                  <li>
                                                    <p>Architect</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Draftsman</p>
                                                  </li>
                                                  <li>
                                                    <p>AutoCAD</p>
                                                  </li>
                                                  <li>
                                                    <p>CAD Operator</p>
                                                  </li>
                                                  <li>
                                                    <p>3D Modeler</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Quality
                                                      Engineer/Reliability
                                                      Engineer
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Engineering Technician
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Project Manager</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Construction Administrator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Construction Estimator
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>
                                  </Col>

                                  <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/ProfessionalServices"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="10">
                                            professional services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="10">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Project Management</p>
                                                  </li>
                                                  <li>
                                                    <p>Geologist</p>
                                                  </li>
                                                  <li>
                                                    <p>Travel Advisor</p>
                                                  </li>
                                                  <li>
                                                    <p>Legal</p>
                                                  </li>
                                                  <li>
                                                    <p>Recruitment</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Performance Management
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Consulting</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>
                                                      Knowledge Process
                                                      Outsourcing
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Business Process Analysis
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Architecture</p>
                                                  </li>
                                                  <li>
                                                    <p>Logistics Support</p>
                                                  </li>
                                                  <li>
                                                    <p>Human Resources (HR)</p>
                                                  </li>
                                                  <li>
                                                    <p>Paralegal Services</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Transaction Coordinator
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>
                                  </Col>

                                  <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/InformationMediaTelecommunications"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="11">
                                            Information Media &
                                            Telecommunications{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="11">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>SEO Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>SEM Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Customer Service
                                                      Representative
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Technical Support
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Sales Representative</p>
                                                  </li>
                                                  <li>
                                                    <p>UI/UI Designer</p>
                                                  </li>
                                                  <li>
                                                    <p>Web Developer</p>
                                                  </li>
                                                  <li>
                                                    <p>Content Writer</p>
                                                  </li>
                                                  <li>
                                                    <p>Technical Writer</p>
                                                  </li>
                                                  <li>
                                                    <p>Copywriter</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Media Planner</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Administrative Assistant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>IT Support Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Market Researcher</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Marketing and Data Analyst
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Data Entry Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Graphic Designer</p>
                                                  </li>
                                                  <li>
                                                    <p>3D Designer/Artist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Animation
                                                      Specialist/Animator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Social Media Marketer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>

                                  </Col>
                                  <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/FinancialandInsuranceServices"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="12">
                                            Financial and Insurance Services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="12">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Accountant</p>
                                                  </li>
                                                  <li>
                                                    <p>Bookkeeper</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Accounts Receivable
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Accounts Payable
                                                      Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Accounts Supervisor</p>
                                                  </li>
                                                  <li>
                                                    <p>UI/UI Designer</p>
                                                  </li>
                                                  <li>
                                                    <p>Payroll Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Financial Analyst</p>
                                                  </li>
                                                  <li>
                                                    <p>Financial Advisor</p>
                                                  </li>
                                                  <li>
                                                    <p>Insurance Broker</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>Underwriter</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Loans/Mortgage Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Collections Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Mortgage Processor</p>
                                                  </li>
                                                  <li>
                                                    <p>Payroll Processor</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Debt Collection Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Administrative Support
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Data Entry Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Mortgage Broker</p>
                                                  </li>
                                                  <li>
                                                    <p>Claims Processor</p>
                                                  </li>
                                                  <li>
                                                    <p>Loans Processing</p>
                                                  </li>
                                                  <li>
                                                    <p>Auditor</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Real Estate Accountant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>SMSF Accountant</p>
                                                  </li>
                                                  <li>
                                                    <p>Billing Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>Finance Officer</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>
                                  </Col>
                                  <Col md={12}>
                                    <Link
                                      onClick={linkHandler}
                                      to="/roles/HealthcareServices"
                                    >
                                      <Card>
                                        <Card.Header>
                                          <CustomToggle eventKey="13">
                                            Healthcare Services{" "}
                                            <span>&#129168;</span>
                                          </CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="13">
                                          <Card.Body>
                                            <Row>
                                              <Col md={6}>
                                                <ul className="menudata inline">
                                                  <li>
                                                    <p>Medical Coder</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Medical Transcriptionist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Administrative Assistant
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Clinical Data Coordinator
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Telemedicine Physician
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Clinical Research
                                                      Coordinator
                                                    </p>
                                                  </li>
                                                </ul>
                                              </Col>
                                              <Col md={6}>
                                                <ul className="menudata">
                                                  <li>
                                                    <p>QA Specialist</p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Medical Billing Specialist
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Medical Science Liaison
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>
                                                      Clinical Project Manager
                                                    </p>
                                                  </li>
                                                  <li>
                                                    <p>Case Manager</p>
                                                  </li>
                                                </ul>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Link>
                                  </Col>
                                </Col> */}
              {/* </Row>
                            </Accordion>
                          </Tab> */}
              {/* </Tabs>
                      </Col>
                    </Row>
                  </div>
                </ul>
              </li> */}

              {/* <li className="nav-item dropdown">
                <div>
                  <Link to="/blogs" className="nav-link -toggle">
                    BLog
                  </Link>
                </div>
              </li> */}
            </ul>

            {/* <span className="d-none d-md-block">
              {" "}
              <Link to="/hiring" className={`${styles.WeHring} active`}>
                <div className="hiring">
                  <button>We're Hiring</button>
                </div>
              </Link>
            </span> */}
            {/* <span className="d-none d-md-block">
             
              <Link to="/contact" className={`${styles.ContactBtn} nav-link`}>
                <button>Contact Us</button>
              </Link>
            </span> */}
          </div>
        </Container>
      </nav>
    </Container>
  );
};

export default Header;

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
  }
];
