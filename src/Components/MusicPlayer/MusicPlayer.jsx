import image from "../../assets/trending-movies6.jpg";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { IoMdRepeat, IoMdShuffle, IoIosArrowDown } from "react-icons/io";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";

import Navbar from "../NavbarSide/Navbar";
import NavbarTop from "../NavbarSide/NavbarTop";
import { FaBars } from "react-icons/fa";

import { useEffect, useState } from "react";

function MusicPlayer() {
  const [screenSize, setScreensize] = useState(window.innerWidth > 960);
  const [isOpen, setIsOpen] = useState(false);

  // sidebar open close
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

  return (
    <>
      {screenSize && (
        <div>
          <button className="navbar-btn" onClick={toggleSidePanel}>
            <FaBars />
          </button>
          {isOpen && <div className="opacity-style-middle"></div>}
          <Navbar isOpen={isOpen} closeSidePanel={closeSidePanel} />
          {isOpen && <div className="overlay" onClick={closeSidePanel}></div>}
          <NavbarTop />
        </div>
      )}
      <div className="music-player-container">
        {!screenSize && (
          <div className="music-player">
            <div className="view-splitter">
              <IoIosArrowDown className="drop-arrow"/>
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
                <IoIosArrowDown className="drop-arrow"/>
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
    </>
  );
}

export default MusicPlayer;
