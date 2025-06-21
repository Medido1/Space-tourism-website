import { useState, useContext } from "react";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import Header  from "./Header";
import MobileMenu from "./MobileMenu"
import { GlobalContext } from "../context/GlobalContext";

function HomePage() {
  const {isMenuOpen, setIsMenuOpen, isMobile} = useContext(GlobalContext);
  const [bgImg, setBgImg] = useState(bgMobile)
  return (
    <div
      style={{backgroundImage: `url(${bgImg})`}}
      className="p-8 min-h-screen bg-cover bg-center text-white relative
      "
    >
      <Header />
      <div className="mt-10 sm:mt-20 flex flex-col items-center">
        <h1 className="text-center text-xl text-[hsl(var(--clr-blue))] uppercase tracking-widest 
        font-condensed mb-4"> 
          So, you want to travel to
        <span className="text-8xl block text-white mt-8 font-bellefair">Space</span></h1>
        <p className="text-center text-lg/8 text-[hsl(var(--clr-blue))] font-condensed sm:w-[55ch]">
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
        <button className="flex justify-center items-center px-10 py-16
          rounded-[50%] aspect-square text-black bg-white mt-40 sm:mt-20 text-lg sm:text-3xl">
          <a className="uppercase tracking-widest" href="">Explore</a>
        </button>
      </div>
      <MobileMenu />
    </div>
  )
}

export default HomePage;