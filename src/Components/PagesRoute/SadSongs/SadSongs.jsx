import { useState, useEffect } from "react";
import { BsPlayCircle } from 'react-icons/bs'

function PartySongs () {
    const [dataFromStore, setDataFromStore] = useState([]);  
    const [renderCard, setRenderCard] = useState(false);

    function localStorageDataGetting() {
        const localStorageFiltered = JSON.parse(localStorage.getItem('localSongs'));    
        const storedData = localStorageFiltered.data;
        const result = storedData.filter((item)=> item.mood==='sad')
          
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

    return (
        <>
      {renderCard ? (
        <div className="new-songs-section">
          <div className="new-songs-container">
            <h2>Sad Songs</h2>

            <div className="song-container-level-1">
              {dataFromStore.map((item)=> (           
                <div key={item.id} className="music-card">
                    <BsPlayCircle className="play-icon"/>
                    <img className="songs-image" src={item.imageUrl} alt="img" />
                    <p className="song-details">
                        <span className="song-name">{item.title}</span> 
                        {/* (from 
                        <span className="song-movie-name"> Jillunu oru Kadhal</span> 
                        ) */}
                    </p>
                </div>
              )) }
              
            </div>
            <div className="divide-line"></div>

          </div>
        </div>
      ) : ("")}
    </>
    )
}

export default PartySongs;