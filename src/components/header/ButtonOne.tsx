interface ButtonOneProps {
  children: React.ReactNode
  className?: string 
}


const ButtonOne = ({ children, className }: ButtonOneProps) => {
  return (
    <button 
        className={`${className || ""} bg-blue-deep text-white font-bold px-4 py-2 rounded-md`}
    >
      {children}
    </button>
  )
}

export default ButtonOne