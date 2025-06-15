import starIcon from './../../assets/icons/star.png'
import bluePinIcon from './../../assets/icons/blue-pin.png'

interface HotelCardProps {
    imgSrc: string
    alt: string
    rating: string
    city: string
    country: string
    description: string
    price: string
}


const HotelCard = ({ imgSrc, alt, rating, city, country, description, price }: HotelCardProps) => {
  return (
    <article
        className="flex flex-col bg-white shadow-hotel-card rounded-2xl overflow-hidden text-left"
    >
        <img 
            src={imgSrc}
            alt={alt}
        />
        <div
            className="flex flex-col p-4 space-y-2"
        >
            <span
                className="text-sm text-gray-deep flex items-center rounded-lg gap-2 shadow-hotel-card-rating p-2"
            >
                <img 
                    src={starIcon} 
                    alt="Star icon"
                    width="20" 
                    height="20" 
                    className="w-5 h-5"
                />
                {rating}
            </span>
            <h3
                className="text-xl font-bold"
            >
                {city}
            </h3>
            <span
                className="flex items-center gap-4 text-gray-deep"
            >
                <img 
                    src={bluePinIcon}
                    alt="Blue map pin icon"
                    width="12"
                    height="16" 
                    className="w-3 h-4"
                />
                {country}
            </span>
            <hr />
            <p
                className="text-gray-deep"
            >
                {description}
            </p>
            <hr />
            <div
                className="w-full flex justify-between items-center"
            >
                <button
                    className="bg-blue-light border border-blue-deep-dark text-charcoal-dark font-bold px-5 py-2 rounded-[20px]"
                >
                    Details
                </button>
                <span
                    className="font-bold text-2xl"
                >
                    {price}
                </span>
            </div>
        </div>
    </article>
  )
}

export default HotelCard