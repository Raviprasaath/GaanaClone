import image from "../../assets/trending-movies6.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdRepeat, IoMdShuffle, IoIosArrowDown } from "react-icons/io";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";

import Navbar from "../NavbarSide/Navbar";
import NavbarTop from "../NavbarSide/NavbarTop";
import { FaBars } from "react-icons/fa";
import actions from "../../action";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function MusicPlayer(props) {
  const [screenSize, setScreensize] = useState(window.innerWidth > 960);
  const [isOpen, setIsOpen] = useState(false);
  const [minimize, setMinimizer] = useState(true);
  const dispatch = useDispatch();

  const handlerMinimize = () => {
    setMinimizer(false)
    props.expanderMessage(minimize);
  }


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

    // #region ------------ song control ---------
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isLoopOn, setIsLoopOn] = useState(false);
    const [isShuffleOn, setIsShuffleOn] = useState(false);
    const [shuffledTracks, setShuffledTracks] = useState([]);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);
  
    useEffect(() => {
      if (location.pathname === "/" && playing) {
        handlePlay();
      }
    }, []);
  
    useEffect(() => {
      if (songTrackList.length !== 0) {
        if (!playing) {
          handlePlay();
        }
      }
    }, [activeSong]);
  
    const handlePlay = () => {
      audioRef.current.play();
      setPlaying(true);
    };
  
    const handlePause = () => {
      audioRef.current.pause();
      setPlaying(false);
    };
  
    useEffect(() => {
      const currentId = activeSong.songId;
      if (songListIndex.length > 0 && currentId !== "") {
        const index = songList.findIndex((d) => d._id === currentId);
        setCurrentTrack(index);
      }
    }, [activeSong]);
  
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
      setPlaying(true);
    };
  
    const handlePrevTrack = () => {
      if (currentTrack > 0) {
        setCurrentTrack((prevTrack) => prevTrack - 1);
      }
      setPlaying(true);
    };
  
    useEffect(() => {
      audioRef.current.src = tracks[currentTrack];
      if (playing) {
        handlePlay();
      }
    }, [currentTrack]);
  
    useEffect(() => {
      audioRef.current.addEventListener("ended", handleNextTrack);
  
      return () => {
        audioRef.current.removeEventListener("ended", handleNextTrack);
      };
    }, [currentTrack]);
  
    //---------------------- extra
    const handleVolumeChange = (e) => {
      const newVolume = e.target.value;
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
      setIsMuted(false);
    };
  
    const handleMuteBtn = () => {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    };
  
    function shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
  
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    };
  
    const handleSeek = (e) => {
      const newTime = e.target.value;
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    };
  
    const handleToggleLoop = () => {
      setIsLoopOn(!isLoopOn);
      audioRef.current.loop = !isLoopOn;
    };
  
    const handleToggleShuffle = () => {
      // setIsShuffleOn(!isShuffleOn);
      setIsShuffleOn((prev) => {
        if (!prev) {
          const shuffled = shuffleArray(tracks);
          setShuffledTracks(shuffled);
        }
        return !isShuffleOn;
      });
    };
  
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    };
  
    // #endregion ------------ song control ---------
    

    const handleSongClicker = (data) => {
      // console.log("from inside music player data -> ", data);
      dispatch(actions.setActiveSong(data));
    };


  return (
    <>
        <audio
          ref={audioRef}
          // onTimeUpdate={handleTimeUpdate}
          onEnded={handleNextTrack}
          src={tracks[currentTrack]}
          controls
          autoPlay
        />

        <div className="expanded-view-music-section">
          <div className="music-player-container">
            {!screenSize && (
              <div className="music-player">
                <div className="view-splitter">
                  <IoIosArrowDown
                    onClick={handlerMinimize}
                    className="drop-arrow"
                  />
                  <div className="poster-container">
                    <img
                      className="mobile-view-song-preview"
                      src={
                        songList &&
                        songList[currentTrack] &&
                        songList[currentTrack].thumbnail
                          ? songList[currentTrack].thumbnail
                          : image1
                      }
                      alt="img"
                    />
                    <div className="song-details-splitter">
                      <div className="poster-song-splitter">
                        <div className="song-name">
                          <p>
                            {songList &&
                            songList[currentTrack] &&
                            songList[currentTrack].title
                              ? songList[currentTrack].title
                              : ""}
                          </p>
                          <p>
                            <AiOutlineHeart className="heart-in" />
                          </p>
                        </div>
                        <div className="song-seeking-line">
                          <input
                            type="range"
                            className="song-time-tracker"
                            name="tracker"
                            min={0}
                            max={duration}
                            step={0.01}
                            value={currentTime}
                            // onChange={handleSeek}
                          />
                        </div>
                        <div className="song-duration">
                          <p className="song-starting">
                            {isNaN(duration) || isNaN(currentTime)
                              ? "0:00"
                              : `${formatTime(currentTime)}`}
                          </p>
                          <p className="song-balance">
                            {isNaN(duration) || isNaN(currentTime)
                              ? "0:00"
                              : `${formatTime(duration)}`}
                          </p>
                        </div>
                      </div>
                      <div className="song-playing-area2">
                        <div className="song-changing-btns">
                          <IoMdRepeat
                            onClick={handleToggleLoop}
                            className={
                              !isLoopOn
                                ? "controls-icon1"
                                : "controls-icon1 selectActivator"
                            }
                          />
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipPrevious
                            onClick={handlePrevTrack}
                            className="controls-icon2"
                          />
                        </div>
                        <div className="song-changing-btns-bg">
                          <div className="bg-white"></div>
                          <div
                            id="place1"
                            onClick={playing ? handlePause : handlePlay}
                            className="song-changing-btns"
                          >
                            {playing ? (
                              <BsFillPauseCircleFill className="controls-icon3" />
                            ) : (
                              <BsFillPlayCircleFill className="controls-icon3" />
                            )}
                          </div>
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
                            className={
                              !isShuffleOn
                                ? "controls-icon5"
                                : "controls-icon5 selectActivator"
                            }
                          />
                        </div>
                      </div>

                      <div style={{ padding: "5px 0px" }}></div>

                      <div className="table-td-2-img">
                        {songList.map((item, index) => (
                          <div
                            onClick={() => handleSongClicker(songList[index]) }
                            
                            key={item._id || index}
                            className="songs-collection"
                          >
                            <BsPlayCircle className="play-track-icon" />
                            <img
                              src={item.thumbnail}
                              alt="img"
                              className="table-mob-view-poster"
                            />
                            <div className="flex">
                              <div className="table-button-artist">
                                <button className="premium-button">
                                  Premium
                                </button>
                                <p className="table-mob-artist">
                                  {item?.artist[0]?.name}
                                </p>
                              </div>
                              <p className="table-song-name">{item.title}</p>
                            </div>
                            <p>
                              <AiOutlineHeart className="fav-remover" />
                            </p>
                          </div>
                        ))}
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
                      src={
                        songList &&
                        songList[currentTrack] &&
                        songList[currentTrack].thumbnail
                          ? songList[currentTrack].thumbnail
                          : image1
                      }
                      alt="img"
                    />
                    <div className="poster-song-splitter">
                      <div className="song-name">
                        <p>
                          {songList &&
                          songList[currentTrack] &&
                          songList[currentTrack].title
                            ? songList[currentTrack].title
                            : ""}
                        </p>
                        <p>
                          <AiOutlineHeart className="heart-in" />
                        </p>
                      </div>
                      <div className="song-seeking-line">
                        <input
                          type="range"
                          className="song-time-tracker"
                          name="tracker"
                          min={0}
                          max={duration}
                          step={0.01}
                          value={currentTime}
                          // onChange={handleSeek}
                        />
                      </div>
                      <div className="song-duration">
                        <p className="song-starting">
                          {isNaN(duration) || isNaN(currentTime)
                            ? "0:00"
                            : `${formatTime(currentTime)}`}
                        </p>
                        <p className="song-balance">
                          {isNaN(duration) || isNaN(currentTime)
                            ? "0:00"
                            : `${formatTime(duration)}`}
                        </p>
                      </div>
                      <div className="song-playing-area2">
                        <div className="song-changing-btns">
                          <IoMdRepeat
                            onClick={handleToggleLoop}
                            className={
                              !isLoopOn
                                ? "controls-icon1"
                                : "controls-icon1 selectActivator"
                            }
                          />
                        </div>
                        <div className="song-changing-btns">
                          <BiSkipPrevious
                            onClick={handlePrevTrack}
                            className="controls-icon2"
                          />
                        </div>
                        <div className="song-changing-btns">
                          <div className="bg-white-play"></div>
                          <div
                            id="place2"
                            className="bg-play"
                            onClick={playing ? handlePause : handlePlay}
                          >
                            {playing ? (
                              <BsFillPauseCircleFill className="controls-icon3" />
                            ) : (
                              <BsFillPlayCircleFill className="controls-icon3" />
                            )}
                          </div>
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
                            className={
                              !isShuffleOn
                                ? "controls-icon5"
                                : "controls-icon5 selectActivator"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="music-player-section-2">
                    <IoIosArrowDown
                      onClick={handlerMinimize}
                      className="drop-arrow"
                    />
                    <div className="table-td-2-img">
                      {songList.map((item, index) => (
                        <div
                          onClick={() => handleSongClicker(songList[index])}
                          key={item._id || index}
                          className="songs-collection"
                        >
                          <BsPlayCircle className="play-track-icon" />
                          <img
                            src={item.thumbnail}
                            alt="img"
                            className="table-mob-view-poster"
                          />
                          <div className="flex">
                            <div className="table-button-artist">
                              <button className="premium-button">
                                Premium
                              </button>
                              <p className="table-mob-artist">
                                {item?.artist[0]?.name}
                              </p>
                            </div>
                            <p className="table-song-name">{item.title}</p>
                          </div>
                          <p>
                            <AiOutlineHeart className="fav-remover" />
                          </p>
                        </div>
                      ))}
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

export default MusicPlayer;
