import React from "react";
import "../styles/presenting.css";
import group from "../assets/presenting/Group.png";
import playStore from "../assets/presenting/play-store.png";
import appStore from "../assets/presenting/app-store.png";

const Presenting = () => {
  return (
    <div className="presenting-container">
      <div className="container-xl d-flex justify-content-center">
        <div className="presenting-content d-flex ">
          <div className="presenting-content-image">
            <img src={group} alt="" />
          </div>
          <div className="presenting-content-info d-flex flex-column justify-content-center align-items-start ">
            <div className="presenting-content-heading d-flex flex-column ">
              <div className="presenting-content-title">
                Presenting the All New City X-
                <br /> Ray Mobile App
              </div>
              <div className="presenting-content-sub-title">
                Amet minim mollit non deserunt <br />
                ullamco est sit aliqua dolor do amet <br /> sint.
              </div>
            </div>
            <div>
              <img src={playStore} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presenting;
