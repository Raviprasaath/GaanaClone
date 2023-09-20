import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { BiUserCircle } from "react-icons/bi";

import ToggleSwitch from "../ToggleSwitch";
import { useDispatch } from "react-redux";
import action from "../../action";


function Navbar({ isOpen, toggleSidePanel, closeSidePanel }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(()=> {
    dispatch(action.setActiveItem("Home"));    
    navigate('/', { replace: true });
  }, [])

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
            </li>
            </Link>
            <li>
              Radio
            </li>
            <li>
              Podcast
            </li>
            <li>
              My Music
            </li>
            <li>
              India's Music
            </li>
            <li>
                Language
                <p>(Set Music language)</p>
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
