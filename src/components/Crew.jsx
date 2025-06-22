import { GlobalContext } from "../context/GlobalContext"
import { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

function Crew() {
  const {data} = useContext(GlobalContext)
  const crew = data?.crew || [];
  const [currentCrewMember, setCurrentCrewMember] = useState(crew ?crew[0] : {});
  return (
    <div className="flex flex-col items-center mt-[20%] lg:mt-[4%]">
      <h2 className="sm:self-start font-condensed  text-2xl uppercase text-gray-200 tracking-widest
        lg:ml-[10%] xl:mb-[2%]">
        <span className="mr-6 text-gray-600">02</span>
        Meet your crew
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          className="flex flex-col items-center mt-[20%]"
          key={currentCrewMember.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2
            className="text-2xl text-[hsl(var(--clr-blue)_/_0.4)] uppercase font-condensed"
          >
            {currentCrewMember.role}
          </h2>
          <h1
            className="text-center text-2xl lg:text-4xl font-bellefair 
              uppercase mb-[10%] mt-[2%]"
          >
            {currentCrewMember.name}
          </h1>
          <p
            className="max-w-[50ch] text-center text-xl font-condensed text-[hsl(var(--clr-blue))]
                lg:text-left lg:text-lg"
          >
            {currentCrewMember.bio}
          </p>
          <ul className="flex gap-4 mt-[10%]">
            {crew.map((member, index) => 
            <li
              key={member.name}
              onClick={() => setCurrentCrewMember(crew[index])}
              className= {`p-2 aspect-square rounded-[50%] mb-[50%]
              ${currentCrewMember.name === member.name ? "bg-white" : "bg-gray-400"} `}
            >
            </li>)}
          </ul>
          <img src={currentCrewMember.images.webp} alt={currentCrewMember.name} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Crew;