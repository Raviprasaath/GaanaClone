import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';


import LargerCarousel from "../../HomeCarousel/LargerCarousel.jsx";
import MusicControlComp from '../../MusicControlComp/MusicControlComp.jsx'
import CarouselType2 from "../../CarouselTypes/CarouselType2.jsx";
import MultiCarouselCard from "../../HomeCarousel/MultiCarouselCard.jsx";
import { productData } from "../../../Components/HomeCarousel/Data.jsx";
import TrendingSongsCarousel from "../../CarouselTypes/TrendingSongsCarousel.jsx";

import { responsive } from '../../CarouselTypes/CarouselResponsive.jsx'

import trendingData from "../../CarouselTypes/TrendingData.jsx";



function HomePage () {
    // const darkMode = useSelector((state) => state.usersData.darkMode);
    // console.log("print dark mode val", darkMode);
    

    // data MultiCarouselCard carousel
    const product = productData.map((item) => (
      <MultiCarouselCard
        key={item.id}
        name={item.name}
        url={item.imageurl}
      />
    ));

    // const productTrending = trendingData.map((item) => (
    //   <TrendingSongsCarousel
    //     key={item.id}
    //     name={item.name}
    //     url={item.imageurl}
    //   />
    // ));
  
    // round carousel
    const productArtist = productData.map((item) => (
      <CarouselType2        
        key={item.id}
        name={item.name}
        url={item.imageurl}
        price={item.price}
      />
    ));


    // useEffect (()=> {
    //   const headers = {
    //     'Content-Type': 'application/json',        
    //     'projectId': '8jf3b15onzua'        
    //   }

    //   axios
    //   .get ("https://academics.newtonschool.co/api/v1/music/song", {headers: headers} )
    //   .then(data => console.log(data.data))
    //   .catch(error => console.log(error));
    // }, [])


    // useEffect (()=> {
    //   const headers = {
    //     'Content-Type': 'application/json',        
    //     'projectId': 'f104bi07c490'        
    //   }

    //   axios
    //   .get ("https://academics.newtonschool.co/api/v1/music/album", {headers: headers} )
    //   .then(data => console.log(data.data))
    //   .catch(error => console.log(error));
    // }, [])
  
    //
  
    // toggleCallback={toggling}
  
    // DARKMODEVAL::{darkMode}
    
    return (
      <>
  
        <LargerCarousel />

        <h2 className="homepage-heading">Top Trending</h2>
        {/* <Carousel showDots={false} responsive={responsive}>
          {productTrending}
          
        </Carousel> */}
        
        <h2 className="homepage-heading">Pop Songs</h2>
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>

        <h2 className="homepage-heading">Hip Hop Songs</h2>
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>

        <h2 className="homepage-heading">Rock Songs</h2>
        
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>
  
        <h2 className="homepage-heading">Top Trending</h2>
        {/* round */}
        <Carousel showDots={false} responsive={responsive}>
          {productArtist}
        </Carousel>

  
        {/* <MusicControlComp /> */}
      </>
    );
  }

export default HomePage;