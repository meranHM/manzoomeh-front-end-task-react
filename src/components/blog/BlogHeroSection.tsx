import clockIcon from './../../assets/icons/orange-clock.png'
import roadIcon from './../../assets/icons/road-sign.png'
import ButtonOne from '../design/ButtonOne'

const BlogHeroSection = () => {
  return (
    <section
        id="hero-section"
        className="w-full bg-blue-ultra-light py-4"
    >
        <div
            className="container-center flex flex-col sm:flex-row items-center gap-4 px-4"
        >
            <div
                className="w-full max-w-4xl self-start p-2 space-y-2"
            >
                <h1
                    className="text-blue-deep font-poppins text-2xl sm:text-[40px] font-bold"
                >
                    Travel Magazine
                </h1>
                <p
                    className="text-blue-gray font-poppins text-nowrap text-xs sm:text-sm"
                >
                    Home / Blog
                </p>
                <form
                    className="w-full flex flex-col items-center md:flex-row gap-2 pt-4"
                >
                    <label htmlFor="blog-search" className='sr-only'>Search Blogs</label>
                    <input 
                        type="text" 
                        name="blog-search" 
                        id="blog-search"
                        placeholder="Search blog"
                        className="w-full border border-gray-medium bg-white p-3 rounded-xl placeholder:font-dana placeholder:text-base placeholder:font-medium placeholder:text-black"
                    />
                    <ButtonOne
                        className="rounded-pill font-normal font-dana py-3"
                    >
                        Search
                    </ButtonOne>
                </form>
            </div>

            <div
                className="w-full flex self-end justify-center lg:justify-end p-2 gap-16"
            >
                <div
                    className="flex gap-2"
                >
                    <img 
                        src={clockIcon} 
                        alt="Clock icon"
                        width="50"
                        height="50"
                        className="w-[50px] h-[50px]"
                    />
                    <div
                        className="flex flex-col"
                    >
                        <span className="text-blue-gray-muted font-poppins">rate</span>
                        <p className="text-blue-deep text-xl font-bold font-poppins">4.8</p>
                    </div>
                </div>
            <div
                className="flex gap-2"
            >
                <img 
                    src={roadIcon}
                    alt="road sign icon"
                    width="50"
                    height="50"
                    className="w-[50px] h-[50px]"
                />
                <div
                    className="flex flex-col"
                >
                    <span className="text-blue-gray-muted font-poppins">tour</span>
                    <p className="text-blue-deep text-xl font-bold font-poppins">200</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default BlogHeroSection