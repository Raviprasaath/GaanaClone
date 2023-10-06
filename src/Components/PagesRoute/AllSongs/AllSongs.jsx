import { useEffect, useState, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsFillPlayFill, BsThreeDotsVertical, } from "react-icons/bs";
import { useDispatch } from "react-redux";
import actions from "../../../action";
import Loader from "react-js-loader";
import { fetchAllSongs } from '../../Fetching/fetching';
import action from "../../../action";

function AllSongs() {
  const [showContent, setShowContent] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth < 960);
  const [scrolling, setScrolling] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);


  const dispatch = useDispatch();

  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart( 2, "0" )}`;
  };

  const formatTime2 = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes} min ${seconds} sec`;
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth < 960);
    };
    const handleScrolling = () => {
      if (window.scrollY >= 440) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrolling);
    };
  }, [scrolling]);

  
  useEffect(() => {
    const fetching = async () => {
    try {      
        const fetchAllSongData = await fetchAllSongs();
        
        const result2 = fetchAllSongData.map((item) => ({
          key: item._id,
          url: item.thumbnail || "",
          name: item.title || "",
          audio: item.audio_url || "",
          description:
            (item.artist && item.artist[0] && item.artist[0].description) || "",
          artist: (item.artist && item.artist[0] && item.artist[0].name) || "",
          mood: item.mood || "",
          songId: item._id || "",
          album:"no",
        }));
        setCurrentSong(result2);
        setShowContent(true);
        dispatch(action.setAllSongsData(fetchAllSongData));
      } catch (error) {
        console.log(error);
      }
    }

    fetching();

  }, []);

  const handleSongClicker = (data) => {
    dispatch(actions.setActiveSong(data));
  };



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  useEffect(()=> {
    scrollToTop();
  }, [])



  return (
    <>
      {showContent ? (
        <div>
          <audio          
            ref={audioRef}
            src={currentSong.length > 0 ? currentSong[0].audio : ""}
            onTimeUpdate={handleTimeUpdate}
            controls
            autoPlay
            muted
            className="audio-hide"
          />
          <div>
            <div className="musicCollections">
              <div className="traction-splitter">
                <div className="track-section">
                  <AiOutlinePlayCircle
                    onClick={() => handleSongClicker(currentSong[currentSongIndex])}
                    className="prime-poster-play poster-play-option"
                  />
                  <img
                    className="posterPrime"
                    src={currentSong[currentSongIndex].url}
                    alt="img"
                  />
                </div>
                <div className="button-details-splitter">
                  <div className="song-button">
                    <button
                      onClick={() => handleSongClicker(currentSong[currentSongIndex])}
                      className="song-play-btn"
                    >
                      Play Song
                    </button>

                    {/* <BiHeart className="fav-song-adding" /> */}
                  </div>
                  <div className="songs-side-details">
                    <div className="song-line1">
                      <div className="song-name1">{currentSong[currentSongIndex].name}</div>
                      <div className="song-movie-name">
                        (From "{currentSong[currentSongIndex].name}") Song |{" "}
                        <span>{currentSong[currentSongIndex].artist}</span>
                      </div>
                    </div>
                    <p className="song-line2">{currentSong[currentSongIndex].description}</p>
                    <div className="track-details-warp">
                      <button className="track-duration">
                        {formatTime2(duration)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!screenSize && scrolling ? (
              <div className="track-list-header">
                <img
                  className="track-list-header-img"
                  src={currentSong[currentSongIndex].url}
                  alt="img"
                />
                <div className="song-genere">
                  <p className="song-name">{currentSong[currentSongIndex].name} </p>
                </div>
                <button
                  onClick={() => handleSongClicker(currentSong[currentSongIndex])}
                  className="track-list-playing-option"
                >
                  Play All
                </button>
                {/* <AiOutlineHeart className="playlist-heart" /> */}
              </div>
            ) : (
              <div></div>
            )}
            <div className="trackList">
              {!screenSize && (
                <div className="trackList-container">
                  <table className="table-container">
                    <thead className="table-header">
                      <tr>
                        <th className="table-s-no"></th>
                        <th className="track-header">Track</th>
                        <th>Artists</th>
                        <th>Album</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody className="table-body-container">
                      {currentSong.map((tracks, index) => (
                        <tr
                          key={tracks._id || index}
                          onClick={() => {handleSongClicker(currentSong[index]); setCurrentSongIndex(index) }}
                        >
                          <td className="table-col-1">{index + 1}</td>
                          <td className="table-col-2">
                            <div className="track-img-play">
                              <BsPlayCircle className="play-track-icon" />
                              <img
                                src={tracks.url}
                                alt="tracker-img"
                                className="tracker-image"
                              />
                            </div>
                            <div className="track-name-premium">
                              <button className="premium-btn">Premium</button>
                              <p className="song-name"> {tracks.name} </p>
                            </div>
                          </td>
                          <td className="table-col-3">
                            <p className="singer-name"> {tracks.artist} </p>
                          </td>
                          <td className="table-col-4">
                            <p className="track-movie-name">{tracks.name}</p>
                          </td>
                          <td className="table-col-5">
                            <p className="track-duration">
                              {formatTime(duration)}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {screenSize && (
                <div className="table-mobile-container">
                  <table>
                    <tbody>
                      {currentSong.map((item, index) => (
                        <tr
                          key={item._id || index}
                          className="table-tr-mob"
                          onClick={() => {handleSongClicker(currentSong[index]); setCurrentSongIndex(index) }}
                        >
                          <td className="table-td-1">{index + 1}</td>
                          <td className="table-td-2">
                            <div className="table-td-2-img">
                              <img
                                src={item.url}
                                alt="img"
                                className="table-mob-view-poster"
                              />
                              <div className="table-button-artist">
                                <button className="premium-button">
                                  Premium
                                </button>
                                <p className="table-mob-artist">
                                  {" "}
                                  {item.artist}{" "}
                                </p>
                              </div>
                              <p className="table-song-name">{item.name}</p>
                            </div>
                          </td>
                          <td className="table-td-3">
                            <button className="btn-play">
                              <BsFillPlayFill className="play-button" />
                            </button>
                            <button className="btn-option">
                              <BsThreeDotsVertical className="play-option" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
              <Loader size="lg"/>
        </div>
      )}
    </>
  );
}

export default AllSongs;




