import BlogHeroSection from "../components/blog/BlogHeroSection"
import NewsSection from "../components/blog/NewsSection"
import BlogFeaturedToursSection from "../components/blog/BlogFeaturedToursSection"
import AboutSection from "../components/home/AboutSection"
import CTASection from "../components/home/CTASection"


const Blog = () => {
  return (
    <>
      <BlogHeroSection />
      <NewsSection />
      <BlogFeaturedToursSection />
      <AboutSection 
        bgImageHidden={true}
      />
      <CTASection />
    </>
  )
}

export default Blog