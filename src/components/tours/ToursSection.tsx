import { allTours } from "../../data/tours"
import TourCard from "../home/TourCard"
import FilterBox from "./FilterBox"
import { useState } from "react"
import arrLeft from './../../assets/icons/arrow-left-2.png'
import arrRight from './../../assets/icons/arrow-right-2.png'
import PaginationBtn from "./PaginationBtn"


const ITEMS_PER_PAGE = 12

const ToursSection = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allTours.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentTours = allTours.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return

    setCurrentPage(page)
  }

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
          {currentTours.map((tour, index) => (
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

      {/* Pagination Controls */}
      <div
        className="flex justify-center items-center p-4 mt-10 gap-2"
      >
        <PaginationBtn
          onClick={() => goToPage(currentPage - 1)}
          bgColor="bg-[#F0E5DA]"
        >
          <img src={arrLeft} width={10} height={10} />
        </PaginationBtn>
        

        <PaginationBtn
          onClick={() => goToPage(1)}
          bgColor="bg-[#F0F0F0]"
        >
          1
        </PaginationBtn>

        {currentPage > 1 && (
          <PaginationBtn
            onClick={() => goToPage(1)}
            bgColor="bg-[#F18316]"
            isDisabled={true}
          >
            {currentPage}
          </PaginationBtn>
        )}

        <PaginationBtn
          onClick={() => goToPage(currentPage + 1)}
          bgColor="bg-[#F0E5DA]"
          isDisabled={currentPage === totalPages}
        >
          <img src={arrRight} width={10} height={10} />
        </PaginationBtn>

      </div>
    </section>
  )
}

export default ToursSection