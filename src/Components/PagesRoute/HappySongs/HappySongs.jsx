import { useState, useEffect } from "react";
import { BsPlayCircle } from 'react-icons/bs'

function HappySongs() {
  
  const [dataFromStore, setDataFromStore] = useState([]);  
  const [renderCard, setRenderCard] = useState(false);

  function localStorageDataGetting() {
    const localStorageFiltered = JSON.parse(localStorage.getItem('localSongs'));    
    const storedData = localStorageFiltered.data;
    const result = storedData.filter((item)=> item.mood==='happy')
      
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
            <h2>Happy Songs</h2>

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
  );
}

export default HappySongs;


// scratch
// const [selector, setSelector] = useState("");
// const handlerSelector = (event) => {
//     setSelector(event);
// }
{/* <div className="divide-line"></div>
<div className="language-selector-container">
  <button onClick={() => handlerSelector ("All") }         className={selector === 'All' ? 'active2' : ""} >All</button>
  <button onClick={() => handlerSelector ("Tamil") }       className={selector === 'Tamil' ? 'active2' : ""}>Tamil</button>
  <button onClick={() => handlerSelector ("English") }     className={selector === 'English' ? 'active2' : ""}>English</button>
  <button onClick={() => handlerSelector ("Malayalam") }   className={selector === 'Malayalam' ? 'active2' : ""}>Malayalam</button>
  <button onClick={() => handlerSelector ("Telugu") }      className={selector === 'Telugu' ? 'active2' : ""}>Telugu</button>
  <button onClick={() => handlerSelector ("Punjabi") }     className={selector === 'Punjabi' ? 'active2' : ""}>Punjabi</button>
  <button onClick={() => handlerSelector ("Kannada") }     className={selector === 'Kannada' ? 'active2' : ""}>Kannada</button>
  <button onClick={() => handlerSelector ("Hindi") }       className={selector === 'Hindi' ? 'active2' : ""}>Hindi</button>
  <button onClick={() => handlerSelector ("Bhojpuri") }    className={selector === 'Bhojpuri' ? 'active2' : ""}>Bhojpuri</button>
  <button onClick={() => handlerSelector ("Bengali") }     className={selector === 'Bengali' ? 'active2' : ""}>Bengali</button>
  <button onClick={() => handlerSelector ("Marathi") }     className={selector === 'Marathi' ? 'active2' : ""}>Marathi</button>
  <button onClick={() => handlerSelector ("Gujarati") }    className={selector === 'Gujarati' ? 'active2' : ""}>Gujarati</button>
  <button onClick={() => handlerSelector ("Haryanvi") }    className={selector === 'Haryanvi' ? 'active2' : ""}>Haryanvi</button>
  <button onClick={() => handlerSelector ("Urdu") }        className={selector === 'Urdu' ? 'active2' : ""}>Urdu</button>
  <button onClick={() => handlerSelector ("Assamese") }    className={selector === 'Assamese' ? 'active2' : ""}>Assamese</button>
  <button onClick={() => handlerSelector ("Rajasthani") }  className={selector === 'Rajasthani' ? 'active2' : ""}>Rajasthani</button>
  <button onClick={() => handlerSelector ("Odia") }        className={selector === 'Odia' ? 'active2' : ""}>Odia</button>
</div>
<div className="divide-line"></div> */}