import React from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import "../styles/healthCare.css";
import Slider from "react-slick";

const HealthCare = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

      <div className="test-by-modality-card-container">
        <div className="slider-container">
          <Slider {...settings} className="custom-slider">
            <div className="test-by-modality-card">
              <div className="test-by-modality-card-heading">
                <p className="text-center">Heart</p>
              </div>
              <div className="test-by-modality-card-body">
                <img
                  src=""
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
