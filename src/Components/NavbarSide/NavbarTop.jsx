import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
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

        
      </div>
    </>
  );
}

export default NavbarTop;
