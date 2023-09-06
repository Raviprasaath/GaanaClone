import { useEffect, useState } from "react";
import image from "../../assets/trending-movies4.jpg";

import { AiOutlineHeart } from "react-icons/ai";


function TrackListHeader() {
  const [screenSize, setScreenSize] = useState(window.innerWidth < 960);
  const [scrolling, setScrolling] = useState(false);

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
  }, []);

  if (!screenSize && scrolling) {
    return (
      <div className="track-list-header">
        <img className="track-list-header-img" src={image} alt="img" />
        <div className="song-genere">
          <p className="song-name">Jillunu Oru Kadhal </p>
          <p className="song-divider">-</p>
          <p className="songs-types">Romantic Hits Tamil</p>
        </div>
        <button className="track-list-playing-option">Play All</button>
        <AiOutlineHeart className="playlist-heart" />
      </div>
    );
  } else {
    return null;
  }
}

export default TrackListHeader;
