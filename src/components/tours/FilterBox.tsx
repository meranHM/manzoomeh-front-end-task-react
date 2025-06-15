import { airline } from "../../data/constants/filterOptions"
import AirlineFilter from "./AirlineFilter"
import PriceRangeFilter from "./PriceRangeFilter"
import TourDurationFilter from "./tourDurationFilter"
import { useState } from "react"
import arrDown from './../../assets/icons/arrow-down.png'
import arrUp from './../../assets/icons/arrow-up.png'


const FilterBox = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => setIsOpen(!isOpen)
    return (
        <div
            className="w-full max-w-[328px] mx-auto h-fit flex flex-wrap sm:flex-col bg-blue-ultra-light rounded-2xl p-6 space-y-4"
        >
            <button
                onClick={toggleMenu}
                className="w-full flex items-center justify-between p-3 bg-transparent sm:hidden"
            >
                <span
                    className="text-base font-semibold font-dana text-[#353535]"
                >
                    Filters
                </span>
                <span
                    className="w-[14px] h-[7px]"
                >
                    {isOpen 
                        ? <img src={arrDown} alt="" className="size-full object-cover" /> 
                        : <img src={arrUp} alt="" className="size-full object-cover" />
                    }
                </span>
            </button>
            {isOpen && (
                <>
                    <div
                        className="w-full flex justify-between items-center py-2"
                    >
                        <h3
                            className="font-dana font-semibold"
                        >
                            Required filters
                        </h3>
                        <button
                            className="text-[#F94545] text-xs"
                        >
                            Remove all filters
                        </button>
                    </div>
                    <AirlineFilter 
                        options={airline}
                    />
                    <PriceRangeFilter />
                    <TourDurationFilter />
                </>
            )}

        </div>
  )
}

export default FilterBox