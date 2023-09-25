import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import image from "../../assets/1.jpg";

const SearchSection = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 960);

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth > 960);
    };
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  console.log("screenSize from search", screenSize);

  return (
    <>
      <div className="search-section-box">
        {!screenSize && (
          <div className="search-results">
            <div className="results-rows">
              <img src={image} alt="" />
              <div className="movie-name">Nameasdasdasdsd</div>
              <div className="artist-name">Artistasdasdasdsasd</div>
            </div>
          </div>
        )}
        {screenSize && (
          <div className="search-results-lap">
            <h2 className="title">Top Results</h2>
            <div className="search-cards trending">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}

                    modules={[Pagination, Navigation]}
                    navigation={true}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                        960: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                        1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="movie-container">
                            <div className="poster">
                                <img src={image} className="movie-poster" alt="" />
                            </div>
                            <div className="movie-name">
                                Vikram
                            </div>
                            <div className="artist-name">
                                Kamal
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="movie-container">
                            <div className="poster">
                                <img src={image} className="movie-poster" alt="" />
                            </div>
                            <div className="movie-name">
                                Vikram
                            </div>
                            <div className="artist-name">
                                Kamal
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="movie-container">
                            <div className="poster">
                                <img src={image} className="movie-poster" alt="" />
                            </div>
                            <div className="movie-name">
                                Vikram
                            </div>
                            <div className="artist-name">
                                Kamal
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="movie-container">
                            <div className="poster">
                                <img src={image} className="movie-poster" alt="" />
                            </div>
                            <div className="movie-name">
                                Vikram
                            </div>
                            <div className="artist-name">
                                Kamal
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="movie-container">
                            <div className="poster">
                                <img src={image} className="movie-poster" alt="" />
                            </div>
                            <div className="movie-name">
                                Vikram
                            </div>
                            <div className="artist-name">
                                Kamal
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="movie-container">
                            <div className="poster">
                                <img src={image} className="movie-poster" alt="" />
                            </div>
                            <div className="movie-name">
                                Vikram
                            </div>
                            <div className="artist-name">
                                Kamal
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="movie-container">
                            <div className="poster">
                                <img src={image} className="movie-poster" alt="" />
                            </div>
                            <div className="movie-name">
                                Vikram
                            </div>
                            <div className="artist-name">
                                Kamal
                            </div>
                        </div>
                    </SwiperSlide>
                
                </Swiper>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchSection;
