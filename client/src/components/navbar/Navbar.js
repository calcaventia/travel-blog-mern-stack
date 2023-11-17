import React from "react";
import "./styles.css";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="col-6">
        <a href="">
          <img src={logo} alt="" className="home-logo-top" />
        </a>
      </div>
      <div className="col-6 menu">
        <ul>
          <li>
            <Link to="/" className="navbar-menu">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-menu">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
