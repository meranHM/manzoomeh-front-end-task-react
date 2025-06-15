import ServiceCard from "./ServiceCard"
import ServiceSupportCard from "./ServiceSupportCard"
import priceMatchBg from './../../assets/home-page/services/pricematch-background.png'
import saveTimeBg from './../../assets/home-page/services/savetime-background.png'
import coupleImg from './../../assets/home-page/services/couple-travellers.png'


const ServicesSection = () => {
  return (
    <section
        className="container-center mt-30"
    >   
        <div
            className="w-full flex justify-center lg:justify-start items-center gap-12 px-4"
        >
            {/* Bento Grid Container */}
            <div
                className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 max-w-[692px] min-h-[556px] p-6 gap-3"
            >
                {/* Left Tall Card */}
                <ServiceSupportCard />

                {/* Right Cards */}
                <ServiceCard 
                    title="Best Price"
                    description="Price match within 48 hours of order confirmation."
                    bgColor="#D4F6C0"
                    bgImage={priceMatchBg}
                    buttonText="Book Now"
                />

                <ServiceCard 
                    title={
                            `
                                Explore, Book, Soar: Your
                                Journey Awaits!  
                            `
                        }
                    description="Save your time!"
                    bgColor="#A8E2EF"
                    bgImage={saveTimeBg}
                    buttonText="Book Now"
                    bgPosition="bottom right"
                />
            </div>

            {/* Right Side Image */}
            <img 
                src={coupleImg} 
                alt="A Traveller couple" 
                className="hidden lg:block"
            />
        </div>
    </section>
  )
}

export default ServicesSection