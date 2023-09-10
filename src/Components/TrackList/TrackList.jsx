import { useEffect, useState } from "react";
import image from "../../assets/trending-movies6.jpg";
import { BsPlayCircle, BsFillPlayFill,BsThreeDotsVertical } from "react-icons/bs";

function TrackList() {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 960);

  useEffect(()=> {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth > 960);      
    }
    window.addEventListener('resize', handleScreenSize);

    return () => {
      window.removeEventListener('resize', handleScreenSize);
    }
  }, [])

  return (
    <>
      <div className="trackList">
        {screenSize &&         
          <div className="trackList-container">

            <table className="table-container">
              <thead className="table-header">
                  <tr>
                      <th className="table-s-no"></th>
                      <th className="track-header">Track</th>
                      <th>Artists</th>
                      <th>Album</th>
                      <th>Duration</th>
                  </tr>
              </thead> 
              <tbody className="table-body-container">              
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
                <tr >
                  <td className="table-col-1">1</td>
                  <td className="table-col-2">
                    <div className="track-img-play">
                      <BsPlayCircle className="play-track-icon" />
                      <img src={image} alt="tracker-img" className="tracker-image" />
                    </div>
                    <div className="track-name-premium">
                      <button className="premium-btn">Premium</button>
                      <p className="song-name">Nenjukul</p>
                    </div>
                  </td>
                  <td className="table-col-3">
                    <p className="singer-name"> Karthik </p>
                  </td>
                  <td className="table-col-4"> 
                      <p className="track-movie-name">
                          Varanam Aayiram 
                      </p>
                  </td>
                  <td className="table-col-5"> 
                      <p className="track-duration">
                          04:20
                      </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
        {
          !screenSize && 
          <div className="table-mobile-container">  
            <table>
              <tbody>

              
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
              <tr className="table-tr-mob">
                <td className="table-td-1">1</td>
                <td className="table-td-2">
                  <div className="table-td-2-img">
                    <img src={image} alt="img" className="table-mob-view-poster" />
                    <div className="table-button-artist">
                      <button className="premium-button">Premium</button>
                      <p className="table-mob-artist">Karthik</p>
                    </div>
                    <p className="table-song-name">
                      Yethi Yethi Yethi En Nenjil
                    </p>
                  </div>
                </td>
                <td className="table-td-3">
                  <button className="btn-play">
                    <BsFillPlayFill className="play-button"/>
                  </button>
                  <button className="btn-option"> 
                    <BsThreeDotsVertical className="play-option"/>
                  </button>
                </td>
              </tr>
             
              </tbody>
            </table>
          </div>
        }


      </div>
    </>
  );
}

export default TrackList;
