import FeaturedTours from "../components/home/FeaturedTours"
import HeroSection from "../components/home/HeroSection"
import PopularDestinations from "../components/home/PopularDestinations"
import StatsSection from "../components/home/StatsSection"


const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <FeaturedTours />
      <StatsSection />
    </>
  )
}

export default Home