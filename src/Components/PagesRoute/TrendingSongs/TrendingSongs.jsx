import { useEffect, useState } from "react";
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
  const [currentSong, setCurrentSong] = useState({})

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
    const fromLocalStorage = JSON.parse(localStorage.getItem('localSongs'));
    const dataFromLocalStorage = (fromLocalStorage.data);
    dataFromLocalStorage.map((item)=> {
      console.log(item.title, item.thumbnail, item.audio_url, item.artist[0].description)
    })
  }

  useEffect(()=> {
    localStorageDataGetting();
  }, [])



  return (
    <>
      <div>
        <div className="musicCollections">
          <div className="traction-splitter">
              <div className="track-section">
                  <AiOutlinePlayCircle className="prime-poster-play poster-play-option" />
                  <img className="posterPrime" src={image1} alt="" />
              </div>
              <div className="button-details-splitter">
              <div className="song-button">
                  <button className="song-play-btn">Play Song</button>
                  
                  <BiHeart className="fav-song-adding"/>

              </div>
              <div className="songs-side-details">
                  <div className="song-line1">
                      <span className="song-name1">Hosanna</span>
                      <span className="song-movie-name">
                      (From "Vinnaithaandi Varuvaayaa") Song |
                      <span>Vijay Prakash</span>
                      </span>
                  </div>
                  <p className="song-line2">
                      Hosanna <span>From "Vinnaithaandi Varuvaayaa"</span>{" "}
                  </p>

                  <div className="track-details-warp">
                    <a className="song-line3" href="#">Hosanna</a>
                    <span className="dot">•</span>
                    <span className="released-year">2010</span>
                    <span className="dot">•</span>
                    <button className="track-duration">4 min 48sec</button>
                  </div>
              </div>

          </div>
          </div>
        </div>
      </div>    
      {!screenSize && scrolling ? (
        <div className="track-list-header">
          <img className="track-list-header-img" src={image1} alt="img" />
          <div className="song-genere">
            <p className="song-name">Jillunu Oru Kadhal </p>
            <p className="song-divider">-</p>
            <p className="songs-types">Romantic Hits Tamil</p>
          </div>
          <button className="track-list-playing-option">Play All</button>
          <AiOutlineHeart className="playlist-heart" />
        </div>
      ) : (
        <div></div>
      )}

<div className="trackList">
        {screenSize &&         
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
                <tr >
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
                </tr>                
              </tbody>
            </table>
          </div>
        }
        {
          !screenSize && 
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
