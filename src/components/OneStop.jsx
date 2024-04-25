import React from "react";
import "../styles/oneStop.css";
import frame from "../assets/one-stop/Frame.png";

const OneStop = () => {
  return (
    <div className="one-stop-container">
      <div className="container">
        <div className="one-stop-content d-flex flex-column ">
          <div className="one-stop-top-content d-flex flex-column gap-3">
            <h1 className="text-center">
              One - Stop Destination For All Your Diagnostic Needs!
            </h1>
            <p className="text-center">
              Advanced diagnostic technology combines superior care – Get all
              services under one roof.
            </p>
          </div>
          <div className="one-stop-bottom-content d-flex flex-column gap-2">
            <div className="ont-stop-bottom-heading d-flex align-items-center gap-2">
              <img src={frame} alt="" />
              <h1>Comprehensive Diagnostic Solutions Under One Roof!</h1>
            </div>
            <hr />
            <div className="ont-stop-bottom-info">
              <p>
                When it comes to excellence in diagnostics, City X-Ray & Scan
                Clinic is a name that people count upon for high-quality, safe,
                and efficient diagnostic services in Delhi. We are a NABL and
                NABH certified center, reckoned for our excellent team of
                doctors & technicians along with state-of-the-art equipment.
              </p>
              <p>
                The brainchild of Dr. Ravi Kapoor & Dr. Sunita Kapoor –
                Directors of City X-ray & Scan Clinic, the diagnostic center is
                aimed at delivering the highest standards of medical diagnostics
                services. Our mission is to provide “Care with courtesy,
                compassion...<span>Read More</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneStop;
