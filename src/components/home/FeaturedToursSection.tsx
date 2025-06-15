import { featuredTours } from '../../data/tours'
import moreIcon from './../../assets/icons/more.png'
import { cities, durations, ratings, priceRange } from "../../data/constants/filterOptions"
import TourCard from "./TourCard"
import ButtonOne from "../design/ButtonOne"
import SelectMenuOne from "./SelectMenuOne"


const FeaturedTours = () => {
  return (
    <section
        id="featured-tours-section"
        className="container-center flex flex-col mt-24"
    >
        {/* Headings */}
        <div
            className="lg:flex lg:justify-between lg:items-center lg:px-4 mb-6"
        >
            <div
                className="text-center lg:text-left"
            >
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl xl:text-[52px] font-extrabold text-nowrap"
                >
                    Our Featured Tours
                </h2>
                <p
                    className="font-medium text-gray-dark text-xs sm:text-base xl:text-xl mt-2"
                >
                    Favorite destinations based on customer reviews
                </p>
            </div>

            {/* Tours Filterbox */}
            <div
                className="flex flex-wrap lg:flex-nowrap lg:items-center justify-center mt-4 mx-2 text-sm gap-2"
            >
                {/* Filter by City */}
                <label htmlFor="city" className="sr-only">Filtery by city</label>
                <SelectMenuOne 
                    options={cities}
                    name="city"
                    id="city"
                />

                {/* Filter by Duration */}
                <label htmlFor="city" className="sr-only">Filtery by duration</label>
                <SelectMenuOne 
                    options={durations}
                    name="duration"
                    id="duration"
                />
                
                {/* Filter by Review / Rating */}
                <label htmlFor="rating" className="sr-only">Filtery by rating</label>
                <SelectMenuOne 
                    options={ratings}
                    name="rating"
                    id="rating"
                />

                {/* Filter by Review / Rating */}
                <label htmlFor="price-range" className="sr-only">Filtery by price range</label>
                <SelectMenuOne 
                    options={priceRange}
                    name="price-range"
                    id="price-range"
                />
            </div>
        </div>

        {/* Tour Cards Grid Container */}
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 lg:mt-12 p-6 md:p-4 lg:p-2"
        >
            {featuredTours.map((tour, index) => (
                <TourCard
                    key={index}
                    imgSrc={tour.imgSrc}
                    alt={tour.title}
                    title={tour.title}
                    city={tour.city}
                    hotelRating={tour.hotelRating}
                    flight={tour.flight}
                    price={tour.price}
                    duration={tour.duration}
                    foundDate={tour.foundDate}
                />
            ))}
        </div>

        <ButtonOne
            className="flex items-center justify-center m-4 gap-2 rounded-pill sm:self-center"
        >
            <img 
                src={moreIcon}
                alt="More icon"
                width={24}
                height={24}
                className="w-6 h-6"
            />
            Load More Tours
        </ButtonOne>
    </section>
  )
}

export default FeaturedTours