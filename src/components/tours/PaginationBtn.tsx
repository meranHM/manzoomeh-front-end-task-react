interface PaginationBtnProps {
    onClick: () => void
    bgColor: string
    children: React.ReactNode
    isDisabled?: boolean
}

const PaginationBtn = ({ onClick, children, bgColor, isDisabled }: PaginationBtnProps) => {
    return (
        <button
            onClick={onClick}
            className={`w-10 h-10 ${bgColor} hover:shadow-sm hover:scale-105 rounded-full flex items-center justify-center cursor-pointer`}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default PaginationBtn