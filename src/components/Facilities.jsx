import React from "react";
import "../styles/facilities.css";
import facilitiesOne from "../assets/facilities/facilities-one.png";
import facilitiesThree from "../assets/facilities/facilities-three.png";
import facilitiesTwo from "../assets/facilities/facilities-two.png";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import Slider from "react-slick";

const Facilities = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="facilities-container d-none d-sm-block">
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center">
          <div className="facilities-heading">
            <h1>Facilities</h1>
          </div>
          <div className="facilities-btn d-flex justify-content-center align-items-center g-5">
            <button className="facilities-left-btn d-flex align-items-center justify-content-center">
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className="facilities-right-btn d-flex align-items-center justify-content-center">
              <img src={rightArrow} alt="left-arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="facilities-card-container w-100 overflow-hidden ">
        <div className="slider-container">
          <Slider {...settings} className="custom-slider">
            <div className="card-one mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={facilitiesOne}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="facilities-card-text col-8 d-flex flex-column justify-content-center">
                  <h5 className="">Pathology</h5>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="card-one mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={facilitiesTwo}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="facilities-card-text col-md-8 d-flex flex-column justify-content-center">
                  <div className="">
                    <h5 className="">MRI Scan</h5>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-one mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={facilitiesThree}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="facilities-card-text col-md-8 d-flex flex-column justify-content-center">
                  <div className="">
                    <h5 className="">CT Scan</h5>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
