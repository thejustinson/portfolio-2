"use client"

import { motion, AnimatePresence } from "framer-motion"
import { LoaderVariants } from "@/utils/Variants"
import { useState } from "react"

interface LoaderProps{
  setIsLoaded: (inLoaded: boolean) => void
}

const Loader = ({setIsLoaded}: LoaderProps) => {
  const [progressHasFaded, setProgressHasFaded] = useState(false)
  const [textHasPopped, setTextHasPopped] = useState(false)

  const afterTextHasPopped = ()=> {
    setTextHasPopped(true)
  }

  return (
    <div className="select-none w-screen h-screen bg-neutral-50 flex justify-center items-center overflow-hidden">
      <AnimatePresence>
        {!progressHasFaded && (
          <motion.div
            className="bg-neutral-200 w-[200px] h-1 rounded-lg"
            variants={LoaderVariants.progressFade}
            initial="initial"
            animate="animate"
            onAnimationComplete={() => setProgressHasFaded(true)}
          >
            <motion.div 
              className="w-[20%] h-full bg-neutral-950 rounded-lg"
              variants={LoaderVariants.progressLoader}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {progressHasFaded && (
        <motion.div
          className="text-container"
          variants={LoaderVariants.textPopUp}
          initial="initial"
          animate="animate"
          onAnimationComplete={afterTextHasPopped}
        >
          <div className="flex">
            <motion.div
              className="text-xl font-extrabold overflow-hidden text-nowrap"
              variants={LoaderVariants.textShrink}
              initial="initial"
              animate={textHasPopped ? 'animate' : ""}
            >
                The Justinson
            </motion.div>
            <motion.div 
              className="w-2 h-2 bg-neutral-950 rounded-full"
              variants={LoaderVariants.circleScale}
              initial="initial"
              animate={textHasPopped ? 'animate' : ""}
              onAnimationComplete={()=>{setIsLoaded(true)}}
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Loader