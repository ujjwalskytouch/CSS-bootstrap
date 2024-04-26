import React from "react";
import "../styles/whyChooseUs.css";
import one from "../assets/whyChooseUs/one.png";
import two from "../assets/whyChooseUs/two.png";
import three from "../assets/whyChooseUs/three.png";
import four from "../assets/whyChooseUs/four.png";
import five from "../assets/whyChooseUs/five.png";
import six from "../assets/whyChooseUs/six.png";
import seven from "../assets/whyChooseUs/seven.png";
import eight from "../assets/whyChooseUs/eight.png";
import nine from "../assets/whyChooseUs/nine.png";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs-container d-none d-sm-block">
      <div className="container ">
        <div className=" d-flex justify-content-start align-items-center">
          <div className="whyChooseUs-heading">
            <h1>Why Choose Us</h1>
          </div>
        </div>
        <div className="whyChooseUs-card-container d-flex justify-content-between">
          <div className="whyChooseUs-card">
            <div className="whyChooseUs-card-logo text-center">
              <img src={one} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
          <div className="whyChooseUs-card">
            <div className="whyChooseUs-card-logo text-center">
              <img src={two} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
          <div className="whyChooseUs-card">
            <div className="whyChooseUs-card-logo text-center">
              <img src={three} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
          <div className="whyChooseUs-card">
            <div className="whyChooseUs-card-logo text-center">
              <img src={four} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
          <div className="whyChooseUs-card  whyChooseUs-card-five ">
            <div className="whyChooseUs-card-logo text-center">
              <img src={five} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
        </div>
        <div className="whyChooseUs-card-container-two d-flex justify-content-center whyChooseUs-newCard">
          <div className="whyChooseUs-card ">
            <div className="whyChooseUs-card-logo text-center">
              <img src={six} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
          <div className="whyChooseUs-card ">
            <div className="whyChooseUs-card-logo text-center">
              <img src={seven} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
          <div className="whyChooseUs-card ">
            <div className="whyChooseUs-card-logo text-center">
              <img src={eight} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
          <div className="whyChooseUs-card ">
            <div className="whyChooseUs-card-logo text-center">
              <img src={nine} alt="" />
            </div>
            <div className="whyChooseUs-card-heading text-center">
              <h5>Team of Experienced Doctors & Staffs</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
