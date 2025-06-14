interface FooterContactCardProps {
    imgSrc: string
    alt: string
    children: React.ReactNode
    className?: string
}


const FooterContactCard = ({ imgSrc, alt, children, className }: FooterContactCardProps) => {
  return (
    <div
        className={`w-full max-w-md flex flex-col lg:flex-row gap-4 justify-center items-center border border-gray-deep p-4 lg:p-6 ${className}`}
    >
        <img src={imgSrc} alt={alt} width={60} height={60} className="w-[60px] h-[60px]" />
        {children}
    </div>
  )
}

export default FooterContactCard