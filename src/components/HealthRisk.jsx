import React from "react";
import "../styles/healthRisk.css";
import Slider from "react-slick";

import riskHeart from "../assets/risk/axis-heart.png";
import riskLeg from "../assets/risk/axis-leg.png";
import riskKidney from "../assets/risk/axis-scientific.png";
import riskThyroid from "../assets/risk/axis-thyroid.png";

import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const HealthRisk = () => {
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
    <div className="test-by-risk-container">
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center">
          <div className="test-by-risk-heading">
            <h1>Test by Health Risks</h1>
          </div>
          <div className="test-by-risk-btn d-flex justify-content-center align-items-center g-5">
            <button className="test-by-risk-left-btn d-flex align-items-center justify-content-center">
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className="test-by-risk-right-btn d-flex align-items-center justify-content-center">
              <img src={rightArrow} alt="left-arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="test-by-risk-card-container">
        <div className="slider-container">
          <Slider {...testByRiskSettings} className="custom-slider">
            <div className="test-by-risk-card">
              <div className="test-by-risk-card-heading">
                <p className="text-center">Heart</p>
              </div>
              <div className="test-by-risk-card-body">
                <img
                  src={riskHeart}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-risk-card">
              <div className="test-by-risk-card-heading">
                <p className="text-center">Bone & Joint</p>
              </div>
              <div className="test-by-risk-card-body">
                <img
                  src={riskLeg}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-risk-card">
              <div className="test-by-risk-card-heading">
                <p className="text-center">Kidney</p>
              </div>
              <div className="test-by-risk-card-body">
                <img
                  src={riskKidney}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-risk-card">
              <div className="test-by-risk-card-heading">
                <p className="text-center">Thyroid</p>
              </div>
              <div className="test-by-risk-card-body">
                <img
                  src={riskThyroid}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-risk-card">
              <div className="test-by-risk-card-heading">
                <p className="text-center">Heart</p>
              </div>
              <div className="test-by-risk-card-body">
                <img
                  src={riskHeart}
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

export default HealthRisk;
