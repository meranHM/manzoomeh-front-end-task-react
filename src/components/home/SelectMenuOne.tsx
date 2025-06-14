interface Option {
    value: string
    label: string
}

interface SelectMenuOneProps {
    disabled?: boolean
    selected?: boolean
    options: Option[]
    extraClasses?: string
    name: string
    id: string
}

const SelectMenuOne = ({ disabled, selected, options, extraClasses, name, id }: SelectMenuOneProps) => {
  return (

    <select 
        name={name} 
        id={id}
        className={`bg-gray-soft rounded-pill py-2 px-3 font-medium ${extraClasses}`}
    >
        {options.map(opt => (
            <option
                key={opt.value}
                value={opt.value}
                selected={selected && selected}
                disabled={disabled && disabled}
            >
                {opt.label}
            </option>
        ))}
    </select>
  )
}

export default SelectMenuOne