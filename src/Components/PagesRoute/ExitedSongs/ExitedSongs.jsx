import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsFillPlayFill,BsThreeDotsVertical } from "react-icons/bs";



function ExitedSongs() {
  const [showContent, setShowContent] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth < 960);
  const [scrolling, setScrolling] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentSong, setCurrentSong] = useState([]);
  const [renderCard, setRenderCard] = useState(false);
  const [dataFromStore, setDataFromStore] = useState([]);  



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


  function localStorageDataGetting() {
    const localStorageFiltered = JSON.parse(localStorage.getItem('localSongs'));    
    const storedData = localStorageFiltered.data;
    const result = storedData.filter((item)=> item.mood==='excited')
      .map((item) => ({      
        imageUrl: item.thumbnail || "",
        title: item.title || "",
        audioUrl: item.audio_url || "",
        description: (item.artist && item.artist[0] && item.artist[0].description) || "",
        artist: (item.artist && item.artist[0] && item.artist[0].name) || "",
        mood: (item.mood) || "",
        id: item._id || "",
      }))
        
    setDataFromStore(result)
      
  }

  useEffect(()=> {
    localStorageDataGetting();
    setTimeout(() => {
      setRenderCard(true);      
    }, 0);
  }, [])

  // const currentSongArray = Object.keys(dataFromStore).map((key)=>dataFromStore[key])


  useEffect(()=> {
    setTimeout(()=> {
      setShowContent(true)
    }, 0)
  })
  

  return (
    <>      
      {renderCard ? (
        <div>
          <audio
              ref={audioRef}
              src={dataFromStore.length > 0 ? dataFromStore[0].audioUrl : ""}
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
                      <AiOutlinePlayCircle className="prime-poster-play poster-play-option" />
                      <img className="posterPrime" src={dataFromStore[1].imageUrl} alt="img" />
                  </div>
                  <div className="button-details-splitter">
                  <div className="song-button">
                      <button className="song-play-btn">Play Song</button>
                      
                      <BiHeart className="fav-song-adding"/>

                  </div>
                  <div className="songs-side-details">
                      <div className="song-line1">
                          <div className="song-name1">{dataFromStore[1].title}</div>
                          <div className="song-movie-name">
                            (From "{dataFromStore[1].title}") Song | <span>{dataFromStore[1].artist}</span>
                          </div>
                      </div>
                      <p className="song-line2">
                          {dataFromStore[1].description}
                      </p>
                      <div className="track-details-warp">
                        {/* <a className="song-line3" href="#">Hosanna</a>
                        <span className="dot">•</span>
                        <span className="released-year">2010</span>
                        <span className="dot">•</span> */}
                        <button className="track-duration">{formatTime2(duration)}</button>
                      </div>
                  </div>
              </div>
              </div>
            </div>
            {!screenSize && scrolling ? (
            <div className="track-list-header">
              <img className="track-list-header-img" src={dataFromStore[1].imageUrl} alt="img" />
              <div className="song-genere">
                <p className="song-name">{dataFromStore[1].title} </p>
                {/* <p className="song-divider">-</p>
                <p className="songs-types">Romantic Hits Tamil</p> */}
              </div>
              <button className="track-list-playing-option">Play All</button>
              <AiOutlineHeart className="playlist-heart" />
            </div>
          ) : (
            <div></div>
          )}
          <div className="trackList">
            {!screenSize &&         
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

                    {dataFromStore.map((tracks, index)=> (
                      <tr key={index}>
                        <td className="table-col-1">{index+1}</td>
                        <td className="table-col-2">
                          <div className="track-img-play">
                            <BsPlayCircle className="play-track-icon" />
                            <img src={tracks.imageUrl} alt="tracker-img" className="tracker-image" />
                          </div>
                          <div className="track-name-premium">
                            <button className="premium-btn">Premium</button>
                            <p className="song-name"> {tracks.title} </p>
                          </div>
                        </td>
                        <td className="table-col-3">
                          <p className="singer-name"> {tracks.artist} </p>
                        </td>
                        <td className="table-col-4"> 
                            <p className="track-movie-name">
                                {tracks.title}
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
            }
            {
              screenSize && 
              <div className="table-mobile-container">  
                <table>
                  <tbody>

                  
                {dataFromStore.map((item, index)=> (
                  <tr key={item.id} className="table-tr-mob">                    
                    <td className="table-td-1">{index+1}</td>
                    <td className="table-td-2">
                      <div className="table-td-2-img">
                        <img src={item.imageUrl} alt="img" className="table-mob-view-poster" />
                        <div className="table-button-artist">
                          <button className="premium-button">Premium</button>
                          <p className="table-mob-artist"> {item.artist} </p>
                        </div>
                        <p className="table-song-name">
                          {item.title}
                        </p>
                      </div>
                    </td>
                    <td className="table-td-3">
                      <button className="btn-play">
                        <BsFillPlayFill className="play-button"/>
                      </button>
                      <button className="btn-option"> 
                        <BsThreeDotsVertical className="play-option"/>
                      </button>
                    </td>
                  </tr>
                ))}
                
                  </tbody>
                </table>
              </div>
            }
          </div>
          </div>
      </div>
      ) : (
        <div></div>
      )}      
    </>
  );
}

export default ExitedSongs;
