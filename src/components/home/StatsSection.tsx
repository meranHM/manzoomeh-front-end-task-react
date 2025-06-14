import StatBox from "./StatBox"
import StatDivider from "./StatDivider"
import desktopBg from './../../assets/home-page/stats/stats-desktop-background.webp'
import mobileBg from './../../assets/home-page/stats/stats-mobile-background.webp'


const StatsSection = () => {
  return (
    <section
        id="stats-section"
        className="container-center relative flex flex-col justify-center mt-6 p-6 lg:h-[288px]"
    >
        {/* Background image for mobile view */}
        <div 
            className="absolute inset-0 -z-10 m-4 rounded-box overflow-hidden lg:hidden"
        >
            <img
                src={mobileBg}
                alt="A map on a desk with pins"
                className="size-full object-cover brightness-50"
            />
        </div>

        {/* Background image for desktop view */}
        <div 
            className="absolute inset-0 -z-10 mx-2 rounded-box overflow-hidden hidden lg:block"
        >
            <img
                src={desktopBg}
                alt="A man with a tablet planning a travel"
                width="1030"
                height="288"
                className="size-full brightness-50 object-cover object-top"
            />
        </div>

        {/* Stats */}
        <div 
            className="flex flex-col justify-center items-center lg:flex-row z-10"
        >
            <StatBox value="168k" label="Happy Clients" />
            <StatDivider />
            <StatBox value="+45k" label="Destinations" />
            <StatDivider />
            <StatBox value="+49k" label="Global Branch" />
            <StatDivider />
            <StatBox value="26k" label="Campaigns" />
        </div>
    </section>
  )
}

export default StatsSection