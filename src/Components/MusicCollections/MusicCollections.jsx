import image1 from "../../assets/trending-movies1.jpg";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

const MusicCollections = () => {
  return (
    <>
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
                <span className="song-line1">
                    <span className="song-name1">Hosanna</span>{" "}
                    <span className="song-movie-name">
                    (From "Vinnaithaandi Varuvaayaa") Song |{" "}
                    <span> Vijay Prakash</span>{" "}
                    </span>{" "}
                </span>
                <p className="song-line2">
                    Hosanna <span>From "Vinnaithaandi Varuvaayaa"</span>{" "}
                </p>

                <span className="track-details-warp">
                    <a className="song-line3" href="#">
                    Hosanna From Vinnaithaandi Varuvaayaa{" "}
                    </a>
                    <span className="dot">•</span>
                    <span className="released-year">2010</span>
                    <span className="dot">•</span>
                    <button className="track-duration">4 min 48sec</button>
                </span>
            </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default MusicCollections;
