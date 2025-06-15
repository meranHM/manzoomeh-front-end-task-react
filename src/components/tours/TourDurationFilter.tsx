import arrDown from './../../assets/icons/arrow-down.png'
import arrUp from './../../assets/icons/arrow-up.png'
import { useState } from "react"


const TourDurationFilter = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => setIsOpen(!isOpen)
    
    return (
        <div
            className="w-full flex flex-col items-center justify-between rounded-xl bg-gray-50"    
        >
            <button
                onClick={toggleMenu}
                className="w-full flex items-center justify-between p-3 bg-transparent"
            >
                <span
                    className="text-base font-semibold font-dana text-[#353535]"
                >
                    Number of tour days
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
                <div
                    className="w-full flex flex-col px-6 py-4 mt-2 space-y-2"
                >
                    {["4 days", "6 days", "9 days"].map(opt => (
                        <label
                            key={opt}
                            className={`flex items-center gap-3 font-dana text-sm text-[#9A9A9A] ${opt === "6 days" && "text-blue-deep"}`}
                        >
                            <input
                                type="checkbox"
                                value={opt}
                                checked={opt === "6 days"}
                                className="appearance-none checked:bg-blue-deep rounded-md border-2 border-[#9A9A9A] w-5 h-5"
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            )}
        </div>
  )
}

export default TourDurationFilter