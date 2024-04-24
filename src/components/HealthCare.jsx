import React from "react";
import Slider from "react-slick";
import one from "../assets/healthCare/one.png";
import three from "../assets/healthCare/three.png";
import two from "../assets/healthCare/two.png";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import "../styles/healthCare.css";

const HealthCare = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <div className="healthCare-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="healthCare-heading">
            <h1>Healthcare Videos</h1>
          </div>
          <div className="healthCare-btn d-flex justify-content-center align-items-center g-5">
            <button className="healthCare-left-btn d-flex align-items-center justify-content-center">
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className="healthCare-right-btn d-flex align-items-center justify-content-center">
              <img src={rightArrow} alt="left-arrow" />
            </button>
          </div>
        </div>
      </div>

      <div className="healthCare-card-container">
        <div className="slider-container">
          <Slider {...settings} className="custom-slider">
            <div className="healthCare-card">
              <div className="healthCare-card-heading">
                <p className="text-center">World Thyroid Day 2023</p>
              </div>
              <div className="healthCare-card-body">
                <img
                  src={one}
                  alt=""
                  style={{ width: "384px", height: "240px" }}
                />
              </div>
            </div>
            <div className="healthCare-card">
              <div className="healthCare-card-heading">
                <p className="text-center">Preventing Skin Cancer</p>
              </div>
              <div className="healthCare-card-body">
                <img
                  src={two}
                  alt=""
                  style={{ width: "384px", height: "240px" }}
                />
              </div>
            </div>
            <div className="healthCare-card">
              <div className="healthCare-card-heading">
                <p className="text-center">World Liver Day 2023</p>
              </div>
              <div className="healthCare-card-body">
                <img
                  src={three}
                  alt=""
                  style={{ width: "384px", height: "240px" }}
                />
              </div>
            </div>
            <div className="healthCare-card">
              <div className="healthCare-card-heading">
                <p className="text-center">World Liver Day 2023</p>
              </div>
              <div className="healthCare-card-body">
                <img
                  src={one}
                  alt=""
                  style={{ width: "384px", height: "240px" }}
                />
              </div>
            </div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
