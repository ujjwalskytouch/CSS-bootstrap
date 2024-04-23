import React from "react";
import "../styles/healthCondition.css";
import allergy from "../assets/condition/Allergy.png";
import anemia from "../assets/condition/Anemia.png";
import arthritis from "../assets/condition/Arthritis.png";
import cancer from "../assets/condition/Cancer.png";

import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import Slider from "react-slick";

const HealthCondition = () => {
  const testByRiskSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <div className="test-by-condition-container">
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center">
          <div className="test-by-condition-heading">
            <h1>Test by Health Condition, Habit or Disease</h1>
          </div>
          <div className="test-by-condition-btn d-flex justify-content-center align-items-center g-5">
            <button className="test-by-condition-left-btn d-flex align-items-center justify-content-center">
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className="test-by-condition-right-btn d-flex align-items-center justify-content-center">
              <img src={rightArrow} alt="left-arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="test-by-condition-card-container">
        <div className="slider-container">
          <Slider {...testByRiskSettings} className="custom-slider">
            <div className="test-by-condition-card">
              <div className="test-by-condition-card-heading">
                <p className="text-center">Heart</p>
              </div>
              <div className="test-by-condition-card-body">
                <img
                  src={arthritis}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-condition-card">
              <div className="test-by-condition-card-heading">
                <p className="text-center">Bone & Joint</p>
              </div>
              <div className="test-by-condition-card-body">
                <img
                  src={allergy}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-condition-card">
              <div className="test-by-condition-card-heading">
                <p className="text-center">Kidney</p>
              </div>
              <div className="test-by-condition-card-body">
                <img
                  src={anemia}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-condition-card">
              <div className="test-by-condition-card-heading">
                <p className="text-center">Thyroid</p>
              </div>
              <div className="test-by-condition-card-body">
                <img
                  src={cancer}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-condition-card">
              <div className="test-by-condition-card-heading">
                <p className="text-center">Heart</p>
              </div>
              <div className="test-by-condition-card-body">
                <img
                  src={arthritis}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HealthCondition;
