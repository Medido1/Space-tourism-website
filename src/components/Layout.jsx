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
import bgCrewDesk from "/assets/crew/background-crew-desktop.jpg";
import bgTechMobile from "/assets/technology/background-technology-mobile.jpg";
import bgTechTab from "/assets/technology/background-technology-tablet.jpg";
import bgTechDesk from "/assets/technology/background-technology-desktop.jpg"

function Layout() {
  const {pathname} = useLocation()
  const { isMobile, isTablet } = useContext(GlobalContext);
  const [bgImage, setBgImage] = useState("");

  const backgrounds = {
    "/": {
      mobile: bgHomeMobile,
      tablet: bgHomeTablet,
      desktop: bgHomeDesktop,
    },
    "/destination": {
      mobile: bgDestiMobile,
      tablet: bgDestiTab,
      desktop: bgDestiDesktop,
    },
    "/crew": {
      mobile: bgCrewMobile,
      tablet: bgCrewTab,
      desktop: bgCrewDesk,
    },
    "/technology": {
      mobile: bgTechMobile,
      tablet: bgTechTab,
      desktop: bgTechDesk,
    },
  };

  useEffect(() => {
    const device = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
    const img = backgrounds[pathname]?.[device] || "";
    setBgImage(img);
  }, [pathname, isMobile, isTablet]);
  return (
    <div
        style={{backgroundImage: `url(${bgImage})`}} 
        className="min-h-screen bg-cover bg-center text-white relative">
        <div className="p-8 lg:p-10">
          <Header />
          <MobileMenu />
        </div>
        <Outlet />
    </div>
  )
}

export default Layout;