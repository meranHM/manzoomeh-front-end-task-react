import mobileBg from './../../assets/home-page/cta/cta-mobile-background.webp'


const CTAMobileView = () => {
  return (
    <div
        className="relative w-full h-[500px] block lg:hidden"
    >
        <div
            className="absolute inset-0 brightness-50 backdrop-blur-lg z-0"
        >
            <img 
                src={mobileBg} 
                alt=""
                className="size-full object-cover"
            />
        </div>
        <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-between md:flex-row md:items-center p-6"
        >
            <div
                className="flex flex-col items-center md:items-start gap-4 text-white"
            >
            <p
                className="font-poppins tracking-wider"
            >
                Exclusive travel deals
            </p>
            <h3
                className="text-4xl font-bold text-center md:text-left font-poppins lg:max-w-[480px]"
            >
                Book your dream vacation today!
            </h3>
            </div>
            <button
                className="uppercase font-semibold font-poppins text-white bg-orange-brand-medium rounded-pill px-5 py-3 z-10"
            >
                Read More
            </button>
        </div>
    </div>
  )
}

export default CTAMobileView