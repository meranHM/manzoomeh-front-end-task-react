import { featuredBlogs } from '../../data/blogs'
import TravelBlogCard from './TravelBlogCard'


const TravelBlogSection = () => {


    return (
        <section
            className="container-center mt-16"
        >
            <div
                className="flex flex-col items-center space-y-8"
            > 
                <p
                    className="text-orange-brand-medium font-reenie font-medium text-3xl"
                >
                    Roaming Tales
                </p>
                <h2
                    className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl"
                >
                    Travel Blog
                </h2>
                <p
                    className="font-poppins text-gray-deep max-w-3xl text-center"
                >
                    We share our experiences, tips and travel stories to inspire and guide our readers in their own
                    wanderlust adventures. From hidden gems to popular destinations, we showcase the beauty and
                    diversity of the world, and promote responsible and sustainable travel.
                </p>

                {/* Blog Cards Container */}
                <div
                    className="w-full flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap items-center justify-center gap-5 mt-14 px-4 z-20"
                >
                    {featuredBlogs.map((blog, index) => (
                        <TravelBlogCard 
                            key={index}
                            imgSrc={blog.imgSrc}
                            alt={blog.alt}
                            badge={blog.badge}
                            date={blog.date}
                            time={blog.time}
                            title={blog.title}
                        />
                    ))}
                </div>
            </div>
        </section>
  )
}

export default TravelBlogSection