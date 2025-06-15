import { allTours } from "../../data/tours"
import TourCard from "../home/TourCard"
import FilterBox from "./FilterBox"



const ToursSection = () => {
  return (
    <section
      className="container-center mt-8"
    >
      <h2
        className="text-blue-deep text-2xl font-medium"
      >
        Other tours
      </h2>
      <div
        className="w-full flex flex-col-reverse sm:flex-row gap-4 mt-6"
      >
        {/* Tours Grid Container */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {allTours.map((tour, index) => (
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

        {/* Filter Box */}
        <FilterBox />
      </div>
    </section>
  )
}

export default ToursSection