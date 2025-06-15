import Divider from "./Divider"
import desktopLogo from './../../assets/logos/desktop-logo.png'
import ButtonOne from "../design/ButtonOne"

const DesktopNavbar = () => {
  return (
    <div
        className="w-full max-w-7xl mx-auto hidden lg:flex items-center justify-between px-4 pt-4 pb-3"
    >
        <div
            className="w-40 h-auto"
        >
        <a href="#">
            <img 
                src={desktopLogo} 
                alt="TBIbooking logos"
                width="160"
                height="54"
                className="size-full object-cover"
            />
        </a>
        </div>

        <ul
            className="flex justify-center items-center gap-4"
        >
        <li><a href="#">Flight</a></li>
        <Divider />
        <li><a href="#">Hotel</a></li>
        <Divider />
        <li><a href="#">Flight + Hotel</a></li>
        <Divider />
        <li><a href="#">Tour</a></li>
        <Divider />
        <li><a href="#">Insurance</a></li>
        <Divider />
        <li><a href="#">Travel Magazine</a></li>
        <Divider />
        <li><a href="#">Contact us</a></li>
        </ul>

        <ButtonOne>
            Login / Register
        </ButtonOne>
    </div>
  )
}

export default DesktopNavbar