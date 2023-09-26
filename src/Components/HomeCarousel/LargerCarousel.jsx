import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../../assets/home-pic1.webp";
import image2 from "../../assets/home-pic2.webp";
import image3 from "../../assets/home-pic3.webp";
import image4 from "../../assets/home-pic4.webp";
import image5 from "../../assets/home-pic5.webp";
import image6 from "../../assets/home-pic6.webp";
import image7 from "../../assets/home-pic7.webp";
import image8 from "../../assets/home-pic8.webp";
import image9 from "../../assets/home-pic9.webp";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function LargerCarousel() {
  const carouselOptions = {
    responsive: responsive,
    autoPlay: true,
    infinite: true,
    autoPlaySpeed: 2000,
    keyBoardControl: true,
    customTransition: "transform 500ms ease-in-out",
    removeArrowOnDeviceType: ["tablet", "mobile"],
  };

  return (
    <div className="largerCarousel">
      <Carousel {...carouselOptions}>
        <div>
          <img className="large-slider-img" src={image8} alt="" />
        </div>
        <div>
          <img className="large-slider-img" src={image1} alt="" />
        </div>
        <div>
          <img className="large-slider-img" src={image2} alt="" />
        </div>
        <div>
          <img className="large-slider-img" src={image9} alt="" />
        </div>
        <div>
          <img className="large-slider-img" src={image3} alt="" />
        </div>
        <div>
          <img className="large-slider-img" src={image4} alt="" />
        </div>
        <div>
          <img className="large-slider-img" src={image5} alt="" />
        </div>
        <div>
          <img className="large-slider-img" src={image6} alt="" />
        </div>
        <div>
          <img className="large-slider-img" src={image7} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default LargerCarousel;
