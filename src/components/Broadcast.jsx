import React from "react";
import "../styles/broadcast.css";
import rightArrow from "../assets/broadcast/right-arrow.png";
import firstOne from "../assets/broadcast/first-one.png";
import firstTwo from "../assets/broadcast/first-two.png";
import firstThree from "../assets/broadcast/first-three.png";
import secOne from "../assets/broadcast/sec-one.png";
import secTwo from "../assets/broadcast/sec-two.png";
import tioLogo from "../assets/broadcast/TOI_logo.png";
import youtube from "../assets/broadcast/youtube-logo.png";
import zeeNews from "../assets/broadcast/Zee-news.png";
import abpLive from "../assets/broadcast/ABP_LIVE.png";
import dot from "../assets/broadcast/dot.png";

const Broadcast = () => {
  return (
    <>
      <div className="broad-print-container d-flex flex-column">
        <div className="broadcast-container">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-between align-items-center">
                <div className="broadcast-heading">
                  <h1>Broadcast Media Coverage</h1>
                </div>
                <div className="broadcast-btn d-flex justify-content-center align-items-center">
                  <div className="broadcast-nav-heading">View All</div>
                  <button className="broadcast-right-btn d-flex align-items-center">
                    <img src={rightArrow} alt="left-arrow" />
                  </button>
                </div>
              </div>

              <div className="broadcast-card-container d-flex justify-content-between align-items-center">
                <div className="broadcast-card">
                  <div className="broadcast-card-image position-relative">
                    <img
                      src={firstOne}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "346px", height: "200px" }}
                    />
                    <div className="broadcast-card-youtube-image position-absolute">
                      <img src={youtube} alt="" />
                    </div>
                  </div>
                  <div className="broadcast-body">
                    <div className="broadcast-body-text d-flex flex-column">
                      <div className="d-flex justify-content-start align-items-center gap-2">
                        <div>
                          <img src={tioLogo} alt="" />
                        </div>
                        <div className="broadcast-content-title">
                          The Times Of India
                        </div>
                        <div>
                          <img src={dot} alt="" />
                        </div>
                        <div className="broadcast-content-title">
                          5 Hours Ago
                        </div>
                      </div>
                      <div className="broadcast-body-heading">
                        <h5 className="card-title">World Thyroid Day 2023</h5>
                      </div>
                      <div className="broadcast-body-sub-heading">
                        <p className="card-text">
                          World Thyroid Day is an annual observance held on May
                          25th to raise awareness about thyroid-related diseases
                          and promote better understanding...{" "}
                          <span>Read More</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="broadcast-card">
                  <div className="broadcast-card-image position-relative">
                    <img
                      src={firstTwo}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "346px", height: "200px" }}
                    />
                    <div className="broadcast-card-youtube-image position-absolute">
                      <img src={youtube} alt="" />
                    </div>
                  </div>

                  <div className="broadcast-body">
                    <div className="broadcast-body-text d-flex flex-column">
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <div>
                          <img src={zeeNews} alt="" />
                        </div>
                        <div className="broadcast-content-title">Zee News</div>
                        <div>
                          <img src={dot} alt="" />
                        </div>
                        <div className="broadcast-content-title">
                          May 12, 2023
                        </div>
                      </div>
                      <div className="broadcast-body-heading">
                        <h5 className="card-title">Preventing Skin Cancer</h5>
                      </div>
                      <div className="broadcast-body-sub-heading">
                        <p className="card-text">
                          Skin cancer is a significant public health concern,
                          and radiation protection plays a crucial role in
                          mitigating its risks. In recent years, medical
                          technology... <span>Read More</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="broadcast-card">
                  <div className="broadcast-card-image position-relative">
                    <img
                      src={firstThree}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "346px", height: "200px" }}
                    />
                    <div className="broadcast-card-youtube-image position-absolute">
                      <img src={youtube} alt="" />
                    </div>
                  </div>

                  <div className="broadcast-body">
                    <div className="broadcast-body-text d-flex flex-column">
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <div>
                          <img src={abpLive} alt="" />
                        </div>
                        <div className="broadcast-content-title">ABP News</div>
                        <div>
                          <img src={dot} alt="" />
                        </div>
                        <div className="broadcast-content-title">
                          May 17, 2023
                        </div>
                      </div>
                      <div className="broadcast-body-heading">
                        <h5 className="card-title">World Liver Day 2023</h5>
                      </div>
                      <div className="broadcast-body-sub-heading">
                        <p className="card-text">
                          World Liver Day is observed annually on April 19th to
                          raise awareness about liver health and highlight the
                          importance of preventing and managing liver
                          diseases... <span>Read More</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="print-container">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-between align-items-center">
                <div className="broadcast-heading">
                  <h1>Print Media Coverage</h1>
                </div>
                <div className="broadcast-btn d-flex justify-content-center align-items-center">
                  <div className="broadcast-nav-heading">View All</div>
                  <button className="broadcast-right-btn d-flex align-items-center">
                    <img src={rightArrow} alt="left-arrow" />
                  </button>
                </div>
              </div>

              <div className="broadcast-card-container d-flex justify-content-between align-items-center">
                <div className="broadcast-card">
                  <img
                    src={secOne}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "346px", height: "200px" }}
                  />
                  <div className="broadcast-body">
                    <div className="broadcast-body-text d-flex flex-column">
                      <div className="d-flex justify-content-start align-items-center gap-2">
                        <div>
                          <img src={tioLogo} alt="" />
                        </div>
                        <div className="broadcast-content-title">
                          The Times Of India
                        </div>
                        <div>
                          <img src={dot} alt="" />
                        </div>
                        <div className="broadcast-content-title">
                          5 Hours Ago
                        </div>
                      </div>
                      <div className="broadcast-body-heading">
                        <h5 className="card-title">World Thyroid Day 2023</h5>
                      </div>
                      <div className="broadcast-body-sub-heading">
                        <p className="card-text">
                          World Thyroid Day is an annual observance held on May
                          25th to raise awareness about thyroid-related diseases
                          and promote better understanding...{" "}
                          <span>Read More</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="broadcast-card">
                  <img
                    src={secTwo}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "346px", height: "200px" }}
                  />
                  <div className="broadcast-body">
                    <div className="broadcast-body-text d-flex flex-column">
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <div>
                          <img src={zeeNews} alt="" />
                        </div>
                        <div className="broadcast-content-title">Zee News</div>
                        <div>
                          <img src={dot} alt="" />
                        </div>
                        <div className="broadcast-content-title">
                          May 12, 2023
                        </div>
                      </div>
                      <div className="broadcast-body-heading">
                        <h5 className="card-title">Preventing Skin Cancer</h5>
                      </div>
                      <div className="broadcast-body-sub-heading">
                        <p className="card-text">
                          Skin cancer is a significant public health concern,
                          and radiation protection plays a crucial role in
                          mitigating its risks. In recent years, medical
                          technology... <span>Read More</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="broadcast-card">
                  <img
                    src={firstThree}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "346px", height: "200px" }}
                  />
                  <div className="broadcast-body">
                    <div className="broadcast-body-text d-flex flex-column">
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <div>
                          <img src={abpLive} alt="" />
                        </div>
                        <div className="broadcast-content-title">ABP News</div>
                        <div>
                          <img src={dot} alt="" />
                        </div>
                        <div className="broadcast-content-title">
                          May 17, 2023
                        </div>
                      </div>
                      <div className="broadcast-body-heading">
                        <h5 className="card-title">World Liver Day 2023</h5>
                      </div>
                      <div className="broadcast-body-sub-heading">
                        <p className="card-text">
                          World Liver Day is observed annually on April 19th to
                          raise awareness about liver health and highlight the
                          importance of preventing and managing liver
                          diseases... <span>Read More</span>
                        </p>
                      </div>
                    </div>
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

export default Broadcast;
