import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import Navbar from "./Components/NavbarSide/Navbar.jsx";
import NavbarTop from "./Components/NavbarSide/NavbarTop.jsx";
import LargerCarousel from "./Components/HomeCarousel/LargerCarousel.jsx";
import MusicControlComp from "./Components/MusicControlComp/MusicControlComp.jsx";
import SongsCollection from "./Components/HomeCarousel/SongsCollection.jsx";
import MusicCollections from "./Components/MusicCollections/MusicCollections.jsx";
import TrackListHeader from "./Components/TrackList/TrackListHeader.jsx";
import TrackList from "./Components/TrackList/TrackList.jsx";
import Test2 from "./Components/Test2.jsx";

import Footer from './Components/Footer/Footer.jsx'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MultiCarouselCard from "./Components/HomeCarousel/MultiCarouselCard.jsx";
import { productData, responsive } from "./Components/HomeCarousel/Data.jsx";

import CarouselType2 from "./Components/CarouselType2/CarouselType2.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const darkMode = useSelector((state) => state.usersData.darkMode);
  console.log("print dark mode val", darkMode);

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

  // data MultiCarouselCard carosal
  const product = productData.map((item) => (
    <MultiCarouselCard
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
    />
  ));

  // round carousel
  const productArtist = productData.map((item) => (
    <CarouselType2
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
    />
  ));

  // 


  // toggleCallback={toggling}

  // DARKMODEVAL::{darkMode}
  return (
    <>
      <div className={`wrapper ${isOpen ? "open" : ""}`} ref={wrapperRef}>
        <button className="navbar-btn" onClick={toggleSidePanel}>
          <FaBars />
        </button>
        <Navbar isOpen={isOpen} closeSidePanel={closeSidePanel} />
        {isOpen && <div className="overlay" onClick={closeSidePanel}></div>}
      </div>

      <NavbarTop />4

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

      {/* song playing main page / second page SongsCollections */}
      {/* <MusicCollections /> */}

      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>


      <h2>Top Trending</h2>
      {/* round */}
      <Carousel showDots={false} responsive={responsive}>
        {productArtist}
      </Carousel>


      {/* <TrackListHeader />

      <TrackList /> */}
      

      <Footer />
      <MusicControlComp />
    </>
  );
}

export default App;
