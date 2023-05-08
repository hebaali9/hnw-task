import "./lastPage.css";
import lastPageImage from "./images/Form-main-img.png";
import React, { useState, useEffect } from "react";

function LastPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div class="balls">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <>
      <p className="parag1">Thank you </p>
      <p className="parag2">we will contact you shortly</p>
      <img src={lastPageImage} className="thank-you-main-img" alt="lastimg" />
    </>
  );
}

export default LastPage;
