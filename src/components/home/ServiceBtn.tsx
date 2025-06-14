interface ServiceBtnProps {
    label: string
    active?: boolean
}

const ServiceBtn = ({ label, active }: ServiceBtnProps) => {
  return (
    <button 
        className={`p-2 rounded-pill ${active
            ? 'bg-orange-brand text-white' 
            : 'serviceBtn'}`}
    >
        {label}
    </button>
  )
}

export default ServiceBtn