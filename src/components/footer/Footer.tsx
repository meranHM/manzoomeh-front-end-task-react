import FooterLinkGroup from "./FooterLinkGroup"
import FooterContactCard from "./FooterContactCard"
import trustLogo from './../../assets/logos/trust-logo.png'
import basisFlyLogo from './../../assets/logos/basisfly-logo.png'
import footerLogo from './../../assets/logos/footer-logo.png'
import footerMail from './../../assets/icons/footer-mail.png'
import footerClock from './../../assets/icons/footer-clock.png'
import footerPin from './../../assets/icons/footer-pin.png'
import footerFormMail from './../../assets/icons/footer-form-mail.png'
import footerOperator from './../../assets/icons/footer-operator.png'
import footerIg from './../../assets/icons/footer-ig.png'
import footerFb from './../../assets/icons/footer-fb.png'
import footerX from './../../assets/icons/footer-x.png'
import footerYt from './../../assets/icons/footer-yt.png'
import footerLinks from './../../assets/icons/footer-links.png'
import footerChat from './../../assets/icons/footer-chat.png'

const Footer = () => {
  const socialIcons = [footerIg, footerFb, footerX, footerYt]

  return (
    <footer className="bg-blue-navy">
      <div className="container-center items-center md:items-start">
        <img
          src={footerLogo}
          alt="TBIbooking logo"
          width="153"
          height="51"
          className="w-[153px] h-auto m-6"
        />

        {/* Site Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
          {/* Information */}
          <div
            className="flex flex-col items-center md:items-start justify-between gap-5 p-4"
          >
            <h4 className="font-medium text-center md:text-left">
              Dive into local recommendations for a truly
              <br /> authentic experience.
            </h4>
            <address className="flex gap-2">
              <img
                src={footerPin}
                alt="Map pin icon"
                width={12}
                height={16}
                className="w-3 h-4"
              />
              4517 Washington Ave. Manchester, Kentucky 39495
            </address>
            <p className="flex items-center gap-2">
              <img
                src={footerClock}
                alt="Clock icon"
                width={15}
                height={15}
                className="w-[15px] h-[15px]"
              />
              Hours: 8:00 - 17:00, Mon - Sat
            </p>
            <a href="mailto:support@travila.com" className="flex items-center gap-2">
              <img
                src={footerMail}
                alt="Mail icon"
                width={14}
                height={11}
                className="w-[14px] h-[11px]"
              />
              support@travila.com
            </a>
          </div>

          {/* Company */}
          <FooterLinkGroup 
            title="Company"
          >
            <a href="#">About us</a>
            <a href="#">Community Blog</a>
            <a href="#">Jobs & Careers</a>
            <a href="#">Contact Us</a>
            <a href="#">Our Awards</a>
          </FooterLinkGroup>

          {/* Services */}
          <FooterLinkGroup 
            title="Services"
          >
            <a href="#">Tour Guide</a>
            <a href="#">Tour Booking</a>
            <a href="#">Hotel Booking</a>
            <a href="#">Ticket Booking</a>
            <a href="#">Rental Services</a>
          </FooterLinkGroup>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start justify-start gap-5 p-4">
            <h4 className="font-[1.125rem]">Newsletter</h4>
            <form className="flex flex-col gap-3">
              <div className="flex items-center rounded-[100px] bg-blue-midnight w-full px-5 py-4">
                <label htmlFor="mail">
                  <img
                    src={footerFormMail}
                    alt="Mail icon"
                    width={16}
                    height={11}
                    className="w-4 h-auto"
                  />
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  placeholder="Enter your email"
                  className="bg-transparent w-full pl-2"
                />
              </div>
              <button
                type="submit"
                className="w-full text-black font-bold bg-orange-brand-medium rounded-box py-4"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Links */}
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-stretch px-4 my-6">
          {/* Call Card */}
          <FooterContactCard 
            imgSrc={footerOperator} 
            alt="Operator icon" 
            className="rounded-tl-box rounded-tr-box lg:rounded-tr-none lg:rounded-bl-box"
          >
            <div className="flex flex-col items-center lg:items-start gap-1">
              <h4 className="text-nowrap">Need help? Call us</h4>
              <a href="tel:+989202020200" className="text-white text-2xl font-extrabold">
                0920-2020200
              </a>
              <button className="bg-transparent text-orange-brand-medium hover:text-orange-brand-medium/80 font-bold">
                Call
              </button>
            </div>
          </FooterContactCard>

          {/* Socials Card */}
          <FooterContactCard 
            imgSrc={footerLinks} 
            alt="Socials icon"
          >
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <h4 className="text-nowrap">Follow us</h4>
              <div className="flex gap-1 items-center">
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="rounded-full border border-blue-midnight-light p-3"
                  >
                    <img
                      src={icon}
                      alt="Social Media icon"
                      className={icon === footerYt ? "w-[20px] h-[14px]" : "w-[17px] h-[17px]"}
                    />
                  </a>
                ))}
              </div>
            </div>
          </FooterContactCard>

          {/* Message Card */}
          <FooterContactCard 
            imgSrc={footerChat} 
            alt="Chat icon" 
            className="rounded-bl-box rounded-br-box lg:rounded-bl-none lg:rounded-tr-box"
          >
            <div className="flex flex-col items-center lg:items-start gap-3">
              <h4 className="text-nowrap font-bold text-xl">Send us a message</h4>
              <p className="text-white font-medium">
                Contact our agents about your booking,
                <br /> and we'll reply as soon as possible.
              </p>
              <button className="bg-transparent text-orange-brand-medium hover:text-orange-brand-medium/80 font-bold">
                Send
              </button>
            </div>
          </FooterContactCard>
        </div>

        {/* Credits */}
        <div className="w-full flex justify-between items-center my-4 px-4">
          <p className="flex items-center gap-2 text-xs text-zinc-600">
            Web Design & Online Reservation By
            <img
              src={basisFlyLogo}
              alt="Basisfly logo"
              width={68}
              height={17}
              className="w-[68px] h-[17px]"
            />
          </p>
          <img
            src={trustLogo}
            alt="Trust logo"
            width={90}
            height={15}
            className="w-[90px] h-[15px]"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer