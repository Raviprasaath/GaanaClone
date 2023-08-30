import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

import Navbar from "./Components/NavbarSide/Navbar.jsx";
import NavbarTop from "./Components/NavbarSide/NavbarTop.jsx";
import NavbarSongTypeChoose from "./Components/NavbarSide/NavbarSongTypeChoose.jsx";
import LargerCarousel from "./Components/HomeCarousel/LargerCarousel.jsx";
import MusicControlComp from "./Components/MusicControlComp/MusicControlComp.jsx";
import SongsCollection from "./Components/HomeCarousel/SongsCollection.jsx"


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Testing from "./Components/HomeCarousel/Testing.jsx";
import { productData, responsive } from "./Components/HomeCarousel/Data.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // sidebar open close
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


  // data testing carosal
  const product = productData.map((item) => (
    <Testing 
      key= {item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
    />
  ));

  function toggling() {
    console.log("ravi");
  }
   


  return (
    <>
      <div className={`wrapper ${isOpen ? "open" : ""}`} ref={wrapperRef}>
        <button className="navbar-btn" onClick={toggleSidePanel}>
          <FaBars />
        </button>
        <Navbar toggleCallback={toggling} isOpen={isOpen} closeSidePanel={closeSidePanel} />
        {isOpen && <div className="overlay" onClick={closeSidePanel}></div>}
      </div>

      <NavbarTop />
      {/* <NavbarSongTypeChoose /> */}
      
      <SongsCollection />
      <LargerCarousel />

      <h2>Upcoming</h2>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
      
      <h2>Top Trending</h2>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>

      <MusicControlComp />



      

      
    </>
  );
}

export default App;
