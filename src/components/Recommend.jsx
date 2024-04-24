import React from "react";
import laptop from "../assets/recommend/laptop.png";
import screen from "../assets/recommend/screen.png";
import yellow from "../assets/recommend/yellow.png";
import "../styles/recommend.css";

const Recommend = () => {
  return (
    <div className="recommend-container">
      <div className="container">
        <div className="d-flex justify-content-start align-items-center">
          <div className="recommend-heading">
            <h1>Why our Patient recommend us?</h1>
          </div>
        </div>
        <div className="recommend-card d-flex position-relative">
          <div className="recommend-card-text d-flex align-items-center justify-content-start">
            <p className="">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commod Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con Ut enim ad minim veniam...
              <span className="recommend-card-text-support">Read More</span>
            </p>
          </div>
          <div className="recommend-card-color laptop">
            <img src={yellow} alt="" />
          </div>
          <img src={laptop} alt="" className="position-absolute laptop" />
          <img src={screen} alt="" className="position-absolute screen" />
        </div>
      </div>
    </div>
  );
};

export default Recommend;
