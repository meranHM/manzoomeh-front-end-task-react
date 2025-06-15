import clockIcon from './../../assets/icons/orange-clock.png'
import roadIcon from './../../assets/icons/road-sign.png'
import tourBg from './../../assets/tours-page/tour-background.webp'

const HeroSection = () => {
  return (
    <section
        id="hero-section"
        className="relative w-full"
    >
        {/* Headings */}
        <div
            className="w-full bg-blue-ultra-light"
        >
            <section
                className="w-full max-w-7xl mx-auto flex justify-between px-4"
            >
                <div>
                    <h1
                        className="text-blue-deep font-poppins text-[40px] font-bold"
                    >
                        Istanbul
                    </h1>
                    <p
                        className="text-blue-gray font-poppins text-sm"
                    >
                        Home / tour / tour Istanbul
                    </p>
                </div>
                <div
                    className="flex items-center gap-16"
                >
                    <div
                        className="flex gap-2"
                    >
                    <img 
                        src={clockIcon} 
                        alt="Clock icon"
                        width="50"
                        height="50"
                        className="w-[50px] h-[50px]"
                    />
                        <div
                            className="flex flex-col"
                        >
                            <span className="text-blue-gray-muted font-poppins">rate</span>
                            <p className="text-blue-deep text-xl font-bold font-poppins">4.8</p>
                        </div>
                    </div>
                <div
                    className="flex gap-2"
                >
                    <img 
                        src={roadIcon}
                        alt="road sign icon"
                        width="50"
                        height="50"
                        className="w-[50px] h-[50px]"
                    />
                    <div
                        className="flex flex-col"
                    >
                        <span className="text-blue-gray-muted font-poppins">tour</span>
                        <p className="text-blue-deep text-xl font-bold font-poppins">200</p>
                  </div>
                </div>
              </div>
            </section>
        </div>

        {/* Full-width Image */}
        <div
            className="relative w-full h-[330px]"
        >
            <div
                className="absolute inset-0 z-0 overflow-hidden"
            >
            <img 
                src={tourBg}
                alt="Istanbul city"
                className="size-full object-cover brightness-50"
                />
            </div>
            <div
                className="w-full max-w-7xl mx-auto p-4 absolute inset-0"
            >
                <h2
                    className="font-medium text-2xl text-white"
                >
                    Offer
            </h2>
            </div>
        </div>
    </section>
  )
}

export default HeroSection