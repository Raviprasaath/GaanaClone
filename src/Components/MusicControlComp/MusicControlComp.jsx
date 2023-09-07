import { useState, useEffect } from "react";

import image from "../../assets/trending-movies3.jpg";
import MusicPlayer from "../MusicPlayer/MusicPlayer.jsx";

import { BsFillPlayCircleFill, BsFillVolumeUpFill } from "react-icons/bs";
import { IoIosArrowUp, IoMdRepeat, IoMdShuffle } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

function MusicControlComp() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [lifting, setLifting] = useState(true);
  
  const isMobile = windowWidth < 1000;
  
  const handlerExpander = () => {
    setLifting(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleMinimizer = (data) => {
    setLifting(data)
  }


  if (!lifting) {
    return (
      <>
      <div className="expanded-view-music-section">
        <MusicPlayer expanderMessage={handleMinimizer} />      
      </div>
      </>

    )
  }
  

  return (
    <>
      <div className="music-control-comp">
        
        {isMobile ? (
          <section className="mob-screen-controls">
            <div className="song-name">
              <div>
                <img className="current-playing-song" src={image} alt="" />
              </div>
              <p className="song-name-lines">
                <p className="song-name-1">Song playing</p>
                <p className="song-name-2">Song playing (From Movie)</p>
              </p>
            </div>
            <div className="song-controls-play">
              <div className="icons-control">
                <BsFillPlayCircleFill className="playing-icon" />
              </div>
              <div className="icons-control">
                <IoIosArrowUp onClick={handlerExpander} className="next-songs-icon" />
              </div>
            </div>
          </section>
        ) : (
          <div className="large-screen-controls">
            <div className="song-playing-area1">
              <div className="song-cover">
                <div>
                  <img className="current-playing-song" src={image} alt="" />
                </div>
                <div>
                  <p className="song-name">Song Name</p>
                  <p className="song-details">Song Name with movie name</p>
                </div>
                <div>
                  <AiOutlineHeart className="heart-empty" />
                  {/* <AiFillHeart className="heart-filled" /> */}
                </div>
                <div>
                  <SlOptionsVertical className="options" />
                </div>
              </div>
            </div>
            <div className="song-playing-area2">
              <div className="song-duration-track">00:01 / 00:18</div>
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
            <div></div>
            <div className="song-playing-area3">
              <div className="volume-button">
                <BsFillVolumeUpFill className="volume-btn" />
              </div>
              <div className="audio-type">Audio High</div>
              <div>
                <IoIosArrowUp onClick={handlerExpander} className="song-details" />
              </div>
            </div>
          </div>
        )}

       
      </div>
    </>
  );
}

export default MusicControlComp;
