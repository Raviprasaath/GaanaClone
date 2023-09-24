import { AiOutlinePlayCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import actions from "../../action";


const TrendingSongsCarousel = (props) => {

  const dispatch = useDispatch();
  
  const handleSongClicker = (data) => {
    dispatch(actions.setActiveSong(data));
  }


  return (
    <>
        <div className="carousel card">
          <AiOutlinePlayCircle
            onClick={()=>handleSongClicker(props)}
            className="play-icon"
          />
          <img className="product-image" src={props.url} alt="product image" />
          <h4> {props.name} </h4>
        </div>
    </>
  );
};

export default TrendingSongsCarousel;
