import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-multi-carousel/lib/styles.css";

import HomePage from "./Components/PagesRoute/HomePage/HomePage.jsx";
import AllSongs from "./Components/PagesRoute/AllSongs/AllSongs.jsx";
import MusicControlComp from "./Components/MusicControlComp/MusicControlComp.jsx";

import Footer from "./Components/Footer/Footer.jsx";

import { FaBars } from "react-icons/fa";

import Navbar from "./Components/NavbarSide/Navbar.jsx";
import NavbarTop from "./Components/NavbarSide/NavbarTop.jsx";
import SongsCollection from "./Components/HomeCarousel/SongsCollection.jsx";
import HappySongs from "./Components/PagesRoute/HappySongs/HappySongs.jsx";
import Album from "./Components/PagesRoute/Album/Album.jsx";
import ExitedSongs from "./Components/PagesRoute/ExitedSongs/ExitedSongs.jsx";
import ComingSoonPage from "./Components/PagesRoute/ComingSoonPage/ComingSoonPage.jsx";
import SadSongs from "./Components/PagesRoute/SadSongs/SadSongs.jsx";
import Romance from "./Components/PagesRoute/Romance/Romance.jsx";
import SongsFrom90s2000s from "./Components/PagesRoute/SongsFrom90s2000s/SongsFrom90s2000s.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import SubscriptionPage from "./Components/PagesRoute/SubscriptionPage/SubscriptionPage.jsx";
import DataFetch from "./Components/DataFetch/DataFetch.jsx";
import MySongs from "./Components/PagesRoute/MySongs/MySongs.jsx";
import AlbumSongPage2 from "./Components/PagesRoute/AlbumSongPage2/AlbumSongPage2.jsx";



function App() {
  const darkMode = useSelector((state) => state.usersData.darkMode);

  // console.log("print dark mode val", darkMode);

  // music player maximize and minimize
  const [screenSize, setScreensize] = useState(window.innerWidth > 960);
  const [isOpen, setIsOpen] = useState(false);
  const [musicExpander, setMusicExpander] = useState(false);
  // const [urlLinkGenerate, setUrlLinkGenerate] = useState("");

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

  // const urlLinks = (urlLinks) => {
  //   setUrlLinkGenerate(urlLinks);
  // }
  // console.log("from app.js ", urlLinkGenerate)

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

            <div className="bg-fill-patch-work" >
              <SongsCollection />
            </div>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/allsongs" element={<AllSongs />} />
              <Route path="/happy" element={<HappySongs />} />
              <Route path="/exited" element={<ExitedSongs />} />
              <Route path="/sad" element={<SadSongs />} />
              <Route path="/romance" element={<Romance />} />
              <Route path="/songsfrom90s2000s" element={<ComingSoonPage />} />

              <Route path="/album" element={<Album />} />
              <Route path="/comingsoon" element={<ComingSoonPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/mysongs" element={<MySongs />} />

              {/* <Route path="/albumsongpage2" element={<AlbumSongPage2 />} /> */}

              {/* <Route path='album/:albumName/:albumId' element={<AlbumSongPage2 urlLinks={urlLinks} />} /> */}
              <Route path='album/:albumName/:albumId' element={<AlbumSongPage2  />} />
              
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
