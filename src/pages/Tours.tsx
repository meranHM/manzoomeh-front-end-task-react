import DescriptionSection from "../components/tours/DescriptionSection"
import HeroSection from "../components/tours/HeroSection"
import ToursSection from "../components/tours/ToursSection"
import AboutSection from "../components/home/AboutSection"
import CTASection from "../components/home/CTASection"


const Tours = () => {
  return (
    <>
      <HeroSection />
      <ToursSection />
      <DescriptionSection />
      <AboutSection 
        bgImageHidden={true}
      />
      <CTASection />
    </>
  )
}

export default Tours