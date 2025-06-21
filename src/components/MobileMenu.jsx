import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function MobileMenu() {
  const {isMobile, isMenuOpen,isTablet,  isDesktop, setIsMenuOpen} = useContext(GlobalContext)
  const pathname = useLocation().pathname;
 

  const mobileMenuStyle = `min-h-screen backdrop-blur-lg w-[70vw]
    absolute top-0 bottom-0 right-0 z-0 text-2xl`
  const mobileNavStyle = `pt-[30vh] pl-8 flex flex-col gap-4`
  const mobileSpanStyle = `font-bold mr-4 tracking-widest`
  const mobileLinkStyle = `text-white  uppercase tracking-widest font-condensed pb-4`

  const tabMenuStyle = `w-[80vw] right-0 absolute top-0 px-4 pt-8
      z-0 text-lg bg-[hsl(var(--clr-blue)_/_0.1)]`
  const tabNavStyle  = `flex gap-8`
  const tabSpanStyle = `font-bold mr-2 tracking-widest`
  const tabLinkStyle = `text-white uppercase tracking-widest font-condensed 
    relative pb-8 hover:border-b-2`;

  const desktopMenuStyle = `w-[60vw] xl:w-[44%] right-0 absolute top-[4%] 
  bg-[hsl(var(--clr-blue)_/_0.1)] backdrop-blur-lg pl-[10%] pt-8`;
  
  const currentMenuStyle = isMobile 
  ? mobileMenuStyle 
  : isTablet
  ? tabMenuStyle
  : desktopMenuStyle;
  const currentNavStyle = isMobile ? mobileNavStyle : tabNavStyle;
  const currentLinkStyle = isMobile ? mobileLinkStyle : tabLinkStyle;
  const currentSpanStyle = isMobile ? mobileSpanStyle : tabSpanStyle;
          
  return (
    <AnimatePresence>
      {(isMenuOpen || !isMobile) && 
        <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={currentMenuStyle}
      >
          <nav className={currentNavStyle}>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${currentLinkStyle} ${pathname === "/" ? "border-b-2" : ""} `}
              to="/">
              {(isMobile || isDesktop )&&
              <span className={currentSpanStyle}>00</span>}Home
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${currentLinkStyle} ${pathname === "/destination" ? "border-b-2" : ""}`}
              to="/destination">
              <span className={currentSpanStyle}>01</span>Destination
            </Link>
            <a
              className={currentLinkStyle}
              href="">
              <span className={currentSpanStyle}>02</span>Crew
            </a>
            <a
              className={currentLinkStyle}
              href="">
              <span className={currentSpanStyle}>03</span>Technology
            </a>
          </nav>
        </motion.div>}
    </AnimatePresence>
  )
}

export default MobileMenu;