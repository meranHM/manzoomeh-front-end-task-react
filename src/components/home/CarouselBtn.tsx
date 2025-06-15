import arrowLeft from './../../assets/icons/arrow-left.png'
import arrowRight from './../../assets/icons/arrow-right.png'

interface CarouselBtnProps {
    direction: "left" | "right"
    onClick: () => void
}


const CarouselBtn = ({ direction, onClick }: CarouselBtnProps) => {
    const isLeft = direction === "left"

    return (
        <button
            onClick={onClick}
            className={`absolute hidden lg:block top-1/2 -translate-y-1/2 ${
                isLeft ? "left-0" : "right-0"
            } bg-gray-soft p-5 rounded-full`}
        >
            <img
                src={isLeft ? arrowLeft : arrowRight}
                alt={`${direction} arrow`}
                className="w-[9.5px] h-[9.5px]"
            />
        </button>
    )
}

export default CarouselBtn