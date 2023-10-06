import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "../../../action";
import Loader from "react-js-loader";

import "react-multi-carousel/lib/styles.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsFillPlayFill, BsThreeDotsVertical,} from "react-icons/bs";
import { fetchAlbum } from "../../Fetching/fetching";


function AlbumSongPage2() {
  const [showContent, setShowContent] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth < 960);
  const [scrolling, setScrolling] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);

  let { albumId } = useParams();

  const dispatch = useDispatch();

  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
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

  // console.log(albumId, albumName, " id checking");

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumData = await fetchAlbum();
        const index = albumData.findIndex((item) => item._id === albumId);
        const selectedSong = albumData[index];
        const updatedSongs = {
          key: selectedSong._id,
          url: selectedSong.image,
          name: selectedSong.title || "",
          audio: selectedSong.songs || "",
          description: selectedSong.description || "",
          artist: selectedSong.artists,
          id: selectedSong._id,
          album: "yes",
        };
        setCurrentSong(updatedSongs);

        if (updatedSongs && updatedSongs.audio) {
          const songsOfMovie = updatedSongs.audio.map((item) => ({
            audio: item.audio_url || "",
            songName: item.title || "",
            image: updatedSongs.url || "",
            id: item._id,
            album: "yes",
          }));          
          setCurrentTrack(songsOfMovie);
          setShowContent(true);
        }
      } catch (error) {
        error
      }
    }

    fetchData();
    
  }, []);

  // console.log("currentSong -> ", currentSong);
  
  const handleSongClicker = (data) => {
    // console.log("all data -> ", data);
    dispatch(actions.setAlbumData(currentTrack));
    dispatch(actions.setActiveSong(data));
  };



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
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
            src={currentTrack.length > 0 ? currentTrack[0].audio : ""}
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
                    onClick={() => handleSongClicker(currentTrack[0])}
                    className="prime-poster-play poster-play-option"
                  />
                  <img
                    className="posterPrime"
                    src={currentSong.url}
                    alt="img"
                  />
                </div>
                <div className="button-details-splitter">
                  <div className="song-button">
                    <button
                      onClick={() => handleSongClicker(currentTrack[0])}
                      className="song-play-btn"
                    >
                      Play Song
                    </button>
                    {/* <BiHeart className="fav-song-adding" /> */}
                  </div>
                  <div className="songs-side-details">
                    <div className="song-line1">
                      <div className="song-name1">{currentSong.name}</div>
                      <div className="song-movie-name">
                        (From {currentSong.name}) Song |{" "}
                        <span>
                          {currentSong.artist &&
                          currentSong.artist[0] &&
                          currentSong.artist[0].name
                            ? currentSong.artist[0].name
                            : ""}
                        </span>
                      </div>
                    </div>
                    <p className="song-line2">{currentSong.description}</p>
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
                  src={currentSong.url}
                  alt="img"
                />
                <div className="song-genere">
                  <p className="song-name">{currentSong.name} </p>
                </div>
                <button
                  onClick={() => handleSongClicker(currentTrack[0])}
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
                      {currentTrack.map((tracks, index) => (
                        <tr
                          key={tracks.id || index}
                          onClick={() => handleSongClicker(currentTrack[index])}
                        >
                          <td className="table-col-1">{index + 1}</td>
                          <td className="table-col-2">
                            <div className="track-img-play">
                              <BsPlayCircle className="play-track-icon" />
                              <img
                                src={tracks.image}
                                alt="tracker-img"
                                className="tracker-image"
                              />
                            </div>
                            <div className="track-name-premium">
                              <button className="premium-btn">Premium</button>
                              <p className="song-name"> {tracks.songName} </p>
                            </div>
                          </td>
                          <td className="table-col-3">
                            <p className="singer-name"> {} </p>
                          </td>
                          <td className="table-col-4">
                            <p className="track-movie-name">
                              {tracks.songName}
                            </p>
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
                      {currentTrack.map((item, index) => (
                        <tr
                          key={item.id || index}
                          className="table-tr-mob"
                          onClick={() => handleSongClicker(currentTrack[index])}
                        >
                          <td className="table-td-1">{index + 1}</td>
                          <td className="table-td-2">
                            <div className="table-td-2-img">
                              <img
                                src={item.image}
                                alt="img"
                                className="table-mob-view-poster"
                              />
                              <div className="table-button-artist">
                                <button className="premium-button">
                                  Premium
                                </button>
                                <p className="table-mob-artist">
                                  {/* {item.artist} */}
                                </p>
                              </div>
                              <p className="table-song-name">{item.songName}</p>
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
                      {/* {currentSong.audio.map((item, index) => (
                        <tr
                          key={item.id || index}
                          className="table-tr-mob"
                          onClick={() => handleSongClicker(currentSong[index])}
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
                                  { item.artist &&
                                  item.artist[0] &&
                                  item.artist[0].name ? item.artist[0].name : ""
                                  }{" "}
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
                      ))} */}
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

export default AlbumSongPage2;

