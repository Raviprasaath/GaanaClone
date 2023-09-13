import { useEffect, useState } from "react";
import axios from 'axios';

function DataFetch () {
    const [ songStore, setSongStore ] = useState([]);
    const [ albumStore, setAlbumStore ] = useState([]);



    console.log(songStore)
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
    const sampleUrl = "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf942e47ae38c3e33a63d2.mp3"
    
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
        if (!tempLocalSongs || tempLocalSongs.length === 0) {
            const headers = {
                'Content-Type': 'application/json',        
                'projectId': 'f104bi07c490'        
              }
        
              axios
              .get ("https://academics.newtonschool.co/api/v1/music/song", {headers: headers} )
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
        
        if (!tempLocalAlbum || tempLocalAlbum.length === 0) {
            const headers = {
                'Content-Type': 'application/json',        
                'projectId': 'f104bi07c490'        
              }
        
              axios
              .get ("https://academics.newtonschool.co/api/v1/music/album", {headers: headers} )
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


    useEffect (() => {
        handleSongs();
        handleAlbums();
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