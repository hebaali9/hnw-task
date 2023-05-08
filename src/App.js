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
