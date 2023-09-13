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

const localStorageData = localStorage.getItem("localSongs");
const parsedLocalStorageData = localStorageData ? JSON.parse(localStorageData) : [];
const trendingData = parsedLocalStorageData.data;
const trendingSongs = trendingData.filter((item) => {
  return item.featured === "Trending songs";
});


const happySongs = parsedLocalStorageData.data;
const happySongsData = happySongs.filter((item) => {
  return item.mood === "happy";
});

const romanticSongs = parsedLocalStorageData.data;
const romanticSongsData = romanticSongs.filter((item) => {
  return item.mood === "romantic";
});

const sadSongs = parsedLocalStorageData.data;
const sadSongsData = sadSongs.filter((item) => {
  return item.mood === "sad";
});

const excitedSongs = parsedLocalStorageData.data;
const excitedSongsData = excitedSongs.filter((item) => {
  return item.mood === "excited";
});







function HomePage() {
  // const darkMode = useSelector((state) => state.usersData.darkMode);
  // console.log("print dark mode val", darkMode);

  // Trending Carousel
  const productTrending = trendingSongs.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));
  const productHappy = happySongsData.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));
  const productRomantic = romanticSongsData.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));
  const productSad = sadSongsData.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));
  const productExcited = excitedSongsData.map((item) => (
    <TrendingSongsCarousel
      key={item._id}
      name={item.title}
      url={item.thumbnail}
      audio={item.audio_url}
    />
  ));

  // data MultiCarouselCard carousel
  // const product = productData.map((item) => (
  //   <MultiCarouselCard key={item.id} name={item.name} url={item.imageurl} />
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

  // toggleCallback={toggling}

  // DARKMODEVAL::{darkMode}

  return (
    <>
      <LargerCarousel />

      <h2 className="homepage-heading">Top Trending</h2>
      <Carousel showDots={false} responsive={responsive}>
        {productTrending}
      </Carousel>

      <h2 className="homepage-heading">Happy Mood</h2>
      <Carousel showDots={false} responsive={responsive}>
        {productHappy}
      </Carousel>

      <h2 className="homepage-heading">Romantic Mood</h2>
      <Carousel showDots={false} responsive={responsive}>
        {productRomantic}
      </Carousel>

      <h2 className="homepage-heading">Sad Songs</h2>
      <Carousel showDots={false} responsive={responsive}>
        {productSad}
      </Carousel>

      <h2 className="homepage-heading">Excited Mood</h2>

      <Carousel showDots={false} responsive={responsive}>
        {productExcited}
      </Carousel>

      <h2 className="homepage-heading">Artist</h2>
      {/* round */}
      <Carousel showDots={false} responsive={responsive}>
        {productArtist}
      </Carousel>
    </>
  );
}

export default HomePage;
