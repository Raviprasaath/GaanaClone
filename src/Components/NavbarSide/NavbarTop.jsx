
import { AiOutlineSearch, AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { MdBrightness2 } from "react-icons/md";
import MainLogo from "../../assets/main-logo.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "../../action.js";
import { useDispatch } from "react-redux";
import action from "../../action.js";

import { Link } from "react-router-dom";

import LoginPage from "../../Components/LoginPage/LoginPage.jsx";

function NavbarTop( props ) {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 960);
  const [loginState, setLoginState] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const darkMode = useSelector((state) => state.usersData.darkMode);
  const [inputValue, setInputValue] = useState('');


  const dispatch = useDispatch();

  const [searchSection, setSearchSection] = useState(false);

  const handlerSearch = () => {
    setSearchSection(true);
    props.handlerSearchBar(true);
    setInputValue('');
  };
  const handleCloseSearch = () => {
    setSearchSection(false);
    props.handlerSearchBar(false);
    props.boxClose;
    props.handlerTypingValue("");
    setInputValue('');
  };

  let timeout;
  const handlerTyping = (e) => {
    clearTimeout(timeout);
    timeout=setTimeout(()=> {
      props.handlerTypingValue(e.target.value);
    }, 2000)
    setInputValue(e.target.value);
  }
  
  const handleLogo = () => {
    dispatch(action.setActiveItem());
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(actions.toggledarkmode(!isDarkMode));
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth > 960);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openLoginForm = () => {
    setLoginState(!loginState);
  };

  return (
    <>
      <LoginPage loginState={loginState} />
      <div className="navbar-top">
        {screenSize ? (
          <div className="navbar-view-changer">
            <div className="main-logo">
              <Link to="/">
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
                  value={inputValue}
                  className="input-search-option"
                  placeholder="Search Artists, Songs, Albums"
                  onChange={handlerTyping}
                  onClick={handlerSearch}
                />
                {searchSection && (
                  <AiOutlineClose
                    onClick={handleCloseSearch}
                    className="search-icon"
                  />
                )}
              </span>
            </span>
            <div className="buttons-area">
              <Link to="/subscription">
                <button className="get-gaana-plus">Get Gaana Plus</button>
              </Link>
              <button
                className="dark-light-toggler"
                onClick={handleDarkModeToggle}
              >
                {darkMode ? <BsFillBrightnessHighFill /> : <MdBrightness2 />}
              </button>
              <button className="user-login" onClick={openLoginForm}>
                Log In / Sign Up
              </button>
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
                  value={inputValue}
                  onClick={handlerSearch}
                  onChange={handlerTyping}
                />
                {searchSection && (
                  <AiOutlineClose
                    onClick={handleCloseSearch}
                    className="search-icon"
                  />
                )}
              </span>
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default NavbarTop;
