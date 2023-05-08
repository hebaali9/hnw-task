import "./landingPage.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";

import landingMainImage from "./images/landing-page-main-img.png";
import landingStarImage from "./images/landing-page-star-img.png";
import Footer from "./footer";

function LandingPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log("onnnnnn");
    event.preventDefault();
    navigate("/formPage");
  };
  return (
    <>
      <div>
        <div className="landing-main-img-container" id="landingDivCont">
          {/* <div className="landing-main-img-div"></div> */}
          {/* <img
          src={landingMainImage}
          className="landing-main-img"
          alt="mainimg"
        /> */}
          <img
            src={landingMainImage}
            className="last-main-img"
            alt="lastimg"
            id="landingImgCont"
          />
        </div>
      </div>
      <div className="welcome-div">
        <span className="welcome-paragraph">WELCOME TO</span>

        <span className="welcome-paragraph">YOUR JOURNEY THROUGH</span>

        <span className="welcome-paragraph">CUSTOMER EXPERIENCE</span>

        <button onClick={handleSubmit} className="landing-button">
          Be part of the conversation
        </button>
        <h4 className="learn-more">learn more</h4>
      </div>
      {/* // style={{ backgroundImage: `url(${landingStarImage})` }} */}
      <div className="landing-star-img-div">
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
