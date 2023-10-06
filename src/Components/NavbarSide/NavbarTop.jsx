
import { AiOutlineSearch, AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
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
    dispatch(action.setActiveItem("Home"));
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(actions.toggledarkmode(!darkMode));
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
  




  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth > 960);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [modalToggle, setModalToggle] = useState(false);

  const openLoginForm = () => {
    setModalToggle(!modalToggle);
    props.handleModal(true);
  };

  // subs pack
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
      {/* <LoginPage loginState={loginState} /> */}
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
                <button className="get-gaana-plus">{subsStatus}</button>
              </Link>
              <button
                className="dark-light-toggler"
                onClick={handleDarkModeToggle}
              >
                {darkMode ? <BsFillBrightnessHighFill /> : <MdBrightness2 />}
              </button>
              <button className="user-login" onClick={openLoginForm}>
                {userName === 'Log In / Sign Up' && 
                  <>               
                    Log In / Sign Up
                  </>
                }
                {userName !== 'Log In / Sign Up' && 
                  <>               
                    <BiUserCircle /> { userName}
                  </>
                }

              </button>
            </div>
          </div>
        ) : (
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
