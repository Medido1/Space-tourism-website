import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

function Destination() {
  const {data} = useContext(GlobalContext)
  const destinations = data?.destinations || [];

  const [currentPlanet, setCurrentPlanet] = useState(destinations[0]);

  useEffect(() => {
    if (destinations.length > 0) {
      setCurrentPlanet(destinations[0])
    }
  }, [destinations])

  const mobileNavStyle = `flex gap-4 mt-[20%]`;
  const mobileLinkStyle = `text-[hsl(var(--clr-blue))] text-lg uppercase
   tracking-widest font-condensed pb-2`
  const activeClass = `text-white border-b-3`

  return (
    <div className="flex flex-col items-center mt-[20%]">
      <h2 className="sm:self-start font-condensed  text-2xl uppercase text-gray-200 tracking-widest">
        <span className="mr-6 text-gray-600">01</span>
        Pick your destination
      </h2>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentPlanet.name}
          src={currentPlanet.images.webp}
          alt={currentPlanet.name}
          className="w-[60%] md:w-[40%] mt-[20%] sm:mb-[2%]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <ul className={mobileNavStyle}>
        {destinations.map((planet, index) => (
          <li
            key={planet.name} 
            onClick={() => setCurrentPlanet(destinations[index])}
            className={`${mobileLinkStyle}  ${currentPlanet.name === planet.name ? activeClass : ''}`}         
          >
            {planet.name}
          </li>
        ))}
      </ul>
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentPlanet.name + "-title"}
          className="text-6xl font-bellefair uppercase my-[8%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentPlanet.name}
        </motion.h2>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentPlanet.name + "-desc"}
          className="max-w-[50ch] text-center text-xl font-condensed text-[hsl(var(--clr-blue))]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {currentPlanet.description}
        </motion.p>
      </AnimatePresence>
      <div className="border-1 border-gray-600 w-full my-[10%]"></div>
      <div className="sm:flex sm:justify-around w-full ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPlanet.distance + "-desc"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col text-center"
          >
            <p className="uppercase text-xl font-condensed text-[hsl(var(--clr-blue))]">
              Avg. distance
            </p>
            <p className="text-4xl font-bellefair uppercase my-[10%]">
              {currentPlanet.distance}
            </p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPlanet.travel + "-desc"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col text-center"
          >
            <p className="uppercase text-xl font-condensed text-[hsl(var(--clr-blue))]">
              est.travel time
            </p>
            <p className="text-4xl font-bellefair uppercase my-[10%]">
              {currentPlanet.travel}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default  Destination