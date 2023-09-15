import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import MusicCollections from "../../MusicCollections/MusicCollections.jsx";
import TrackListHeader from "../../TrackList/TrackListHeader.jsx";
import TrackList from "../../TrackList/TrackList.jsx";
import "react-multi-carousel/lib/styles.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import image1 from "../../../assets/trending-movies1.jpg"
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsFillPlayFill,BsThreeDotsVertical } from "react-icons/bs";


function TrendingSongs() {
  // const darkMode = useSelector((state) => state.usersData.darkMode);
  // console.log("print dark mode val", darkMode);
  const [screenSize, setScreenSize] = useState(window.innerWidth < 960);
  const [scrolling, setScrolling] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);

  const audioRef = useRef(null);



  // const [currentSong, setCurrentSong] = useState({
  //   imageUrl:"https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf945447ae38c3e33a66ef.jpg",
  //   title:"O Meri Mehbooba Mehbooba Mehbooba",
  //   audioUrl:"https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf945447ae38c3e33a66ef.mp3",
  //   description:"An emotive journey, blending heartbreak and hope in soul-stirring symphonies. A genre-defying artist of substance.",
  // })
  const [currentSong, setCurrentSong] = useState([]);

  console.log(currentSong)



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
    try {
      const fromLocalStorage = JSON.parse(localStorage.getItem('localSongs'));
      if (fromLocalStorage && fromLocalStorage.data) {
        console.log("Data from local storage:", fromLocalStorage.data);
        const updatedSongs = fromLocalStorage.data.map((item) => ({
          imageUrl: item.thumbnail || "",
          title: item.title || "",
          audioUrl: item.audio_url || "",
          description: (item.artist && item.artist[0] && item.artist[0].description) || "",
          artist: (item.artist && item.artist[0] && item.artist[0].name) || "",
          id: item._id || "",
        }));
        console.log("Updated songs:", updatedSongs);
        setCurrentSong(updatedSongs); // Set the songs as an array
      } else {
        console.error("Data not found in local storage.");
      }
    } catch (error) {
      console.error("Error parsing data from local storage:", error);
    }
  }
  


  useEffect(()=> {
      localStorageDataGetting();
  }, [])

  const currentSongArray = Object.keys(currentSong).map((key)=>currentSong[key])


  return (
    <>
        <audio
          ref={audioRef}
          src={currentSong.audioUrl}
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
                  <img className="posterPrime" src={currentSong[0].imageUrl} alt="img" />
              </div>
              <div className="button-details-splitter">
              <div className="song-button">
                  <button className="song-play-btn">Play Song</button>
                  
                  <BiHeart className="fav-song-adding"/>

              </div>
              <div className="songs-side-details">
                  <div className="song-line1">
                      <div className="song-name1">{currentSong[0].title}</div>
                      <div className="song-movie-name">
                        (From "{currentSong[0].title}") Song | <span>{currentSong[0].artist}</span>
                      </div>
                  </div>
                  <p className="song-line2">
                      {currentSong[0].description}
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
      </div>    
      {!screenSize && scrolling ? (
        <div className="track-list-header">
          <img className="track-list-header-img" src={currentSong[0].imageUrl} alt="img" />
          <div className="song-genere">
            <p className="song-name">{currentSong[0].title} </p>
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
                {/* <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image1} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                        04:20
                      </p>
                  </td>
                </tr> */}

                {/* {currentSong.map((item)=> (
                  <div key={item.id}>
                    Hi
                  </div>

                ))} */}

                {currentSongArray.map((tracks, index)=> (
                  <tr key={index}>
                    <td className="table-col-1">{index+1}</td>
                    <td className="table-col-2">
                      <div className="track-img-play">
                        <BsPlayCircle className="play-track-icon" />
                        <img src={image1} alt="tracker-img" className="tracker-image" />
                      </div>
                      <div className="track-name-premium">
                        <button className="premium-btn">Premium</button>
                        <p className="song-name">Nenjukul</p>
                      </div>
                    </td>
                    <td className="table-col-3">
                      <p className="singer-name"> Karthik </p>
                    </td>
                    <td className="table-col-4"> 
                        <p className="track-movie-name">
                            Varanam Aayiram 
                        </p>
                    </td>
                    <td className="table-col-5"> 
                        <p className="track-duration">
                          04:20
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

              
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image1} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
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
             
              </tbody>
            </table>
          </div>
        }


      </div>
    </>
  );
}

export default TrendingSongs;
