import navbarDivider from './../../assets/icons/navbar-divider.png'

const Divider = () => {
  return (
    <div className="relative w-1 h-2">
        <img src={navbarDivider} alt="Divider" className="size-full object-cover" />
    </div>
  )
}

export default Divider