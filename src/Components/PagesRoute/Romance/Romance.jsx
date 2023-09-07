
import { productData, responsive } from "../../HomeCarousel/Data.jsx";
import MultiCarouselCard from "../../HomeCarousel/MultiCarouselCard.jsx";
import Carousel from "react-multi-carousel";


function Romance () {
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
                <h1> Romance </h1>
                <div>
                    <h2>New Age Romance</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Love Greetings</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Romance Like Superstars</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Love At First Sight</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>90s Romance</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Sufi Love</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Retro Romance</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Evergreen Romance</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>I Miss You</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Naughty Love Songs</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Heartbreak</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                
            </div>
        </>
    )
}

export default Romance;