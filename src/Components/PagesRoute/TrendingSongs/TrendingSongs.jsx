import { useSelector } from "react-redux";
import MusicCollections from "../../MusicCollections/MusicCollections.jsx";
import TrackListHeader from "../../TrackList/TrackListHeader.jsx";
import TrackList from "../../TrackList/TrackList.jsx";
import "react-multi-carousel/lib/styles.css";


function TrendingSongs() {

  const darkMode = useSelector((state) => state.usersData.darkMode);
  console.log("print dark mode val", darkMode);
  

  return (
    <>
      
      <MusicCollections />
      <TrackListHeader />
      <TrackList />
    </>
  );
}

export default TrendingSongs;
