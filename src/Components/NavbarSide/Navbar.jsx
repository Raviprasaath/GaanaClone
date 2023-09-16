import React from "react";
import { Link } from 'react-router-dom';

import { BiUserCircle } from "react-icons/bi";

import ToggleSwitch from "../ToggleSwitch";

function Navbar({ isOpen, toggleSidePanel, closeSidePanel }) {
  return (
    <>
      <div className="navbar">
        <nav className={`sideNav ${isOpen ? "open" : ""}`}>
           
          <div className="logo-login">
            <div className="logo">
              <BiUserCircle />
            </div>
            <div className="login">Login / Sign Up</div>
          </div>
          <ul>
            <Link className="list-selector" to="/">
            <li>
              Home
              {/* <a href="#home">Home</a> */}
            </li>
            </Link>
            <li>
              Radio
              {/* <a href="#radio">Radio</a> */}
            </li>
            <li>
              Podcast
              {/* <a href="#">Podcast</a> */}
            </li>
            <li>
              My Music
              {/* <a href="#">My Music</a> */}
            </li>
            <li>
              India's Music
              {/* <a href="#">India's Music</a> */}
            </li>
            <li>
                Language
                <p>(Set Music language)</p>
              {/* <a href="#">
              </a> */}
            </li>
            <li>
              <div className="toggler-control" href="#">
                Night Mode
                <ToggleSwitch />
              </div>
            </li>
            <br />
            <li>
              
              <div className="premium" href="#">
                Go Premium{" "}
              </div>
            </li>
            <li>
              Get Gaana Plus
              {/* <a href="#">Get Gaana Plus </a> */}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
