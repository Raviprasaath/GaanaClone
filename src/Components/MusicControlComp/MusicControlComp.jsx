import { useState, useEffect, useRef } from "react";

import image from "../../assets/trending-movies3.jpg";
import MusicPlayer from "../MusicPlayer/MusicPlayer.jsx";

import song1 from "../../assets/audio/song-1.mp3";
import song2 from "../../assets/audio/song-2.mp3";
import song3 from "../../assets/audio/song-3.mp3";
import song4 from "../../assets/audio/song-4.mp3";
import song5 from "../../assets/audio/song-5.mp3";

import { BsFillPlayCircleFill, BsFillVolumeUpFill, BsFillPauseCircleFill, } from "react-icons/bs";
import { IoIosArrowDown,IoIosArrowUp, IoMdRepeat, IoMdShuffle } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

const tracks = [
  // "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/97/ac/de/97acdecc-a25b-ab43-8866-f6feae8782c9/mzaf_1042132389403017210.plus.aac.ep.m4a",
  song1, song2, song3, song4, song5, ];

function MusicControlComp(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [lifting, setLifting] = useState(true);
  const [sampleSongs, setSampleSongs] = useState([]);

  // #region ------------ screen size control ---------

  const isMobile = windowWidth < 1000;

  const handlerExpander = () => {
    setLifting(false);
  };
  const handleMinimizer = (data) => {
    setLifting(data);
  };

  useEffect(() => {
    props.expander(lifting);
  }, [lifting]);

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
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLoopOn, setIsLoopOn] = useState(false);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [shuffledTracks, setShuffledTracks] = useState([]);
  const audioRef = useRef(null);


  const handlePlay = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  useEffect(() => {
    const shuffled = shuffleArray(tracks);
    setShuffledTracks(shuffled);
  }, [tracks]);

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    audioRef.current.addEventListener("ended", handleNextTrack);

    return () => {
      audioRef.current.removeEventListener("ended", handleNextTrack);
    };
  }, [currentTrack]);
  
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const handleNextTrack = () => {
    if (isShuffleOn) {
      const nextShuffledIndex = Math.floor(
        Math.random() * shuffledTracks.length
      );
      setCurrentTrack(nextShuffledIndex);
    } else if (currentTrack < tracks.length - 1) {
      setCurrentTrack((prevTrack) => prevTrack + 1);
    } else if (isLoopOn) {
      setCurrentTrack(0);
    }
  };

  const handlePrevTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack((prevTrack) => prevTrack - 1);
    }
  };

  const handleToggleLoop = () => {
    setIsLoopOn(!isLoopOn);
    audioRef.current.loop = !isLoopOn;
  };

  const handleToggleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    audioRef.current.src = tracks[currentTrack];
    if (playing) {
      handlePlay();
    }
  }, [currentTrack]);

  // #endregion ------------ song control ---------

  // #region -----------music expander -------------
  const [screenSize, setScreensize] = useState(window.innerWidth > 960);
  const [isOpen, setIsOpen] = useState(false);
  const [minimize, setMinimizer] = useState(true);

  const handlerMinimize = () => {
    setMinimizer(false);
    setLifting(true)
  }

  useEffect(() => {
    const handleScreensize = () => {
      setScreensize(window.innerWidth > 960);
    };

    window.addEventListener("resize", handleScreensize);

    return () => {
      window.removeEventListener("resize", handleScreensize);
    };
  }, []);

  // #endregion
  
  if (!lifting) {
    return (
      <>        
        <audio ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextTrack}
        src={tracks[0]?.src} controls />




        <div className="expanded-view-music-section">          
          <div className="music-player-container">
            {!screenSize && (
              <div className="music-player">
                <div className="view-splitter">
                  <IoIosArrowDown onClick={handlerMinimize} className="drop-arrow"/>
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
                            <AiOutlineHeart className="heart-in"/>
                          </p>
                        </div>
                        <div className="song-seeking-line">
                          <input type="range" 
                            className="song-time-tracker" 
                            name="tracker"
                            min={0}
                            max={duration}
                            step={0.01}
                            value={currentTime}
                            onChange={handleSeek}
                          />
                        </div>
                        <div className="song-duration">
                          <p className="song-starting">
                          {isNaN(duration) || isNaN(currentTime) ? "0:00" : `${formatTime(currentTime)}`}
                          </p>
                          <p className="song-balance">
                          {isNaN(duration) || isNaN(currentTime) ? "0:00" : `${formatTime(duration)}`}
                          </p>
                        </div>
                      </div>
                      <div className="song-playing-area2">
                        <div className="song-changing-btns">
                          <IoMdRepeat onClick={handleToggleLoop} className="controls-icon1" />
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipPrevious onClick={handlePrevTrack} className="controls-icon2" />
                        </div>
                        <div className="song-changing-btns-bg">
                          <div className="bg-white">

                          </div>
                          <div onClick={playing ? handlePause : handlePlay} className="song-changing-btns">
                            {playing ? (
                              <BsFillPauseCircleFill className="controls-icon3" />
                            ) : (
                              <BsFillPlayCircleFill className="controls-icon3" />
                            )}
                          </div>
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipNext onClick={handleNextTrack} className="controls-icon4" />
                        </div>
                        <div className="song-changing-btns">
                          <IoMdShuffle onClick={handleToggleShuffle} className="controls-icon5" />
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
                            <AiOutlineHeart className="fav-remover"/>
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
                            <AiOutlineHeart className="fav-remover"/>
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
                            <AiOutlineHeart className="fav-remover"/>
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
                            <AiOutlineHeart className="fav-remover"/>
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
                            <AiOutlineHeart className="fav-remover"/>
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
                            <AiOutlineHeart className="fav-remover"/>
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
                            <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="heart-in" />
                        </p>
                      </div>
                      <div className="song-seeking-line">
                        <input type="range" 
                          className="song-time-tracker" 
                          name="tracker"
                          min={0}
                          max={duration}
                          step={0.01}
                          value={currentTime}
                          onChange={handleSeek}
                        />
                      </div>
                      <div className="song-duration">
                        <p className="song-starting">
                        {isNaN(duration) || isNaN(currentTime) ? "0:00" : `${formatTime(currentTime)}`}
                        </p>
                        <p className="song-balance">
                        {isNaN(duration) || isNaN(currentTime) ? "0:00" : `${formatTime(duration)}`}
                        </p>
                      </div>
                      <div className="song-playing-area2">
                        <div className="song-changing-btns">
                          <IoMdRepeat onClick={handleToggleLoop} className="controls-icon1" />
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipPrevious onClick={handlePrevTrack} className="controls-icon2" />
                        </div>
                        <div className="song-changing-btns">
                          <div className="bg-white-play">

                          </div>
                          <div className="bg-play" onClick={playing ? handlePause : handlePlay} >
                              {playing ? (
                                <BsFillPauseCircleFill className="controls-icon3" />
                              ) : (
                                <BsFillPlayCircleFill className="controls-icon3" />
                              )}
                          </div>
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipNext onClick={handleNextTrack} className="controls-icon4" />
                        </div>
                        <div className="song-changing-btns">
                          <IoMdShuffle onClick={handleToggleShuffle} className="controls-icon5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="music-player-section-2">
                    <IoIosArrowDown onClick={handlerMinimize} className="drop-arrow"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
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
                          <AiOutlineHeart className="fav-remover"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </>
    );
  }

  return (
    <>
      <audio ref={audioRef}
       onTimeUpdate={handleTimeUpdate}
       onEnded={handleNextTrack}
        src={tracks[0]?.src} controls />

      <div className="music-control-comp">
        {isMobile ? (
          <section className="mob-screen-controls">
            <input type="range" 
              className="song-time-tracker" 
              name="tracker"
              min={0}
              max={duration}
              step={0.01}
              value={currentTime}
              onChange={handleSeek}
            />
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
                {/* default */}
                {/* <div className="bg-play"> <BsFillPlayCircleFill className="playing-icon" /> </div> */}

                <div
                  className="bg-play"
                  onClick={playing ? handlePause : handlePlay}
                >
                  {playing ? (
                    <BsFillPauseCircleFill className="playing-icon" />
                  ) : (
                    <BsFillPlayCircleFill className="playing-icon" />
                  )}
                </div>

                {/* <div className="bg-play" onClick={playing ? handlePause : handlePlay}>
                    {playing ? 
                    <BsFillPlayCircleFill className="playing-icon" /> :
                    <BsFillPauseCircleFill className="playing-icon" /> }
                </div> */}
              </div>
              <div className="icons-control">
                <IoIosArrowUp
                  onClick={handlerExpander}
                  className="next-songs-icon"
                />
              </div>
            </div>
          </section>
        ) : (
          <div className="large-screen-controls">
            <input type="range" 
              className="song-time-tracker" 
              name="tracker"
              min={0}
              max={duration}
              step={0.01}
              value={currentTime}
              onChange={handleSeek}
            />
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
              {/* <div className="song-duration-track"> {formatTime(currentTime)} / {formatTime(duration)} </div> */}
              <div className="song-duration-track">
                {isNaN(duration) || isNaN(currentTime) ? "0:00 / 0:00" : `${formatTime(currentTime)} / ${formatTime(duration)}`}
              </div>

              <div className="song-changing-btns">
                <IoMdRepeat
                  onClick={handleToggleLoop}
                  className="controls-icon1"
                />
              </div>
              <div className="song-changing-btns">
                <BiSkipPrevious
                  onClick={handlePrevTrack}
                  className="controls-icon2"
                />
              </div>
              <div className="song-changing-btns">
                <div
                  className="bg-play"
                  onClick={playing ? handlePause : handlePlay}
                >
                  {playing ? (
                    <BsFillPauseCircleFill className="controls-icon3" />
                  ) : (
                    <BsFillPlayCircleFill className="controls-icon3" />
                  )}
                </div>
                {/* <div className="bg-play">
                  <BsFillPlayCircleFill className="controls-icon3" />
                </div> */}
              </div>
              <div className="song-changing-btns">
                <BiSkipNext
                  onClick={handleNextTrack}
                  className="controls-icon4"
                />
              </div>
              <div className="song-changing-btns">
                <IoMdShuffle
                  onClick={handleToggleShuffle}
                  className="controls-icon5"
                />
              </div>
            </div>
            <div></div>
            <div className="song-playing-area3">
              <div className="volume-btn-container">
                <div className="volume-button">
                  <BsFillVolumeUpFill className="volume-btn" />
                </div>
                <div className="volume-increase-btn-cont">
                  <input 
                  className="volume-increase-btn" 
                  type="range" 
                  name="volume"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange} 
                
                />
                </div>
              </div>
              <div className="audio-type">Audio High</div>
              <div>
                <IoIosArrowUp
                  onClick={handlerExpander}
                  className="song-details"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MusicControlComp;
