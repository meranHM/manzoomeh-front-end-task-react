import dottedPathBg from './../../assets/home-page/about/dotted-path.png'
import { companyFeatures } from '../../data/constants/companyFeatures'
import FeatureCard from './FeatureCard'

interface AboutSectionProps {
    bgImageHidden?: boolean
}

const AboutSection = ({ bgImageHidden }: AboutSectionProps) => {


  return (
    <section
        className="mt-20"
    >
        {/* Headings */}
        <div
            className="relative"
        >
            {/* Background Image */}
            <div
                className={`absolute inset-0 -z-10 overflow-hidden h-96 ${bgImageHidden && "hidden"}`}
            >
                <img src={dottedPathBg} alt="" className="size-full object-cover"/>
            </div>

            {/* Content */}
            <div
                className="container-center z-10 p-6"
            >
                <p
                    className="font-reenie text-orange-brand-medium font-medium text-3xl px-4 mb-8"
                >
                    Let us help you plan your next adventure
                </p>
                <h2
                    className="font-poppins text-5xl font-bold leading-snug"
                >
                    Perfect <span className="text-orange-brand-medium font-poppins">Vacation</span><br />
                    come True
                </h2>
            </div>
        </div>

        {/* Grid Container */}
        <div
            className={`container-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 ${bgImageHidden ? "mt-16" : "mt-16 lg:mt-48"}`}
        >
            {companyFeatures.map(feat => (
                <FeatureCard 
                    key={feat.title}
                    imgSrc={feat.imgSrc}
                    alt={feat.alt}
                    title={feat.title}
                    description={feat.description}
                />
            ))}
        </div>
    </section>
  )
}

export default AboutSection