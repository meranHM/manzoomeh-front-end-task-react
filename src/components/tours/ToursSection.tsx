import SelectMenuOne from "./SelectMenuOne"
import landScape1 from './../../assets/home-page/featured-tours/landscape-image-1.png'
import landScape2 from './../../assets/home-page/featured-tours/landscape-image-2.png'
import landScape3 from './../../assets/home-page/featured-tours/landscape-image-3.png'
import moreIcon from './../../assets/icons/more.png'
import TourCard from "./TourCard"
import ButtonOne from "../header/ButtonOne"


const FeaturedTours = () => {
    const cities = [
        { value: "leipzig", label: "Leipzig" },
        { value: "mallorca", label: "Mallorca" },
        { value: "istanbul", label: "Istanbul" },
        { value: "paris", label: "Paris" },
        { value: "london", label: "London" },
        { value: "madrid", label: "Madrid" },
        { value: "vienna", label: "Vienna" },
    ]
    
    const durations = [
        { value: "one-to-five-nights", label: "1-5 nights" },
        { value: "five-to-seven-nights", label: "5-7 nights" },
        { value: "seven-to-ten-nights", label: "7-10 nights" },
        { value: "ten-to-fourteen-nights", label: "10-14 nights" },
        { value: "fourteen-to-thirty-nights", label: "14-30 nights" },
    ]

    const ratings = [
        { value: "highest-rating", label: "Highest Rating" },
        { value: "lowest-rating", label: "Lowest Rating" },
    ]

    const priceRange = [
        { value: "most-expensive", label: "Most Expensive" },
        { value: "least-expensive", label: "Least Expensive" },
    ]

    const tours = [
        { 
            imgSrc: landScape1, 
            title: "Treurer Olive Grove & Grand House - Adults Only + Flight",
            city: "Algaida",
            hotelRating: "5 Stars - 10/10 Exceptional (9)",
            flight: "Leipzig(LEJ)-Palma de mallorca",
            price: "1,421 $",
            duration: "Sun,6 Jul - Sat , 12 Jul ( 6 nights)",
            foundDate: "39 hours"
        },
        { 
            imgSrc: landScape2, 
            title: "Treurer Olive Grove & Grand House - Adults Only + Flight",
            city: "Algaida",
            hotelRating: "5 Stars - 10/10 Exceptional (9)",
            flight: "Leipzig(LEJ)-Palma de mallorca",
            price: "1,421 $",
            duration: "Sun,6 Jul - Sat , 12 Jul ( 6 nights)",
            foundDate: "39 hours"
        },
        { 
            imgSrc: landScape3, 
            title: "Treurer Olive Grove & Grand House - Adults Only + Flight",
            city: "Algaida",
            hotelRating: "5 Stars - 10/10 Exceptional (9)",
            flight: "Leipzig(LEJ)-Palma de mallorca",
            price: "1,421 $",
            duration: "Sun,6 Jul - Sat , 12 Jul ( 6 nights)",
            foundDate: "39 hours"
        },
        { 
            imgSrc: landScape1, 
            title: "Treurer Olive Grove & Grand House - Adults Only + Flight",
            city: "Algaida",
            hotelRating: "5 Stars - 10/10 Exceptional (9)",
            flight: "Leipzig(LEJ)-Palma de mallorca",
            price: "1,421 $",
            duration: "Sun,6 Jul - Sat , 12 Jul ( 6 nights)",
            foundDate: "39 hours"
        },
        { 
            imgSrc: landScape2, 
            title: "Treurer Olive Grove & Grand House - Adults Only + Flight",
            city: "Algaida",
            hotelRating: "5 Stars - 10/10 Exceptional (9)",
            flight: "Leipzig(LEJ)-Palma de mallorca",
            price: "1,421 $",
            duration: "Sun,6 Jul - Sat , 12 Jul ( 6 nights)",
            foundDate: "39 hours"
        },
        { 
            imgSrc: landScape3, 
            title: "Treurer Olive Grove & Grand House - Adults Only + Flight",
            city: "Algaida",
            hotelRating: "5 Stars - 10/10 Exceptional (9)",
            flight: "Leipzig(LEJ)-Palma de mallorca",
            price: "1,421 $",
            duration: "Sun,6 Jul - Sat , 12 Jul ( 6 nights)",
            foundDate: "39 hours"
        },
        { 
            imgSrc: landScape1, 
            title: "Treurer Olive Grove & Grand House - Adults Only + Flight",
            city: "Algaida",
            hotelRating: "5 Stars - 10/10 Exceptional (9)",
            flight: "Leipzig(LEJ)-Palma de mallorca",
            price: "1,421 $",
            duration: "Sun,6 Jul - Sat , 12 Jul ( 6 nights)",
            foundDate: "39 hours"
        },
        { 
            imgSrc: landScape2, 
            title: "Treurer Olive Grove & Grand House - Adults Only + Flight",
            city: "Algaida",
            hotelRating: "5 Stars - 10/10 Exceptional (9)",
            flight: "Leipzig(LEJ)-Palma de mallorca",
            price: "1,421 $",
            duration: "Sun,6 Jul - Sat , 12 Jul ( 6 nights)",
            foundDate: "39 hours"
        },
    ]

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
            <div>
              
            </div>
        </div>

        {/* Tour Cards Grid Container */}
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 lg:mt-12 p-6 md:p-4 lg:p-2"
        >
            {tours.map((tour, index) => (
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
    </section>
  )
}

export default FeaturedTours