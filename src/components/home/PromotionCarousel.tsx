import ButtonTwo from "../design/ButtonTwo"
import CarouselBtn from "./CarouselBtn"
import PromotionSlide from "./PromotionSlide"
import carouselImage1 from './../../assets/home-page/promotion-carousel/carousel-image-1.png'
import carouselImage2 from './../../assets/home-page/promotion-carousel/carousel-image-2.png'
import carouselImage3 from './../../assets/home-page/promotion-carousel/carousel-image-3.png'


const PromotionCarousel = () => {
  return (
    <section
        className="container-center mt-28 px-4"
    >
        {/* Navigation buttons */}
        <CarouselBtn direction="left" onClick={() => {}} />
        <CarouselBtn direction="right" onClick={() => {}} />

        <div 
            className="relative mx-4"
        >
            <div
              className="flex flex-col lg:flex-row justify-evenly items-center gap-2 px-6"
            >
                {/* Slide 1 */}
                <PromotionSlide
                    className="text-white"
                    imgSrc={carouselImage1}
                >
                    <div
                        className="size-full flex flex-col justify-end items-end md:justify-between z-10"
                    >
                        <h3 
                            className="backdrop-blur-sm p-1 rounded-md text-xl md:text-2xl font-extrabold leading-relaxed"
                        >
                            We Make Every<br />
                            Trip Special
                        </h3>
                    </div>
                    <ButtonTwo
                        className="rounded-pill"
                    >
                        View More →
                    </ButtonTwo>              
                </PromotionSlide>

                {/* Slide 2 */}
                <PromotionSlide
                    imgSrc={carouselImage2}
                    className="text-black"
                >
                    <div
                        className="w-full flex flex-col justify-between items-start gap-6"
                    >
                        <span
                            className="font-bold"
                        >
                            Limited Offers
                        </span>
                        <h3 
                            className="text-black text-xl md:text-2xl font-extrabold leading-relaxed"
                        >
                            Buy 1, Get 1 Free<br />
                            Attractions
                        </h3>
                        <ButtonTwo
                            className="rounded-pill"
                        >
                            View More →
                        </ButtonTwo>
                    </div>
                </PromotionSlide>

                {/* Slide 3 */}
                <PromotionSlide
                    imgSrc={carouselImage3}
                    className="text-black"
                >
                    <div className="size-full flex flex-col justify-between items-start gap-5">
                        <span 
                            className="bg-orange-brand-light font-bold px-2 py-1 rounded w-fit"
                        >
                            Limited Offers
                        </span>
                        <h3 
                            className="bg-orange-brand-light px-2 rounded text-xl md:text-2xl font-extrabold leading-relaxed text-nowrap"
                        >
                            Buy 1, Get 1 Free<br />
                            Attractions
                        </h3>
                        <ButtonTwo
                            className="rounded-pill"
                        >
                            View More →
                        </ButtonTwo>
                    </div>
                </PromotionSlide>
            </div>
          </div>
    </section>
  )
}

export default PromotionCarousel