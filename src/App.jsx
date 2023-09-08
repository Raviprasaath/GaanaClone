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

  //

  // toggleCallback={toggling}

  // DARKMODEVAL::{darkMode}
  return (
    <>

      <button className="navbar-btn" onClick={toggleSidePanel}>
        <FaBars />
      </button>
      {isOpen && <div className="opacity-style-middle"></div>}
      <Navbar isOpen={isOpen} closeSidePanel={closeSidePanel} />
      {isOpen && <div className="overlay" onClick={closeSidePanel}></div>}
      <NavbarTop />

      <div style={{position : "sticky", top:"-15px", zIndex:"2", width:"100%", backgroundColor:"#232429"}}>
        <SongsCollection  />
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
        <Route path="/subscription" element={ <SubscriptionPage /> } />

      </Routes>

      {musicExpander && (
        <div>
          {screenSize && (
            <div>
              <button className="navbar-btn" onClick={toggleSidePanel}>
                <FaBars />
              </button>
              {isOpen && <div className="opacity-style-middle"></div>}
              <Navbar isOpen={isOpen} closeSidePanel={closeSidePanel} />
              {isOpen && (
                <div className="overlay" onClick={closeSidePanel}></div>
              )}
              <NavbarTop />
            </div>
          )}
          <div className="music-player-container">
            {!screenSize && (
              <div className="music-player">
                <div className="view-splitter">
                  <IoIosArrowDown className="drop-arrow" />
                  <div className="poster-container">
                    <img
                      className="mobile-view-song-preview"
                      src={image}
                      alt="img"
                    />
                    <div className="song-details-splitter">
                      <div className="poster-song-splitter">
                        <div className="song-name">
                          <p>Nenjukkul</p>
                          <p>
                            {" "}
                            <AiOutlineHeart />{" "}
                          </p>
                        </div>
                        <div className="song-seeking-line"></div>
                        <div className="song-duration">
                          <p className="song-starting">0:00</p>
                          <p className="song-balance">0:00</p>
                        </div>
                      </div>
                      <div className="song-playing-area2">
                        <div className="song-changing-btns">
                          <IoMdRepeat className="controls-icon1" />
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipPrevious className="controls-icon2" />
                        </div>
                        <div className="song-changing-btns">
                          <BsFillPlayCircleFill className="controls-icon3" />
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipNext className="controls-icon4" />
                        </div>
                        <div className="song-changing-btns">
                          <IoMdShuffle className="controls-icon5" />
                        </div>
                      </div>

                      <div style={{ padding: "5px 0px" }}></div>

                      <div className="table-td-2-img">
                        <div className="songs-collection">
                          <img
                            src={image}
                            alt="img"
                            className="table-mob-view-poster"
                          />

                          <div className="flex">
                            <div className="table-button-artist">
                              <button className="premium-button">
                                Premium
                              </button>
                              <p className="table-mob-artist">Karthik</p>
                            </div>
                            <p className="table-song-name">
                              Yethi Yethi Yethi En Nenjil
                            </p>
                          </div>
                          <p>
                            <AiOutlineClose />
                          </p>
                        </div>
                        <div className="songs-collection">
                          <img
                            src={image}
                            alt="img"
                            className="table-mob-view-poster"
                          />

                          <div className="flex">
                            <div className="table-button-artist">
                              <button className="premium-button">
                                Premium
                              </button>
                              <p className="table-mob-artist">Karthik</p>
                            </div>
                            <p className="table-song-name">
                              Yethi Yethi Yethi En Nenjil
                            </p>
                          </div>
                          <p>
                            <AiOutlineClose />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            )}
            {screenSize && (
              <div className="music-player-lap-view">
                <div className="music-player-section">
                  <div className="music-player-section-1">
                    <img
                      className="mobile-view-song-preview"
                      src={image}
                      alt="img"
                    />
                    <div className="poster-song-splitter">
                      <div className="song-name">
                        <p>Nenjukkul</p>
                        <p>
                          {" "}
                          <AiOutlineHeart />{" "}
                        </p>
                      </div>
                      <div className="song-seeking-line"></div>
                      <div className="song-duration">
                        <p className="song-starting">0:00</p>
                        <p className="song-balance">0:00</p>
                      </div>
                      <div className="song-playing-area2">
                        <div className="song-changing-btns">
                          <IoMdRepeat className="controls-icon1" />
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipPrevious className="controls-icon2" />
                        </div>
                        <div className="song-changing-btns">
                          <BsFillPlayCircleFill className="controls-icon3" />
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipNext className="controls-icon4" />
                        </div>
                        <div className="song-changing-btns">
                          <IoMdShuffle className="controls-icon5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="music-player-section-2">
                    <IoIosArrowDown className="drop-arrow" />
                    <div className="table-td-2-img">
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                      <div className="songs-collection">
                        <img
                          src={image}
                          alt="img"
                          className="table-mob-view-poster"
                        />

                        <div className="flex">
                          <div className="table-button-artist">
                            <button className="premium-button">Premium</button>
                            <p className="table-mob-artist">Karthik</p>
                          </div>
                          <p className="table-song-name">
                            Yethi Yethi Yethi En Nenjil
                          </p>
                        </div>
                        <p>
                          <AiOutlineClose />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
      <MusicControlComp  />

      {/* <SubscriptionPage /> */}

      <LoginPage />



    </>
  );
}

export default App;
