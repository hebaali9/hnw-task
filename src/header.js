import headerImage from "./images/header-img.png";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import "./header.css";
function Heder(params) {
  const navigate = useNavigate();
  const goToLandingPage = (event) => {
    event.preventDefault();
    setTimeout(() => {
      var element = document.getElementById("landingImgCont");
      console.log("element", element);
      element.classList.add("last-main-img-animation");
    }, 0);
    navigate("/");
  };
  return (
    <>
      <heder className="header">
        <div className="parent-div-bar">
          <div className="header-div-bar1"></div>
          <div className="header-div-bar2"></div>
          <div className="header-div-bar3"></div>
          <div className="header-div-bar4"></div>
          <div className="header-div-bar5"></div>
        </div>

        <img
          className="head-img"
          src={headerImage}
          alt="header-img"
          onClick={goToLandingPage}
        ></img>
        <nav className="nav">
          <span className="span1">about us </span>
          <span className="span2"> case study map</span>
          <span className="span3"> learning library </span>
          <span className="span4">our publications</span>
          <span className="span5">framework diminutions </span>
        </nav>
      </heder>
    </>
  );
}
export default Heder;
