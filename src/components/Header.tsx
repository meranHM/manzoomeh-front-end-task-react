import { useState } from "react"

import MobileNavbar from "./header/MobileNavbar"
import DesktopNavbar from "./header/DesktopNavbar"


const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const toggleMenu = () => {
    setIsNavbarOpen(prev => !prev)
  }

  return (
    <header
      className="w-full h-20 fixed top-0 left-0 z-50 shadow-sm bg-white border border-gray-medium"
    >
      {/* Mobile Navbar */}
      <MobileNavbar 
        isNavbarOpen={isNavbarOpen}
        toggleMenu={toggleMenu}
      />

      {/* Desktop Navbar */}
      <DesktopNavbar />
    </header>
  )
}

export default Header 