import React from "react";
import "../styles/announcement.css";
import allergy from "../assets/announcement/Allergy.png";
import testPackageOne from "../assets/announcement/New TestPackage one.png";
import testPackageTwo from "../assets/announcement/New TestPackage two.png";
import testPackageThree from "../assets/announcement/New TestPackage three.png";
import testPackageFour from "../assets/announcement/New TestPackage four.png";

const Announcement = () => {
  return (
    <div className="announcement-container d-none d-sm-block">
      <div className="container">
        <div className=" d-flex justify-content-start align-items-center">
          <div className="announcement-heading">
            <h1>Latest Announcement</h1>
          </div>
        </div>
        <div className="announcement-card-container d-flex align-items-center justify-content-between ">
          <div className="announcement-card one">
            <img src={allergy} className="card-img-top" alt="..." />
            <div className="announcement-card-body text-center">
              <h5 className="announcement-card-title ">Allergy Profile</h5>
              <p className="announcement-card-text">
                Amet minim mollit non deserunt ullamco
              </p>
            </div>
          </div>
          <div className="announcement-card two">
            <img src={testPackageOne} className="card-img-top" alt="..." />
            <div className="announcement-card-body text-center">
              <h5 className="announcement-card-title ">New Test/Package</h5>
              <p className="announcement-card-text">
                Amet minim mollit non deserunt ullamco
              </p>
            </div>
          </div>
          <div className="announcement-card three">
            <img src={testPackageTwo} className="card-img-top" alt="..." />
            <div className="announcement-card-body text-center">
              <h5 className="announcement-card-title ">New Test/Package</h5>
              <p className="announcement-card-text">
                Amet minim mollit non deserunt ullamco
              </p>
            </div>
          </div>
          <div className="announcement-card four">
            <img src={testPackageThree} className="card-img-top" alt="..." />
            <div className="announcement-card-body text-center">
              <h5 className="announcement-card-title ">New Test/Package</h5>
              <p className="announcement-card-text">
                Amet minim mollit non deserunt ullamco
              </p>
            </div>
          </div>
          <div className="announcement-card five">
            <img src={testPackageFour} className="card-img-top" alt="..." />
            <div className="announcement-card-body text-center">
              <h5 className="announcement-card-title ">New Test/Package</h5>
              <p className="announcement-card-text">
                Amet minim mollit non deserunt ullamco
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
