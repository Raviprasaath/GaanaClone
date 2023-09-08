import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import MainLogo from "../../assets/main-logo.png";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import action from '../../action.js'

import { Link } from 'react-router-dom'

import LoginPage from '../../Components/LoginPage/LoginPage.jsx'

function NavbarTop() {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 960);
  const [loginState, setLoginState] = useState(false);

  const dispatch = useDispatch();

  const handleLogo = () => {
    dispatch(action.setActiveItem())
  }


  useEffect(() => {
    const handleResize = () => {      
      setScreenSize(window.innerWidth > 960)
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openLoginForm = () => {
    setLoginState(!loginState);
  }

  return (
    <>

      <LoginPage loginState={loginState} />
      <div className="navbar-top">
        {screenSize ? (
          <div className="navbar-view-changer">
            <div  className="main-logo">
                <Link to ="/">
                  <img onClick={handleLogo} src={MainLogo} alt="main-logo" />
                </Link>
            </div>
            <span className="search-section">
              <span className="search-bar">
                <span className="search-icon">
                  <AiOutlineSearch />
                </span>
                <input
                  type="text"
                  className="input-search-option"
                  placeholder="Search Artists, Songs, Albums"
                />
              </span>
            </span>
            <div className="buttons-area">
              <Link to="/subscription">
                <button className="get-gaana-plus">Get Gaana Plus</button>
              </Link>
              <button className="dark-light-toggler"><BsFillBrightnessHighFill /></button>
              <button className="user-login" onClick={openLoginForm} >Log In / Sign Up</button>
            </div>
          </div>
        ) : (
          <div className="navbar-view-changer">
            <div className="main-logo">
              <img src={MainLogo} alt="main-logo" />
            </div>

            <span className="search-section">
              <span className="search-bar">
                <span className="search-icon">
                  <AiOutlineSearch />
                </span>
                <input
                  type="text"
                  className="input-search-option"
                  placeholder="Search Artists, Songs, Albums"
                />
              </span>
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default NavbarTop;
