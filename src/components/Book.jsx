import React from "react";
import "../styles/book.css";
import healthCare from "../assets/book/healthcare.png";
import hospital from "../assets/book/hospital.png";
import medicalHistory from "../assets/book/medical-history.png";
import prescription from "../assets/book/prescription.png";
import test from "../assets/book/test.png";

const Book = () => {
  return (
    <div className="book-container">
      <div className="container ">
        <div className="d-flex gap-5 justify-content-center align-items-center">
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
              <p className=" book-card-text text-center">Book an Appointment</p>
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
              <p className=" book-card-text text-center">Upload Prescription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
