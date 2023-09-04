import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import MainLogo from "../../assets/main-logo.png";
import { useEffect, useState } from "react";


function NavbarTop() {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 960);

  useEffect(() => {
    const handleResize = () => {      
      setScreenSize(window.innerWidth > 960)
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="navbar-top">
        {screenSize ? (
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
            <div className="buttons-area">
              <button className="get-gaana-plus">Get Gaana Plus</button>
              <button className="dark-light-toggler"><BsFillBrightnessHighFill /></button>
              <button className="user-login">Log In / Sign Up</button>
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
