import React from "react";
import Slider from "react-slick";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import "../styles/accreditation.css";
import mainOne from "../assets/accreditation/main-one.png";
import mainTwo from "../assets/accreditation/main-two.png";
import mainThree from "../assets/accreditation/main-three.png";
import mainFour from "../assets/accreditation/main-four.png";

const Accreditation = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <div className="accreditation-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="accreditation-heading">
            <h1>Accreditations & Awards</h1>
          </div>
          <div className="accreditation-btn d-flex justify-content-center align-items-center g-5">
            <button className="accreditation-left-btn d-flex align-items-center justify-content-center">
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className="accreditation-right-btn d-flex align-items-center justify-content-center">
              <img src={rightArrow} alt="left-arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="accreditation-card-container">
        <div className="Popular-slider-container">
          <Slider {...settings} className="custom-slider">
            <div className="accreditation-card d-flex flex-column gap-2">
              <div className="accreditation-img acc-img-one d-flex align-items-center justify-content-center">
                <img
                  src={mainOne}
                  className="card-img-top "
                  alt="..."
                  style={{ width: "148px", height: "200px" }}
                />
              </div>
              <div className="accreditation-body ">
                <div className="accreditation-body-text d-flex flex-column gap-2">
                  <div className="accreditation-body-heading">
                    <h5 className="card-title">Award Name</h5>
                  </div>
                  <div className="accreditation-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accreditation-card d-flex flex-column gap-2">
              <div className="accreditation-img acc-img-two d-flex align-items-center justify-content-center">
                <img
                  src={mainTwo}
                  className="card-img-top "
                  alt="..."
                  style={{ width: "148px", height: "200px" }}
                />
              </div>
              <div className="accreditation-body ">
                <div className="accreditation-body-text d-flex flex-column gap-2">
                  <div className="accreditation-body-heading">
                    <h5 className="card-title">Award Name</h5>
                  </div>
                  <div className="accreditation-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accreditation-card d-flex flex-column gap-2">
              <div className="accreditation-img acc-img-three d-flex align-items-center justify-content-center">
                <img
                  src={mainThree}
                  className="card-img-top "
                  alt="..."
                  style={{ width: "148px", height: "200px" }}
                />
              </div>
              <div className="accreditation-body ">
                <div className="accreditation-body-text d-flex flex-column gap-2">
                  <div className="accreditation-body-heading">
                    <h5 className="card-title">Award Name</h5>
                  </div>
                  <div className="accreditation-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accreditation-card d-flex flex-column gap-2">
              <div className="accreditation-img acc-img-four d-flex align-items-center justify-content-center">
                <img
                  src={mainFour}
                  className="card-img-top "
                  alt="..."
                  style={{ width: "148px", height: "200px" }}
                />
              </div>
              <div className="accreditation-body ">
                <div className="accreditation-body-text d-flex flex-column gap-2">
                  <div className="accreditation-body-heading">
                    <h5 className="card-title">Award Name</h5>
                  </div>
                  <div className="accreditation-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accreditation-card d-flex flex-column gap-2">
              <div className="accreditation-img acc-img-five d-flex align-items-center justify-content-center">
                <img
                  src={mainOne}
                  className="card-img-top "
                  alt="..."
                  style={{ width: "148px", height: "200px" }}
                />
              </div>
              <div className="accreditation-body ">
                <div className="accreditation-body-text d-flex flex-column gap-2">
                  <div className="accreditation-body-heading">
                    <h5 className="card-title">Award Name</h5>
                  </div>
                  <div className="accreditation-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
