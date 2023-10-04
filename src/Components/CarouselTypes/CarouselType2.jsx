import Carousel from "react-multi-carousel";
import { useDispatch } from "react-redux";
import actions from "../../action";

import { useNavigate } from "react-router-dom";

const CarouselType2 = (props) => {  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSongClicker = (data) => {       
    dispatch(actions.setArtistPage1(data));
    // console.log("data", data)
    navigate(`/artist/${data.name}/${data.songId}`, {replace: true})  
  }

  return (
    <>
      <div onClick={()=>handleSongClicker(props)} className="carousel card round">          
          <img className="product-image" src={props.url} alt="product image" />
          <h4> {props.name} </h4>
        </div>
    </>
  );
};

export default CarouselType2;
