import Divider from "./Divider"
import mobileLogo from './../../assets/logos/mobile-logo.png'
import hamburgerBtn from './../../assets/icons/hamburger-icon.png'
import ButtonOne from "../design/ButtonOne"


interface MobileNavbarProps {
    isNavbarOpen: boolean
    toggleMenu: () => void
}

const MobileNavbar = ({isNavbarOpen, toggleMenu }: MobileNavbarProps) => {
  return (
      <nav
        className="container-center flex justify-between items-center py-2 lg:hidden"
      >
        <div
          className="w-10"
        >
          <a href="#">
            <img 
              src={mobileLogo} 
              alt="TBIbooking logos"
              width="40"
              height="53"
              className="size-full object-cover"
            />
          </a>
        </div> 
        
        <div
          id="mobile-navbar"
          className={`lg:hidden bg-white fixed top-0 left-0 h-screen w-full z-40 flex flex-col items-center justify-center gap-6 transform transition-transform duration-500 ease-in-out shadow-sm shadow-black ${isNavbarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ButtonOne>
            Login / Register
          </ButtonOne>
          
          <ul className="flex flex-col justify-center items-center gap-4">
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
        </div>

        <button
          className="w-8 bg-transparent active:scale-95 hover:bg-transparent z-50"
          id="hamburger-btn"
          onClick={toggleMenu}
        >
          <img
            src={hamburgerBtn}
            alt="Hamburger icon"
            width="32"
            height="29"
            className="relative w-full object-cover"
          />
        </button>
      </nav>
  )
}

export default MobileNavbar
