import React from "react";
import styles from "./index.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const SecurityCompliance = () => {
  return (
    <>
      {/* banner section start */}
      <div className={`${styles.bannerbg}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles.headingbg}`}>
                <h1>Security and Trust</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}
      {/* all security  */}
      <Container className={styles.security}>
        <Row className="mt-5">
          <Col lg={4} md={6} className={styles.secBox}>
            <div className={styles.securityBox}>
              <h2>Privacy Policy</h2>
              <p>
                We protect the confidentiality of information and the privacy of
                its clients, candidates, and other users of the website.
              </p>
              <Link to="/privacy-policy">Read More</Link>
            </div>
          </Col>
          <Col lg={4} md={6} className={styles.secBox}>
            <div className={styles.securityBox}>
              <h2>27001</h2>
              <p>
                We are ISO 27001 Compliant Company to ensure your data is stored
                securely and following all secure methods.
              </p>
              <Link to="/iso-27001">Read More</Link>
            </div>
          </Col>
          <Col lg={4} md={6} className={styles.secBox}>
            <div className={styles.securityBox}>
              <h2>CCPA Do not share</h2>
              <p>
                We do not sell your personal information or share your
                information under the California Consumer Privacy Act of 2018
                (“CCPA”)
              </p>
              <Link to="/ccpa-compliant">Read More</Link>
            </div>
          </Col>
          <Col lg={4} md={6} className={styles.secBox}>
            <div className={styles.securityBox}>
              <h2>GDPR</h2>
              <p>
                We are GDPR Compliant to ensure your data is stored securely and
                following all secure methods.
              </p>
              <Link to="/gdpr-compliant">Read More</Link>
            </div>
          </Col>
          <Col lg={4} md={6} className={styles.secBox}>
            <div className={styles.securityBox}>
              <h2>AICPA's SOC</h2>
              <p>
                Every year Synchronized Business Solutions undergo SOC 2 Type 2
                report to ensure TSC (Trust Service Criteria)
              </p>
              <Link to="/soc-compliant">Read More</Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/* all security  */}
    </>
  );
};

export default SecurityCompliance;
