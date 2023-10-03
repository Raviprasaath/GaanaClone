import React, { useState, useEffect } from "react";
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
    // setModalToggle(!modalToggle);
    // handleModal(modalToggle);
    handleModal(true);
  };

    // getting out from local store
    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString || "{}");
  
    const [userName, setUserName] = useState("Log In / Sign Up");
  
    const localStorageCheck = Object.keys(userData).length;
  
    useEffect(()=> {
      if (localStorageCheck !== 0) {
        setUserName(userData.userNameFromFetch);
      }
    }, [])

    const [subsStatus, setSubStatus] = useState("Get Gaana Plus")
  
  
    useEffect(()=> {
      const allSubToken = localStorage.getItem("allSubsDetails");
      const allToken = JSON.parse(allSubToken || "[]");
      
      if (userData.token) {
  
        const partialTokenToCheck = userData.token.slice(0, 64);
      
        const hasPartialMatch = allToken.some(token => token.startsWith(partialTokenToCheck));
      
      
        if (hasPartialMatch) {
          localStorage.setItem("subs", "success");
    
        }
    
        const packStatus = localStorage.getItem("subs");
        if (packStatus === "success" && userData.logStatus==="success" && hasPartialMatch) {
          setSubStatus("Subscribed")
        }
      }
    }, [])

  return (
    <>
      <div className="navbar">
        <nav className={`sideNav ${isOpen ? "open" : ""}`}>
           
          <div className="logo-login">
            <div className="logo">
              <BiUserCircle />
            </div>
            <div className="login" onClick={openLoginForm} >
                {userName !== 'Log In / Sign Up' && 
                  <>               
                    {userName}
                  </>
                }
                {userName === 'Log In / Sign Up' && 
                  <>               
                    Log In / Sign Up
                  </>
                }
            </div>
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
                {subsStatus}
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
