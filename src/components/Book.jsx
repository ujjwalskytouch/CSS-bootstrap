import React from "react";
import "../styles/book.css";
import healthCare from "../assets/book/healthcare.png";
import hospital from "../assets/book/hospital.png";
import medicalHistory from "../assets/book/medical-history.png";
import prescription from "../assets/book/prescription.png";
import test from "../assets/book/test.png";
import frameOne from "../assets/book/Frame-one.png";
import frameTwo from "../assets/book/Frame-two.png";
import frameThree from "../assets/book/Frame-three.png";
import frameFour from "../assets/book/Frame-four.png";

const Book = () => {
  return (
    <>
      <div className="book-container d-none d-sm-block">
        <div className="container ">
          <div className="book-root-card d-flex gap-xl-5 gap-lg-4 gap-md-3 justify-content-center align-items-center">
            <div className="card d-flex flex-column justify-content-center align-items-center ">
              <div className="book-image">
                <img src={healthCare} className="card-img-top" alt="..." />
              </div>
              <div className="">
                <p className=" book-card-text text-center">
                  Book a Health Package
                </p>
              </div>
            </div>

            <div className="card d-flex flex-column justify-content-center align-items-center">
              <div className="book-image">
                <img src={medicalHistory} className="card-img-top" alt="..." />
              </div>
              <div className="">
                <p className=" book-card-text text-center">
                  Book an Appointment
                </p>
              </div>
            </div>

            <div className="card card-hover d-flex flex-column justify-content-center align-items-center">
              <div className="book-hover-image">
                <img src={test} className="card-img-top" alt="..." />
              </div>
              <div className="book-hover-card-text">
                <h1 className="text-center">Book a Test</h1>
                <p className="  text-center">
                  Amet minim mollit non <br></br> deserunt ullamco est sit{" "}
                  <br></br> aliqua dolor do amet{" "}
                </p>
              </div>
            </div>

            <div className="card d-flex flex-column justify-content-center align-items-center">
              <div className="book-image">
                <img src={hospital} className="card-img-top" alt="..." />
              </div>
              <div className="">
                <p className=" book-card-text text-center">
                  Book a Home Collection
                </p>
              </div>
            </div>
            <div className="card d-flex flex-column justify-content-center align-items-center">
              <div className="book-image">
                <img src={prescription} className="card-img-top" alt="..." />
              </div>
              <div className="">
                <p className=" book-card-text text-center">
                  Upload Prescription
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-book-container d-block d-sm-none">
        <div className="container">
          <div className="mobile-book-card d-flex ">
            <div className="mobile-book-card-one">
              <img src={frameOne} alt="" />
              <h1>Book a Test</h1>
            </div>
            <div className="mobile-book-card-one">
              <img src={frameTwo} alt="" />
              <h1>Book a Health Package</h1>
            </div>
            <div className="mobile-book-card-one">
              <img src={frameThree} alt="" />
              <h1>Book a Home Collection</h1>
            </div>
            <div className="mobile-book-card-one">
              <img src={frameFour} alt="" />
              <h1>Book an Appointment</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
