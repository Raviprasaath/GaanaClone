import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../../action";
import Loader from "react-js-loader";

import "react-multi-carousel/lib/styles.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsFillPlayFill, BsThreeDotsVertical, } from "react-icons/bs";

function SearchResultPage() {
  const [showContent, setShowContent] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth < 960);
  const [scrolling, setScrolling] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);
  const [songIndex, setIndex] = useState(0);

  const selectedSong = useSelector((state) => state.usersData.resultSongs);
  const selectedSongAll = useSelector((state) => state.usersData.resultData);
  
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


 

  useEffect(() => {
    function dataGetting() {
      if (
        (selectedSong && selectedSong.fromSearch === 'yes' && selectedSong.category === 'search-top20') ||
        selectedSong.category === 'search-allSongs'
      ) {
      const updatedSongs = selectedSongAll && selectedSongAll.map((item, index)=>({
        key: `${item._id}&${index}`,
        url: item.thumbnail,
        name: item.title || "",
        title: item.title,
        audio_url: item.audio_url || "",
        description: 
          item.artist && item.artist[0] &&
          item.artist[0].description ?
          item.artist[0].description : "",
        artist: 
          item.artist && item.artist[0] &&
          item.artist[0].name? 
          item.artist[0].name : "",
        id: item._id,
        fromSearch: selectedSong.fromSearch,
        category: selectedSong.category,
      }))
        setCurrentSong(updatedSongs);
        setShowContent(true);
      } else if ((selectedSong && selectedSong.fromSearch === 'yes' && selectedSong.category === 'search-artistSong')) {
        const updated = selectedSongAll && selectedSongAll[0].songs && selectedSongAll[0].songs 
        .map((item, index)=> ({
          key: `${item}&${index}`,
          url: selectedSongAll[0].image,
          name: selectedSongAll[0].name || "",
          title: selectedSongAll[0].name,
          audio_url: `https://newton-project-resume-backend.s3.amazonaws.com/audio/${item}.mp3` || "",
          description: selectedSongAll[0].description,
          artist: selectedSongAll[0].name,            
          id: item,
          fromSearch: selectedSong.fromSearch,
          category: selectedSong.category,
        }))
        setCurrentSong(updated);
        // console.log("updatedSongs", updated)
        setShowContent(true);      


      } else {
        {
          const updated = selectedSongAll && selectedSongAll[0].songs && selectedSongAll[0].songs 
          .map((item, index)=> ({
            key: `${item._id}&${index}`,
            url: item.thumbnail,
            name: item.title || "",
            title: selectedSong.title,
            audio_url: item.audio_url || "",
            description: 
              item.artist && item.artist[0] &&
              item.artist[0].description ?
              item.artist[0].description : "",
            artist: "",
              // item.artist && item.artist[0] &&
              // item.artist[0].name? 
              // item.artist[0].name : "",
            id: item._id,
            fromSearch: selectedSong.fromSearch,
            category: selectedSong.category,
          }))
          setCurrentSong(updated);
          // console.log("updatedSongs", updated)
          setShowContent(true);
        }
      }
    }
    



    dataGetting();
  }, [selectedSongAll]);

  
  const handleSongClicker = (data) => {
    dispatch(actions.setActiveSong(data));
    dispatch(actions.setAlbumData(currentSong));
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

  const currentSongArray = Object.keys(currentSong).map(
    (key) => currentSong[key]
  );

  return (
    <>
      {showContent ? (
        <div>
          <audio
            ref={audioRef}
            src={currentSongArray.length > 0 ? currentSongArray[0].audio : ""}
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
                    onClick={() => handleSongClicker(currentSong[songIndex])}
                    className="prime-poster-play poster-play-option"
                  />
                  <img
                    className="posterPrime"
                    src={currentSong && currentSong[songIndex] && currentSong[songIndex].url ? currentSong[songIndex].url : ""}
                    alt="img"
                  />
                </div>
                <div className="button-details-splitter">
                  <div className="song-button">
                    <button
                      onClick={() => handleSongClicker(currentSong[songIndex])}
                      className="song-play-btn"
                    >
                      Play Song
                    </button>
                    {/* <BiHeart className="fav-song-adding" /> */}
                  </div>
                  <div className="songs-side-details">
                    <div className="song-line1">
                      <div className="song-name1">{currentSong && currentSong[songIndex] && currentSong[songIndex].title ?  currentSong[songIndex].title : ""}</div>
                      <div className="song-movie-name">
                        (From {currentSong && currentSong[songIndex] && currentSong[songIndex].title ?  currentSong[songIndex].title : ""}) Song |{" "}
                        <span>
                        {currentSong && currentSong[songIndex] && currentSong[songIndex].name ?  currentSong[songIndex].name : ""}
                        </span>
                      </div>
                    </div>
                    <p className="song-line2">{currentSong && currentSong[songIndex] && currentSong[songIndex].description ?  currentSong[songIndex].description : ""}</p>
                    <div className="track-details-warp">
                      <button className="track-duration">
                        {/* {formatTime2(duration)} */}
                        0 min 20 sec
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
                  src={currentSong && currentSong[songIndex] && currentSong[songIndex].url ?  currentSong[songIndex].url : ""}
                  alt="img"
                />
                <div className="song-genere">
                  <p className="song-name">{currentSong && currentSong[songIndex] && currentSong[songIndex].title ?  currentSong[songIndex].title : ""} </p>
                </div>
                <button
                  onClick={() => handleSongClicker(currentTrack[songIndex])}
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
                      {currentSongArray.map((tracks, index) => (
                        <tr
                          key={tracks.id || index}
                          onClick={() => {handleSongClicker(currentSong[index]), setIndex(index)}}
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
                            <p className="track-movie-name">
                              {tracks.name}
                            </p>
                          </td>
                          <td className="table-col-5">
                            <p className="track-duration">
                              {/* {formatTime(duration)} */}
                              00:20
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
                          key={item.id || index}
                          className="table-tr-mob"
                          onClick={() => {handleSongClicker(currentSong[index]), setIndex(index)}}
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
                                  {item.artist}
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

export default SearchResultPage;

