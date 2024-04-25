import React from "react";
import "../styles/health.css";
import cityExtended from "../assets/health/City Extended.png";
import fourHalfStart from "../assets/health/Four Half Star.png";
import cityAdvanced from "../assets/health/city advanced.png";
import cityAffordable from "../assets/health/city affordable.png";
import cityWellness from "../assets/health/city wellness.png";
import Slider from "react-slick";

const Health = () => {
  const healthSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="health-container">
      <div className="container">
        <div className="health-menu d-flex align-items-center justify-content-between justify-content-sm-start ">
          <div className="health-menu-title">
            <h1>Popular Health Packages</h1>
          </div>
          <div className="health-menu-list d-none d-sm-block">
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
          <div className="health-menu-list-btn">
            <button>View more</button>
          </div>
        </div>
      </div>
      <div className="health-card-container">
        <div className="health-slider-container">
          <Slider {...healthSetting} className="custom-slider">
            <div className="health-card">
              <img
                src={cityAdvanced}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "170px" }}
              />
              <div className=" health-card-body">
                <div className="health-card-body-text">
                  <div className="health-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="health-card-star d-flex align-items-center d-none d-sm-inline-flex">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="health-card-body-sub-heading ">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="health-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
                    <p className="health-card-price-one"> $120</p>
                    <p className="health-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="health-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="health-card-body-button  d-none d-sm-inline-flex">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="health-card">
              <img
                src={cityAffordable}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "170px" }}
              />
              <div className=" health-card-body">
                <div className="health-card-body-text">
                  <div className="health-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="health-card-star d-flex align-items-center  d-none d-sm-inline-flex">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="health-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="health-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
                    <p className="health-card-price-one"> $120</p>
                    <p className="health-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="health-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="health-card-body-button  d-none d-sm-inline-flex">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="health-card">
              <img
                src={cityExtended}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "170px" }}
              />
              <div className=" health-card-body">
                <div className="health-card-body-text">
                  <div className="health-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="health-card-star d-flex align-items-center  d-none d-sm-inline-flex">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="health-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="health-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
                    <p className="health-card-price-one"> $120</p>
                    <p className="health-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="health-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="health-card-body-button  d-none d-sm-inline-flex">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="health-card">
              <img
                src={cityWellness}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "170px" }}
              />
              <div className=" health-card-body">
                <div className="health-card-body-text">
                  <div className="health-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="health-card-star d-flex align-items-center  d-none d-sm-inline-flex">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="health-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="health-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
                    <p className="health-card-price-one"> $120</p>
                    <p className="health-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="health-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="health-card-body-button  d-none d-sm-inline-flex">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="health-card">
              <img
                src={cityAdvanced}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "170px" }}
              />
              <div className=" health-card-body">
                <div className="health-card-body-text">
                  <div className="health-card-body-heading">
                    <h5 className="card-title">Package Name</h5>
                  </div>
                  <div className="health-card-star d-flex align-items-center  d-none d-sm-inline-flex">
                    <img
                      src={fourHalfStart}
                      alt=""
                      style={{ width: "90px", height: "18px" }}
                    ></img>
                    <span>(10 Reviews)</span>
                  </div>
                  <div className="health-card-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet
                    </p>
                  </div>
                  <div className="health-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
                    <p className="health-card-price-one"> $120</p>
                    <p className="health-card-price-two">
                      <del>$110</del>
                    </p>
                    <p className="health-card-price-three">50% off</p>
                  </div>
                </div>
                <div className="health-card-body-button  d-none d-sm-inline-flex">
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

export default Health;
