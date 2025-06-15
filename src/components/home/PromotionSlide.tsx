interface PromotionSlideProps {
    imgSrc: string
    children: React.ReactNode
    className?: string
}

const PromotionSlide = ({ imgSrc, children, className }: PromotionSlideProps) => {
  return (
    <div
        className={`relative w-full max-w-[388px] h-[232px] overflow-hidden rounded-2xl p-6 flex flex-col items-end justify-between ${className || ""}`}
    >
        <div
            className="absolute inset-0 -z-10"
        >
            <img 
                src={imgSrc}
                alt=""
                className="size-full object-cover"
            />
        </div>
        {children}            
    </div>
  )
}

export default PromotionSlide