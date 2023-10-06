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
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import SubscriptionPage from "./Components/PagesRoute/SubscriptionPage/SubscriptionPage.jsx";
import MySongs from "./Components/PagesRoute/MySongs/MySongs.jsx";
import AlbumSongPage2 from "./Components/PagesRoute/AlbumSongPage2/AlbumSongPage2.jsx";

import SearchSection from "./Components/SearchSection/SearchSection.jsx";
import SearchResultPage from "./Components/PagesRoute/SearchResultPage/SearchResultPage.jsx";
import PaymentPage from "./Components/PagesRoute/SubscriptionPage/PaymentPage.jsx";
import ArtistPage2 from "./Components/PagesRoute/ArtistPage2/ArtistPage2.jsx";
import ArtistPage from "./Components/PagesRoute/ArtistPage/ArtistPage.jsx";



function App() {
  const darkMode = useSelector((state) => state.usersData.darkMode);

  // music player maximize and minimize
  const [screenSize, setScreensize] = useState(window.innerWidth > 960);
  const [isOpen, setIsOpen] = useState(false);
  const [musicExpander, setMusicExpander] = useState(false);
  const [searchingType, setSearchingType] = useState("");

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

  const onHandlerExpander = (value) => {
    setMusicExpander(value);
  };

  const [searchBar, setSearchBar] = useState(false);

  const handlerSearchBar = (value) => {
    setSearchBar(value);
  };

  const handlerTypingValue = (value) => {
    setSearchingType(value);
  }

  const [boxClose, setBoxClose] = useState(true);

  const handlerClosingBox =(value) => {
    setBoxClose(value);
    setSearchBar(value);
    if (value === false) {
      setSearchingType("");
    }
  }






  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString || "{}");
    const allSubToken = localStorage.getItem("allSubsDetails");
    const allToken = JSON.parse(allSubToken || "[]");
    if (userData.token) {
      const partialTokenToCheck = userData.token.slice(0, 64);
    
      const hasPartialMatch = allToken.some(token => token.startsWith(partialTokenToCheck));

    
      if (hasPartialMatch) {
        localStorage.setItem("subs", "success");
      }

    }
  }, []);


  const [openModal, setOpenModal] = useState(false);

  const handleModal = (openState) => {
    setOpenModal(openState);
  };


  return (
    <>
      <LoginPage isOpen={openModal} handleModal={handleModal} />

      <div className="search-bar-section">{searchBar && <SearchSection message={searchingType} handlerClosingBox={handlerClosingBox} />}</div>

      <div className={`{${musicExpander}?"background-content":" "} app-component ${darkMode ? `dark-mode` : "lite-mode"}`}>
    
          <div>
            <button className="navbar-btn" onClick={toggleSidePanel}>
              <FaBars />
            </button>
            {isOpen && <div className="opacity-style-middle"></div>}
            <Navbar handleModal={handleModal} isOpen={isOpen} closeSidePanel={closeSidePanel} />
            {isOpen && <div className="overlay" onClick={closeSidePanel}></div>}

            <NavbarTop handleModal={handleModal}  closingStatus={boxClose} handlerSearchBar={handlerSearchBar} handlerTypingValue={handlerTypingValue} />

            <div className="bg-fill-patch-work">
              <SongsCollection />
            </div>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/album" element={<Album />} />
              <Route path="/artist" element={<ArtistPage />} />

              <Route path="/allsongs" element={<AllSongs />} />
              <Route path="/happy" element={<HappySongs />} />
              <Route path="/exited" element={<ExitedSongs />} />
              <Route path="/sad" element={<SadSongs />} />
              <Route path="/romance" element={<Romance />} />
              <Route path="/comingsoon" element={<ComingSoonPage />} />

              <Route path="/comingsoon" element={<ComingSoonPage />} />
              <Route path="/subscription" element={<SubscriptionPage handleModal={handleModal} />} />
              <Route path="/mysongs" element={<MySongs />} />

              <Route path="album/:albumName/:albumId" element={<AlbumSongPage2 />} />

              <Route path="searchresult/:title/:id" element={<SearchResultPage />} />
              <Route path="artist/:name/" element = { <ArtistPage2/> } />
              <Route path="/paymentpage" element={<PaymentPage />} />
              

            </Routes>
          </div>



        <Footer />        

        <MusicControlComp expander={onHandlerExpander} handleModal={handleModal} />

        
        
      </div>
    </>
  );
}

export default App;
