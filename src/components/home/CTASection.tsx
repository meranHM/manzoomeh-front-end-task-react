import CTADesktopView from "./CTADesktopView"
import CTAMobileView from "./CTAMobileView"

const CTASection = () => {
  return (
    <section
        className="container-center flex flex-col relative my-20 px-4 lg:flex-row"
    >
        <CTAMobileView />
        <CTADesktopView />
    </section>
  )
}

export default CTASection