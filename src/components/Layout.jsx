import Header from "./Header";
import { GlobalContext } from "../context/GlobalContext";
import bgHomeMobile from "../assets/home/background-home-mobile.jpg";
import bgHomeTablet from "../assets/home/background-home-tablet.jpg";
import bgHomeDesktop from "../assets/home/background-home-desktop.jpg";
import { useContext, useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Layout({children}) {
  const {pathname} = useLocation()
  const { isMobile, isTablet } = useContext(GlobalContext);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    let img;
    if (pathname === "/"){
      img = isMobile 
      ? bgHomeMobile
      : isTablet
      ? bgHomeTablet
      :bgHomeDesktop
    }

    setBgImage(img)
  }, [pathname, isMobile, isTablet])
  return (
    <div
        style={{backgroundImage: `url(${bgImage})`}} 
        className="p-8 min-h-screen bg-cover bg-center text-white relative lg:p-10
      ">
        
        <Header />
        <Outlet />
        <MobileMenu />
    </div>
  )
}

export default Layout;