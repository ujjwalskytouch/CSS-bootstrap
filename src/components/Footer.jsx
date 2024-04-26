import React from "react";
import "../styles/footer.css";
import whatsapp from "../assets/footer/whatsapp.png";
import instagram from "../assets/footer/instagram.png";
import twitter from "../assets/footer/twitter.png";
import facebook from "../assets/footer/facebook.png";
import linkedin from "../assets/footer/linkedin.png";

import book from "../assets/footer/book.png";
import phoneCall from "../assets/footer/phone-call.png";
import user from "../assets/footer/user.png";
import vector from "../assets/footer/Vector.png";
import whatsappNew from "../assets/footer/whatsapp-new.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container d-none d-sm-block">
        <div className="container">
          <div className="footer-list d-flex flex-column gap-3">
            <div className="row">
              <div className="col d-flex flex-column gap-2">
                <div className="footer-column-heading">FACILITIES</div>
                <div className="footer-column">
                  <ul className="d-flex flex-column gap-3">
                    <li>
                      <a href="/">MRI Scan</a>
                    </li>
                    <li>
                      <a href="/">CT Scan</a>
                    </li>
                    <li>
                      <a href="/">Digital X-Ray</a>
                    </li>
                    <li>
                      <a href="/">Neurology Test</a>
                    </li>
                    <li>
                      <a href="/">Dental Imaging</a>
                    </li>
                    <li>
                      <a href="/">Nuclear Imaging</a>
                    </li>
                    <li>
                      <a href="/">DEXA Scan (BMD)</a>
                    </li>
                    <li>
                      <a href="/">Digital Mammography</a>
                    </li>
                    <li>
                      <a href="/">Pathology Laboratory</a>
                    </li>
                    <li>
                      <a href="/">3D/4D Ultrasound</a>
                    </li>
                    <li>
                      <a href="/">CT Coronary Angiography</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="footer-column-heading">PATIENTS</div>
                <div className="footer-column">
                  <ul className="d-flex flex-column gap-3">
                    <li>
                      <a href="/">Center Locator</a>
                    </li>
                    <li>
                      <a href="/">COVID 19 Test Centers</a>
                    </li>
                    <li>
                      <a href="/">Free Home Sample Collection</a>
                    </li>
                    <li>
                      <a href="/">Health Package</a>
                    </li>
                    <li>
                      <a href="/">All Tests</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="footer-column-heading">ABOUT US</div>
                <div className="footer-column">
                  <ul className="d-flex flex-column gap-3">
                    <li>
                      <a href="/">The Brand</a>
                    </li>
                    <li>
                      <a href="/">Our Team</a>
                    </li>
                    <li>
                      <a href="/">Quality Assurance</a>
                    </li>
                    <li>
                      <a href="/">CSR</a>
                    </li>
                    <li>
                      <a href="/">Awards & Accreditation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="footer-column-heading">CONTACT US</div>
                <div className="footer-column">
                  <ul className="d-flex flex-column gap-3">
                    <li>
                      <a href="/">Corporate Health Enquiry</a>
                    </li>
                    <li>
                      <a href="/">Research and Trials</a>
                    </li>
                    <li>
                      <a href="/">Become a Business Partner</a>
                    </li>
                    <li>
                      <a href="/">General Enquiry</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="footer-column-heading">QUICK LINKS</div>
                <div className="footer-column">
                  <ul className="d-flex flex-column gap-3">
                    <li>
                      <a href="/">Blogs</a>
                    </li>
                    <li>
                      <a href="/">News</a>
                    </li>
                    <li>
                      <a href="/">Give Feedback</a>
                    </li>
                    <li>
                      <a href="/">Bio-waste</a>
                    </li>
                    <li>
                      <a href="/">Empaneled Corporates & TPA</a>
                    </li>
                  </ul>
                  <img src={whatsapp} alt="" className="footer-img" />
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p>
                  © 2015 City X-Ray & Scan Clinic Pvt. Ltd. All Rights Reserved!
                </p>
              </div>
              <div>
                <p>
                  Terms & Conditions | Privacy Policy | Disclaimer | Refund &
                  Cancellation Policy
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-footer  d-block d-sm-none">
        <div className="container">
          <div className="mobile-footer-content d-flex justify-content-between align-items-center position-relative">
            <div className="mobile-footer-icons  ">
              <img src={vector} alt="" />
              <h2 className="mobile-footer-icons-hover">Home</h2>
            </div>
            <div className="mobile-footer-icons">
              <img src={whatsappNew} alt="" />
              <h1>Whatsapp</h1>
            </div>
            <div className="mobile-footer-icons">
              <img src={book} alt="" />
              <h1>My Report</h1>
            </div>
            <div className="mobile-footer-icons">
              <img src={phoneCall} alt="" />
              <h1>Call</h1>
            </div>
            <div className="mobile-footer-icons">
              <img src={user} alt="" />
              <h1>Profile</h1>
            </div>
            <div className="mobile-footer-line-bar position-absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
