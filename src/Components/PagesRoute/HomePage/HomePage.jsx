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
import { useDispatch } from "react-redux";
import action from '../../../action.js'

import axios from 'axios';


function HomePage() {
  const [trendingSongs, setTrendingSongs] = useState();
  const [happySongsData, setHappySongsData] = useState();
  const [romanticSongsData, setRomanticSongsData] = useState();
  const [sadSongsData, setSadSongsData] = useState();
  const [excitedSongsData, setExcitedSongsData] = useState();
  const [allsongs, setAllSongs] = useState();

  const dispatch = useDispatch();
  
  async function fetching() {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'projectId': '8jf3b15onzua'
      };
      const response = await axios.get("https://academics.newtonschool.co/api/v1/music/song?limit=100", { headers: headers });
      const result = response.data;
            
      
      // const localStorageData = localStorage.getItem("localSongs");
      // const parsedLocalStorageData = localStorageData ? JSON.parse(localStorageData) : [];
      
      const trendingData = result.data;
      dispatch(action.setAllSongsData(trendingData));
      setAllSongs(trendingData);
  
      const ts = trendingData?.filter((item) => {
        return item.featured === "Trending songs";
      });
      setTrendingSongs(ts);
  
      dispatch(action.setTrendingData(ts));
      
      
      const happySongs = result.data;
      const hsd = happySongs?.filter((item) => {
        return item.mood === "happy";
      });
      setHappySongsData(hsd);
      
      dispatch(action.setHappyData(hsd));
  
      const romanticSongs = result.data;
      const rsd = romanticSongs?.filter((item) => {
        return item.mood === "romantic";
      });
      setRomanticSongsData(rsd);
      
      dispatch(action.setRomanticData(rsd));
  
      const sadSongs = result.data;
      const ssd = sadSongs?.filter((item) => {
        return item.mood === "sad";
      });
      
      dispatch(action.setSadSongData(ssd));
      setSadSongsData(ssd);
  
  
  
      const excitedSongs = result.data;
      const esd = excitedSongs?.filter((item) => {
        return item.mood === "excited";
      });
      dispatch(action.setExcitedData(esd));
      setExcitedSongsData(esd);
    } catch (error) {
      console.log("Error fetching data", error)
    }


}


  useEffect (() => {
    
    setTimeout (()=> {
      fetching();
    }, 500)

  }, [])

  



  // Trending Carousel
  const productTrending = trendingSongs?.map((item) => (    
    <TrendingSongsCarousel
      key={item._id}
      songId={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
      mood={item.mood}
      featured={item.featured}
    />
  ));
  const productHappy = happySongsData?.map((item) => (
    <TrendingSongsCarousel
    key={item._id}
    songId={item._id}
    name={item.title}
    url={item.thumbnail}
    audio={item.audio_url}
    mood={item.mood}
    />
  ));
  const productRomantic = romanticSongsData?.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      songId={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
      mood={item.mood}
    />
  ));
  const productSad = sadSongsData?.map((item) => (
    <TrendingSongsCarousel
    key={item._id}
    songId={item._id}
    name={item.title}
    url={item.thumbnail}
    audio={item.audio_url}
    mood={item.mood}
    />
  ));
  const productExcited = excitedSongsData?.map((item) => (
    <TrendingSongsCarousel
    key={item._id}
    songId={item._id}
    name={item.title}
    url={item.thumbnail}
    audio={item.audio_url}
    mood={item.mood}
    />
  ));


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
      { productTrending?.length > 0 && 
      <Carousel showDots={false} responsive={responsive}>
        {productTrending}
      </Carousel> } 

      <h2 className="homepage-heading">Happy Mood</h2>
      {productHappy?.length > 0 && 
      <Carousel showDots={false} responsive={responsive}>
        {productHappy}
      </Carousel>}

      <h2 className="homepage-heading">Romantic Mood</h2>
      { productRomantic?.length > 0 && 
      <Carousel showDots={false} responsive={responsive}>
        {productRomantic}
      </Carousel> }

      <h2 className="homepage-heading">Sad Songs</h2>
      {productSad?.length > 0 && 
      <Carousel showDots={false} responsive={responsive}>
        {productSad}
      </Carousel>}

      <h2 className="homepage-heading">Excited Mood</h2>

      {productExcited?.length > 0 && 
      <Carousel showDots={false} responsive={responsive}>
        {productExcited}
      </Carousel>}

      {/* <h2 className="homepage-heading">Artist</h2>
      <Carousel showDots={false} responsive={responsive}>
        {productArtist}
      </Carousel> */}
    </>
  );
}

export default HomePage;
