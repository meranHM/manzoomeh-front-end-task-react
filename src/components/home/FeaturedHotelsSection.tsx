import { cities, durations, ratings, priceRange } from '../../data/constants/filterOptions'
import { featuredHotels } from '../../data/hotels'
import HotelCard from "./HotelCard"
import SelectMenuOne from "./SelectMenuOne"


const FeaturedHotelsSection = () => {
  return (
    <section
        className="container-center mt-12"
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
                    Our Featured Hotels
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

        {/* Hotel Cards Grid Container */}
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-6 md:p-4 lg:p-2"
        >
            {featuredHotels.map((hotel, index) => (
                <HotelCard
                    key={index}
                    imgSrc={hotel.imgSrc}
                    alt={hotel.alt}
                    rating={hotel.rating}
                    city={hotel.city}
                    country={hotel.country}
                    description={hotel.description}
                    price={hotel.price}
                />
            ))}
        </div>
    </section>
  )
}

export default FeaturedHotelsSection