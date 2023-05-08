import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import Header from "./header";
import SubHeder from "./subHeader";
import FormPage from "./formPage";
import LandingPage from "./landingPage";
import LastPage from "./lastPage";
import "./index.css";
import "./App.css";

function App() {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/path/to/push");
  // };
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeder />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/formPage" element={<FormPage />} />
          <Route path="/lastPage" element={<LastPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <img
          src={landingMainImage}
          className="landing-main-img"
          alt="mainimg"
        />
        <div className="welcome-div">
          <p className="welcome-paragraph">
            WELCOME TO
            <br />
            <br />
            YOUR JOURNEY THROUGH
            <br />
            <br />
            CUSTOMER EXPERIENCE
          </p>
          <button className="landing-button">
            Be part of the conversation
          </button>
          <h4 className="head-4">LEARN MORE</h4>
        </div> */
}
{
  /* <LandingPage /> */
}

{
  /* <img
          src={landingStarImage}
          className="landing-star-img"
          alt="starimg"
        /> */
}
