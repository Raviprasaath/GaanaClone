import Carousel from "react-multi-carousel";

const CarouselType2 = (props) => {
  return (
    <>
      <div className="productArtist card">
        <img  className="product-image" src={props.url} alt="product image" />
        <h4>Song</h4>
      </div>
    </>
  );
};

export default CarouselType2;
