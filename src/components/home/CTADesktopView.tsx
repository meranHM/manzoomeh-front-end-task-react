import desktopBg from './../../assets/home-page/cta/cta-desktop-background.png'
import landscape from './../../assets/home-page/cta/cta-landscape.png'


const CTADesktopView = () => {
    return (
        <>
            <img 
                src={landscape} 
                alt="Dubai Frame tower"
                className="w-64 h-auto hidden lg:block"
            />
            <div
            className="relative w-full hidden lg:block"
            >
            <div
                className="absolute inset-0 brightness-50 backdrop-blur-md z-0"
            >
                <img 
                src={desktopBg} 
                alt=""
                className="size-full object-cover"
                />
            </div>
            <div
                className="absolute inset-0 z-10 flex justify-between items-center px-16"
            >
                <div
                className="flex flex-col gap-4 text-white"
                >
                <p
                    className="font-poppins tracking-wider"
                >
                    Exclusive travel deals
                </p>
                <h3
                    className="text-4xl font-bold font-poppins max-w-[480px]"
                >
                    Book your dream vacation today !
                </h3>
                </div>
                <button
                className="uppercase font-semibold font-poppins text-white bg-orange-brand-medium rounded-pill px-5 py-3 z-10"
                >
                    Read More
                </button>
            </div>
        </div>
    </>
  )
}

export default CTADesktopView