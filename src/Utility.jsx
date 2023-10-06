export const getSongsByArtist = (artistList) => {
    const allSongsData = JSON.parse(localStorage.getItem("allData")) || [];
    
    const newArtistList = []
    
    artistList.map((item)=>{
        item.newSongs=[];
        item.songs.map((songsId)=> {
            allSongsData.map((song)=> {
                if (song._id === songsId) {                    
                    item.newSongs.push(song);
                    newArtistList.push(item);
                }
            })            
        })
    })    
    return newArtistList;
}