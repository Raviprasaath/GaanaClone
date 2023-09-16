import { useState, useEffect } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Album() {
  const [dataFromStore, setDataFromStore] = useState([]);
  const [renderCard, setRenderCard] = useState(false);

  function localStorageDataGetting() {
    const localStorageFiltered = JSON.parse(localStorage.getItem("localAlbum"));
    const storedData = localStorageFiltered.data;
    const result = storedData.map((item) => ({
      id: item._id || "",
      imageUrl: item.image || "",
      title: item.title || "",
      description: item.description || "",
      artist: (item.artist && item.artist[0] && item.artist[0].name) || "",
      audioUrl: (item.artist && item.artist[0] && item.artist[0].songs) || "",
    }));
    setDataFromStore(result);
  }

  useEffect(() => {
    localStorageDataGetting();
    setTimeout(() => {
      setRenderCard(true);
    }, 0);
  }, []);

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
        ""
      )}
    </>
  );
}

export default Album;
