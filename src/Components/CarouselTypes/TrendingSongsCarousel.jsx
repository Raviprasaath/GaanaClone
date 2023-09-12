import { AiOutlinePlayCircle } from "react-icons/ai";
import Carousel from "react-multi-carousel";

const TrendingSongsCarousel = (props) => {
  return (
    <>
      <div className="carousel card">
        <AiOutlinePlayCircle className="play-icon" />
        <img className="product-image" src={props.url} alt="product image" />
        <h4> {props.name} </h4>
      </div>
    </>
  );
};

export default TrendingSongsCarousel;
