import { useState, useEffect, useRef } from "react";

import image from "../../assets/trending-movies3.jpg";
import MusicPlayer from "../MusicPlayer/MusicPlayer.jsx";

import { BsFillPlayCircleFill, BsFillVolumeUpFill, BsFillPauseCircleFill } from "react-icons/bs";
import { IoIosArrowUp, IoMdRepeat, IoMdShuffle } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";


function MusicControlComp( props ) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [lifting, setLifting] = useState(true);
  const [sampleSongs, setSampleSongs] = useState([]);

  console.clear();
  


  // #region ------local Storage value getting -------
  const [ songStore, setSongStore ] = useState([]);
  
  console.clear();
  const detailedData = songStore.data;

  const handleSongs = () => {
    const tempLocalSongs = JSON.parse(localStorage.getItem("localSongs"));
    setSongStore(tempLocalSongs);
  }

  const arrayStore = [];

  if (Array.isArray(detailedData)) {
    detailedData.map((item) => {
      const artistDescription = item.artist && item.artist[0] && item.artist[0].songs[0];      
      arrayStore.push(`https://newton-project-resume-backend.s3.amazonaws.com/audio/${artistDescription}.mp3`);
    })
  }

  // console.log(sampleSongs);
  
  useEffect (() => {
    setSampleSongs(arrayStore);
    handleSongs();
  }, [])

  const  temp = ['https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e147ae38c3e33a721d.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf916447ae38c3e33a2b25.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e147ae38c3e33a721d.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf91cd47ae38c3e33a33a4.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf920b47ae38c3e33a3889.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf911747ae38c3e33a24f9.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e147ae38c3e33a721d.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e147ae38c3e33a721d.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf938f47ae38c3e33a56f7.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf907d47ae38c3e33a189a.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e147ae38c3e33a721d.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c647ae38c3e33a1e6b.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90bf47ae38c3e33a1ddc.mp3', 'https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e147ae38c3e33a721d.mp3']

  // #endregion -------


// #region ------------ screen size control ---------

  const isMobile = windowWidth < 1000;
  
  const handlerExpander = () => {
    setLifting(false)
  }
  const handleMinimizer = (data) => {
    setLifting(data)
  }

  useEffect (()=> {
    props.expander(lifting)
  }, [lifting])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // #endregion ------------ screen size control ---------
  



// #region ------------ song control ---------


// #endregion ------------ song control ---------






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
              <div className="song-name-lines">
                <p className="song-name-1">Song playing</p>
                <p className="song-name-2">Song playing (From Movie)</p>
              </div>
            </div>
            <div className="song-controls-play">
              <div className="icons-control">

              <div className="bg-play"> <BsFillPlayCircleFill className="playing-icon" /> </div>

                {/* <div className="bg-play" onClick={playing ? handlePause : handlePlay}>
                    {playing ? 
                    <BsFillPlayCircleFill className="playing-icon" /> :
                    <BsFillPauseCircleFill className="playing-icon" /> }
                </div> */}

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
                <div className="bg-play">
                  <BsFillPlayCircleFill className="controls-icon3" />
                </div>
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
