interface StatBoxProps {
    value: string
    label: string
}

const StatBox = ({ value, label }: StatBoxProps) => {
  return (
    <div
        className="flex flex-col items-center justify-center text-white p-6 gap-2"
    >
        <span
            className="text-4xl md:text-5xl lg:text-[52px] font-extrabold"
        >
            {value}
        </span>
        <p
            className="font-bold md:text-lg lg:text-xl"
        >
            {label}
        </p>
    </div>
  )
}

export default StatBox