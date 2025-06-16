import DescriptionSection from "../components/tours/DescriptionSection"
import ToursHeroSection from "../components/tours/ToursHeroSection"
import ToursSection from "../components/tours/ToursSection"
import AboutSection from "../components/home/AboutSection"
import CTASection from "../components/home/CTASection"


const Tours = () => {
  return (
    <>
      <ToursHeroSection />
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