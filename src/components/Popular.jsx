import React from "react";
import "../styles/popular.css";

import fourHalfStart from "../assets/health/Four Half Star.png";
import popularExtended from "../assets/popular/Popular Extended.png";
import popularAdvanced from "../assets/popular/Popular advanced.png";
import popularAffordable from "../assets/popular/Popular affordable.png";
import popularWellness from "../assets/popular/Popular wellness.png";
import Slider from "react-slick";
import group from "../assets/advertising/Group.png";
import priceFrame from "../assets/advertising/price-frame.png";

const Popular = () => {
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
    <>
      <div className="Popular-container">
        <div className="container">
          <div className="Popular-menu d-flex align-items-center justify-content-between justify-content-sm-start  ">
            <div className="Popular-menu-title">
              <h1>Popular Tests</h1>
            </div>
            <div className="Popular-menu-list  d-none d-sm-inline-flex">
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
                  className="card-img-top d-none d-sm-inline-flex"
                  alt="..."
                  style={{ maxHeight: "170px" }}
                />
                <div className=" Popular-card-body d-flex flex-column gap-2 gap-sm-0">
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
                    <div className="Popular-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
                      <p className="Popular-card-price-one"> $120</p>
                      <p className="Popular-card-price-two">
                        <del>$110</del>
                      </p>
                      <p className="Popular-card-price-three">50% off</p>
                    </div>
                  </div>
                  <div className="Popular-card-body-button ">
                    <button>Add To Cart</button>
                  </div>
                </div>
              </div>
              <div className="Popular-card">
                <img
                  src={popularAffordable}
                  className="card-img-top  d-none d-sm-inline-flex"
                  alt="..."
                  style={{ maxHeight: "170px" }}
                />
                <div className=" Popular-card-body d-flex flex-column gap-2 gap-sm-0 ">
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
                    <div className="Popular-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
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
                  className="card-img-top  d-none d-sm-inline-flex"
                  alt="..."
                  style={{ maxHeight: "170px" }}
                />
                <div className=" Popular-card-body d-flex flex-column gap-2 gap-sm-0">
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
                    <div className="Popular-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
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
                  className="card-img-top  d-none d-sm-inline-flex"
                  alt="..."
                  style={{ maxHeight: "170px" }}
                />
                <div className=" Popular-card-body d-flex flex-column gap-2 gap-sm-0">
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
                    <div className="Popular-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
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
                  className="card-img-top  d-none d-sm-inline-flex"
                  alt="..."
                  style={{ maxHeight: "170px" }}
                />
                <div className=" Popular-card-body d-flex flex-column gap-2 gap-sm-0">
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
                    <div className="Popular-card-price d-flex align-items-center justify-content-start  d-none d-sm-inline-flex">
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
      <div className="advertising-container d-block d-sm-none mb-5">
        <div className="container">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="advertising-card d-flex justify-content-between align-items-center">
                  <div className="advertising-card-content">
                    <h1>Comprasive Full Body Checkup With Vit D & B12</h1>
                    <div className="advertising-price">
                      <img src={priceFrame} alt="" />
                    </div>
                    <div className="advertising-offer mt-2 ">
                      <h3 className="mb-0">50% off</h3>
                    </div>
                  </div>
                  <div>
                    <img src={group} alt="" />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="advertising-card d-flex justify-content-between align-items-center">
                  <div className="advertising-card-content">
                    <h1>30th Anniversary celebration </h1>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </h2>
                    <h3>Up to 30% off</h3>
                  </div>
                  <div>
                    <img src={group} alt="" />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="advertising-card d-flex justify-content-between align-items-center">
                  <div className="advertising-card-content">
                    <h1>30th Anniversary celebration </h1>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </h2>
                    <h3>Up to 30% off</h3>
                  </div>
                  <div>
                    <img src={group} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
