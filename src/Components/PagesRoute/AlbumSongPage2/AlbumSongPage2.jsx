import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../../action";

import "react-multi-carousel/lib/styles.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsFillPlayFill,BsThreeDotsVertical } from "react-icons/bs";



function AlbumSongPage2(  ) {
  const [showContent, setShowContent] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth < 960);
  const [scrolling, setScrolling] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);

  let { albumName, albumId } = useParams();

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

  console.log(albumId, albumName, " id checking");

  function localStorageDataGetting() {
    try {
      const fromLocalStorage = JSON.parse(localStorage.getItem("localAlbum"));
      const index = fromLocalStorage.data.findIndex((item) => item._id === albumId);
      console.log("index", index);
      const selectedSong = fromLocalStorage.data[index];
      
      const updatedSongs = ({
        key: selectedSong._id,
        url: selectedSong.image,        
        name: selectedSong.title || "",
        audio: selectedSong.songs || "",
        description: selectedSong.description || "",
        artist: selectedSong.artists,        
        id: selectedSong._id,
      });
      setCurrentSong(updatedSongs);
    } catch (error) {
      console.error("Error parsing data from local storage:", error);
    }
  }

  console.log("current -> ", currentSong)

  const handleSongClicker = (data) => {
    console.log("all data -> ",data);
    dispatch(actions.setActiveSong(data));
  };

  useEffect(() => {
    localStorageDataGetting();
  }, []);

  const currentSongArray = Object.keys(currentSong).map(
    (key) => currentSong[key]
  );

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 0);
  });

  return (
    // <>
    //   {showContent ? (
    //     <div>
    //       {/* <audio
    //         ref={audioRef}
    //         src={currentSongArray.length > 0 ? currentSongArray[0].audio : ""}
    //         onTimeUpdate={handleTimeUpdate}
    //         // controls
    //         // autoPlay
    //         // muted
    //         className="audio-hide"
    //       /> */}
    //       <div>
    //         <div className="musicCollections">
    //           <div className="traction-splitter">
    //             <div className="track-section">
    //               <AiOutlinePlayCircle
    //                 onClick={() => handleSongClicker(currentSong)}
    //                 className="prime-poster-play poster-play-option"
    //               />
    //               <img
    //                 className="posterPrime"
    //                 src={currentSong.url}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className="button-details-splitter">
    //               <div className="song-button">
    //                 <button
    //                   onClick={() => handleSongClicker(currentSong)}
    //                   className="song-play-btn"
    //                 >
    //                   Play Song
    //                 </button>

    //                 <BiHeart className="fav-song-adding" />
    //               </div>
    //               <div className="songs-side-details">
    //                 <div className="song-line1">
    //                   <div className="song-name1">{currentSong.name}</div>
    //                   <div className="song-movie-name">
    //                     (From {currentSong.name}) Song |{" "}
    //                     <span>{currentSong.artist }</span>
    //                   </div>
    //                 </div>
    //                 <p className="song-line2">{currentSong.description}</p>
    //                 <div className="track-details-warp">
    //                   <button className="track-duration">
    //                     {formatTime2(duration)}
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         {!screenSize && scrolling ? (
    //           <div className="track-list-header">
    //             <img
    //               className="track-list-header-img"
    //               src={currentSong.url}
    //               alt="img"
    //             />
    //             <div className="song-genere">
    //               <p className="song-name">{currentSong.name} </p>
    //             </div>
    //             <button
    //               onClick={() => handleSongClicker(currentSong)}
    //               className="track-list-playing-option"
    //             >
    //               Play All
    //             </button>
    //             <AiOutlineHeart className="playlist-heart" />
    //           </div>
    //         ) : (
    //           <div></div>
    //         )}
    //         <div className="trackList">
    //           {!screenSize && (
    //             <div className="trackList-container">
    //               <table className="table-container">
    //                 <thead className="table-header">
    //                   <tr>
    //                     <th className="table-s-no"></th>
    //                     <th className="track-header">Track</th>
    //                     <th>Artists</th>
    //                     <th>Album</th>
    //                     <th>Duration</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody className="table-body-container">
    //                   {currentSongArray.map((tracks, index) => (
    //                     <tr key={tracks.id || index} onClick={() => handleSongClicker(currentSong[index])} >
    //                       <td className="table-col-1">{index + 1}</td>
    //                       <td className="table-col-2">
    //                         <div className="track-img-play">
    //                           <BsPlayCircle className="play-track-icon" />
    //                           <img
    //                             src={tracks.url}
    //                             alt="tracker-img"
    //                             className="tracker-image"
    //                           />
    //                         </div>
    //                         <div className="track-name-premium">
    //                           <button className="premium-btn">Premium</button>
    //                           <p className="song-name"> {tracks.name} </p>
    //                         </div>
    //                       </td>
    //                       <td className="table-col-3">
    //                         <p className="singer-name"> {tracks.artist} </p>
    //                       </td>
    //                       <td className="table-col-4">
    //                         <p className="track-movie-name">{tracks.name}</p>
    //                       </td>
    //                       <td className="table-col-5">
    //                         <p className="track-duration">
    //                           {formatTime(duration)}
    //                         </p>
    //                       </td>
    //                     </tr>
    //                   ))}
    //                 </tbody>
    //               </table>
    //             </div>
    //           )}
    //           {screenSize && (
    //             <div className="table-mobile-container">
    //               <table>
    //                 <tbody>
    //                   {currentSong.audio.map((item, index) => (
    //                     <tr
    //                       key={item.id || index}
    //                       className="table-tr-mob"
    //                       onClick={() => handleSongClicker(currentSong[index])}
    //                     >
    //                       <td className="table-td-1">{index + 1}</td>
    //                       <td className="table-td-2">
    //                         <div className="table-td-2-img">
    //                           <img
    //                             src={item.url}
    //                             alt="img"
    //                             className="table-mob-view-poster"
    //                           />
    //                           <div className="table-button-artist">
    //                             <button className="premium-button">
    //                               Premium
    //                             </button>
    //                             <p className="table-mob-artist">
    //                               {" "}
    //                               {item.artist}{" "}
    //                             </p>
    //                           </div>
    //                           <p className="table-song-name">{item.name}</p>
    //                         </div>
    //                       </td>
    //                       <td className="table-td-3">
    //                         <button className="btn-play">
    //                           <BsFillPlayFill className="play-button" />
    //                         </button>
    //                         <button className="btn-option">
    //                           <BsThreeDotsVertical className="play-option" />
    //                         </button>
    //                       </td>
    //                     </tr>
    //                   ))}
    //                 </tbody>
    //               </table>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div></div>
    //   )}
    // </>
    <>
    </>
    
  );
}

export default AlbumSongPage2;
