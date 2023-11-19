import React from "react";
import "./Footer.css";
import logo from "../images/logo2.png";
import icon1 from "../images/1.png";
import icon2 from "../images/2.png";
import icon3 from "../images/3.png";

function Footer() {
  return (
    <footer className="footer-style">
      <div className="row">
        <div className="col-6">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <div className="col-6 icons">
          <ul>
            <li>
              <img src={icon1} alt="instagram icon" className="icon-image" />
            </li>
            <li>
              <img src={icon2} alt="facebook icon" className="icon-image" />
            </li>
            <li>
              <img src={icon3} alt="twitter icon" className="icon-image" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
