interface FeatureCardProps {
    imgSrc: string
    alt: string
    title: string
    description: string
}


const FeatureCard = ({ imgSrc, alt, title, description }: FeatureCardProps) => {
  return (
    <article
        className="flex flex-col items-center sm:items-start gap-3"
    >
        <img 
            src={imgSrc}
            alt={alt}
            width={80}
            height={80}
            className="w-20 h-20"
        />
        <h3
            className="font-poppins font-bold text-xl"
        >
            {title}
        </h3>
        <p
            className="text-gray-deep font-poppins"
        >
            {description}
        </p>
    </article>
  )
}

export default FeatureCard