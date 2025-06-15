import AboutSection from "../components/home/AboutSection"
import FeaturedHotelsSection from "../components/home/FeaturedHotelsSection"
import FeaturedToursSection from "../components/home/FeaturedToursSection"
import HeroSection from "../components/home/HeroSection"
import PopularDestinations from "../components/home/PopularDestinations"
import PromotionCarousel from "../components/home/PromotionCarousel"
import ServicesSection from "../components/home/ServicesSection"
import StatsSection from "../components/home/StatsSection"
import TravelBlogSection from "../components/home/TravelBlogSection"


const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <FeaturedToursSection />
      <StatsSection />
      <FeaturedHotelsSection />
      <PromotionCarousel />
      <TravelBlogSection />
      <ServicesSection />
      <AboutSection />
    </>
  )
}

export default Home