import { useEffect, useState } from "react";
import axios from 'axios';

function DataFetch () {
    const [ songStore, setSongStore ] = useState([]);
    const [ albumStore, setAlbumStore ] = useState([]);



    // console.log(songStore)
    // console.log(albumStore.data)
    // console.log(albumStore);

    const detailedData = songStore.data;
    
    // detailedData.filter((item) => {
    //     console.log (item.featured);
    // })

    // const result = detailedData.filter((item) => {
    //     return (item.featured === "Trending songs");
    // })
    // console.log(result)
    
    // if (Array.isArray(detailedData)) {
    //     detailedData.map((item) => {
    //         const artistDescription = item ;
    //         console.log(artistDescription || "");
    //     })
    // }
    
    // if (Array.isArray(detailedData)) {
    //     detailedData.map((item) => {
    //         const artistDescription = item.artist && item.artist[0] && item.artist[0];
    //         console.log(artistDescription || "");
    //     })
    // }


    // -----------1 Trending Split
    // try {
    //     const trending = detailedData.filter((item) => {
    //       return (item.featured === "Top 20 of this week");
    //     });
    //     console.log(trending);
    //     trending.map((item) => {
    //       console.log(item);
    //     });
    //   } catch (error) {
    //     console.error("Error in DataFetch component:", error);
    //   }





    const handleSongs = () => {
        const tempLocalSongs = JSON.parse(localStorage.getItem("localSongs")) || [];
        if (!tempLocalSongs || tempLocalSongs.length < 21) {
            const headers = {
                'Content-Type': 'application/json',        
                'projectId': '8jf3b15onzua'        
              }
        
              axios
              .get ("https://academics.newtonschool.co/api/v1/music/song?limit=100", {headers: headers} )
              .then(data =>{
                const result = (data.data);
                setSongStore(result);
                localStorage.setItem("localSongs", JSON.stringify(result));
              }  )
              .catch(error => console.log(error));
        } else {
            setSongStore(tempLocalSongs);
        }
    }

    const handleAlbums = () => {
        const tempLocalAlbum = JSON.parse(localStorage.getItem("localAlbum")) || [];
        
        if (!tempLocalAlbum || tempLocalAlbum.length < 21) {
            const headers = {
                'Content-Type': 'application/json',        
                'projectId': 'f104bi07c490'        
              }
        
              axios
              .get ("https://academics.newtonschool.co/api/v1/music/album?limit=100", {headers: headers} )
              .then(data => {
                const response = data.data;                    
                setAlbumStore(response);
                localStorage.setItem("localAlbum", JSON.stringify(response))
              })
              .catch(error => console.log(error));
        } else {
            setAlbumStore(tempLocalAlbum);
        }
    }

    async function fetching() {
        // try {
        //   const headers = {
        //     'Content-Type': 'application/json',
        //     'projectId': 'ghmumg9x1zid'
        //   };
        //   const response = await axios.get("https://academics.newtonschool.co/api/v1/music/song?filter={'mood':'romantic'}", { headers: headers });
    
        //   const result = response;
                
        //   console.log("result", result);

        // } catch (error) {
        //   console.log("Error fetching data", error)
        // }

        // success done

        // fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}&limit=100', {
        //     headers: {
        //         'projectId': 'ghmumg9x1zid'
        //     }
        // }).then(data=>data.json()).then(response => {
        //     console.log("result", response)
        // })



        // success 

        // fetch('https://academics.newtonschool.co/api/v1/music/artist', {
        //     headers: {
        //         'projectId': 'ghmumg9x1zid'
        //     }
        // }).then(data=>data.json()).then(response => {
        //     console.log("result", response)
        // })


        // success done
        // fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Soul soother"}&limit=100', {
        //     headers: {
        //         'projectId': 'ghmumg9x1zid'
        //     }
        // }).then(data=>data.json()).then(response => {
        //     console.log("result", response)
        // })


        // success done
        // fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Evergreen melodies"}&limit=100', {
        //     headers: {
        //         'projectId': 'ghmumg9x1zid'
        //     }
        // }).then(data=>data.json()).then(response => {
        //     console.log("result", response)
        // })


        // success 
        // fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}&limit=100', {
        //     headers: {
        //         'projectId': 'ghmumg9x1zid'
        //     }
        // }).then(data=>data.json()).then(response => {
        //     console.log("result", response)
        // })

        
        // success 
        // fetch('https://academics.newtonschool.co/api/v1/music/song?limit=100', {
        //     headers: {
        //         'projectId': 'ghmumg9x1zid'
        //     }
        // }).then(data=>data.json()).then(response => {
        //     console.log("result", response)
        // })

    }


    useEffect (() => {
        // handleSongs();
        // handleAlbums();
        fetching();
    }, [])

    return (
        <>
            
        </>
    )
}

export default DataFetch;

    // ------ totally 4 types mood
    // happy - 28
    // romantic - 22
    // sad - 21
    // excited - 29

    // ------ featured types
    // Trending songs - 2 
    // Soul soother - 2
    // Evergreen melodies - 2
    // Top 20 of this week - 1

    // Sorting by Year