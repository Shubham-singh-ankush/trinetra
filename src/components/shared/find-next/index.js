import React from "react";
import styles from "./index.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <div className={styles.findmain}>
        <Container>
          <div className={styles.findsectionbg}>
            <row>
              <div className={styles.findtextarea}>
                <h6>
                  Find your Next Star Hire with <br />
                  Speed and Accuracy
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit the
                  world of exciting
                  <br /> and rewarding web consulting and digital marketing
                  solutions.
                </p>

                <a href="/contact#contact1">
                  <button className={styles.findbtn}>Inquire Now</button>
                </a>
              </div>
            </row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default index;
