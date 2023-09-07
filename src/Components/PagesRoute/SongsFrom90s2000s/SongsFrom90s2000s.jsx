
import { productData, responsive } from "../../HomeCarousel/Data.jsx";
import MultiCarouselCard from "../../HomeCarousel/MultiCarouselCard.jsx";
import Carousel from "react-multi-carousel";


function SongsFrom90s2000s () {
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
                <h1> 90s & 2000s </h1>
                <div>
                    <h2>90s Top 30</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>90s Superstars</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Early 2000s Top 30</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                <div>
                    <h2>Upbeat 90s & Early 2000s</h2>
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
                    <h2>Hit Voices 90s</h2>
                    <Carousel showDots={false} responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
                
            </div>
        </>
    )
}

export default SongsFrom90s2000s;