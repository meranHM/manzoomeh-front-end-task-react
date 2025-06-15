interface ButtonOneProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}


const ButtonOne = ({ children, className, onClick }: ButtonOneProps) => {
  return (
    <button
      onClick={onClick || undefined}
      className={`${className || ""} bg-blue-deep hover:bg-blue-deep/90 text-white px-4 py-2 rounded-md`}
    >
      {children}
    </button>
  )
}

export default ButtonOne