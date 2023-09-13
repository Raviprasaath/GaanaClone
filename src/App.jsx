import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import HomePage from "./Components/PagesRoute/HomePage/HomePage.jsx";
import TrendingSongs from "./Components/PagesRoute/TrendingSongs/TrendingSongs.jsx";
import MusicControlComp from "./Components/MusicControlComp/MusicControlComp.jsx";

import Footer from "./Components/Footer/Footer.jsx";

import image from "./assets/trending-movies6.jpg";

import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { IoMdRepeat, IoMdShuffle, IoIosArrowDown } from "react-icons/io";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import Navbar from "./Components/NavbarSide/Navbar.jsx";
import NavbarTop from "./Components/NavbarSide/NavbarTop.jsx";
import SongsCollection from "./Components/HomeCarousel/SongsCollection.jsx";
import NewSongs from "./Components/PagesRoute/NewSongs/NewSongs.jsx";
import Album from "./Components/PagesRoute/Album/Album.jsx";
import OldSongs from "./Components/PagesRoute/OldSongs/OldSongs.jsx";
import ComingSoonPage from "./Components/PagesRoute/ComingSoonPage/ComingSoonPage.jsx";
import PartySongs from "./Components/PagesRoute/PartySongs/PartySongs.jsx";
import Romance from "./Components/PagesRoute/Romance/Romance.jsx";
import SongsFrom90s2000s from "./Components/PagesRoute/SongsFrom90s2000s/SongsFrom90s2000s.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import SubscriptionPage from "./Components/PagesRoute/SubscriptionPage/SubscriptionPage.jsx";
import DataFetch from "./Components/DataFetch/DataFetch.jsx";
import MySongs from "./Components/PagesRoute/MySongs/MySongs.jsx";



function App() {
  const darkMode = useSelector((state) => state.usersData.darkMode);
  // console.log("print dark mode val", darkMode);

  // music player maximize and minimize
  const [screenSize, setScreensize] = useState(window.innerWidth > 960);
  const [isOpen, setIsOpen] = useState(false);
  const [musicExpander, setMusicExpander] = useState(false);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  const closeSidePanel = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className == "opacity-style-middle") {
        closeSidePanel();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScreensize = () => {
      setScreensize(window.innerWidth > 960);
    };

    window.addEventListener("resize", handleScreensize);

    return () => {
      window.removeEventListener("resize", handleScreensize);
    };
  }, []);

  // toggleCallback={toggling}

  // DARKMODEVAL::{darkMode}

  const onHandlerExpander = (value) => {
    setMusicExpander(value);
  };

  return (
    <>
      <div className={`app-component ${ darkMode ? `dark-mode` : 'lite-mode'}`}   >

        {musicExpander && (
          <div>
            <button className="navbar-btn" onClick={toggleSidePanel}>
              <FaBars />
            </button>
            {isOpen && <div className="opacity-style-middle"></div>}
            <Navbar isOpen={isOpen} closeSidePanel={closeSidePanel} />
            {isOpen && <div className="overlay" onClick={closeSidePanel}></div>}
            <NavbarTop />

            <div className="bg-fill-patch-work"
              
            >
              <SongsCollection />
            </div>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trending" element={<TrendingSongs />} />
              <Route path="/newsongs" element={<NewSongs />} />
              <Route path="/oldsongs" element={<OldSongs />} />
              <Route path="/party" element={<PartySongs />} />
              <Route path="/romance" element={<Romance />} />
              <Route path="/songsfrom90s2000s" element={<SongsFrom90s2000s />} />

              <Route path="/album" element={<Album />} />
              <Route path="/comingsoon" element={<ComingSoonPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/mysongs" element={<MySongs />} />
            </Routes>
          </div>
        )}

        {musicExpander && <Footer />}

        <DataFetch />
        <MusicControlComp expander={onHandlerExpander} />

        

        <LoginPage />
      </div>
    </>
  );
}

export default App;
