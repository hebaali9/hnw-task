import "./formPage.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import formMainImage from "./images/Form-main-img.png";
import Footer from "./footer";

function FormPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/lastPage");
  };

  return (
    <>
      <div className="form-page-shadow"></div>
      <p className="form-paragraph">
        The International Foundation for Customer Experience in Government is a
        non-profit organisation headquartered in Canada. The foundation is
        supported by an International Consortium that forms an assembly of
        customer experience thought leaders from around the world. The
        foundation’s main mission is to build a community of thinkers,
        practitioners, and academics who collaborate to advance a customer
        experience body of knowledge and practice in the public sector.The
        foundation aims to define the conceptual framework for CX in the public
        sector as well as create and disseminate practical transformation tools
        that are contextually suited for the public sector. The foundation
        creates networking opportunities for passionate public sector customer
        experience executives, practitioners, and researchers across the globe.
      </p>

      <img src={formMainImage} className="form-main-img" alt="mainimg" />

      <form onSubmit={handleSubmit} className="form">
        <h1 className="form-header">Your Details</h1>
        <div className="form-row">
          <label className="FName-label">
            <p>First name</p>
            <input
              className="FName"
              type="text"
              name="FName"
              placeholder=""
            ></input>
          </label>

          <label className="LName-label" htmlFor="lName">
            <p className="">Last name</p>
            <input
              className="LName"
              type="text"
              name="LName"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="form-row">
          <label className="email-label" htmlFor="email-label">
            <p className="">E-mail</p>
            <input
              className="email"
              type="text"
              name="email"
              placeholder=""
            ></input>
          </label>

          <label className="phone-label" htmlFor="phone">
            <p className="">phone</p>
            <input
              className="key-phone"
              type="text"
              name="phone"
              placeholder=""
            />
            <input
              className="phone"
              type="tell"
              name="phone"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="form-row">
          <label className="company-label" htmlFor="company">
            <p className="">Company</p>
            <input
              className="company"
              type="text"
              name="Company"
              placeholder=""
            ></input>
          </label>

          <label className="country-label" htmlFor="country">
            <p className="">country</p>
            <input
              className="country"
              type="text"
              name="country"
              placeholder=""
            ></input>
          </label>
        </div>
        <label className="final-form-label">Start the conversation </label>
        <input className="final-form-input"></input>

        <button className="submit-button">Submit</button>
      </form>
      <div className="form-footer">
        <Footer />
      </div>
    </>
  );
}
export default FormPage;
