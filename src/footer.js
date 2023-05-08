import facebook from "./images/facebook-logo.png";
import twitter from "./images/twitter-logo.png";
import instgram from "./images/instgram-logo.png";
import linkedin from "./images/linkedin-logo.png";

import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-div-info">
        <span className="footer-info"> phone number</span>
        <span> +16134219978 </span>
      </div>
      <div className="footer-div-logo">
        <span className="footer-info">address</span>
        <span>119 Woliston cres,kanata, on, K2W 1G5</span>
        <div className="logo-section">
          <img className="footer-img" src={facebook} alt="facebook"></img>
          <img className="footer-img" src={twitter} alt="twitter"></img>
          <img className="footer-img" src={instgram} alt="instgram"></img>
          <img className="footer-img" src={linkedin} alt="linkedin"></img>
        </div>
        <span>© 2022 | privacy & policy | cookie preferences</span>
      </div>
      <div className="footer-div-ending">
        <span className="footer-info">email </span>
        <span>info@govcx.org</span>
      </div>
    </footer>
  );
}

export default Footer;
