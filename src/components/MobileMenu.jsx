function MobileMenu() {
  return (
    <div className="min-h-screen w-[70vw] backdrop-blur-lg
      absolute top-0 bottom-0 right-0 z-0
      ">
      <nav className="pt-[30vh] pl-4 flex flex-col gap-4">
        <a 
          className="text-white text-2xl uppercase tracking-widest font-condensed"
          href="">
          <span className="font-bold mr-4 tracking-widest">00</span>Home
        </a>
        <a 
          className="text-white text-2xl uppercase tracking-widest font-condensed"
          href="">
          <span className="font-bold mr-4 tracking-widest">01</span>Destination
        </a>
        <a 
          className="text-white text-2xl uppercase tracking-widest font-condensed"
          href="">
          <span className="font-bold mr-4 tracking-widest">01</span>Crew
        </a>
        <a 
          className="text-white text-2xl uppercase tracking-widest font-condensed"
          href="">
          <span className="font-bold mr-4 tracking-widest">01</span>Technology
        </a>
      </nav>
    </div>
  )
}

export default MobileMenu;