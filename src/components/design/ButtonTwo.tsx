interface ButtonTwoProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
 }

const ButtonTwo = ({ children, className, onClick }: ButtonTwoProps) => {
  return (
    <button
        onClick={onClick || undefined }
        className={`bg-orange-brand-dark hover:bg-orange-brand px-4 py-2 text-black ${className || ""}`}
    >
        {children}
    </button>
  )
}

export default ButtonTwo