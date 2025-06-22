import { motion, AnimatePresence } from "framer-motion";

function HomePage() {
  const animation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.5 }
  }
  return (
    <AnimatePresence>
      <motion.div {...animation}>
        <div className="mt-10 sm:mt-20 flex flex-col items-center
          lg:mt-[7%] 2xl:mt-[14%] lg:flex-row lg:justify-between lg:px-[10%] pb-[7%]">
          <div>
            <h1 className="text-center text-xl xl:text-2xl text-[hsl(var(--clr-blue))] uppercase tracking-widest
            font-condensed mb-4 lg:text-left">
              So, you want to travel to
            <span className="text-8xl xl:text-9xl block text-white mt-8 font-bellefair">Space</span></h1>
            <p className="text-center lg:text-left text-lg/8 xl:text-xl text-[hsl(var(--clr-blue))]
              font-condensed sm:w-[55ch]">
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <button className="text-black bg-white mt-40 sm:mt-20 text-lg sm:text-2xl
             large-button cursor-pointer">
            <a className="uppercase tracking-widest" href="#">Explore</a>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default HomePage;