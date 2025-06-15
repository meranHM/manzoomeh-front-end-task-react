import { popularDestinations } from "../../data/popularDestinations"
import DestinationCard from "./DestinationCard"



const PopularDestinations = () => {
    return (
        <section
            id="popular-destinations-section"
            className="container-center flex flex-col items-center mt-30"
        >
            {/* Headings */}
            <div className="text-center">
                <h2 
                    className="text-xl md:text-2xl lg:text-4xl font-extrabold whitespace-nowrap"
                >
                    Popular Destinations
                </h2>
                <p 
                    className="font-medium text-gray-dark text-sm md:text-base lg:text-xl mt-1"
                >
                    Navigate the Globe with Confidence
                </p>
            </div>

            <div
                id="popular-destinations-carousel"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center gap-2 mt-4 mx-auto"
            >
                {popularDestinations.map((dest, index) => (
                    <DestinationCard 
                        key={index} 
                        imgSrc={dest.imgSrc} 
                        alt={dest.alt} 
                    />
                ))}
            </div>
        </section>
  )
}

export default PopularDestinations