import arrDown from './../../assets/icons/arrow-down.png'
import arrUp from './../../assets/icons/arrow-up.png'
import { useState } from 'react'


const PriceRangeFilter = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [price, setPrice] = useState(250)

    const min = 50
    const max = 2000

    const percentage = ((price - min) / (max - min)) * 100

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
                Price range
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
                className="w-full flex flex-col p-3 gap-3"
            >
                <div
                    className="w-full flex justify-between items-center"
                >
                    <span className="text-xs text-[#9A9A9A]">50 $</span>
                    <span className="text-xs text-[#9A9A9A]">2000 $</span>
                </div>
                <input 
                    type="range"
                    min={50}
                    max={2000}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="slider"
                    style={{
                        background: `linear-gradient(to right, #013D68 0%, #013D68 ${percentage}%, #C7DEEA ${percentage}%, #C7DEEA 100%)`
                    }}
                />
            </div>
        )}
    </div>
  )
}

export default PriceRangeFilter