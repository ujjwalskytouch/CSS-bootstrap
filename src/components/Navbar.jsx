import React from "react";
import "../styles/navbar.css";
// import navTitleLogo from '../assets/nav-title-logo.png'

import call from "../assets/call.png";
import deliveryBoy from "../assets/delivery-boy.png";
import groceryStore from "../assets/grocery-store.png";
import navTitleLogo from "../assets/nav-title-logo.png";
import searchIcon from "../assets/search-icon.png";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="main-navbar">
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
          <div className="d-flex align-items-center">
            <div className="nav-image-logo nav-title-logo">
              <img src={navTitleLogo} alt="nav-title-logo" />
            </div>
            <div className="nav-form d-flex justify-content-center align-items-center">
              <input placeholder="Search Test & Packages" type="text" />
              <button>
                <img src={searchIcon} alt="search-icon" />
              </button>
            </div>
            <div className="nav-details d-flex align-items-center ">
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
  );
};

export default Navbar;
