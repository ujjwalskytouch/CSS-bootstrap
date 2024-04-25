import React from "react";
import "../styles/navbar.css";

import call from "../assets/call.png";
import deliveryBoy from "../assets/delivery-boy.png";
import groceryStore from "../assets/grocery-store.png";
import navTitleLogo from "../assets/nav-title-logo.png";
import searchIcon from "../assets/search-icon.png";
import user from "../assets/user.png";
import wifi from "../assets/navbar/wifi.png";
import battery from "../assets/navbar/battery.png";
import signal from "../assets/navbar/signal.png";
import search from "../assets/navbar/Vector.png";
import cart from "../assets/navbar/cart.png";
import notification from "../assets/navbar/notification.png";
import years from "../assets/navbar/Group.png";

const Navbar = () => {
  return (
    <>
      <div className="main-navbar d-none d-sm-block">
        <div className="nav-first">
          <div className="container">
            <ul className="nav-bar d-flex justify-content-between py-3">
              <li>
                <a className="active nav-link" href="/">
                  Patients
                </a>
              </li>
              <li>
                <a href="/">Doctors</a>
              </li>
              <li>
                <a href="/">Business Partnership</a>
              </li>
              <li>
                <a href="/">Corporate Tie-Ups</a>
              </li>
              <li>
                <a href="/">Investors</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Locate Us </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-second py-3">
          <div className="container">
            <div className="d-flex align-items-center nav-sec-container d-block ">
              <div className="nav-image-logo nav-title-logo">
                <img src={navTitleLogo} alt="nav-title-logo" />
              </div>
              <div className="nav-form d-flex justify-content-center align-items-center">
                <input placeholder="Search Test & Packages" type="text" />
                <button>
                  <img src={searchIcon} alt="search-icon" />
                </button>
              </div>
              <div className="nav-details d-flex align-items-center  ">
                <div className="nav-item-1  ">
                  <img src={call} alt="" />
                  <span>011-4725-2000</span>
                </div>
                <div className="nav-item-1 ">
                  <img src={deliveryBoy} alt="" />
                  <span>Track My Sample</span>
                </div>
                <div className="nav-item-1">
                  <img src={groceryStore} alt="" />
                  <span>Cart</span>
                </div>
                <div className="nav-item-1 ">
                  <img src={user} alt="" />
                  <span>Login</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-third py-3">
          <div className="container">
            <div className="nav-list-items ">
              <ul className="nav-bar d-flex justify-content-between">
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Facilities</a>
                </li>
                <li>
                  <a href="/">Health Packages</a>
                </li>
                <li>
                  <a href="/">Covid-19</a>
                </li>
                <li>
                  <a href="/">Mobile App</a>
                </li>
                <li>
                  <a href="/">FeedBack</a>
                </li>
                <li>
                  <a href="/">Blogs</a>
                </li>
                <li>
                  <a href="/">Media Coverage</a>
                </li>
                <li>
                  <a href="/">Locate Us</a>
                </li>
                <li>
                  <a href="/">Book a Test</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-navbar d-block d-sm-none position-relative">
        <div className="mobile-navbar-top d-flex justify-content-between align-items-center">
          <div className="mobile-navbar-top-time">9:41</div>
          <div className="mobile-navbar-top-items">
            <img src={signal} alt="" />
            <img src={wifi} alt="" />
            <img src={battery} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="mobile-navbar-bottom d-flex justify-content-between align-items-center gap-2">
            <div className="mobile-nav-input d-flex align-items-center ">
              <img src={search} alt="" />
              <input type="text" placeholder="Search Test & Packages" />
            </div>
            <div className="mobile-nav-icons">
              <img src={notification} alt="" />
            </div>
            <div className="mobile-nav-icons">
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-nav-carousel d-block d-sm-none position-absolute">
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
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
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="mobile-nav-card d-flex justify-content-between align-items-center">
                  <div className="mobile-nav-card-content">
                    <h1>30th Anniversary celebration </h1>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </h2>
                    <h3>Up to 30% off</h3>
                  </div>
                  <div>
                    <img src={years} alt="" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mobile-nav-card d-flex justify-content-between align-items-center">
                  <div className="mobile-nav-card-content">
                    <h1>30th Anniversary celebration </h1>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </h2>
                    <h3>Up to 30% off</h3>
                  </div>
                  <div>
                    <img src={years} alt="" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mobile-nav-card d-flex justify-content-between align-items-center">
                  <div className="mobile-nav-card-content">
                    <h1>30th Anniversary celebration </h1>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </h2>
                    <h3>Up to 30% off</h3>
                  </div>
                  <div>
                    <img src={years} alt="" />
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

export default Navbar;
