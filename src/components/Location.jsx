import React from "react";
import "../styles/location.css";
import bottomArrow from "../assets/location/bottom-arrow.png";
import covid from "../assets/location/covid.png";

const Location = () => {
  return (
    <div className="location-section d-none d-sm-block">
      <div className="location-container container">
        <div className="location-heading mb-5">
          <h5>Location</h5>
          <p>Select Your Nearest Location</p>
        </div>
        <div className="row d-flex g-5">
          <div className="location-form col-6 p-0">
            <div className="location-form-header d-flex align-items-center justify-content-between">
              <span>Nariana</span>
              <img src={bottomArrow} alt="" />
            </div>

            <div className="location-form-container d-flex flex-column">
              <div className="location-form-field d-flex flex-column">
                <div className="location-form-label d-flex flex-column">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="A-41, Naraina Vihar Near Mother Dairy And Naraina Metro Station Gate No.1, New Delhi, Delhi-110018"
                  />
                </div>
                <div className="location-form-label d-flex flex-column">
                  <label>Service Available</label>
                  <input
                    type="text"
                    placeholder="Sample Collaction, 4D - Ultrasound, Color Doppler, Digital X ray"
                  />
                </div>
                <div className="row ">
                  <div className="col location-form-label d-flex flex-column">
                    <label>Contact Number</label>
                    <input type="text" placeholder="011-4725-2000" />
                  </div>
                  <div className="col location-form-label d-flex flex-column">
                    <label>Timing</label>
                    <input type="text" placeholder="08:00 AM to 08:00 PM" />
                  </div>
                </div>
                <div className="location-form-label d-flex flex-column">
                  <label>Email</label>
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="location-form-msg d-flex justify-content-between align-items-center">
                  <img src={covid} alt="" />
                  <h5>WALKIN COVID 19 TEST AVAILABLE</h5>
                  <h4>Apply</h4>
                </div>
              </div>
              <div className="location-form-btn">
                <button>Call Us Now</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <iframe
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: "24px" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
