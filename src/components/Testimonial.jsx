import React from "react";
import "../styles/testimonial.css";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import mainImg from "../assets/testimonial/main.png";
import quote from "../assets/testimonial/Icon-left-quote.png";
import fiveStar from "../assets/testimonial/five-star.png";
import ellipseOne from "../assets/testimonial/Ellipse 1.png";
import ellipseTwo from "../assets/testimonial/Ellipse 2.png";
import ellipseThree from "../assets/testimonial/Ellipse 3.png";
import ellipseFour from "../assets/testimonial/Ellipse 4.png";
import ellipseFive from "../assets/testimonial/Ellipse 5.png";

const Testimonial = () => {
  return (
    <div className="testimonial-container d-none d-sm-block">
      <div className="container">
        <div className="row d-flex testimonial-row">
          <div className="d-flex justify-content-between align-items-center">
            <div className="testimonial-heading">
              <h1>Testimonial</h1>
            </div>
            <div className="testimonial-btn d-flex justify-content-center align-items-center g-5">
              <button className="testimonial-left-btn d-flex align-items-center justify-content-center">
                <img src={leftArrow} alt="left-arrow" />
              </button>
              <button className="testimonial-right-btn d-flex align-items-center justify-content-center">
                <img src={rightArrow} alt="left-arrow" />
              </button>
            </div>
          </div>
          <div className="testimonial-content d-flex">
            <div className="testimonial-content-image">
              <img src={mainImg} alt="" />
            </div>
            <div className="testimonial-left-side-info d-flex flex-column ">
              <div>
                <img src={quote} alt="" />
              </div>
              <div className="testimonial-main-heading">
                Nice diagnostic centre in Delhi. I am feeling good because I got
                best quality radiology services here. Nice diagnostic centre in
                Delhi. I am feeling good because I got best quality radiology
                services here. Nice diagnostic centre in Delhi. I am feeling
                good because I got best quality radiology services here. Nice
                diagnostic centre in Delhi.
              </div>
              <div className="testimonial-star ">
                <img src={fiveStar} alt="" />
                <span>(10 Reviews)</span>
              </div>
              <div className="testimonial-users-img d-flex justify-content-start align-items-center ">
                <img src={ellipseOne} alt="" />
                <img src={ellipseFive} alt="" />
                <img src={ellipseTwo} alt="" />
                <img src={ellipseThree} alt="" />
                <img src={ellipseFour} alt="" />
              </div>
              <div className="testimonial-text-one">Mouni Rathod</div>
              <div className="testimonial-text-two">Ui Ux Designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
