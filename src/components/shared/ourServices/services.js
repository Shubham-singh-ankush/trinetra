import React, { useEffect } from "react";
import "./services.css";
import { Col, Row, Container } from "react-bootstrap";

const Service = () => {
  const hoverEnterhandler = (e2) => {
    // console.log("Entering hover", e2);
    const e = e2.target.closest(".servbox");

    e.style.transform = "translate(-0.5rem,-1rem) rotate(3deg)";

    const all = document.querySelectorAll(".servbox");
    const nodeArray = Array.from(all);
    nodeArray.forEach((e1) => {
      if (Number(e1.id) > Number(e?.id)) {
        e1.style.transform = "translate(30%) ";
        e1.style.transition = "0.3s ease";
      }
    });
  };

  const hoverLeavehandler = (e) => {
    e.stopPropagation();
    const all = document.querySelectorAll(".servbox");
    const nodeArray = Array.from(all);
    nodeArray.forEach((e) => {
      e.style.transform = "translate(0%)";
      e.style.transition = "0.4s ease";
    });
  };

  let SC;

  console.log("SC=========================", SC);

  if (SC) {
    SC.style.margin = "200px";
  }

  useEffect(() => {
    SC = document.querySelector("#sc");
    console.log("SC=========================", SC);
    // SC.style.paddingLeft = "15%";
  }, []);

  return (
    <div className={"service_section"} id="sc">
      <Container fluid>
        <Row>
          {/* <Col md={12}>
            <div className={"services_info"}>
              <img src="./images/home/services.png" alt="" />
              <span>Ourrrrr services</span>
              <h4>Syncd Global Solutions Service Categories</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Are
                <br></br>
                you worried about less enquiries, less customers
              </p>
            </div>
          </Col> */}
          <div>
            <div className={"main_box"}>
              <Col>
                <div
                  className={"servbox"}
                  id="121"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Hire talent in your Industries.png"
                    alt=""
                  />
                  <h3>
                    Hire talent in
                    <br /> your industry
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="122"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Administration and Support.png"
                    alt=""
                  />
                  <h3>
                    Administration
                    <br /> & Support
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="123"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Hospitality and Tourism.png"
                    alt=""
                  />
                  <h3>
                    Hospitality
                    <br /> & Tourism
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="124"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Retail Trade and E commerce.png"
                    alt=""
                  />
                  <h3>
                    Real Estate
                    <br /> Services
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="125"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Education & Training.png"
                    alt=""
                  />
                  <h3>
                    Education
                    <br /> & Training
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="126"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Information and Technology.png"
                    alt=""
                  />
                  <h3>
                    Information
                    <br /> Technology
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="127"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Retail Trade and E commerce.png"
                    alt=""
                  />
                  <h3>
                    Retail Trade
                    <br /> & E-Commerce
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="128"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Engineering & Construction.png"
                    alt=""
                  />
                  <h3>
                    Engineering
                    <br /> & Construction
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="129"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Professional Service.png"
                    alt=""
                  />
                  <h3>
                    Professional
                    <br /> Services
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="130"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Information Media & Telecommunications.png"
                    alt=""
                  />
                  <h3>
                    Information Media
                    <br /> & Telecommunications
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="131"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Transport Postal & Warehousing.png"
                    alt=""
                  />
                  <h3>
                    Transport, Postal
                    <br /> & Warehousing
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="132"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img
                    src="./images/services/Financial & Insurance Services.png"
                    alt=""
                  />
                  <h3>
                    Financial &<br /> Insurance Services
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="133"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img src="./images/services/healthcare.png" alt="" />
                  <h3>
                    Health
                    <br /> Care
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="134"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img src="./images/services/Legal Sevices.png" alt="" />
                  <h3>
                    Legal <br />
                    services
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
              <Col>
                <div
                  className={"servbox"}
                  id="135"
                  onMouseEnter={(e) => hoverEnterhandler(e)}
                  onMouseLeave={(e) => hoverLeavehandler(e)}
                >
                  <img src="./images/services/Wholesale Trade.png" alt="" />
                  <h3>
                    Wholesale
                    <br /> Trade
                  </h3>

                  <p>&#62;</p>
                </div>
              </Col>
            </div>
          </div>
          {/* <Col md={7}>
            <div className={"outs"}>
              <h4>
                Want to know how outsourcing <br></br>can help your business?
              </h4>
              <p>
                Are you worried about less enquiries, less customers, loss of
                <br></br>
                business opportunities, suspended Adwords Account, very high
                cost per click,<br></br> less return on investment.{" "}
              </p>
            </div>
          </Col> */}
        </Row>
      </Container>
      {/* <OurServices/> */}
    </div>
  );
};

export default Service;
