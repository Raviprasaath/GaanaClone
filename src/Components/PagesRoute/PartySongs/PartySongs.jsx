
import { productData, responsive } from "../../HomeCarousel/Data.jsx";
import MultiCarouselCard from "../../HomeCarousel/MultiCarouselCard.jsx";
import Carousel from "react-multi-carousel";


function PartySongs () {
    const product = productData.map((item) => (
        <MultiCarouselCard
          key={item.id}
          name={item.name}
          url={item.imageurl}
          price={item.price}
        />
      ));


    return (
        <>
            <div className="party-songs">
                <h1> Party Songs </h1>
                <div>
                    <h2>Turn It Up</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>All Time Favorite Party Hits</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Retro Party</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Punjabi DJ</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Rave Party</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                
            </div>
        </>
    )
}

export default PartySongs;