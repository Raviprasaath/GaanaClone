import React, { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { BiUserCircle } from "react-icons/bi";

import ToggleSwitch from "../ToggleSwitch";
import { useDispatch } from "react-redux";
import action from "../../action";


function Navbar({ isOpen, toggleSidePanel, closeSidePanel, handleModal }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(()=> {
    dispatch(action.setActiveItem("Home"));    
    navigate('/', { replace: true });
  }, [])

  const [modalToggle, setModalToggle] = useState(false);

  const openLoginForm = () => {
    // setLoginState(!loginState);
    setModalToggle(!modalToggle);
    handleModal(modalToggle);
  };

  return (
    <>
      <div className="navbar">
        <nav className={`sideNav ${isOpen ? "open" : ""}`}>
           
          <div className="logo-login">
            <div className="logo">
              <BiUserCircle />
            </div>
            <div className="login" onClick={openLoginForm} >Login / Sign Up</div>
          </div>
          <ul>
            <Link className="list-selector" to="/">
              <li>
                Home
              </li>
            </Link>
            <Link to='/comingsoon'>
              <li >
                Radio
              </li>            
            </Link>
            <Link to='/comingsoon'>            
              <li>
                Podcast
              </li>
            </Link>
            <Link to='mysongs'>            
              <li>
                My Music
              </li>
            </Link>
            <Link to='comingsoon'>            
              <li>
                India's Music
              </li>
            </Link>
            <Link to='comingsoon'>            
              <li>
                  Language
                  <p>(Set Music language)</p>
              </li>
            </Link>
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
            <Link to='subscription'>            
              <li>
                Get Gaana Plus
                {/* <a href="#">Get Gaana Plus </a> */}
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
