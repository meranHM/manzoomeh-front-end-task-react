import ServiceBtn from "./ServiceBtn"
import SearchInputBox from "./SearchInputBox"
import bgPerson from './../../assets/home-page/hero/bg-person.webp'
import swapBtn from './../../assets/icons/swap.png'
import ButtonOne from "../design/ButtonOne"
import plus from './../../assets/icons/plus.png'
import marker from './../../assets/icons/marker.png'

const HeroSection = () => {
  return (
    <section 
        id="hero-section" 
        className="relative w-full min-h-[624px] overflow-hidden"
    >
        {/* Background layers */}
        <div 
            className={`absolute inset-0 z-0 bg-[url('/images/yellow-clouds-background.png')] bg-no-repeat bg-center bg-cover scale-[1.05]  hidden lg:block`} 
        />

        <div 
            className="absolute z-10 max-w-1xl xl:max-w-[777px] bottom-0 -right-14 xl:right-[2%] hidden lg:block"
        >
            <img
                src={bgPerson}
                alt="A man smiling in the background"
                aria-hidden="true"
                className="w-full object-cover"
            />
        </div>

        <div 
            className="relative container-center flex flex-col z-20 overflow-hidden mt-12 lg:mt-32"
        >
            {/* Headings */}
            <div className="px-4">
            <h1 
                className="font-extrabold text-2xl lg:text-4xl xl:text-5xl lg:leading-[60px] xl:leading-[76px]"
            >
                Unveil the Beauty<br />of the World Every Day
            </h1>
            <p 
                className="font-medium text-gray-dark text-sm lg:text-2xl mt-5"
            >
                Travel Without Limits Browse, Book, Explore
            </p>
            </div>

            {/* Decorative background icons */}
            <img
                src={plus}
                alt="Plus icon"
                width="20"
                height="20"
                className="absolute w-5 h-5 top-0 right-4 z-0"
            />
            <img
                src={marker}
                alt="Marker icon"
                width="32"
                height="40"
                className="absolute w-8 h-10 top-[18%] left-0 z-0"
            />

            {/* Search Box */}
            <div
                id="seach-box"
                className="relative z-20 self-center lg:self-auto w-full max-w-xl lg:max-w-none mt-16 mx-4 bg-white border border-gray-soft rounded-2xl p-3 shadow-search-box"
            >
                {/* Services & Trip Type */}
                <div 
                    id="services-box" 
                    className="flex flex-wrap justify-center items-center lg:flex-nowrap lg:justify-between lg:px-4"
                >
                    <div
                        className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center"
                    >
                        <ServiceBtn label="Flight" active />
                        <ServiceBtn label="Hotels" />
                        <ServiceBtn label="Flight+Hotel" />
                        <ServiceBtn label="Tour" />
                        <ServiceBtn label="Insurance" />
                    </div>

                    <label htmlFor="trip-type" className="sr-only">Trip type:</label>
                    <select 
                        name="trip-type" 
                        id="trip-type"     
                        className="bg-gray-ultra-light rounded-xl p-3 font-medium"
                    >
                        <option value="one-way">One-way</option>
                        <option value="round-trip">Round-trip</option>
                    </select>
                </div>

                {/* Search Form */}
                <form 
                    className="flex flex-col items-center mt-4 py-3 lg:flex-row lg:flex-wrap xl:flex-nowrap lg:justify-center gap-1"
                >
                    <div className="relative w-full lg:w-fit flex gap-2">
                        <SearchInputBox 
                            label="From" 
                            name="from" 
                            id="from" 
                            placeholder="(Where are you from?)" 
                        />
                        <button
                            type="button"
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-medium rounded-full p-1 lg:p-2"
                        >
                            <img src={swapBtn} alt="Swap icon" width="24" height="24" className="w-6 h-6" />
                        </button>
                        <SearchInputBox 
                            label="To" 
                            name="to" 
                            id="to" 
                            placeholder="(Where are you traveling to?)" 
                        />
                    </div>

                    <SearchInputBox 
                        label="Date" 
                        name="departure-date" 
                        id="departure-date" 
                        placeholder="(Departure date)" 
                        extraClasses="lg:w-[150px]" 
                    />
                    <SearchInputBox 
                        label="Date" 
                        name="return-date" 
                        id="return-date" 
                        placeholder="(Return date)" 
                        extraClasses="lg:w-[150px]" 
                    />
                    <SearchInputBox 
                        label="Adult:" 
                        type="number" 
                        name="number-of-adults" 
                        id="number-of-adults" 
                        placeholder="1" 
                        extraClasses="placeholder:text-base lg:w-[75px]" 
                    />
                    <SearchInputBox 
                        label="Child:" 
                        type="number" 
                        name="number-of-children" 
                        id="number-of-children" 
                        placeholder="0" 
                        extraClasses="placeholder:text-base lg:w-[75px]" 
                    />
                    <SearchInputBox
                        name="booking-class"
                        id="booking-class"
                        isSelect
                        options={[
                            { label: 'Economy', value: 'economy' },
                            { label: 'Premium Economy', value: 'premium-economy' },
                            { label: 'Business', value: 'business' },
                            { label: 'First Class', value: 'first-class' },
                        ]}
                    />

                    <ButtonOne
                        className="rounded-pill py-3"
                    >
                        Search
                    </ButtonOne>
            </form>
            </div>
        </div>
    </section>
  )
}

export default HeroSection