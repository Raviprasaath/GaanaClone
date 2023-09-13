import React from "react";
import { Link } from 'react-router-dom';

import { BiUserCircle } from "react-icons/bi";

import ToggleSwitch from "../ToggleSwitch";

function Navbar({ isOpen, toggleSidePanel, closeSidePanel }) {
  return (
    <>
      <div className="navbar">
        <nav className={`sideNav ${isOpen ? "open" : ""}`}>
          <Link className="list-selector" to="/">  
          <div className="logo-login">
            <div className="logo">
              <BiUserCircle />
            </div>
            <div className="login">Login / Sign Up</div>
          </div>
            </Link>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#radio">Radio</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
            <li>
              <a href="#">My Music</a>
            </li>
            <li>
              <a href="#">India's Music</a>
            </li>
            <li>
              <a href="#">
                Language
                <p>(Set Music language)</p>
              </a>
            </li>
            <li>
              <a className="toggler-control" href="#">
                Night Mode
                <ToggleSwitch />
              </a>
            </li>
            <br />
            <li>
              <a className="premium" href="#">
                Go Premium{" "}
              </a>
            </li>
            <li>
              <a href="#">Get Gaana Plus </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
