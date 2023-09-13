import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LargerCarousel from "../../HomeCarousel/LargerCarousel.jsx";
import CarouselType2 from "../../CarouselTypes/CarouselType2.jsx";
import MultiCarouselCard from "../../HomeCarousel/MultiCarouselCard.jsx";
import { productData } from "../../../Components/HomeCarousel/Data.jsx";
import TrendingSongsCarousel from "../../CarouselTypes/TrendingSongsCarousel.jsx";

import { responsive } from "../../CarouselTypes/CarouselResponsive.jsx";












function HomePage() {
  // const darkMode = useSelector((state) => state.usersData.darkMode);
  // console.log("print dark mode val", darkMode);
  const [trendingSongs, setTrendingSongs] = useState();
  const [happySongsData, setHappySongsData] = useState();
  const [romanticSongsData, setRomanticSongsData] = useState();
  const [sadSongsData, setSadSongsData] = useState();
  const [excitedSongsData, setExcitedSongsData] = useState();

  
  
  function fetching() {


    const localStorageData = localStorage.getItem("localSongs");
    const parsedLocalStorageData = localStorageData ? JSON.parse(localStorageData) : [];
    
    const trendingData = parsedLocalStorageData.data;
    const ts = trendingData?.filter((item) => {
      return item.featured === "Trending songs";
    });
    setTrendingSongs(ts);
    
    
    const happySongs = parsedLocalStorageData.data;
    const hsd = happySongs?.filter((item) => {
      return item.mood === "happy";
    });
    setHappySongsData(hsd);
    
    
    const romanticSongs = parsedLocalStorageData.data;
    const rsd = romanticSongs?.filter((item) => {
      return item.mood === "romantic";
    });
    setRomanticSongsData(rsd);
    
    
    
    const sadSongs = parsedLocalStorageData.data;
    const ssd = sadSongs?.filter((item) => {
      return item.mood === "sad";
    });
    setSadSongsData(ssd);
    
    const excitedSongs = parsedLocalStorageData.data;
    const esd = excitedSongs?.filter((item) => {
      return item.mood === "excited";
    });
    setExcitedSongsData(esd);
}


  useEffect (() => {
    fetching();
  }, [trendingSongs,happySongsData,romanticSongsData,sadSongsData,excitedSongsData])

  // Trending Carousel
  const productTrending = trendingSongs?.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));
  const productHappy = happySongsData?.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));
  const productRomantic = romanticSongsData?.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));
  const productSad = sadSongsData?.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));
  const productExcited = excitedSongsData?.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));

  // data MultiCarouselCard carousel
  // const product = productData?.map((item) => (
  //   <MultiCarouselCard key={item.id} name={item.name} url={item.imageurl} />
  // ));

  // round carousel
  const productArtist = productData?.map((item) => (
    <CarouselType2
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
    />
  ));

  // toggleCallback={toggling}

  // DARKMODEVAL::{darkMode}

  return (
    <>
      <LargerCarousel />

      <h2 className="homepage-heading">Top Trending</h2>
      { productTrending?.length > 0 && <Carousel showDots={false} responsive={responsive}>
        {productTrending}
      </Carousel> } 

      <h2 className="homepage-heading">Happy Mood</h2>
      {productHappy?.length > 0 && <Carousel showDots={false} responsive={responsive}>
        {productHappy}
      </Carousel>}

      <h2 className="homepage-heading">Romantic Mood</h2>
      { productRomantic?.length > 0 && <Carousel showDots={false} responsive={responsive}>
        {productRomantic}
      </Carousel> }

      <h2 className="homepage-heading">Sad Songs</h2>
      {productSad?.length > 0 && <Carousel showDots={false} responsive={responsive}>
        {productSad}
      </Carousel>}

      <h2 className="homepage-heading">Excited Mood</h2>

      {productExcited?.length > 0 && <Carousel showDots={false} responsive={responsive}>
        {productExcited}
      </Carousel>}

      <h2 className="homepage-heading">Artist</h2>
      {/* round */}
      <Carousel showDots={false} responsive={responsive}>
        {productArtist}
      </Carousel>
    </>
  );
}

export default HomePage;
