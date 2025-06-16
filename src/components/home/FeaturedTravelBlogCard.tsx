import calenderIcon from './../../assets/icons/calender.png'
import clockIcon from './../../assets/icons/clock.png'
import avatar from './../../assets/blog-page/avatar.png'

interface TravelBlogCardProps {
    imgSrc: string
    alt: string
    badge: string
    date: string
    time: string
    title: string
    avatarShown?: boolean
}


const TravelBlogCard = ({ imgSrc, alt, badge, date, time, title, avatarShown }: TravelBlogCardProps) => {
  return (
    <article
        className="relative rounded-box overflow-hidden w-full max-w-[413px] h-[544px]"
    >
        <img 
            src={imgSrc} 
            alt={alt}
            className="absolute inset-0 z-0 object-cover h-[333px]"
        />
        <span
            className="absolute z-10 rounded-pill px-5 py-2 bg-white text-black font-bold top-5 left-5"
        >
            {badge}
        </span>
        <div
            className="absolute flex flex-col justify-between rounded-box bg-white border border-gray-ultra-light z-10 bottom-0 left-0 w-full h-1/2 p-4"
        >
            <div
                className="flex gap-4"
            >
                <span
                    className="flex items-center gap-2"
                >
                    <img 
                        src={calenderIcon} 
                        alt="Calender icon"
                        width={12}
                        height={12}
                        className="w-3 h-3" 
                    />
                    {date}
                </span>
                <span
                    className="flex items-center gap-2"
                >
                    <img 
                        src={clockIcon} 
                        alt="Clock icon"
                        width={12}
                        height={12}
                        className="w-3 h-3" 
                    />
                    {time}
                </span>
            </div>
            <h3
                className="font-bold text-base md:text-lg lg:text-xl text-left"
            >
                {title}
            </h3>
            <div
                className="w-full flex justify-between"
            >
                {avatarShown && (
                    <span
                        className="hidden lg:flex lg:flex-col xl:flex-row items-center font-bold text-xs xl:text-nowrap gap-1"
                    >
                        <img 
                            src={avatar}
                            alt="Avatar picture"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        Jimmy Dave
                    </span>
                )}

                <button
                    className="bg-gray-ultra-light rounded-pill border border-gray-soft text-black px-4 py-2 self-end"
                >
                    Keep Reading
                </button>
            </div>
        </div>
    </article>
  )
}

export default TravelBlogCard