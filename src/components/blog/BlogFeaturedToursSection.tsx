import SelectMenuOne from "../home/SelectMenuOne"
import { cities, durations, ratings, priceRange } from "../../data/constants/filterOptions"
import BlogFeaturedTourCard from "./BlogFeaturedTourCard"
import { blogFeaturedTours } from "../../data/tours"



const BlogFeaturedToursSection = () => {
  return (
    <section
        className="container-center mt-36"
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

        {/* Tour Cards Container */}
        <div
            className="w-full flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap items-center justify-center gap-3"
        >
            {blogFeaturedTours.map((tour, index) => (
                <BlogFeaturedTourCard 
                    key={index}
                    imgSrc={tour.imgSrc}
                    alt={tour.title}
                    badge={tour.badge}
                    title={tour.title}
                    duration={tour.duration}
                    date={tour.date}
                    price={tour.price}
                    rating={tour.rating}
                    reviewCount={tour.reviewCount}
                />
            ))}
        </div>
    </section>
  )
}

export default BlogFeaturedToursSection