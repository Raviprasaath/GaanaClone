import { AiOutlineDown } from "react-icons/ai";

function NavbarSongTypeChoose() {
  return (
    <>
      <div className="navbarSongTypeChoose music-width">
        <div className="music-category">
          <p className="songs-types">All</p>
          <p className="songs-types">Trending Songs</p>
          <p className="songs-types">New Songs</p>
          <p className="songs-types">Old Songs</p>

          <div className="dropdown">
            <p className="dropbtn">
              Moods & Genres <AiOutlineDown />
            </p>
            <div className="dropdown-content">
              <a className="dropdown-a" href="#">Party</a>
              <a className="dropdown-a" href="#">Romance</a>
              <a className="dropdown-a" href="#">90s and 2000s</a>
              <a className="dropdown-a" href="#">Bhakti</a>
              <a className="dropdown-a" href="#">Indie</a>
              <a className="dropdown-a" href="#">EDM</a>
              <a className="dropdown-a" href="#">Ghazals</a>
              <a className="dropdown-a" href="#">Workout</a>
              <a className="dropdown-a" href="#">Stars</a>
              <a className="dropdown-a" href="#">Retro</a>
              <a className="dropdown-a" href="#">Wedding</a>
              <a className="dropdown-a" href="#">Kids</a>
              <a className="dropdown-a" href="#">Dance</a>
              <a className="dropdown-a" href="#">Friendship</a>
            </div>
          </div>







          






          <p className="songs-types">Albums</p>
          <p className="songs-types">Radio</p>
          <p className="songs-types">Podcast</p>
          <p className="songs-types">My Music</p>
        </div>
      </div>
    </>
  );
}

export default NavbarSongTypeChoose;
