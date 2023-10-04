import { useState, useEffect } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from 'axios';
import Loader from "react-js-loader";
import { useDispatch, useSelector } from "react-redux";
import action from "../../../action";


function ArtistPage() {
  const [renderCard, setRenderCard] = useState(false);
  
  const dispatch = useDispatch();
  
  const artistDataFromStore = useSelector((state) => state.usersData.artistPageCardRender);
  // console.log("artistDataFromStore", artistDataFromStore )
  
  useEffect(() => {
    setTimeout(()=> {
      setRenderCard(true)
    }, 1000);
  }, []);

  const handlerSongSelector = (data) => {
    dispatch(action.setArtistPage1(data));
  }





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
      {renderCard ? (
        <div className="new-songs-section">
          <div className="new-songs-container">
            <h2>Artist Songs</h2>
            <div className="song-container-level-1">
              {artistDataFromStore.length === 133 && artistDataFromStore.map((item) => (
                <Link onClick={()=>handlerSongSelector(item)} key={item._id} to={`/artist/${item.name}`}>
                  <div className="music-card">
                    <BsPlayCircle className="play-icon" />
                    <img
                      className="songs-image"
                      src={item.image}
                      alt="img"
                    />
                    <p className="song-details">
                      <span className="song-name">{item.name}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="divide-line"></div>
          </div>
        </div>
      ) : (
        <Loader size="lg"/>
      )}
    </>
  );
}

export default ArtistPage;
