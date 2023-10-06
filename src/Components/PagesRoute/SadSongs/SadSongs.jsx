import { useState, useEffect } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import actions from "../../../action";
import axios from 'axios';
import Loader from "react-js-loader";
import { fetchDataByType } from "../../Fetching/fetching";

function PartySongs() {
  const [dataFromStore, setDataFromStore] = useState([]);
  const [renderCard, setRenderCard] = useState(false);
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchData = async () => {
      const happyMood = await fetchDataByType("sad");
      const result = happyMood
        .map((item) => ({
          key: item._id,
          url: item.thumbnail || "",
          name: item.title || "",
          audio: item.audio_url || "",
          description:
            (item.artist && item.artist[0] && item.artist[0].description) ||
            "",
          artist:
            (item.artist && item.artist[0] && item.artist[0].name) || "",
          mood: item.mood || "",
          songId: item._id || "",
          album: "no",
        }));
        setDataFromStore(result);
        setRenderCard(true);
    }

    fetchData();

  }, []);



  const handleSongClicker = (data) => {    
    dispatch(actions.setActiveSong(data));
  } 


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
      {renderCard ? (
        <div className="new-songs-section">
          <div className="new-songs-container">
            <h2>Sad Songs</h2>

            <div className="song-container-level-1">
              {dataFromStore.map((item, index) => (
                <div key={item._id || index} className="music-card" onClick={()=>handleSongClicker(item)}>
                  <BsPlayCircle className="play-icon" />
                  <img className="songs-image" src={item.url} alt="img" />
                  <p className="song-details">
                    <span className="song-name">{item.name}</span>
                  </p>
                </div>
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

export default PartySongs;
