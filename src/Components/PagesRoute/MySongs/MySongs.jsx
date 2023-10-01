import { useEffect, useState } from "react";
import image from "../../../assets/trending-movies6.jpg";
import { AiOutlineHeart } from "react-icons/ai";


function MySongs() {
  

//#region ----------------- Fav Fetching -------------


const dataGettingFromLocal =  localStorage.getItem("userData") || "";
const fromLocalStorage = dataGettingFromLocal?JSON.parse(dataGettingFromLocal) : "";
const [favFetchingActivator, setFavFetchingActivator] = useState(0); // fetch initiator only
const [existingSongFavCheck, setExistingSongFavCheck] = useState(false); // heart controller


const handlerFavSongAdding = () => {
  setFavFetchingActivator(prev => prev + 1);    
};

const [fetchingSongStoringArray, setFetchingSongStoringArray] = useState([]);

const currentPlayingSongId = "";
//   songAllDetails && 
//   songAllDetails[currentTrack] && 
//   songAllDetails[currentTrack].id &&
//   songAllDetails[currentTrack].id;



  async function favSongFetching() {
    try {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "ghmumg9x1zid");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${fromLocalStorage.token}`);
    
      let raw = 
      currentPlayingSongId ? 
      JSON.stringify({        
          "songId": currentPlayingSongId          
      }) : ("")
    
      let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    
      const response = await fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", requestOptions)
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status: ${response.status}. Error message: ${errorText}`);
      }
      const result = await response.json();
      console.log("result from my music ", result)
      if (result.data) {
        setFetchingSongStoringArray(result.data.songs);

        const array = (result.data.songs || []).map((item) => {
          return item && item._id ? item._id : item;
        });
        
        let flag = array.findIndex((d) => d === currentPlayingSongId);
        setExistingSongFavCheck(flag !== -1);
      } else {
        console.log("Data not found in the API response.");
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  function songFavNextPrev() {
    const array = (fetchingSongStoringArray || []).map((item) => {
      return item && item._id ? item._id : item;
    });
    let flag = array.findIndex((d) => d === currentPlayingSongId);
    setExistingSongFavCheck(flag !== -1);
  }


  // heart symbol clicked will change
  useEffect(()=> {
    favSongFetching();    
  }, [favFetchingActivator])



  useEffect(()=> {
    setTimeout(()=> {
      songFavNextPrev();
    }, 100)
  }, [])


  console.log("fetchingSongStoringArray", fetchingSongStoringArray);

//#endregion ------------



  //#region ----fetching after song id

  async function songIdFetching() {
    try {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "ghmumg9x1zid");
    
      let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        redirect: 'follow'
      };
    
      const response = await fetch("https://academics.newtonschool.co/api/v1/music/song/64cf913147ae38c3e33a2713", requestOptions);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status: ${response.status}. Error message: ${errorText}`);
      }
      const result = await response.json();
      console.log("result from my music ", result);

    } catch (error) {
      console.log(error);
    } 

  }

  useEffect(()=> {
    songIdFetching();
  })

  //#endregion








  return (
    <>
      <div className="mySongs">
        <h2>Favorite Songs</h2>
        <div className="music-player-section-2">
          <div className="table-td-2-img">
            <div className="songs-collection">
              <img src={image} alt="img" className="table-mob-view-poster" />

              <div className="flex">
                <div className="table-button-artist">
                  <button className="premium-button">Premium</button>
                  <p className="table-mob-artist">Karthik</p>
                </div>
                <p className="table-song-name">Yethi Yethi Yethi En Nenjil</p>
              </div>
              <p>
                <AiOutlineHeart className="heart-in" />
              </p>
            </div>            
          </div>
        </div>
      </div>
    </>
  );
}

export default MySongs;