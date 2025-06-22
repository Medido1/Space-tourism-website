import { GlobalContext } from "../context/GlobalContext"
import { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

function Technology() {
  const {data, isDesktop} = useContext(GlobalContext);
  const tech = data?.technology || [];
  const [currentTech, setCurrentTech] = useState(tech[0]);

  return (
    <div  className="flex flex-col items-center mt-[20%] lg:mt-0">
      <h2 className="text-center font-condensed lg:self-start text-2xl 
        uppercase text-gray-200 tracking-widest lg:ml-[10%] xl:mb-0">
        <span className="mr-6 text-gray-600">03</span>
        Space launch 101
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          className="mt-[20%] lg:mt-[10%] lg:w-[100%]  lg:flex lg:flex-row-reverse"
          key={currentTech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: .2 }}
        >
          <img 
            className="w-screen object-cover mb-[10%] max-h-[500px] lg:w-[40%]"
            src={isDesktop ?currentTech.images.portrait : currentTech.images.landscape} 
            alt={currentTech.name} 
          />
          <div className="flex flex-col items-center px-4 relative lg:w-[50%] lg:mt-[10%]">
            <ul className="flex gap-4 lg:flex-col lg:items-center lg:gap-2 lg:w-[10%]
              absolute left-0 top-0">
              {tech.map((techno, index) => (
                <li
                  key={techno.name}
                  onClick={() => setCurrentTech(tech[index])}
                  className= {`px-4 py-2 aspect-square rounded-[50%] mb-[20%] border-gray-100
                    border-1 cursor-pointer hover:border-3 text-lg font-bellefair
                    flex justify-center items-center lg:px-8 lg:py-4
                    ${currentTech.name === techno.name ? "bg-white text-black" : "bg-trasparent"} `}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
            <p
              className="text-2xl lg:text-4xl text-[hsl(var(--clr-white)_/_0.5)] uppercase font-condensed
              mb-4"
            >
              The terminology...
            </p>
            <h1 className="text-2xl font-bellefair  uppercase text-[hsl(var(--clr-white)_/_0.9)]
            tracking-wider mb-4">
              {currentTech.name}
            </h1>
            <p
              className="max-w-[50ch] text-center text-xl font-condensed text-[hsl(var(--clr-blue))]
                    lg:text-left lg:text-lg xl:text-xl mb-[10%] lg:mb-[20%] "
            >
              {currentTech.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Technology