import hotelIcon from './../../assets/icons/hotel.png'
import flightIcon from './../../assets/icons/flight.png'

interface TourCardProps {
    imgSrc: string
    alt: string
    title: string
    city: string
    hotelRating: string
    flight: string
    price: string
    duration: string
    foundDate: string
}


const TourCard = ({ imgSrc, alt, title, city, hotelRating, flight, price, duration, foundDate }: TourCardProps) => {
  return (
    <article
        className="flex flex-col font-dana bg-white border border-gray-light rounded-xl overflow-hidden text-left space-y-2"
    >
        <img 
            src={imgSrc}
            alt={alt}
        />
        <div
            className="flex flex-col p-3 space-y-2"
        >
            <h3 className="font-bold">
                {title}
            </h3>
            <p className="text-xs">
                {city}
            </p>
            <p
                className="flex items-center gap-2 text-xs"
            >
                <img 
                    src={hotelIcon}
                    alt="Hotel icon"
                    width={12}
                    height={14}
                    className="w-3 h-auto inline-block" 
                />
                {hotelRating}
            </p>
            <p
                className="flex items-center gap-2 text-xs"
            >
                <img 
                    src={flightIcon}
                    alt="Flight icon"
                    width={12}
                    height={14}
                    className="w-3 h-auto inline-block"
                />
                {flight}
            </p>
            <p className="font-bold text-xl">
                {price}
            </p>
            <p className="text-xs">
                Per traveller
            </p>
            <p className="text-xs">
                {duration}
            </p>
            <p className="text-xs">
                {foundDate}
            </p>
        </div>
    </article>
  )
}

export default TourCard