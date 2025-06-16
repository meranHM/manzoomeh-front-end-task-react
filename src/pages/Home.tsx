import AboutSection from "../components/home/AboutSection"
import CTASection from "../components/home/CTASection"
import FeaturedHotelsSection from "../components/home/FeaturedHotelsSection"
import FeaturedToursSection from "../components/home/FeaturedToursSection"
import HeroSection from "../components/home/HeroSection"
import PopularDestinations from "../components/home/PopularDestinations"
import PromotionCarousel from "../components/home/PromotionCarousel"
import ServicesSection from "../components/home/ServicesSection"
import StatsSection from "../components/home/StatsSection"
import FeaturedTravelBlogSection from "../components/home/FeaturedTravelBlogSection"


const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <FeaturedToursSection />
      <StatsSection />
      <FeaturedHotelsSection />
      <PromotionCarousel />
      <FeaturedTravelBlogSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </>
  )
}

export default Home