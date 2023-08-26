import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/NavbarSide/Navbar.jsx";
import HomeCarousel from "./Components/HomeCarousel/HomeCarousel.jsx";



import Test from "./Components/Test.jsx";
import { FaBars } from "react-icons/fa";
import NavbarTop from "./Components/NavbarSide/NavbarTop.jsx";
import Trending from "./Components/HomeCarousels-types/Trending.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  const closeSidePanel = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeSidePanel();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`wrapper ${isOpen ? "open" : ""}`} ref={wrapperRef}>
        <button className="navbar-btn" onClick={toggleSidePanel}>
          <FaBars />
        </button>
        <Navbar isOpen={isOpen} closeSidePanel={closeSidePanel} />
        {isOpen && <div className="overlay" onClick={closeSidePanel}></div>}
      </div>
      <NavbarTop />
      <HomeCarousel/>
      <Trending/>

    </>
  );
}

export default App;
