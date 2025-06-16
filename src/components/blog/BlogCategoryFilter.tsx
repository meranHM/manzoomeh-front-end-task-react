import arrDown from './../../assets/icons/arrow-down.png'
import arrUp from './../../assets/icons/arrow-up.png'
import { useState } from 'react'

interface Option {
    label: string
    value: string
}

interface BlogCategoryFilterProps {
    options: Option[]
}

const BlogCategoryFilter = ({ options }: BlogCategoryFilterProps) => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => setIsOpen(!isOpen)

    /* const [selectedValues, setSelectedValues] = useState<string[]>([]) */

    /* const handleChanckboxChange = (value: string) => {
        Saving checkbox value logic (Or better use a global state management)
    } */

    return (
        <>
            <button
                onClick={toggleMenu}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50"
            >
                <span
                    className="text-base font-semibold font-dana text-[#353535]"
                >
                    Category
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
                    className="flex flex-col px-6 mt-2 space-y-2"
                >
                    {options.map(opt => (
                        <label
                            key={opt.value}
                            className="flex items-center gap-3 text-xs font-inter text-[#9A9A9A]"
                        >
                            <input
                                type="checkbox"
                                value={opt.value}
                                className="appearance-none checked:bg-blue-deep rounded-md border-2 border-[#9A9A9A] w-5 h-5"
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            )}
        </>
    )
}

export default BlogCategoryFilter