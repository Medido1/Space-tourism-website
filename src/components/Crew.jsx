import { GlobalContext } from "../context/GlobalContext"
import { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

function Crew() {
  const {data} = useContext(GlobalContext)
  const crew = data?.crew || [];
  const [currentCrewMember, setCurrentCrewMember] = useState(crew ?crew[0] : {});

  const animation = {
    initial: {opacity: 0, y: 20 },
    animate: {opacity: 1, y: 0 },
    exit: {opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: "easeInOut", delay: .2 },
  }
  return (
    <div className="flex flex-col items-center mt-[20%] lg:mt-[4%]">
      <h2 className="sm:self-start font-condensed  text-2xl uppercase text-gray-200 tracking-widest
        lg:ml-[10%] xl:mb-0">
        <span className="mr-6 text-gray-600">02</span>
        Meet your crew
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          className="mt-[20%] lg:flex  lg:mt-0 lg:w-[80%] px-4"
          key={currentCrewMember.name}
          {...animation}
        >
          <div className="flex flex-col items-center lg:items-start lg:mt-[10%]">
            <h2
              className="text-2xl lg:text-3xl text-[hsl(var(--clr-blue)_/_0.4)] uppercase font-condensed"
            >
              {currentCrewMember.role}
            </h2>
            <h1
              className="text-center lg:text-left text-2xl lg:text-4xl xl:text-5xl font-bellefair
                uppercase mb-[10%] mt-[2%] lg:mb-[5%]"
            >
              {currentCrewMember.name}
            </h1>
            <p
              className="max-w-[50ch] text-center text-xl font-condensed text-[hsl(var(--clr-blue))]
                  lg:text-left lg:text-lg xl:text-xl mb-[10%] lg:mb-[20%]"
            >
              {currentCrewMember.bio}
            </p>
            <ul className="flex gap-4 lg:gap-8">
              {crew.map((member) =>
              <li
                key={member.name}
                onClick={() => setCurrentCrewMember(member)}
                aria-label={`Select ${member.name}`}
                className= {`p-2 aspect-square rounded-[50%] mb-[50%] cursor-pointer hover:bg-white
                ${currentCrewMember.name === member.name ? "bg-white" : "bg-gray-400"} `}
              >
              </li>)}
            </ul>
          </div>
          <img 
            className="sm:w-[80%] mx-auto lg:mr-auto lg:w-[30%] lg:max-h-[500px]"
            src={currentCrewMember.images.webp} alt={currentCrewMember.name} 
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Crew;