import React from "react";
import Slider from "react-slick";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import "../styles/blog.css";
import mainOne from "../assets/blog/main-one.png";
import mainTwo from "../assets/blog/main-two.png";
import mainThree from "../assets/blog/main-three.png";
import mainFour from "../assets/blog/main-four.png";
import ellipseOne from "../assets/blog/Ellipse-one.png";
import ellipseTwo from "../assets/blog/Ellipse-two.png";
import ellipseThree from "../assets/blog/Ellipse-three.png";
import ellipseFour from "../assets/blog/Ellipse-four.png";

const Blog = () => {
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
    <div className="blog-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="blog-heading">
            <h1>Blog – Health Bulletin & Articles</h1>
          </div>
          <div className="blog-btn d-flex justify-content-center align-items-center g-5">
            <button className="blog-left-btn d-flex align-items-center justify-content-center">
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className="blog-right-btn d-flex align-items-center justify-content-center">
              <img src={rightArrow} alt="left-arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="blog-card-container">
        <div className="Popular-slider-container">
          <Slider {...settings} className="custom-slider">
            <div className="blog-card">
              <img
                src={mainOne}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className="blog-body">
                <div className="blog-body-text d-flex flex-column position-relative">
                  <div className="blog-body-heading">
                    <h5 className="card-title">Blog Name</h5>
                  </div>
                  <div className="blog-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="blog-name">By Jhone Coper</div>
                    <div className="blog-date"> May 11, 2023</div>
                  </div>
                  <div className="blog-profile-img">
                    <img src={ellipseOne} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <img
                src={mainTwo}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className="blog-body">
                <div className="blog-body-text d-flex flex-column position-relative">
                  <div className="blog-body-heading">
                    <h5 className="card-title">Blog Name</h5>
                  </div>
                  <div className="blog-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="blog-name">By Jhone Coper</div>
                    <div className="blog-date"> May 11, 2023</div>
                  </div>
                  <div className="blog-profile-img">
                    <img src={ellipseTwo} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <img
                src={mainThree}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className="blog-body">
                <div className="blog-body-text d-flex flex-column position-relative">
                  <div className="blog-body-heading">
                    <h5 className="card-title">Blog Name</h5>
                  </div>
                  <div className="blog-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="blog-name">By Jhone Coper</div>
                    <div className="blog-date"> May 11, 2023</div>
                  </div>
                  <div className="blog-profile-img">
                    <img src={ellipseThree} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <img
                src={mainFour}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className="blog-body">
                <div className="blog-body-text d-flex flex-column position-relative">
                  <div className="blog-body-heading">
                    <h5 className="card-title">Blog Name</h5>
                  </div>
                  <div className="blog-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="blog-name">By Jhone Coper</div>
                    <div className="blog-date"> May 11, 2023</div>
                  </div>
                  <div className="blog-profile-img">
                    <img src={ellipseFour} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <img
                src={mainOne}
                className="card-img-top"
                alt="..."
                style={{ width: "299px", height: "170px" }}
              />
              <div className="blog-body">
                <div className="blog-body-text d-flex flex-column position-relative">
                  <div className="blog-body-heading">
                    <h5 className="card-title">Blog Name</h5>
                  </div>
                  <div className="blog-body-sub-heading">
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="blog-name">By Jhone Coper</div>
                    <div className="blog-date"> May 11, 2023</div>
                  </div>
                  <div className="blog-profile-img">
                    <img src={ellipseOne} alt="" />
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

export default Blog;
