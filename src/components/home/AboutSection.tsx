import dottedPathBg from './../../assets/home-page/about/dotted-path.png'
import airlineSign from './../../assets/home-page/about/airline-tickets.png'
import cruiseSign from './../../assets/home-page/about/ocean-cruises.png'
import moftSign from './../../assets/home-page/about/means-of-transport.png'
import itinerSign from './../../assets/home-page/about/travel-itineraries.png'
import insurSign from './../../assets/home-page/about/travel-itineraries.png'
import guideSign from './../../assets/home-page/about/local-guide.png';
import FeatureCard from './FeatureCard'


const AboutSection = () => {
    const features = [
        {
            imgSrc: airlineSign,
            alt: "Airline Logo",
            title: "Airline Tickets",
            description: "Our travel agency specializes in providing our customers with the best deals on airline tickets."
        },
        {
            imgSrc: cruiseSign,
            alt: "Ocean Cruise Logo",
            title: "Ocean Cruises",
            description: "Luxurious and comfortable way of travel, and passengers can enjoy stunning views of the sea."
        },
        {
            imgSrc: moftSign,
            alt: "Means of Transport logo",
            title: "Means of Transport",
            description: "Our travel agency offers a variety of means of transport to get you around your destination safely."
        },
        {
            imgSrc: itinerSign,
            alt: "Travel itinerary Logo",
            title: "Travel Itineraries",
            description: "Our team of experts will take care of all the planning and logistics, providing you with a detailed itinerary."
        },
        {
            imgSrc: insurSign,
            alt: "Travel insurance logo",
            title: "Travel Insurance",
            description: "Travel insurance is an essential part of any trip, providing peace of mind and protection."
        },
        {
            imgSrc: guideSign,
            alt: "Local guide logo",
            title: "Local Guide",
            description: "We can connect you with guides who will take you off the best path and show you their city."
        },
    ]

  return (
    <section
        className="mt-20"
    >
        {/* Headings */}
        <div
            className="relative"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 -z-10 overflow-hidden h-96"
            >
                <img src={dottedPathBg} alt="" className="size-full object-cover"/>
            </div>

            {/* Content */}
            <div
                className="container-center z-10 p-6"
            >
                <p
                    className="font-reenie text-orange-brand-medium font-medium text-3xl px-4 mb-8"
                >
                    Let us help you plan your next adventure
                </p>
                <h2
                    className="font-poppins text-5xl font-bold leading-snug"
                >
                    Perfect <span className="text-orange-brand-medium font-poppins">Vacation</span><br />
                    come True
                </h2>
            </div>
        </div>

        {/* Grid Container */}
        <div
            className="container-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 lg:mt-48 p-6"
        >
            {features.map(feat => (
                <FeatureCard 
                    key={feat.title}
                    imgSrc={feat.imgSrc}
                    alt={feat.alt}
                    title={feat.title}
                    description={feat.description}
                />
            ))}
        </div>
    </section>
  )
}

export default AboutSection