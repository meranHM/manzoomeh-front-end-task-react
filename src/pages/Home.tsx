import FeaturedTours from "../components/home/FeaturedTours"
import HeroSection from "../components/home/HeroSection"
import PopularDestinations from "../components/home/PopularDestinations"


const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <FeaturedTours />
    </>
  )
}

export default Home