import calenderIcon from './../../assets/icons/calender.png'
import clockIcon from './../../assets/icons/clock.png'
import starIcon from './../../assets/icons/blog-star.png'


interface BlogFeaturedTourCardProps {
    imgSrc: string
    alt: string
    badge: string
    title: string
    duration: string
    date: string
    price: string
    rating: string
    reviewCount: string
}


const BlogFeaturedTourCard = ({ 
    imgSrc, 
    alt, 
    badge, 
    title, 
    duration, 
    date, 
    price, 
    rating, 
    reviewCount }: BlogFeaturedTourCardProps) => {

  return (
    <article
        className="relative rounded-box overflow-hidden w-full max-w-[413px] h-[544px]"
    >
        <img 
            src={imgSrc} 
            alt={alt}
            className="absolute inset-0 -z-10 object-cover h-[333px]"
        />
        <span
            className="absolute top-5 left-5 z-10 rounded-pill px-5 py-2 bg-white text-[#3DC262] font-bold text-sm"
        >
            {badge}
        </span>
        <div
            className="absolute z-20 top-1/2 -translate-y-1/2 right-8 flex items-center bg-white rounded-pill px-6 py-2 shadow-blog-tour-rating"
        >
            <p
                className="flex items-center gap-1 font-bold text-sm"
            >
                <img src={starIcon} alt="Star icon" width={13} height={10} className="w-3 h-3 object-cover" />
                {rating}
                <span className="font-medium text-gray-dark">({reviewCount} reviews)</span>
            </p>
        </div>
        <div
            className="absolute flex flex-col justify-between rounded-box bg-white border border-gray-ultra-light z-10 bottom-0 left-0 w-full h-1/2 p-8"
        >
            <div
                className="flex flex-col items-center md:items-start space-y-2"
            >
                <h3
                    className="font-extrabold text-xl"
                >
                    {title}
                </h3>
                <div
                    className="flex flex-col md:flex-row self-start gap-2 md:gap-5"
                >
                    <span className="flex items-center gap-1 font-medium text-gray-dark text-nowrap">
                        <img src={clockIcon} alt="Clock icon" width={14} height={14} />
                        {duration}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-gray-dark text-nowrap">
                        <img src={calenderIcon} alt="Calandar icon" width={11} height={12} />
                        {date}
                    </span>
                </div>
            </div>
            <div
                className="w-full flex justify-between"
            >
                <p
                    className="font-extrabold text-xl md:text-2xl"
                >
                    {price} <span className="font-medium text-base text-gray-dark">/person</span>
                </p>
                <button
                    className="bg-blue-light border border-blue-deep-dark rounded-pill px-4 py-2"
                >
                    Book Now
                </button>
            </div>
        </div>
    </article>
  )
}

export default BlogFeaturedTourCard