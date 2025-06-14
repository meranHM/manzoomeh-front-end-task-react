interface Option {
    value: string
    label: string
}

interface SearchInputBoxProps {
    label?: string
    type?: string
    name: string
    placeholder?: string
    id: string
    extraClasses?: string
    isSelect?: boolean
    options?: Option[]
}

const SearchInputBox = ({ label, type = "text", name, placeholder, id, extraClasses, isSelect = false, options }: SearchInputBoxProps) => {
  return (
    <div 
        className="searchInputBox"
    >
        <label
            htmlFor={id}
        >
            {label}
        </label>

        {isSelect && options ? (
        <select
            name={name}
            id={id}
            className={`py-[1px] mx-auto ${extraClasses || ""}`}
        >
            {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
        ) : (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className={`placeholder:text-white lg:placeholder:text-gray-suva ${extraClasses || ""}`}
        />
        )}
    </div>
  )
}

export default SearchInputBox