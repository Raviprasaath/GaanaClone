import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LargerCarousel from "../../HomeCarousel/LargerCarousel.jsx";
import TrendingSongsCarousel from "../../CarouselTypes/TrendingSongsCarousel.jsx";

import { responsive } from "../../CarouselTypes/CarouselResponsive.jsx";
import { useDispatch } from "react-redux";
import action from "../../../action.js";
import Loader from "react-js-loader";

import { fetchDataByType, fetchArtists } from "../../Fetching/fetching";
import {getSongsByArtist} from '../../../Utility.jsx'



function HomePage() {
  const [trendingSongs, setTrendingSongs] = useState();
  const [soulSongs, setSoulSongs] = useState();
  const [evergreenSongs, setEvergreenSongs] = useState();
  const [top20songs, setTop20Songs] = useState();
  const [happySongsData, setHappySongsData] = useState();
  const [romanticSongsData, setRomanticSongsData] = useState();
  const [sadSongsData, setSadSongsData] = useState();
  const [excitedSongsData, setExcitedSongsData] = useState();
  const [artistPage1, setArtistPage1] = useState();


  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  const [loader4, setLoader4] = useState(false);
  const [loader5, setLoader5] = useState(false);
  const [loader6, setLoader6] = useState(false);
  const [loader7, setLoader7] = useState(false);
  const [loader8, setLoader8] = useState(false);

  const dispatch = useDispatch();

  function setInLocalStorage(data) {
    const allSongsList = JSON.parse(localStorage.getItem("allData")) || [];
    if (!allSongsList) {
      localStorage.setItem("allData", JSON.stringify(...data));
    } else if (allSongsList.length < 410) {
      localStorage.setItem(
        "allData",
        JSON.stringify([...allSongsList, ...data])
      );
    }
  }

  useEffect(() => {
    const allFetchedData = [];
    setLoader1(true);
    setLoader2(true);
    setLoader3(true);
    setLoader4(true);
    setLoader5(true);
    setLoader6(true);
    setLoader7(true);
    setLoader8(true);

    const fetchData = async () => {
      try {
        const trendingData = await fetchDataByType("Trending songs");
        allFetchedData.push(...trendingData);
        setTrendingSongs(trendingData);
        dispatch(action.setTrendingData(trendingData));
        setInLocalStorage(trendingData);
        setLoader1(false);

        const soulSootherData = await fetchDataByType("Soul soother");
        allFetchedData.push(...soulSootherData);
        setSoulSongs(soulSootherData);
        dispatch(action.setSoulSongsData(soulSootherData));
        setInLocalStorage(soulSootherData);
        setLoader2(false);

        const everGreenData = await fetchDataByType("Evergreen melodies");
        allFetchedData.push(...everGreenData);
        setEvergreenSongs(everGreenData);
        dispatch(action.setEvergreenData(everGreenData));
        setInLocalStorage(everGreenData);
        setLoader3(false);

        const top20Data = await fetchDataByType("Top 20 of this week");
        allFetchedData.push(...top20Data);
        setTop20Songs(top20Data);
        dispatch(action.setTop20Data(top20Data));
        setInLocalStorage(top20Data);
        setLoader4(false);

        const happyMood = await fetchDataByType("happy");
        allFetchedData.push(...happyMood);
        setHappySongsData(happyMood);
        dispatch(action.setHappyData(happyMood));
        setInLocalStorage(happyMood);
        setLoader5(false);

        const romanticMood = await fetchDataByType("romantic");
        allFetchedData.push(...romanticMood);
        setRomanticSongsData(romanticMood);
        dispatch(action.setRomanticData(romanticMood));
        setInLocalStorage(romanticMood);
        setLoader6(false);

        const sadMood = await fetchDataByType("sad");
        allFetchedData.push(...sadMood);
        dispatch(action.setSadSongData(sadMood));
        setSadSongsData(sadMood);
        setInLocalStorage(sadMood);
        setLoader7(false);

        const excitedMood = await fetchDataByType("excited");
        allFetchedData.push(...excitedMood);
        dispatch(action.setExcitedData(excitedMood));
        setExcitedSongsData(excitedMood);
        setInLocalStorage(excitedMood);
        setLoader8(false);

        const artist = await fetchArtists();
        const newSongData = getSongsByArtist(artist);
        const newFilteredArray = [...new Set(newSongData.map((item)=>item))];
        setArtistPage1(newFilteredArray);
        dispatch(action.setArtistPage1(newFilteredArray));
        dispatch(action.setArtistCardsRender(newFilteredArray));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const generateProductComponents = (data) => {
    return data?.map((item) => (
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
  };

  const productTrending = generateProductComponents(trendingSongs);
  const productSoul = generateProductComponents(soulSongs);
  const productEvergreen = generateProductComponents(evergreenSongs);
  const productTop20 = generateProductComponents(top20songs);
  const productHappy = generateProductComponents(happySongsData);
  const productRomantic = generateProductComponents(romanticSongsData);
  const productSad = generateProductComponents(sadSongsData);
  const productExcited = generateProductComponents(excitedSongsData);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <LargerCarousel />
      {generateCarouselSection('Top Trending', productTrending, loader1)}
      {generateCarouselSection('Peaceful Melodic', productSoul, loader2)}
      {generateCarouselSection('Evergreen Melodies', productEvergreen, loader3)}
      {generateCarouselSection('Top 20 Of this week', productTop20, loader4)}
      {generateCarouselSection('Happy Mood', productHappy, loader5)}
      {generateCarouselSection('Romantic Mood', productRomantic, loader6)}
      {generateCarouselSection('Sad Songs', productSad, loader7)}
      {generateCarouselSection('Excited Mood', productExcited, loader8)}
    </>
  );
}

const generateCarouselSection = (title, data, loader) => {
  return (
    <>
      <h2 className="homepage-heading">{title}</h2>
      {!loader ? (
        <>
          {data?.length > 0 && (
            <Carousel showDots={false} responsive={responsive}>
              {data}
            </Carousel>
          )}
        </>
      ) : (
        <Loader size="lg" />
      )}
    </>
  );
};

export default HomePage;
