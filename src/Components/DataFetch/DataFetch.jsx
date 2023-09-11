import { useEffect, useState } from "react";
import axios from 'axios';

function DataFetch () {
    const [ songStore, setSongStore ] = useState([]);
    const [ albumStore, setAlbumStore ] = useState([]);

    // console.clear();

    // console.log(albumStore.data)
    // console.log(albumStore);

    const detailedData = songStore.data;
    
    // detailedData.filter((item) => {
    //     console.log (item.featured);
    // })

    // const result = detailedData.filter((item) => {
    //     return (item.featured === "Top 20 of this week");
    // })
    // console.log(result)
    
    if (Array.isArray(detailedData)) {
        detailedData.map((item) => {
            const artistDescription = item.artist && item.artist[0] && item.artist[0].songs;
            // console.log(artistDescription || "");
        })
    }
    const sampleUrl = "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf942e47ae38c3e33a63d2.mp3"
    
    if (Array.isArray(detailedData)) {
        detailedData.map((item) => {
            const artistDescription = item.artist && item.artist[0] && item.artist[0];
            // console.log(artistDescription || "");
        })
    }


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
            Hi this is data
        </>
    )
}

export default DataFetch;

    // ------ totally 4 types mood
    // happy
    // romantic
    // sad
    // excited

    // ------ featured types
    // Trending songs
    // Soul soother
    // Evergreen melodies
    // Top 20 of this week

    // Sorting by Year