import {createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    };
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <GlobalContext.Provider value={{
      isMenuOpen, setIsMenuOpen, isMobile
    }}>
      {children}
    </GlobalContext.Provider>
  )
}