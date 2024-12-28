import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row } from "react-bootstrap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
// import "./index.css"

import { Autoplay, EffectCoverflow, Navigation } from "swiper";

const ServiceCatelogSlider = () => {
  return (
    <div>
      <Container style={{ maxWidth: "1460px" }} className={styles.desktop}>
        <Row>
          <div className={styles.outsecsec}>
            <h5>Outsourced Service Categories</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit the world
              of exciting and rewarding <br></br>web consulting and digital
              marketing solutions.
            </p>
          </div>
        </Row>
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 70,
              depth: 200,
              modifier: 2
            }}
            initialSlide={7}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay]}
            className="service_catelog_swiper"
          >
            <div className={styles.sildercs}>
              {ServiceCatelogData.map((data, i) => {
                return (
                  <SwiperSlide key={i} style={{ background: data }}>
                    <div className={styles.sliderCard}>
                      <img src="/images/home/stafficon.png" alt="" />
                      <h3 className="mt-3">Information Technology</h3>
                      <ul>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                      </ul>
                      <Link to="/roles">
                        <span>view all roles &gt;&gt;</span>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </Container>
      {/* mobile deegine */}
      <Container className={styles.mobile}>
        <Row>
          <div className={styles.outsecsec}>
            <h5>Outsourced Service Categories</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit the world
              of exciting and rewarding <br></br>web consulting and digital
              marketing solutions.
            </p>
          </div>
        </Row>
        <div>
          <Swiper
            // grabCursor={true}
            // centeredSlides={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            speed={500}
            navigation={true}
            autoplay={{
              delay: 2500
              // disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation]}
            className="service_catelog_swiper_mobile"
          >
            <div className={styles.sildercs}>
              {ServiceCatelogData.map((data, i) => {
                return (
                  <SwiperSlide key={i} style={{ background: data }}>
                    <div className={styles.sliderCard_mobile}>
                      <img src="/images/home/stafficon.png" alt="" />
                      <h3 className="mt-3">Information Technology</h3>
                      <ul>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                      </ul>

                      <Link to="/roles">
                        <span>view all roles &gt;&gt;</span>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ServiceCatelogSlider;

const ServiceCatelogData = [
  "#F59435",
  "#5F3376",
  "#D53762",
  "#F59435",
  "#5F3376",
  "#D53762",
  "#F59435",
  "#5F3376",
  "#D53762",
  "#F59435",
  "#5F3376",
  "#D53762",
  "#F59435",
  "#5F3376"
  // "#5F3376"
];
