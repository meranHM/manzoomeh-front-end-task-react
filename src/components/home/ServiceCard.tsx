interface ServiceCardProps {
    title: string
    description: string
    bgColor: string
    bgImage: string
    buttonText: string
    bgPosition?: string
}

const ServiceCard = ({ title, description, bgColor, bgImage, buttonText, bgPosition = "right top" }: ServiceCardProps) => {
  return (
    <article
      className="w-full max-w-md flex flex-col gap-3 justify-center items-center md:items-start rounded-box p-5"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: bgPosition,
      }}
    >
        {title && 
            <h3 
                className="font-extrabold text-2xl backdrop-blur-sm rounded-lg sm:backdrop-blur-0"
            >
                {title}
            </h3>
        }

        {description && (
            <p 
                className="font-medium text-sm leading-relaxed backdrop-blur-sm rounded-lg sm:backdrop-blur-0"
            >
                {description}
            </p>
        )}

        {buttonText && (
            <button 
                className="bg-blue-light text-black border border-blue-deep-dark rounded-pill font-bold px-4 py-2"
            >
                {buttonText}
            </button>
        )}
    </article>
  )
}

export default ServiceCard