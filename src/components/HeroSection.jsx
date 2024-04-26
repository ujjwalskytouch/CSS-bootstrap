import React from "react";
import "../styles/heroSection.css";
import callingIcon from "../assets/calling-icon.png";
import heroImg from "../assets/hero-image.png";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section  d-none d-sm-block">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="hero-first-box col d-flex flex-column justify-content-center align-item-start gap-3">
                  <h1>Advanced Doctor Team</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="hero-nested-box d-flex align-items-center gap-4">
                    <img src={callingIcon} alt="calling-icon" />
                    <h3>Talk to a Doctor</h3>
                  </div>
                </div>
                <div className="col hero-image">
                  <img src={heroImg} alt="hero-img" />
                </div>
              </div>
            </div>
            <div className="hero-sec-root-box col-4">
              <div className="hero-sec-box">
                <div className="d-flex flex-column gap-3">
                  <div className="hero-section-form-heading">
                    <h1>My Reports</h1>
                  </div>
                  <div className="hero-section-form-field d-flex flex-column gap-2 ">
                    <label>User Name</label>
                    <input
                      type="text"
                      placeholder="Jerome B."
                      autoComplete="off"
                    />
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="****"
                      autoComplete="off"
                    />
                  </div>
                  <div className="hero-section-btn">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section-right-btn">
          <button className="d-flex align-items-center justify-content-center">
            <img src={leftArrow} alt="left-arrow" />
          </button>
        </div>
        <div className="hero-section-left-btn">
          <button className="d-flex align-items-center justify-content-center">
            <img src={rightArrow} alt="left-arrow" />
          </button>
        </div>
      </div>
      <div className="hero-des  d-none d-sm-block">
        <marquee>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore.
        </marquee>
      </div>
    </>
  );
};

export default HeroSection;
