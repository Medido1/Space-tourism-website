import {createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 640 && window.innerWidth <= 768)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true)
        setIsTablet(false)
        setIsDesktop(false)
      } else if (window.innerWidth > 640 && window.innerWidth <= 768){
        setIsMobile(false)
        setIsTablet(true)
        setIsDesktop(false)
      } else {
        setIsMobile(false)
        setIsTablet(false)
        setIsDesktop(true)
      }
    };
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <GlobalContext.Provider value={{
      isMenuOpen, setIsMenuOpen, isMobile, isTablet, isDesktop
    }}>
      {children}
    </GlobalContext.Provider>
  )
}