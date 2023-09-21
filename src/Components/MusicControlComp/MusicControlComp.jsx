import { useState, useEffect, useRef, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import image1 from "../../assets/1.jpg";

import song1 from "../../assets/audio/song-1.mp3";
import song2 from "../../assets/audio/song-2.mp3";
import song3 from "../../assets/audio/song-3.mp3";
import song4 from "../../assets/audio/song-4.mp3";
import song5 from "../../assets/audio/song-5.mp3";

import { BsPlayCircle, BsFillPlayCircleFill, BsFillVolumeUpFill, BsFillPauseCircleFill, } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp, IoMdRepeat, IoMdShuffle, } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSolidVolumeMute, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { useLocation } from "react-router-dom";

import actions from "../../action";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

function MusicControlComp(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [lifting, setLifting] = useState(true);

  let songList = [];
  const activeSong = useSelector((state) => state.usersData.activeSong);
  const topTrendingSongList = useSelector((state) => state.usersData.trendingSong);
  const happySongList = useSelector((state) => state.usersData.happySong);
  const romanticSongList = useSelector((state) => state.usersData.romanticSong);
  const sadSongList = useSelector((state) => state.usersData.sadSong);
  const excitedSongList = useSelector((state) => state.usersData.excitedSong);
  const allSongsList = useSelector((state) => state.usersData.allSongs);

  // console.log("current song ", activeSong);

  if (activeSong.featured === "Trending songs") {
    songList = topTrendingSongList;
  } else if (activeSong.mood === "happy") {
    songList = happySongList;
  } else if (activeSong.mood === "romantic") {
    songList = romanticSongList;
  } else if (activeSong.mood === "sad") {
    songList = sadSongList;
  } else if (activeSong.mood === "excited") {
    songList = excitedSongList;
  } else {
    songList = allSongsList;
  }


  const handleSongClicker = (data) => {
    if (audioRef.current) {
      audioRef.current.src = data.audio_url;
      audioRef.current.play();
    }
    // console.log("from inside music player data -> ", data);
    dispatch(actions.setActiveSong(data));
  };

  let songListIndex = [];

  const songTrackList = [];

  // working code

  // songList?.map((item) => {
  //   songTrackList.push(item.audio_url);
  //   songListIndex.push(item._id);
  // });
  // console.log("songList -> ", songList);

  // // let tracks = [ song1, song2, song3, song4, song5,  ];
  // let tracks = songTrackList.length !== 0 ? songTrackList : { song1 };

  if (Array.isArray(songList)) {
    songList.forEach((item) => {
      if (item.audio_url && item._id) {
        songTrackList.push(item.audio_url);
        songListIndex.push(item._id);
      }
    });
  }
  

  const tracks = songTrackList.length !== 0 ? songTrackList : ["song1"];
  // console.log("tracks -> ", tracks);



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
    const currentId = activeSong.songId ? activeSong.songId : activeSong._id;
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


  // #region -----------music expander -------------
  const [screenSize, setScreensize] = useState(window.innerWidth > 960);
  const [isOpen, setIsOpen] = useState(false);
  const [minimize, setMinimizer] = useState(true);

  const handlerMinimize = () => {
    setMinimizer(false);
    setLifting(true);
  };

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
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
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
                      src=
                      // {
                      //   activeSong.thumbnail?activeSong.thumbnail : songList &&
                      //   songList[currentTrack] &&
                      //   songList[currentTrack].thumbnail
                      //     ? songList[currentTrack].thumbnail
                      //     : image1                        
                      // }
                      {
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
                            {
                            // activeSong.title?activeSong.title : 
                            songList &&
                            songList[currentTrack] &&
                            songList[currentTrack].title}
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
                            onChange={handleSeek}
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
                        // activeSong.thumbnail?activeSong.thumbnail : 
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
                          {
                          // activeSong.title?activeSong.title : 
                          songList &&
                          songList[currentTrack] &&
                          songList[currentTrack].title}
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
                          onChange={handleSeek}
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

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextTrack}
        src={tracks[currentTrack]}
        controls
        autoPlay
      />

      <div className="music-control-comp">
        {isMobile ? (
          <section className="mob-screen-controls">
            <input
              type="range"
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
                <img
                  className="current-playing-song"
                  src={
                    songList &&
                    songList[currentTrack] &&
                    songList[currentTrack].thumbnail
                      ? songList[currentTrack].thumbnail
                      : image1
                  }
                  alt=""
                />
              </div>
              <div className="song-name-lines">
                <p className="song-name-1">
                  {activeSong.name ? activeSong.name : "Once upon a Time"}
                </p>
                <p className="song-name-2">
                  {activeSong.name ? activeSong.name : "Once upon a Time"} (From
                  Movie)
                </p>
              </div>
            </div>
            <div className="song-controls-play">
              <div className="icons-control">
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
            <input
              type="range"
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
                  <img
                    className="current-playing-song"
                    src={
                      songList &&
                      songList[currentTrack] &&
                      songList[currentTrack].thumbnail
                        ? songList[currentTrack].thumbnail
                        : image1
                    }
                    alt=""
                  />
                </div>
                <div>
                  <p className="song-name">
                    {songList &&
                    songList[currentTrack] &&
                    songList[currentTrack].title
                      ? songList[currentTrack].title
                      : ""}
                  </p>
                  <p className="song-details">
                    {songList &&
                    songList[currentTrack] &&
                    songList[currentTrack].title
                      ? songList[currentTrack].title
                      : ""}
                  </p>
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
              <div className="song-duration-track">
                {isNaN(duration) || isNaN(currentTime)
                  ? "0:00 / 0:00"
                  : `${formatTime(currentTime)} / ${formatTime(duration)}`}
              </div>

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
                <div
                  id="place1"
                  className="bg-play"
                  onClick={playing ? handlePause : handlePlay}
                >
                  {/* <div id="place3" className="bg-play" onClick={playing ? ()=>audioRef.current.pause() : ()=>audioRef.current.play()} > */}
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
            <div></div>
            <div className="song-playing-area3">
              <div className="volume-btn-container">
                <div
                  className="volume-button"
                  // onMouseEnter={() => audioRef.current.volume = isMuted ? 0 : volume}
                  // onMouseLeave={() => audioRef.current.volume = isMuted ? 0 : volume}
                  onClick={handleMuteBtn}
                >
                  {isMuted ? (
                    <BiSolidVolumeMute className="volume-btn" />
                  ) : (
                    <BsFillVolumeUpFill className="volume-btn" />
                  )}
                </div>
                <div className="volume-increase-btn-cont">
                  <input
                    className="volume-increase-btn"
                    type="range"
                    name="volume"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
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

export default memo(MusicControlComp);
