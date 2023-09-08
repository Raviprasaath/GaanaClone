import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import LargerCarousel from "../../HomeCarousel/LargerCarousel.jsx";
import MusicControlComp from '../../MusicControlComp/MusicControlComp.jsx'
import CarouselType2 from "../../CarouselType2/CarouselType2.jsx";
import MultiCarouselCard from "../../HomeCarousel/MultiCarouselCard.jsx";
import { productData, responsive } from "../../../Components/HomeCarousel/Data.jsx";





function HomePage () {
    const darkMode = useSelector((state) => state.usersData.darkMode);
    // console.log("print dark mode val", darkMode);
  

    // data MultiCarouselCard carousel
    const product = productData.map((item) => (
      <MultiCarouselCard
        key={item.id}
        name={item.name}
        url={item.imageurl}
        price={item.price}
      />
    ));
  
    // round carousel
    const productArtist = productData.map((item) => (
      <CarouselType2
        key={item.id}
        name={item.name}
        url={item.imageurl}
        price={item.price}
      />
    ));
  
    //
  
    // toggleCallback={toggling}
  
    // DARKMODEVAL::{darkMode}
    return (
      <>
  
        <LargerCarousel />
  
        <h2>Upcoming</h2>
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>

        <h2>Top Trending</h2>
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>

        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>
  
        <h2>Top Trending</h2>
        {/* round */}
        <Carousel showDots={false} responsive={responsive}>
          {productArtist}
        </Carousel>

  
        <MusicControlComp />
      </>
    );
  }

export default HomePage;