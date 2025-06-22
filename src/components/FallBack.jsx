import { motion, AnimatePresence } from "framer-motion";

function FallBack(){
  const animation = {
    initial:{ opacity: 0, scale: 0.9 },
    animate:{ opacity: 1, scale: 1 },
    exit:{ opacity: 0, scale: 0.9 },
    transition:{ duration: 0.5 }
  }
  return (
    <AnimatePresence>
      <motion.div 
        {...animation}
        className="bg-black flex justify-center items-center pt-[50%]">
        <h1 className="text-4xl text-center">
          Loading ....
        </h1>
      </motion.div>
    </AnimatePresence>
  )
}

export default FallBack