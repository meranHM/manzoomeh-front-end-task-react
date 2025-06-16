import { allBlogs } from "../../data/blogs"
import { useState } from "react"
import arrLeft from './../../assets/icons/arrow-left-2.png'
import arrRight from './../../assets/icons/arrow-right-2.png'
import TravelBlogCard from "../home/FeaturedTravelBlogCard"
import BlogFilterBox from "./BlogFilterBox"
import PaginationBtn from "../tours/PaginationBtn"

const ITEMS_PER_PAGE = 15


const NewsSection = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(allBlogs.length / ITEMS_PER_PAGE)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentBlogs = allBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE)

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
        News
      </h2>
      <div
        className="w-full flex flex-col-reverse sm:flex-row gap-4 mt-6"
      >
        {/* Tours Grid Container */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3"
        >
            {currentBlogs.map((blog, index) => (
                <TravelBlogCard
                    key={index}
                    imgSrc={blog.imgSrc}
                    alt={blog.title}
                    title={blog.title}
                    badge={blog.badge}
                    time={blog.time}
                    date={blog.date}
                    avatarShown={true}
                />
            ))}
        </div>

        {/* Filter Box */}
        <BlogFilterBox />
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

export default NewsSection