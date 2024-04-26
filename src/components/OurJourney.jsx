import React from "react";
import "../styles/ourJourney.css";
import ourJourney from "../assets/our-journey/our-journey.png";

const OurJourney = () => {
  return (
    <div className="our-journey-container d-none d-sm-block ">
      <div className="container  our-journey-heading mb-5">Our Journey</div>
      <div>
        <img
          src={ourJourney}
          alt=""
          style={{ width: "100%", maxHeight: "600px" }}
        />
      </div>
    </div>
  );
};

export default OurJourney;
