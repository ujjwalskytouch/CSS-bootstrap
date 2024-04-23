import React from "react";
import "../styles/popular.css";

import fourHalfStart from "../assets/health/Four Half Star.png";
import popularExtended from "../assets/popular/Popular Extended.png";
import popularAdvanced from "../assets/popular/Popular advanced.png";
import popularAffordable from "../assets/popular/Popular affordable.png";
import popularWellness from "../assets/popular/Popular wellness.png";
import Slider from "react-slick";

const Popular = () => {
  const healthSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <div className="Popular-container">
      <div className="container">
        <div className="Popular-menu d-flex align-items-center justify-content-start ">
          <div className="Popular-menu-title">
            <h1>Popular Tests</h1>
          </div>
          <div className="Popular-menu-list">
            <ul className="d-flex my-auto">
              <li>
                <a href="/">All</a>
              </li>
              <li>
                <a href="/">Male</a>
              </li>
              <li>
                <a href="/">Female</a>
              </li>
              <li>
                <a href="/">Couple</a>
              </li>
              <li>
                <a href="/">Senior Citizen</a>
              </li>
            </ul>
          </div>
          <div className="Popular-menu-list-btn">
            <button>View more</button>
          </div>
        </div>
      </div>
      <div className="Popular-card-container">
        <div className="Popular-slider-container">
          <Slider {...healthSetting} className="custom-slider">
            <div className="Popular-card">
              <img
                src={popularAdvanced}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className=" Popular-card-body">
                <div className="Popular-card-body-text">
                  <div className="Popular-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="Popular-card-star d-flex align-items-center">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="Popular-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="Popular-card-price d-flex align-items-center justify-content-start">
                    <p className="Popular-card-price-one"> $120</p>
                    <p className="Popular-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="Popular-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="Popular-card-body-button">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="Popular-card">
              <img
                src={popularAffordable}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className=" Popular-card-body">
                <div className="Popular-card-body-text">
                  <div className="Popular-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="Popular-card-star d-flex align-items-center">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="Popular-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="Popular-card-price d-flex align-items-center justify-content-start">
                    <p className="Popular-card-price-one"> $120</p>
                    <p className="Popular-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="Popular-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="Popular-card-body-button">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="Popular-card">
              <img
                src={popularExtended}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className=" Popular-card-body">
                <div className="Popular-card-body-text">
                  <div className="Popular-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="Popular-card-star d-flex align-items-center">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="Popular-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="Popular-card-price d-flex align-items-center justify-content-start">
                    <p className="Popular-card-price-one"> $120</p>
                    <p className="Popular-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="Popular-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="Popular-card-body-button">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="Popular-card">
              <img
                src={popularWellness}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className=" Popular-card-body">
                <div className="Popular-card-body-text">
                  <div className="Popular-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="Popular-card-star d-flex align-items-center">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="Popular-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="Popular-card-price d-flex align-items-center justify-content-start">
                    <p className="Popular-card-price-one"> $120</p>
                    <p className="Popular-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="Popular-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="Popular-card-body-button">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="Popular-card">
              <img
                src={popularAdvanced}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className=" Popular-card-body">
                <div className="Popular-card-body-text">
                  <div className="Popular-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="Popular-card-star d-flex align-items-center">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="Popular-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="Popular-card-price d-flex align-items-center justify-content-start">
                    <p className="Popular-card-price-one"> $120</p>
                    <p className="Popular-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="Popular-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="Popular-card-body-button">
                  <button>Add To Cart</button>
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

export default Popular;
