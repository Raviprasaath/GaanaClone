import { useEffect, useState } from "react";
import image from "../../../assets/trending-movies6.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import action from "../../../action";


function MySongs() {
  const dispatch = useDispatch();

//#region ----------------- Fav Fetching -------------


const dataGettingFromLocal =  localStorage.getItem("userData") || "";
const fromLocalStorage = dataGettingFromLocal?JSON.parse(dataGettingFromLocal) : "";
const [existingSongFavCheck, setExistingSongFavCheck] = useState(false); // heart controller

const [songRemoval, setRemoval] = useState("");

const [individualSongGetting, setIndividualSongGetting] = useState([]);

const [uiReRender, setUiReRender] = useState(0);

const [fetchingSongStoringArray, setFetchingSongStoringArray] = useState([]);



const uiReRenderData = useSelector((state) => state.usersData.favSongUiUpdate);










async function favSongFetching() {
  try {
    const myHeaders = new Headers();
    myHeaders.append("projectID", "ghmumg9x1zid");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${fromLocalStorage.token}`);
    
    const raw = songRemoval ? JSON.stringify({ "songId": songRemoval }) : "";

    const requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      // redirect: 'follow'
    };

    const delayBetweenRequests = 1000; // 1 second (adjust as needed)

    const response = await fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status: ${response.status}. Error message: ${errorText}`);
    }

    const result = await response.json();

    if (result.data) {
      setFetchingSongStoringArray(result.data.songs);

      const array = (result.data.songs || []).map((item) => {
        return item && item._id ? item._id : item;
      });
      
    } else {
      console.log("Data not found in the API response.");
    }

    // Delay before making the next request
    await new Promise(resolve => setTimeout(resolve, delayBetweenRequests));

  } catch (error) {
    console.log(error);
  }
}

  

  // const handlerRemoveFav = (data) => {
  //   setRemoval(data._id);
  //   favSongFetching();
  // }
  
  



  const handlerSongPlay = (item) => {
    const songObject = {
      key: item._id,
      id: item._id,
      thumbnail: item.thumbnail,
      title: item.title,
      artist: artsitName(item.artist[0]),
      audio_url: item.audio_url,
      myFav: "yes",
    }
    dispatch(action.setActiveSong(songObject));
    dispatch(action.setAllFavSongs(sendingToStore));
  }
  





//#endregion ------------



  //#region ----fetching after song id

  async function songIdFetching() {
    try {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "ghmumg9x1zid");
      myHeaders.append("Authorization", `Bearer ${fromLocalStorage.token}`);
      
      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // redirect: 'follow'
      };

      const fetching = await fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", requestOptions);
      const response = await fetching.json();
      setIndividualSongGetting(response.data.songs);
    } catch (error) {
      console.log(error);
    }
  }
  


  // const fullSongDataStore = useSelector((state) => state.usersData.fullSongData);
  // console.log("fullSongData", fullSongDataStore);
  
  // const excitedSongList = useSelector((state) => state.usersData.excitedSong);
  // console.log("excitedSongList", excitedSongList);


  function artsitName(id) {
    let artistName = ""
    const allSongsList = JSON.parse(localStorage.getItem("allData")) || [];
    allSongsList.map((item)=> {
      if (item.artist[0]?._id === id) {
        artistName = item.artist[0].name;
      }
    })
    return artistName;
  }
  
  //#endregion



  const sendingToStore = individualSongGetting.map((item)=>({
    key: item._id,
    id: item._id,
    thumbnail: item.thumbnail,
    title: item.title,
    artist: artsitName(item.artist[0]),
    audio_url: item.audio_url,
    myFav: "yes",

  }))


  useEffect(()=> {
    songIdFetching();
    setTimeout(()=> {
      songIdFetching();
    }, 500)
  }, [uiReRenderData])



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(()=> {
    scrollToTop();
  }, [])



  return (
    <>
      <div className="mySongs">
      <h2>Favorite Songs</h2>
      {individualSongGetting.length === 0 && 
        (<div style={{textAlign:"center"}}>
          No Songs Found
          </div>
        )  

      }
        <div className="music-player-section-2">
          <div className="table-td-2-img">
            {individualSongGetting.map((item)=> (                  
                <div onClick={()=>handlerSongPlay(item)} key={item._id} className="songs-collection">
                  <div className="inside-song-collection">
                    <img src={item.thumbnail} alt="img" className="table-mob-view-poster" />
                    <div className="flex">                
                      <div className="table-button-artist">
                        <button className="premium-button">Premium</button>
                        <p className="table-mob-artist">{artsitName(item.artist[0])}</p>
                      </div>
                      <p className="table-song-name">{item.title}</p>
                    </div>
                  </div>
                  <div>
                    {/* <AiOutlineClose onClick={()=>handlerRemoveFav(item._id)} className="heart-in" /> */}
                  </div>
                </div>            
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MySongs;