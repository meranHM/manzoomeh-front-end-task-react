interface DestinationCardProps {
    imgSrc: string
    alt: string
}


const DestinationCard = ({ imgSrc, alt }: DestinationCardProps) => {
  return (
    <div className="w-36 h-auto overflow-hidden">
      <img src={imgSrc} alt={alt} className="size-full object-cover" />
    </div>
  )
}

export default DestinationCard