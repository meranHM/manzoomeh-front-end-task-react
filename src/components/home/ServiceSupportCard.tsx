import operator1 from './../../assets/home-page/services/operator-1.png'
import operator2 from './../../assets/home-page/services/operator-2.png'

 
const ServiceSupportCard = () => {
  return (
    <article
      className="w-full max-w-md bg-[#A8BAF9] bg-[url('public/images/support-background.png')] bg-no-repeat bg-bottom lg:row-span-2 flex flex-col justify-center items-center gap-3 rounded-box p-2.5"
    >
      <div className="text-left flex flex-col gap-3">
        <h3 className="font-extrabold text-2xl text-left">24/7 Support</h3>
        <p className="font-medium text-sm text-left leading-relaxed">
          We are here to help, before,
          <br />
          during, and even after your trip.
        </p>
      </div>
      <img
        src={operator1}
        alt="An operator behind a laptop"
        className="w-56 h-auto object-cover rounded-box border border-white"
      />
      <img
        src={operator2}
        alt="An operator behind a laptop"
        className="w-56 h-auto object-cover rounded-box border border-white"
      />
    </article>
  )
}

export default ServiceSupportCard