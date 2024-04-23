import React from "react";
import Slider from "react-slick";
import leftArrow from "../assets/left-arrow.png";
import mriScan from "../assets/modality/MRI Scan.png";
import nuclearScan from "../assets/modality/Nuclear Scan.png";
import pathology from "../assets/modality/Pathology.png";
import ultrasound from "../assets/modality/Ultrasound.png";
import rightArrow from "../assets/right-arrow.png";
import "../styles/modality.css";

const Modality = () => {
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
    <div className="test-by-modality-container">
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center">
          <div className="test-by-modality-heading">
            <h1>Test by Modality / Department</h1>
          </div>
          <div className="test-by-modality-btn d-flex justify-content-center align-items-center g-5">
            <button className="test-by-modality-left-btn d-flex align-items-center justify-content-center">
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className="test-by-modality-right-btn d-flex align-items-center justify-content-center">
              <img src={rightArrow} alt="left-arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="test-by-modality-card-container">
        <div className="slider-container">
          <Slider {...testByRiskSettings} className="custom-slider">
            <div className="test-by-modality-card">
              <div className="test-by-modality-card-heading">
                <p className="text-center">Heart</p>
              </div>
              <div className="test-by-modality-card-body">
                <img
                  src={pathology}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-modality-card">
              <div className="test-by-modality-card-heading">
                <p className="text-center">Bone & Joint</p>
              </div>
              <div className="test-by-modality-card-body">
                <img
                  src={mriScan}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-modality-card">
              <div className="test-by-modality-card-heading">
                <p className="text-center">Kidney</p>
              </div>
              <div className="test-by-modality-card-body">
                <img
                  src={ultrasound}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-modality-card">
              <div className="test-by-modality-card-heading">
                <p className="text-center">Thyroid</p>
              </div>
              <div className="test-by-modality-card-body">
                <img
                  src={nuclearScan}
                  alt=""
                  style={{ width: "298px", height: "170px" }}
                />
              </div>
            </div>
            <div className="test-by-modality-card">
              <div className="test-by-modality-card-heading">
                <p className="text-center">Heart</p>
              </div>
              <div className="test-by-modality-card-body">
                <img
                  src={pathology}
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

export default Modality;
