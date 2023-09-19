import { useState, useEffect } from "react";
import { BsPlayCircle } from 'react-icons/bs'

import { useDispatch } from "react-redux";
import actions from '../../../action'


function HappySongs() {
  
  const dispatch = useDispatch();

  const [dataFromStore, setDataFromStore] = useState([]);  
  const [renderCard, setRenderCard] = useState(false);

  function localStorageDataGetting() {
    const localStorageFiltered = JSON.parse(localStorage.getItem('localSongs'));    
    const storedData = localStorageFiltered.data;
    const result = storedData.filter((item)=> item.mood==='happy')      
      .map((item) => ({
        key: item._id,   
        url: item.thumbnail || "",
        name: item.title || "",
        audio: item.audio_url || "",
        description: (item.artist && item.artist[0] && item.artist[0].description) || "",
        artist: (item.artist && item.artist[0] && item.artist[0].name) || "",
        mood: (item.mood) || "",
        songId: item._id || "",
      }))
      


    setDataFromStore(result);    
  }

  useEffect(()=> {
    localStorageDataGetting();
    setTimeout(() => {
      setRenderCard(true);      
    }, 0);
  }, [])
  
  const handleSongClicker = (data) => {
    console.log("happy songs ", data)
    dispatch(actions.setActiveSong(data));
  }

  return (
    <>
      {renderCard ? (
        <div className="new-songs-section">
          <div className="new-songs-container">
            <h2>Happy Songs</h2>

            <div className="song-container-level-1">
              {dataFromStore.map((item, index)=> (           
                <div key={item._id || index} className="music-card" onClick={()=>handleSongClicker(item)}>
                    <BsPlayCircle className="play-icon"/>
                    <img className="songs-image" src={item.url} alt="img" />
                    <p className="song-details">
                        <span className="song-name">{item.name}</span> 
                    </p>
                </div>
              )) }              
            </div>
            <div className="divide-line"></div>

          </div>
        </div>
      ) : ("")}
    </>
  );
}

export default HappySongs;

