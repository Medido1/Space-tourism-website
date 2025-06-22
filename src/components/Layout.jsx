import Header from "./Header";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import MobileMenu from "./MobileMenu";

import bgHomeMobile from "/assets/home/background-home-mobile.jpg";
import bgHomeTablet from "/assets/home/background-home-tablet.jpg";
import bgHomeDesktop from "/assets/home/background-home-desktop.jpg";
import bgDestiMobile from "/assets/destination/background-destination-mobile.jpg";
import bgDestiTab from "/assets/destination/background-destination-tablet.jpg";
import bgDestiDesktop from "/assets/destination/background-destination-desktop.jpg";
import bgCrewMobile from "/assets/crew/background-crew-mobile.jpg";
import bgCrewTab from "/assets/crew/background-crew-tablet.jpg";
import bgCrewDesk from "/assets/crew/background-crew-desktop.jpg"

function Layout() {
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
    } else if (pathname === "/destination"){
      img = isMobile 
      ? bgDestiMobile
      : isTablet
      ? bgDestiTab
      :bgDestiDesktop
    } else if (pathname === "/crew"){
      img = isMobile 
      ? bgCrewMobile
      : isTablet 
      ? bgCrewTab
      :bgCrewDesk
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