// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import image1 from "../../assets/home-pic1.webp";
// import image2 from "../../assets/home-pic2.webp";
// import image3 from "../../assets/home-pic3.webp";
// import image4 from "../../assets/home-pic4.webp";
// import image5 from "../../assets/home-pic5.webp";
// import image6 from "../../assets/home-pic6.webp";
// import image7 from "../../assets/home-pic7.webp";

// export default class HomeCarousel extends Component {
//   render() {
//     let settings = {
//       dots: false,
//       infinite: true,
//       autoplay: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 950,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 700,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },

//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 580,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         },
//       ]
//     };

//     return (
//       <div className="home-carousel">
//         <Slider {...settings}>
//           <div>
//             <img className="sliding-img" src={image1} alt="image" />
//           </div>
//           <div>
//             <img className="sliding-img" src={image2} alt="image" />
//           </div>
//           <div>
//             <img className="sliding-img" src={image3} alt="image" />
//           </div>
//           <div>
//             <img className="sliding-img" src={image4} alt="image" />
//           </div>
//           <div>
//             <img className="sliding-img" src={image5} alt="image" />
//           </div>
//           <div>
//             <img className="sliding-img" src={image6} alt="image" />
//           </div>
//           <div>
//             <img className="sliding-img" src={image7} alt="image" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
