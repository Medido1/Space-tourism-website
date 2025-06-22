import logo from "/assets/shared/logo.svg";
import iconClose from "/assets/shared/icon-close.svg";
import iconHamburger from "/assets/shared/icon-hamburger.svg"
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Header(){
  const {isMenuOpen, setIsMenuOpen, isMobile} = useContext(GlobalContext);
  return (
    <header>
      <div className="flex justify-between items-center relative">
        <img src={logo} alt="space tourism logo" />
        {isMobile && 
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="z-10" 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <img 
              src={isMenuOpen ? iconClose : iconHamburger} alt="open menu button" />
          </button>
        }
      </div>
    </header>
  )
}

export default Header;