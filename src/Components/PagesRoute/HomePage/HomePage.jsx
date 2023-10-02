import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LargerCarousel from "../../HomeCarousel/LargerCarousel.jsx";
import CarouselType2 from "../../CarouselTypes/CarouselType2.jsx";
import { productData } from "../../../Components/HomeCarousel/Data.jsx";
import TrendingSongsCarousel from "../../CarouselTypes/TrendingSongsCarousel.jsx";

import { responsive } from "../../CarouselTypes/CarouselResponsive.jsx";
import { useDispatch } from "react-redux";
import action from '../../../action.js'

import axios from 'axios';
import Loader from "react-js-loader";


function HomePage() {
  const [trendingSongs, setTrendingSongs] = useState();
  const [soulSongs, setSoulSongs] = useState();
  const [evergreenSongs, setEvergreenSongs] = useState();
  const [top20songs, setTop20Songs] = useState();


  const [happySongsData, setHappySongsData] = useState();
  const [romanticSongsData, setRomanticSongsData] = useState();
  const [sadSongsData, setSadSongsData] = useState();
  const [excitedSongsData, setExcitedSongsData] = useState();
  const [allsongs, setAllSongs] = useState();

  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  const [loader4, setLoader4] = useState(false);
  const [loader5, setLoader5] = useState(false);
  const [loader6, setLoader6] = useState(false);
  const [loader7, setLoader7] = useState(false);
  const [loader8, setLoader8] = useState(false);

  function setInLocalStorage(data) {
    const allSongsList = JSON.parse(localStorage.getItem("allData")) || [];
    if (!allSongsList) {
      localStorage.setItem("allData", JSON.stringify(...data));
    } else {
      localStorage.setItem("allData", JSON.stringify([...allSongsList, ...data]));
    }
  }

  const dispatch = useDispatch();
  
  async function fetching() {
    setLoader1(true);
    setLoader2(true);
    setLoader3(true);
    setLoader4(true);
    setLoader5(true);
    setLoader6(true);
    setLoader7(true);
    setLoader8(true);
    try {
      const headers = {
        'Content-Type': 'application/json',
        'projectId': '8jf3b15onzua'
      };
      const response = await axios.get("https://academics.newtonschool.co/api/v1/music/song?limit=100", { headers: headers });
      const result = response.data;
      const trendingData = result.data;
      dispatch(action.setAllSongsData(trendingData));
      setAllSongs(trendingData);


      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}&limit=100', {
          headers: {
              'projectId': 'ghmumg9x1zid'
          }
      }).then(data=>data.json()).then(response => {          
          const ts = response.data;
          setTrendingSongs(ts);      
          dispatch(action.setTrendingData(ts));
          setLoader1(false);          
          setInLocalStorage(ts);
      })

      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Soul soother"}&limit=100', {
        headers: {
            'projectId': 'ghmumg9x1zid'
        }
      }).then(data=>data.json()).then(response => {
        const tsa = response.data;
        setSoulSongs(tsa);
        dispatch(action.setSoulSongsData(tsa));
        setLoader2(false);
        setInLocalStorage(tsa);
      })

      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Evergreen melodies"}&limit=100', {
        headers: {
            'projectId': 'ghmumg9x1zid'
        }
        }).then(data=>data.json()).then(response => {
          const tsa = response.data;
          setEvergreenSongs(tsa);
          dispatch(action.setEvergreenData(tsa));
          setLoader3(false);
          setInLocalStorage(tsa);
      })

      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}&limit=100', {
          headers: {
              'projectId': 'ghmumg9x1zid'
          }
      }).then(data=>data.json()).then(response => {
        const tsa = response.data;
        setTop20Songs(tsa);
        dispatch(action.setTop20Data(tsa));
        setLoader4(false);
        setInLocalStorage(tsa);
      })


      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}&limit=100', {
          headers: {
              'projectId': 'ghmumg9x1zid'
          }
      }).then(data=>data.json()).then(response => {
        const hsd = response.data;
        setHappySongsData(hsd);
        dispatch(action.setHappyData(hsd));
        setLoader5(false);
        setInLocalStorage(hsd);
      })

      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}&limit=100', {
        headers: {
            'projectId': 'ghmumg9x1zid'
        }
        }).then(data=>data.json()).then(response => {
          const rsd = response.data;
          setRomanticSongsData(rsd);
          dispatch(action.setRomanticData(rsd));
          setLoader6(false);
          setInLocalStorage(rsd);
      })

      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}&limit=100', {
        headers: {
            'projectId': 'ghmumg9x1zid'
        }
        }).then(data=>data.json()).then(response => {
          const ssd = response.data;
          dispatch(action.setSadSongData(ssd));
          setSadSongsData(ssd);
          setLoader7(false);
          setInLocalStorage(ssd);
      })
      
      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}&limit=100', {
      headers: {
          'projectId': 'ghmumg9x1zid'
      }
      }).then(data=>data.json()).then(response => {
        const esd = response.data;
        dispatch(action.setExcitedData(esd));
        setExcitedSongsData(esd);
        setLoader8(false);
        setInLocalStorage(esd);
      })
    

    } catch (error) {
      console.log("Error fetching data", error)
    }
}


  useEffect (() => {
    fetching();
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
      album="no"
    />
  ));
  const productSoul = soulSongs?.map((item) => (    
    <TrendingSongsCarousel
      key={item._id}
      songId={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
      mood={item.mood}
      featured={item.featured}
      album="no"
    />
  ));
  const productEvergreen = evergreenSongs?.map((item) => (    
    <TrendingSongsCarousel
      key={item._id}
      songId={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
      mood={item.mood}
      featured={item.featured}
      album="no"
    />
  ));
  const productTop20 = top20songs?.map((item) => (    
    <TrendingSongsCarousel
      key={item._id}
      songId={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
      mood={item.mood}
      featured={item.featured}
      album="no"
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
    album="no"
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
      album="no"
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
    album="no"
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
    album="no"
    />
  ));


  // round carousel
  const productArtist = productData?.map((item) => (
    <CarouselType2
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      album="no"
    />
  ));

  // toggleCallback={toggling}

  // DARKMODEVAL::{darkMode}

  return (
    <>
      <LargerCarousel />
      <h2 className="homepage-heading">Top Trending</h2>
      {!loader1 ? 
        (<>
          { productTrending?.length > 0 && 
          <Carousel showDots={false} responsive={responsive}>
            {productTrending}
          </Carousel> } 
        </>) : (
          <Loader size="lg"/>
        )
      }
      
      <h2 className="homepage-heading">Peaceful Melodic</h2>
      {!loader1 ? 
        (<>        
          { productSoul?.length > 0 && 
          <Carousel showDots={false} responsive={responsive}>
            {productSoul}
          </Carousel> }         
        </>):(
          <Loader size="lg"/>
        )}

      <h2 className="homepage-heading">Evergreen Melodies</h2>
      {!loader3 ? (
        <>
          { productEvergreen?.length > 0 && 
          <Carousel showDots={false} responsive={responsive}>
            {productEvergreen}
          </Carousel> }        
        </>
      ): (
        <Loader size="lg"/>
      )}
      
      <h2 className="homepage-heading">Top 20 Of this week</h2>

      {!loader4 ? (<>
        { productTop20?.length > 0 && 
        <Carousel showDots={false} responsive={responsive}>
          {productTop20}
        </Carousel> }      
      </>):(
        <Loader size="lg"/>
      )}

      <h2 className="homepage-heading">Happy Mood</h2>
      {!loader5 ? (
        <>        
          {productHappy?.length > 0 && 
          <Carousel showDots={false} responsive={responsive}>
            {productHappy}
          </Carousel>}
        </>
      ):(
        <Loader size="lg"/>
      )}

      <h2 className="homepage-heading">Romantic Mood</h2>
      
      {!loader6 ? (<>
        { productRomantic?.length > 0 && 
        <Carousel showDots={false} responsive={responsive}>
          {productRomantic}
        </Carousel> }
      
      </>):(
        <Loader size="lg"/>
      )}

      <h2 className="homepage-heading">Sad Songs</h2>
      {!loader7 ? (
        <>
          {productSad?.length > 0 && 
          <Carousel showDots={false} responsive={responsive}>
            {productSad}
          </Carousel>}        
        </>
      ):(
        <Loader size="lg"/>
      )}

      <h2 className="homepage-heading">Excited Mood</h2>
      {!loader8 ? (
        <>
          {productExcited?.length > 0 && 
          <Carousel showDots={false} responsive={responsive}>
            {productExcited}
          </Carousel>}      
        </>
      ):(
        <Loader size="lg"/>
      )}

      {/* <h2 className="homepage-heading">Artist</h2>
      <Carousel showDots={false} responsive={responsive}>
        {productArtist}
      </Carousel> */}
    </>
  );
}

export default HomePage;
