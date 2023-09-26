import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Loader from "react-js-loader";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import image from "../../assets/1.jpg";

const SearchSection = (props) => {
  const [loader, setLoader]= useState(false);  
  const [top20, setTop20] = useState([]);
  const [songData, setSongData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [artistData, setArtistData] = useState([]);

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


  function fetching() {
    setLoader(true);
    
    // default
    fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}&limit=100', {
        headers: {
            'projectId': 'ghmumg9x1zid'
        }
    }).then(data=>data.json()).then(response => {
    const tsa = response.data
    console.log(tsa)
    setTop20(tsa);
    setLoader(false);
    })

    // songs
    fetch(`https://academics.newtonschool.co/api/v1/music/song?filter={"title":%22${props.message}%22}`, {
    // fetch(`https://academics.newtonschool.co/api/v1/music/song?filter={"title":"Kohinoor"}`, {
        headers: {
            'projectId': 'ghmumg9x1zid'
        }
    }).then(data=>data.json()).then(response => {
        setSongData(response.data);
    })

    // album
    fetch(`https://academics.newtonschool.co/api/v1/music/album?filter={"title":%22${props.message}%22}`, {
    // fetch(`https://academics.newtonschool.co/api/v1/music/album?filter={"title":"Kohinoor"}`, {
    headers: {
        'projectId': 'ghmumg9x1zid'
    }
    }).then(data=>data.json()).then(response => {
        setAlbumData(response.data);
    })

    // artist
    fetch(`https://academics.newtonschool.co/api/v1/music/artist/?filter={"name":%22${props.message}%22}`, {
    // fetch(`https://academics.newtonschool.co/api/v1/music/artist/?filter={"name":"Babul Supriyo"}`, {
    headers: {
        'projectId': 'ghmumg9x1zid'
    }
    }).then(data=>data.json()).then(response => {
        setArtistData(response.data);
    })
  }

  useEffect(()=> {
    fetching();
  }, [props])


  return (
    <>
      <div className="search-section-box">
        {!screenSize && (
          <div className="search-results">
            <h2 className="title">Top Results</h2>
            <div className="results-rows">
              <img src={image} alt="" />
              <div className="movie-name">Nameasdasdasdsd</div>
              <div className="artist-name">Artistasdasdasdsasd</div>
            </div>            
          </div>
        )}
        {screenSize && (
          <div className="search-results-lap">
            {
            !songData && 
            !albumData && 
            artistData.length==0
            
            && 
                <>
                    <h2 className="title">Top Results</h2>
                    {!loader ? (
                        <>
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
                                        spaceBetween: 10,
                                        },
                                        1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                        },
                                        1080: {
                                        slidesPerView: 3,
                                        spaceBetween: 25,
                                        },
                                        1350: {
                                        slidesPerView: 4,
                                        spaceBetween: 25,
                                        },
                                    }}
                                >
                                    {top20.map((item)=> (
                                        <SwiperSlide key={item._id}>
                                            <div className="movie-container">
                                                <div className="poster">
                                                    <img src={item.thumbnail} className="movie-poster" alt="" />
                                                </div>
                                                <div className="movie-name">
                                                    {item.title}
                                                </div>
                                                <div className="artist-name">
                                                {item.artist && item.artist[0] && item.artist[0].name ?
                                                item.artist[0].name : ""}
                                                </div>
                                            </div>
                                        </SwiperSlide>                                                    
                                    ))}
                                </Swiper>
                            </div>
                        </>
                    ):(
                        <Loader size="lg"/>
                    )}                
                </>
            }
            {songData && songData.length > 0 &&
                <>
                    <h2 className="title">Songs</h2>
                    <div className="search-cards songs">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}

                            modules={[Pagination, Navigation]}
                            navigation={true}
                            className="mySwiper"
                            breakpoints={{
                                640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                },
                                1024: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                },
                                1080: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                                },
                                1350: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                                },
                            }}
                        >
                            {songData.map((item)=> (
                                <SwiperSlide key={item._id}>
                                    <div  className="movie-container">
                                        <div className="poster">
                                            <img src={item.thumbnail} className="movie-poster" alt="" />
                                        </div>
                                        <div className="movie-name">
                                            {item.title}
                                        </div>
                                        <div className="artist-name">
                                            {item.artist && item.artist[0] && item.artist[0].name ?
                                            item.artist[0].name : ""}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>                
                </>
            }
            {albumData && albumData.length > 0 && 
                <>
                    <h2 className="title">Album</h2>
                    <div className="search-cards album">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}

                            modules={[Pagination, Navigation]}
                            navigation={true}
                            className="mySwiper"
                            breakpoints={{
                                640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                },
                                1024: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                },
                                1080: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                                },
                                1350: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                                },
                            }}
                        >   
                        {albumData.map((item)=> (
                            <SwiperSlide key={item._id}>
                                <div className="movie-container">
                                    <div className="poster">
                                        <img src={item.image} className="movie-poster" alt="" />
                                    </div>
                                    <div className="movie-name">
                                        {item.title}
                                    </div>
                                    <div className="artist-name">
                                        {item.artists && item.artists[0] && item.artists[0].name ?
                                        item.artists[0].name : ""}
                                    </div>
                                </div>
                            </SwiperSlide>                
                        ))}
                        </Swiper>
                    </div>
                </>
            
            }
            {artistData && artistData.length > 0 && 
                <>
                    <h2 className="title">Artist</h2>
                    <div className="search-cards artist">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}

                            modules={[Pagination, Navigation]}
                            navigation={true}
                            className="mySwiper"
                            breakpoints={{
                                640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                },
                                1024: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                },
                                1080: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                                },
                                1350: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                                },
                            }}
                        >
                            {artistData.map((item)=>(
                                <SwiperSlide key={item._id}>
                                    <div className="movie-container">
                                        <div className="poster">
                                            <img src={item.image} className="movie-poster" alt="" />
                                        </div>
                                        <div className="movie-name">
                                            {item.name}
                                        </div>
                                    </div>
                                </SwiperSlide>                

                            ))}
                        </Swiper>
                    </div>                
                </>
            }
          </div>
        )}
      </div>
    </>
  );
};

export default SearchSection;
