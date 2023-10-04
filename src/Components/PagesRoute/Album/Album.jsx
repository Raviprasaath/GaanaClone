import { useState, useEffect } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from 'axios';
import Loader from "react-js-loader";


function Album() {
  const [dataFromStore, setDataFromStore] = useState([]);
  const [renderCard, setRenderCard] = useState(false);
 

  useEffect(() => {
    async function dataGetting() {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'projectId': '8jf3b15onzua'
        };
        const response = await axios.get("https://academics.newtonschool.co/api/v1/music/album?limit=100", { headers: headers });
        const result = response.data;
        const storedData = result.data;
        const result2 = storedData.map((item) => ({
          id: item._id || "",
          imageUrl: item.image || "",
          title: item.title || "",
          description: item.description || "",
          artist: (item.artist && item.artist[0] && item.artist[0].name) || "",
          audioUrl: (item.artist && item.artist[0] && item.artist[0].songs) || "",
        }));
        setDataFromStore(result2);
        setRenderCard(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    dataGetting();
  }, []);


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
            <h2>Album Songs</h2>
            <div className="song-container-level-1">
              {dataFromStore.map((item) => (
                <Link key={item.id} to={`${item.title}/${item.id}`}>
                  <div className="music-card">
                    <BsPlayCircle className="play-icon" />
                    <img
                      className="songs-image"
                      src={item.imageUrl}
                      alt="img"
                    />
                    <p className="song-details">
                      <span className="song-name">{item.title}</span>
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

export default Album;
