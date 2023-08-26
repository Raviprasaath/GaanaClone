import { AiOutlineSearch } from "react-icons/ai";
import MainLogo from "../../assets/main-logo.png";


function NavbarTop() {
  return (
    <>
      <div className="navbar-top">
        <div className="main-logo">
          <img src={MainLogo} alt="main-logo" />
        </div>

        <span className="search-section">
          <span className="search-bar">
            <span className="search-icon">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              className="input-search-option"
              placeholder="Search Artists, Songs, Albums"
            />
          </span>
        </span>

        <div className="music-width">
          <div className="music-category">
            <p>All</p>
            <p>Trending Songs</p>
            <p>New Songs</p>
            <p>Old Songs</p>
            <p>Moods & Genres</p>
            <p>Albums</p>
            <p>Radio</p>
            <p>Podcast</p>
            <p>My Music</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarTop;
